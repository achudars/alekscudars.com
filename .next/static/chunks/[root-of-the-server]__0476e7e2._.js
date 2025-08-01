(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s({
    "connect": ()=>connect,
    "setHooks": ()=>setHooks,
    "subscribeToUpdate": ()=>subscribeToUpdate
});
function connect(param) {
    let { addMessageListener, sendMessage, onUpdateError = console.error } = param;
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: (param)=>{
            let [chunkPath, callback] = param;
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        var _updateA_modules;
        const deletedModules = new Set((_updateA_modules = updateA.modules) !== null && _updateA_modules !== void 0 ? _updateA_modules : []);
        var _updateB_modules;
        const addedModules = new Set((_updateB_modules = updateB.modules) !== null && _updateB_modules !== void 0 ? _updateB_modules : []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        var _updateA_added, _updateB_added;
        const added = new Set([
            ...(_updateA_added = updateA.added) !== null && _updateA_added !== void 0 ? _updateA_added : [],
            ...(_updateB_added = updateB.added) !== null && _updateB_added !== void 0 ? _updateB_added : []
        ]);
        var _updateA_deleted, _updateB_deleted;
        const deleted = new Set([
            ...(_updateA_deleted = updateA.deleted) !== null && _updateA_deleted !== void 0 ? _updateA_deleted : [],
            ...(_updateB_deleted = updateB.deleted) !== null && _updateB_deleted !== void 0 ? _updateB_deleted : []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        var _updateA_modules1, _updateB_added1;
        const modules = new Set([
            ...(_updateA_modules1 = updateA.modules) !== null && _updateA_modules1 !== void 0 ? _updateA_modules1 : [],
            ...(_updateB_added1 = updateB.added) !== null && _updateB_added1 !== void 0 ? _updateB_added1 : []
        ]);
        var _updateB_deleted1;
        for (const moduleId of (_updateB_deleted1 = updateB.deleted) !== null && _updateB_deleted1 !== void 0 ? _updateB_deleted1 : []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        var _updateB_modules1;
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set((_updateB_modules1 = updateB.modules) !== null && _updateB_modules1 !== void 0 ? _updateB_modules1 : []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error("Invariant: ".concat(message));
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[project]/src/useClickOutside.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
let useClickOutside = (handler)=>{
    _s();
    let domNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useClickOutside.useEffect": ()=>{
            let maybeHandler = {
                "useClickOutside.useEffect.maybeHandler": (event)=>{
                    if (!domNode.current.contains(event.target)) {
                        handler();
                    }
                }
            }["useClickOutside.useEffect.maybeHandler"];
            document.addEventListener("mousedown", maybeHandler);
            return ({
                "useClickOutside.useEffect": ()=>{
                    document.removeEventListener("mousedown", maybeHandler);
                }
            })["useClickOutside.useEffect"];
        }
    }["useClickOutside.useEffect"]);
    return domNode;
};
_s(useClickOutside, "oMeNP8Y0LBP7p8Tz/f0Pw3T8oxI=");
const __TURBOPACK__default__export__ = useClickOutside;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ImageView.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$useClickOutside$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/useClickOutside.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
const ImgViews = (param)=>{
    let { close, src } = param;
    _s();
    let domNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$useClickOutside$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "ImgViews.useClickOutside[domNode]": ()=>{
            close(false);
        }
    }["ImgViews.useClickOutside[domNode]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }, void 0, false, {
                fileName: "[project]/src/components/ImageView.js",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "mfp-img",
                                    src: src
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ImageView.js",
                                    lineNumber: 21,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImageView.js",
                                lineNumber: 20,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ImageView.js",
                            lineNumber: 19,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ImageView.js",
                            lineNumber: 24,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ImageView.js",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ImageView.js",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ImageView.js",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ImgViews, "rtQeSb6Cq+hhosP/0ltNGiB9zzs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$useClickOutside$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = ImgViews;
const ImageView = ()=>{
    _s1();
    const [img, setImg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imgValue, setImgValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageView.useEffect": ()=>{
            setTimeout({
                "ImageView.useEffect": ()=>{
                    const a = document.querySelectorAll("a");
                    a.forEach({
                        "ImageView.useEffect": (a)=>{
                            if (a.href.includes("static/img")) {
                                if (a.getAttribute("download") === null) {
                                    a.addEventListener("click", {
                                        "ImageView.useEffect": (e)=>{
                                            e.preventDefault();
                                            setImgValue(a.href);
                                            setImg(true);
                                        }
                                    }["ImageView.useEffect"]);
                                }
                            }
                        }
                    }["ImageView.useEffect"]);
                }
            }["ImageView.useEffect"], 1500);
        }
    }["ImageView.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: img && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        }, void 0, false, {
            fileName: "[project]/src/components/ImageView.js",
            lineNumber: 53,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ImageView.js",
        lineNumber: 52,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ImageView, "mi+XkGIS7UHkAC7C1gReXqnPw8c=");
_c1 = ImageView;
const __TURBOPACK__default__export__ = ImageView;
var _c, _c1;
__turbopack_context__.k.register(_c, "ImgViews");
__turbopack_context__.k.register(_c1, "ImageView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/layout/BackBtn.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const BackBtn = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: "demo-back-link",
        onClick: ()=>router.back(),
        href: "#",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: "fas fa-arrow-left"
        }, void 0, false, {
            fileName: "[project]/src/layout/BackBtn.js",
            lineNumber: 7,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/layout/BackBtn.js",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BackBtn, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = BackBtn;
const __TURBOPACK__default__export__ = BackBtn;
var _c;
__turbopack_context__.k.register(_c, "BackBtn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/layout/DayNightMood.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const DayNightMood = ()=>{
    _s();
    const [night, setNight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const changeMood = ()=>{
        document.querySelector("body").classList.toggle("theme-light");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "color_switch",
        onClick: ()=>changeMood(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: "fas fa-moon"
        }, void 0, false, {
            fileName: "[project]/src/layout/DayNightMood.js",
            lineNumber: 10,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/layout/DayNightMood.js",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DayNightMood, "j0vJT+Tz1eYwVHjW29BVo61GNJk=");
_c = DayNightMood;
const __TURBOPACK__default__export__ = DayNightMood;
var _c;
__turbopack_context__.k.register(_c, "DayNightMood");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/paginationUtils.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "activeSection": ()=>activeSection,
    "getPagination": ()=>getPagination,
    "pagination": ()=>pagination
});
const activeSection = ()=>{
    const path = window.location.pathname;
    window.addEventListener("scroll", ()=>{
        const sections = document.querySelectorAll(".pp-section");
        const navLi = document.querySelectorAll(".nav-menu li");
        let current = "";
        sections.forEach((section)=>{
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });
        navLi.forEach((li)=>{
            li.classList.remove("active");
            if (li.getElementsByTagName("a")[0].getAttribute("href") == "#".concat(current)) {
                li.classList.add("active");
            }
        });
    });
};
const getPagination = (totalNumber, sort)=>{
    let arr = new Array(Math.ceil(totalNumber / sort)).fill().map((_, idx)=>idx + 1);
    return arr;
};
const pagination = (listClass, sort, active)=>{
    let list = document.querySelectorAll(listClass);
    for(let i = 0; i < list.length; i++){
        const element = list[i];
        if (active === 1) {
            if (i < sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        } else {
            if (i >= (active - 1) * sort && i < active * sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/layout/Header.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paginationUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/paginationUtils.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const Header = (param)=>{
    let { blog, isLandingPage } = param;
    _s();
    const [sideBarToggle, setSideBarToggle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (!blog) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paginationUtils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["activeSection"])();
            }
        }
    }["Header.useEffect"], [
        blog
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mob-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "navbar-brand",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "logo-text",
                                children: "Aleksandrs Čudars"
                            }, void 0, false, {
                                fileName: "[project]/src/layout/Header.js",
                                lineNumber: 18,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/layout/Header.js",
                            lineNumber: 17,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "toggler-menu ".concat(sideBarToggle ? "open" : ""),
                            onClick: ()=>setSideBarToggle(!sideBarToggle),
                            "aria-expanded": sideBarToggle,
                            "aria-label": "Toggle navigation menu",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/src/layout/Header.js",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/src/layout/Header.js",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/src/layout/Header.js",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/layout/Header.js",
                            lineNumber: 20,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/layout/Header.js",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/layout/Header.js",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "header-left ".concat(sideBarToggle ? "menu-open menu-open-desk" : ""),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "scroll-bar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hl-top",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hl-logo",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "img",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "static/img/me in Corfu.JPG",
                                                title: "photo of Aleks",
                                                alt: "photo of Aleks"
                                            }, void 0, false, {
                                                fileName: "[project]/src/layout/Header.js",
                                                lineNumber: 43,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/layout/Header.js",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            children: "🇱🇻 🥔 🇬🇧"
                                        }, void 0, false, {
                                            fileName: "[project]/src/layout/Header.js",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/layout/Header.js",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/layout/Header.js",
                                lineNumber: 40,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuForLandingPage, {
                                isChild: !isLandingPage
                            }, void 0, false, {
                                fileName: "[project]/src/layout/Header.js",
                                lineNumber: 52,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/layout/Header.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav justify-content-center social-icons",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                "aria-label": "link to linkedin profile",
                                href: "https://www.linkedin.com/in/aleksandrs-cudars",
                                rel: "noreferrer noopener",
                                target: "_blank",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fab fa-linkedin-in"
                                }, void 0, false, {
                                    fileName: "[project]/src/layout/Header.js",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/layout/Header.js",
                                lineNumber: 56,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                "aria-label": "link to github profile",
                                href: "https://github.com/achudars",
                                rel: "noreferrer noopener",
                                target: "_blank",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fab fa-github"
                                }, void 0, false, {
                                    fileName: "[project]/src/layout/Header.js",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/layout/Header.js",
                                lineNumber: 64,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                "aria-label": "link to stackoverflow profile",
                                href: "https://stackoverflow.com/users/1912213/achudars",
                                rel: "noreferrer noopener",
                                target: "_blank",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fab fa-stack-overflow"
                                }, void 0, false, {
                                    fileName: "[project]/src/layout/Header.js",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/layout/Header.js",
                                lineNumber: 72,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                "aria-label": "link to code pen profile",
                                href: "https://codepen.io/achudars/",
                                rel: "noreferrer noopener",
                                target: "_blank",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fab fa-codepen"
                                }, void 0, false, {
                                    fileName: "[project]/src/layout/Header.js",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/layout/Header.js",
                                lineNumber: 80,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                "aria-label": "link to Speaker Deck profile",
                                href: "https://speakerdeck.com/achudars",
                                rel: "noreferrer noopener",
                                target: "_blank",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fab fa-speaker-deck"
                                }, void 0, false, {
                                    fileName: "[project]/src/layout/Header.js",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/layout/Header.js",
                                lineNumber: 88,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/layout/Header.js",
                        lineNumber: 55,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/layout/Header.js",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/layout/Header.js",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "u1i7+YTcvQjYADBzN+y89YEdgmo=");
_c = Header;
const __TURBOPACK__default__export__ = Header;
const MenuForLandingPage = (isChild)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "nav nav-menu",
        id: "pp-menu",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                "data-menuanchor": "home",
                className: "active",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "nav-link",
                    href: "".concat(isChild ? "/" : "", "#home"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "ti-home"
                        }, void 0, false, {
                            fileName: "[project]/src/layout/Header.js",
                            lineNumber: 108,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/src/layout/Header.js",
                            lineNumber: 109,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/layout/Header.js",
                    lineNumber: 107,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/layout/Header.js",
                lineNumber: 106,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                "data-menuanchor": "about",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "nav-link",
                    href: "".concat(isChild ? "/" : "", "#about"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "ti-user"
                        }, void 0, false, {
                            fileName: "[project]/src/layout/Header.js",
                            lineNumber: 114,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "About"
                        }, void 0, false, {
                            fileName: "[project]/src/layout/Header.js",
                            lineNumber: 115,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/layout/Header.js",
                    lineNumber: 113,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/layout/Header.js",
                lineNumber: 112,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                "data-menuanchor": "certifications",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "nav-link",
                    href: "".concat(isChild ? "/" : "", "#certifications"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "ti-medall"
                        }, void 0, false, {
                            fileName: "[project]/src/layout/Header.js",
                            lineNumber: 123,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Certifications"
                        }, void 0, false, {
                            fileName: "[project]/src/layout/Header.js",
                            lineNumber: 124,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/layout/Header.js",
                    lineNumber: 119,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/layout/Header.js",
                lineNumber: 118,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                "data-menuanchor": "interests",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "nav-link",
                    href: "".concat(isChild ? "/" : "", "#interests"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "ti-shine"
                        }, void 0, false, {
                            fileName: "[project]/src/layout/Header.js",
                            lineNumber: 129,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Interests"
                        }, void 0, false, {
                            fileName: "[project]/src/layout/Header.js",
                            lineNumber: 130,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/layout/Header.js",
                    lineNumber: 128,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/layout/Header.js",
                lineNumber: 127,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            1 > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        "data-menuanchor": "work",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "nav-link",
                            href: "".concat(isChild ? "/" : "", "#work"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "ti-bookmark-alt"
                                }, void 0, false, {
                                    fileName: "[project]/src/layout/Header.js",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Portfolio"
                                }, void 0, false, {
                                    fileName: "[project]/src/layout/Header.js",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/layout/Header.js",
                            lineNumber: 137,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/layout/Header.js",
                        lineNumber: 136,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        "data-menuanchor": "blog",
                        className: "blog",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "nav-link",
                            href: "".concat(isChild ? "/" : "", "#blog"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "ti-layout-media-overlay-alt-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/layout/Header.js",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Blogs"
                                }, void 0, false, {
                                    fileName: "[project]/src/layout/Header.js",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/layout/Header.js",
                            lineNumber: 143,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/layout/Header.js",
                        lineNumber: 142,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        "data-menuanchor": "contactus",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "nav-link",
                            href: "".concat(isChild ? "/" : "", "#contactus"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "ti-map-alt"
                                }, void 0, false, {
                                    fileName: "[project]/src/layout/Header.js",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Contact Me"
                                }, void 0, false, {
                                    fileName: "[project]/src/layout/Header.js",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/layout/Header.js",
                            lineNumber: 149,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/layout/Header.js",
                        lineNumber: 148,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/layout/Header.js",
        lineNumber: 105,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = MenuForLandingPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "Header");
__turbopack_context__.k.register(_c1, "MenuForLandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/layout/Layout.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageView$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ImageView.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$BackBtn$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layout/BackBtn.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$DayNightMood$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layout/DayNightMood.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$Header$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layout/Header.js [client] (ecmascript)");
;
;
;
;
;
;
const Layout = (param)=>{
    let { children, showBackBtn, blog } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageView$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/layout/Layout.js",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$Header$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                blog: blog,
                isLandingPage: !showBackBtn
            }, void 0, false, {
                fileName: "[project]/src/layout/Layout.js",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "main-left pp-main-section",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/layout/Layout.js",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$DayNightMood$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/layout/Layout.js",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showBackBtn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$BackBtn$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/layout/Layout.js",
                lineNumber: 18,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/layout/Layout.js",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Layout;
const __TURBOPACK__default__export__ = Layout;
var _c;
__turbopack_context__.k.register(_c, "Layout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/pages/api/books.json (json)": ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"bookTitle\":\"Botchan\",\"bookAuthor\":\"Natsume Sōseki\",\"inProgress\":true,\"summary\":\"\"},{\"bookTitle\":\"1984\",\"bookAuthor\":\"George Orwell\",\"inProgress\":true,\"summary\":\"\"},{\"bookTitle\":\"Candide\",\"bookAuthor\":\"Voltaire\",\"inProgress\":false,\"yearWhenLastFinishedReading\":\"2025\",\"summary\":\"\"},{\"bookTitle\":\"Metamorphosis\",\"bookAuthor\":\"Franz Kafka\",\"inProgress\":false,\"yearWhenLastFinishedReading\":\"2025\",\"summary\":\"\"},{\"bookTitle\":\"The Call of Cthulhu\",\"bookAuthor\":\"H.P. Lovecraft\",\"inProgress\":false,\"yearWhenLastFinishedReading\":\"2025\",\"summary\":\"\"},{\"bookTitle\":\"The Art of War\",\"bookAuthor\":\"Sun Tzu\",\"inProgress\":false,\"yearWhenLastFinishedReading\":\"2025\",\"summary\":\"\"},{\"bookTitle\":\"Dr. Jekyll and Mr. Hyde\",\"bookAuthor\":\"Robert Louis Stevenson\",\"inProgress\":false,\"yearWhenLastFinishedReading\":\"2025\",\"summary\":\"\"},{\"bookTitle\":\"Alice in Wonderland\",\"bookAuthor\":\"Lewis Carroll\",\"inProgress\":false,\"yearWhenLastFinishedReading\":\"2025\",\"summary\":\"\"},{\"bookTitle\":\"Frankenstein\",\"bookAuthor\":\"Mary Shelley\",\"inProgress\":false,\"yearWhenLastFinishedReading\":\"2025\",\"summary\":\"\"},{\"bookTitle\":\"Animal Farm\",\"bookAuthor\":\"George Orwell\",\"inProgress\":false,\"yearWhenLastFinishedReading\":\"2025\",\"summary\":\"\"},{\"bookTitle\":\"The Organized Mind\",\"bookAuthor\":\"Daniel J Levitin\",\"yearWhenLastFinishedReading\":\"2024\",\"summary\":\"\"},{\"bookTitle\":\"Outliers\",\"bookAuthor\":\"Malcolm Gladwell\",\"yearWhenLastFinishedReading\":\"2024\",\"summary\":\"\\\"Outliers\\\" by Malcolm Gladwell delves into the factors that contribute to individual success, challenging the notion that personal achievement is solely based on talent and hard work. Gladwell introduces the concept of outliers, individuals who stand out from the norm due to extraordinary accomplishments. He explores the role of cultural background, upbringing, and societal influences in shaping success. Gladwell argues that cultural legacies, such as rice farming traditions in Asia, can influence work ethic and determination. The book also highlights the \\\"10,000-hour rule,\\\" suggesting that it takes approximately 10,000 hours of practice to achieve mastery in a particular field. Gladwell examines the influence of birth dates on success, emphasising the advantages of being older in a school year. He explores the impact of opportunities such as the chance to attend a prestigious school or gain early exposure to a particular skill. Through real-world examples, Gladwell challenges the traditional narrative of success, encouraging readers to consider the broader context and external factors that contribute to individual achievements. The book encourages a nuanced understanding of success, urging us to look beyond individual effort and recognise the significance of external influences in the pursuit of excellence. Overall, \\\"Outliers\\\" prompts readers to reconsider the factors that shape success, offering a thought-provoking exploration of the complex interplay between personal effort and external circumstances.\"},{\"bookTitle\":\"Originals\",\"bookAuthor\":\"Adam Grant\",\"yearWhenLastFinishedReading\":\"2024\",\"summary\":\"\\\"Originals\\\" by Adam Grant is a captivating exploration of creativity, innovation, and nonconformity. The book delves into the habits and mindsets of individuals who challenge the status quo and bring about positive change in various fields. Grant argues that anyone can become an \\\"original\\\" by adopting certain strategies and attitudes. He dispels common myths about creative geniuses and demonstrates that original thinkers are not necessarily risk-takers, but calculated risk-takers who often procrastinate strategically. Grant introduces the concept of \\\"precrastination,\\\" where individuals rush to complete tasks, and explains how it can hinder creativity. The book encourages embracing doubt and questioning conventional wisdom as essential components of fostering innovation. Grant provides numerous real-world examples of successful originals, illustrating how they navigate challenges and overcome opposition. The importance of balancing persistence with the ability to recognise when to quit is highlighted along with the significance of selecting the right ideas to pursue. Additionally, the author discusses the impact of the social and cultural environment on creativity, stressing the role of leaders in creating conditions that foster originality within organisations. Grant also explores the influence of diverse perspectives and encourages individuals to seek out dissenting opinions for more robust decision-making. Overall, \\\"Originals\\\" offers valuable insights into cultivating creativity, challenging norms, and making a meaningful impact in both personal and professional spheres, making it an engaging read for those seeking inspiration and practical advice on unleashing their originality.\"},{\"bookTitle\":\"The Big Short\",\"bookAuthor\":\"Michael Lewis\",\"yearWhenLastFinishedReading\":\"2024\",\"summary\":\"\\\"The Big Short\\\" by Michael Lewis is a gripping tale that unravels the complexities of the 2008 financial crisis in a manner that is both accessible and engaging. The narrative follows a handful of eccentric and visionary individuals who foresaw the impending collapse of the housing market and bet against it, ultimately profiting from the catastrophe that rocked the global economy. Through the eyes of characters like Michael Burry, a socially awkward but brilliant hedge fund manager, and the outspoken Mark Baum, Lewis navigates the intricate world of mortgage-backed securities and collateralised debt obligations, shedding light on the reckless greed and deception that permeated Wall Street. Lewis deftly explains complex financial concepts in layman's terms, making it easier for readers to grasp the intricacies of the subprime mortgage crisis and the subsequent fallout. The book exposes the systemic failures and moral bankruptcy that led to the meltdown, highlighting the role of major financial institutions in perpetuating the housing bubble and the devastating consequences for ordinary homeowners and investors. Despite its sobering subject matter, \\\"The Big Short\\\" is infused with Lewis's trademark wit and humour, offering a compelling blend of investigative journalism and narrative storytelling. By weaving together the personal stories of those who saw the crisis coming and profited from it, Lewis provides a thought-provoking commentary on the inherent flaws of the financial system and the enduring impact of corporate greed.\"},{\"bookTitle\":\"Boomerang\",\"bookAuthor\":\"Michael Lewis\",\"yearWhenLastFinishedReading\":\"2024\",\"summary\":\"\\\"Boomerang\\\" by Michael Lewis is a captivating exploration of the global financial crisis that unfolded in the wake of the 2008 economic meltdown. Lewis takes readers on a whirlwind tour across the globe, examining the aftermath and the bizarre consequences of the crisis. The book focuses on the economic repercussions in different countries, shedding light on the absurdities and paradoxes that emerged. From Iceland's financial meltdown to Ireland's housing bubble, Lewis delves into the irrational behavior of individuals and institutions, uncovering the intricate web of financial mismanagement. Through vivid storytelling, he narrates how countries like Greece faced the consequences of their reckless financial decisions and the cultural factors that contributed to their downfall. Lewis also introduces readers to key players in the crisis, such as Iceland's rogue financiers and Germany's prudent yet peculiar bankers. The author's wit and keen observations provide a humorous touch to an otherwise serious topic, making complex financial concepts accessible to a broad audience. Lewis skillfully combines investigative journalism with a dose of humour to unravel the intricacies of the crisis, making it an engaging and enlightening read for both those familiar with finance and those approaching the subject for the first time.\"},{\"bookTitle\":\"What the Dog Saw\",\"bookAuthor\":\"Malcolm Gladwell\",\"yearWhenLastFinishedReading\":\"2024\",\"summary\":\"\\\"What the Dog Saw\\\" by Malcolm Gladwell is a captivating collection of essays that invites readers to explore the fascinating intricacies of various subjects, presenting a mosaic of insights into the human experience. Gladwell, a skilled journalist and storyteller, employs his distinctive narrative style to unravel the mysteries behind seemingly ordinary phenomena. One of the thought-provoking essays examines the peculiar world of dog communication, shedding light on the intricate signals and behaviours that shape the unique bond between humans and their canine companions. Another piece delves into the intriguing dynamics of successful entrepreneurs, dissecting the traits and circumstances that contribute to their achievements. Throughout the book, Gladwell seamlessly weaves together diverse topics, including psychology, sociology, and business, offering readers a rich tapestry of perspectives. The author's storytelling transforms seemingly mundane subjects into interesting tales, allowing readers to effortlessly navigate the intricacies of his analysis. By employing relatable anecdotes and real-world examples, Gladwell ensures that the content remains engaging and relatable, transcending cultural and linguistic barriers. Whether unraveling the mysteries of decision-making or exploring the nuances of societal structures, each essay serves as a gateway to a deeper comprehension of the world around us. The strength of \\\"What the Dog Saw\\\" lies in its ability to challenge conventional thinking, prompting readers to question their assumptions and view familiar concepts through a fresh lens. Gladwell's explorations into the hidden layers of human behaviour foster a sense of curiosity and introspection, encouraging readers to reflect on their own lives and the world they inhabit. \\\"What the Dog Saw\\\" is more than a compilation of essays; it is an invitation to explore the intricacies of our shared human experience. Gladwell's adept storytelling, coupled with the accessibility of his language, ensures that readers, regardless of their linguistic background, can embark on a compelling and enriching intellectual adventure.\"},{\"bookTitle\":\"Blink\",\"bookAuthor\":\"Malcolm Gladwell\",\"yearWhenLastFinishedReading\":\"2024\",\"summary\":\"\\\"Blink\\\" by Malcolm Gladwell explores the power of rapid decision-making and intuition, delving into the concept of \\\"thin-slicing\\\" - the ability to make quick, instinctive judgments based on limited information. Gladwell presents various anecdotes and studies to illustrate how our unconscious mind can often reach accurate conclusions in the blink of an eye. He emphasises that snap judgments can be as reliable, if not more so, than decisions made after careful analysis. The book highlights the impact of cultural biases and prejudices on our rapid decision-making, examining instances where our unconscious mind can be swayed by factors beyond our awareness. Gladwell also explores situations where too much information can hinder our ability to make accurate judgments. Throughout the book, he uses examples ranging from art authentication to predicting divorce outcomes, illustrating the role of intuition in our everyday lives. Ultimately, \\\"Blink\\\" encourages readers to appreciate the power of quick thinking while also cautioning against the potential pitfalls of relying solely on intuition without considering the underlying factors that influence our subconscious decisions. The book is a fascinating exploration of the intricacies of human judgment, offering insights that can reshape our understanding of decision-making processes in both personal and professional contexts.\"},{\"bookTitle\":\"Quiet\",\"bookAuthor\":\"Susan Cain\",\"yearWhenLastFinishedReading\":\"2024\",\"summary\":\"\\\"Quiet\\\" by Susan Cain is a compelling exploration of the dynamics between introversion and extroversion, shedding light on the often overlooked strengths of introverted individuals in a world that predominantly values extroverted qualities. Cain meticulously navigates through scientific studies, personal stories, and cultural observations to construct a nuanced narrative that challenges societal biases and calls for a reevaluation of how introversion is perceived. Cain begins by defining introversion and extroversion, drawing on the work of psychologists such as Carl Jung. She emphasises that introversion is not synonymous with shyness or social anxiety, but rather a preference for a lower-stimulation environment, with introverts often thriving in quieter, more contemplative settings. The Extrovert Ideal, as she terms it, dominates Western cultures, portraying qualities like sociability, assertiveness, and gregariousness as highly desirable. This ideal is deeply ingrained in various aspects of society, from education to the workplace, influencing how individuals are assessed and rewarded. The author explores the roots of the Extrovert Ideal, delving into the history of self-help culture, the rise of the charismatic leadership model, and the impact of the Industrial Revolution. She argues that these factors have collectively shaped a society that celebrates qualities associated with extroversion, creating a bias that persists in contemporary times. Cain explains that this bias is particularly evident in educational settings, where group activities and collaboration are often prioritised, leaving introverted students at a disadvantage. The book calls for a reevaluation of educational practices to accommodate the diverse learning styles of both introverted and extroverted individuals. Workplaces are another area where the Extrovert Ideal exerts a significant influence. Cain examines how open-plan offices and team-oriented cultures may inadvertently stifle the productivity and creativity of introverted employees. She provides examples of successful introverted leaders who have thrived by embracing their natural tendencies, challenging the conventional notion that leadership is synonymous with extroversion. The author suggests that a more balanced approach that values introverted qualities, such as deep thinking, focused work, and thoughtful decision-making, can contribute to a more effective and harmonious work environment. Throughout the book, Cain weaves in personal anecdotes and case studies, adding a human touch to the exploration of introversion. She shares her own experiences as an introverted individual navigating a world that often expects extroverted behaviour. These personal stories, combined with interviews and examples from various fields, serve to humanise the narrative and make it relatable to readers. In addition to highlighting the challenges faced by introverts, \\\"Quiet\\\" also celebrates the unique strengths they bring to the table. Cain discusses the power of solitude and its role in fostering creativity and innovation. She explores the concept of the \\\"introvert advantage\\\" in various fields, from business to the arts, demonstrating that introverts often excel in roles that require deep focus, analytical thinking, and empathetic understanding. The book also addresses the impact of cultural differences on the perception of introversion. While Western cultures tend to favour extroversion, Cain acknowledges that other cultures may place a higher value on introverted qualities. She emphasises the importance of recognising and respecting these cultural variations to create a more inclusive global society that appreciates the diversity of personality traits. \\\"Quiet\\\" serves as a thought-provoking manifesto advocating for a more inclusive and understanding society. It challenges preconceived notions about introversion and extroversion, encouraging readers to embrace the strengths inherent in both personality types. Through a comprehensive examination of scientific research, cultural influences, and personal stories, Cain provides a compelling argument for reevaluating societal norms and fostering an environment where introverts can thrive alongside their extroverted counterparts. The book ultimately calls for a cultural shift towards appreciating and harnessing the unique qualities that introverted individuals bring to the table, offering a vision of a world where both introversion and extroversion are valued and celebrated.\"},{\"bookTitle\":\"Talking to Strangers\",\"bookAuthor\":\"Malcolm Gladwell\",\"yearWhenLastFinishedReading\":\"2024\",\"summary\":\"In Malcolm Gladwell's \\\"Talking to Strangers,\\\" the author delves into the complexities of human communication and the challenges we face when trying to understand people we don't know. Gladwell explores various cases and social phenomena to illustrate how miscommunication and misinterpretation can lead to tragic consequences. He introduces the concept of \\\"defaulting to truth\\\", highlighting our natural tendency to believe others and assume honesty in our interactions, even with strangers. Through engaging anecdotes Gladwell demonstrates how our reliance on assumptions can sometimes backfire, leading to devastating misunderstandings. The book also examines the impact of cultural differences, biases, and the limits of our ability to accurately judge others. Gladwell introduces the idea of \\\"coupling,\\\" where context plays a crucial role in understanding behaviour, and he explores how societal structures and systems contribute to communication breakdowns. Examples of coupling from the book: \\\"Sandra Bland's Traffic Stop\\\": Gladwell discusses the case of Sandra Bland, a young African American woman who was pulled over for a routine traffic stop in Texas in 2015 and later died in police custody. The coupling in this case involves the tense atmosphere of racial tension and police encounters in the United States, which significantly influenced the outcome of the interaction between Bland and the police officer. \\\"Cuban Missile Crisis\\\": Gladwell explores historical events, such as the Cuban Missile Crisis, to highlight how the coupling of political and international tensions can lead to high-stakes decision-making. Leaders, in such situations, are often constrained by the context and pressures surrounding them. \\\"Brock Turner Sexual Assault Case\\\": The author delves into the Brock Turner case, where a college student was convicted of sexual assault. The coupling in this instance involves the campus culture, alcohol consumption, and societal attitudes towards sexual assault. The context within which the incident occurred plays a crucial role in understanding the dynamics of the case. \\\"Bernie Madoff's Ponzi Scheme\\\": Gladwell explores the financial world and the case of Bernie Madoff, who orchestrated one of the largest Ponzi schemes in history. The coupling here involves the regulatory environment, the trust placed in financial institutions, and the prevailing economic conditions that contributed to the success of Madoff's fraudulent scheme. \\\"Eric Garner's Death\\\": The author revisits the case of Eric Garner, an African American man who died after a police officer placed him in a chokehold during an arrest. The coupling here involves the broader issues of racial tensions, police tactics, and societal attitudes towards law enforcement, all of which contributed to the tragic outcome. Through these examples, Gladwell emphasises how understanding the specific context and environment surrounding an interaction is crucial for making sense of human behavior. Coupling reminds us that actions cannot be isolated from the situations in which they occur, and a nuanced understanding of these contexts is essential for comprehending the complexities of human interactions. Drawing on historical events and psychological research, the author encourages readers to reassess their approach to talking to strangers and to be aware of the potential pitfalls that can arise in human interactions. \\\"Talking to Strangers\\\" challenges us to question our assumptions, acknowledge the complexities of understanding others, and strive for more effective communication in a world where misjudgments can have profound consequences.\"},{\"bookTitle\":\"Being Mortal\",\"bookAuthor\":\"Atul Gawande\",\"yearWhenLastFinishedReading\":\"2024\",\"summary\":\"\"},{\"bookTitle\":\"The Element\",\"bookAuthor\":\"Ken Robinson\",\"yearWhenLastFinishedReading\":\"2024\",\"summary\":\"\\\"The Element\\\" by Sir Ken Robinson explores the concept of finding one's true passion and potential in life. In this enlightening book, Robinson argues that each individual has a unique \\\"element,\\\" a place where natural aptitude and personal passion intersect, leading to a fulfilling and successful life. He emphasises the importance of education in nurturing these innate talents and encourages readers to discover their passion by understanding what truly engages and excites them. Robinson supports his arguments with compelling anecdotes and examples, such as the story of Paul McCartney discovering his musical talent at an early age and the tale of Matt Groening, the creator of \\\"The Simpsons,\\\" who found his element in storytelling and cartooning. Additionally, he shares the experiences of Gillian Lynne, a renowned choreographer, who thrived in her element of dance despite struggling in traditional academic settings. Throughout the book, Robinson challenges conventional views on education and career choices, advocating for a more personalised and holistic approach that recognises and nurtures individual talents. \\\"The Element\\\" serves as an inspiring guide for individuals seeking to uncover their passions and lead a more fulfilling life by aligning their natural abilities with their personal interests.\"},{\"bookTitle\":\"Out of Our Minds\",\"bookAuthor\":\"Ken Robinson\",\"yearWhenLastFinishedReading\":\"2024\",\"summary\":\"\"},{\"bookTitle\":\"The Tipping Point\",\"bookAuthor\":\"Malcolm Gladwell\",\"yearWhenLastFinishedReading\":\"2024\",\"summary\":\"\"},{\"bookTitle\":\"The New New Thing\",\"bookAuthor\":\"Michael Lewis\",\"dropped\":true,\"summary\":\"\"},{\"bookTitle\":\"Flash Boys\",\"bookAuthor\":\"Michael Lewis\",\"dropped\":true,\"summary\":\"\"},{\"bookTitle\":\"Antifragile\",\"bookAuthor\":\"Nassim Nicholas Taleb\",\"dropped\":true,\"summary\":\"The book explores the concept of antifragility, a property that goes beyond resilience and robustness, suggesting that certain systems thrive and improve when exposed to volatility, uncertainty, and chaos. Taleb argues that the opposite of fragility is not just resilience but antifragility, which he defines as a quality that gains strength from disorder and unpredictability. The author presents a range of examples from various domains, including finance, biology, and technology, to illustrate the principles of antifragility. Drawing on examples from various fields, Taleb illustrates his concepts with clarity. In finance, Taleb discusses the fragility of large banking institutions and how they often benefit from bailouts, becoming more prone to risk-taking due to the expectation of external support. Contrarily, small businesses, which lack this safety net, are more antifragile as they learn to adapt and innovate to survive in volatile markets. Biologically, Taleb highlights the concept of hormesis, where exposure to small stressors strengthens an organism. He contrasts this with the modern obsession of eliminating all risks, such as overusing antibiotics, which can lead to weakened immune systems. Taleb argues for the importance of allowing the body to develop natural antifragility. In technology, he discusses the benefits of trial and error, citing the example of the venture capitalist model where many start-ups fail, but the few successes more than compensate for the losses. Taleb advocates for a system that allows for experimentation and failure as a means of discovering what works best. Taleb introduces the \\\"barbell strategy\\\", a risk management approach that combines extreme risk-taking with extreme risk aversion. He uses this strategy to demonstrate how one can create a balanced and antifragile portfolio. By avoiding moderate risks and concentrating on the extremes, individuals or entities can better navigate uncertainty. The author also explores the concept of \\\"via negativa,\\\" the idea that often it is more effective to focus on removing obstacles than trying to add new elements. Taleb uses the example of the medical field, where avoiding detrimental practices and substances can contribute more to overall health than constantly seeking new interventions. Taleb's idea of \\\"skin in the game\\\" is another crucial concept, emphasising that decision-makers should have a personal stake in the outcomes of their decisions. This principle discourages reckless decision-making and promotes responsibility. The book challenges the prevalent belief in the predictability of the future and criticises overreliance on experts and forecasts. Taleb argues that complex systems are inherently unpredictable, and efforts to control them often lead to unintended consequences. He introduces the concept of the \\\"Lindy effect,\\\" suggesting that the longer something has survived, the longer its future life expectancy, contrasting it with the illusion of predictability in many modern systems. Overall, \\\"Antifragile\\\" provides a comprehensive exploration of the concept of antifragility, offering numerous examples and anecdotes from various domains to illustrate its principles. Taleb's engaging and thought-provoking writing style encourages readers to reconsider their approach to risk and volatility, advocating for a mindset that embraces uncertainty and builds resilience through adaptation.\"},{\"bookTitle\":\"Range\",\"bookAuthor\":\"David Epstein\",\"dropped\":true,\"summary\":\"\\\"Range\\\" by David Epstein explores the idea that generalists, individuals with diverse skills and experiences, often outperform specialists in today's complex and unpredictable world. Epstein challenges the prevailing belief that early specialisation is the key to success, arguing that a broader skill set and a range of experiences can lead to greater innovation and adaptability. Drawing on various examples from different fields, Epstein highlights the success stories of individuals who benefited from their diverse backgrounds. For instance, he discusses how the late bloomer Roger Federer's varied sports experiences helped him become a tennis legend, contrasting with the early specialisation of Tiger Woods. Another example involves the contrasting approaches of teaching math in the United States and Poland, illustrating the benefits of a more generalist approach to education. Epstein also explores the world of music, comparing the success of the Beatles, who experimented with various styles. Through these examples and more, Epstein challenges the conventional wisdom of hyper-specialisation and encourages readers to embrace a broader range of skills and experiences for personal and professional success in an ever-changing world.\"},{\"bookTitle\":\"Invisible Women - Exposing Data Bias in a World Designed for Men\",\"bookAuthor\":\"Caroline Criado Perez\",\"isItWorthReReading\":true,\"summary\":\"A fascinating book that explores how the world we live in often overlooks the needs and experiences of half its population — women. It uncovers the ways in which the design of everyday things, policies, and systems can unintentionally discriminate against women, making them invisible in various aspects of life. The book starts by talking about something called the \\\"default male.\\\" Imagine a world where people assume everyone is like a boy or a man. This happens a lot in the things around us, like the size of car seats or the design of smartphones. The default male thinking leaves out the differences that make girls and women unique.The next chapter explains how women often go unnoticed in data and research. Imagine playing hide-and-seek, and the seekers don't even know you're playing. This is what happens to women in studies and statistics, making it hard to understand their needs and experiences. Next, buildings, streets, and public spaces are covered. All these are designed with the \\\"default male\\\" in mind. This can create problems for women who might feel unsafe or find it difficult to navigate the environment. The chapter talks about how making things more inclusive can make the world better for everyone. Then Perez talks about how many things, from medicine to technology, are designed based on data that mainly comes from men. This can lead to products and services that don't work as well for women. Furthermore, sometimes, important work that women do, like taking care of the family or doing household chores, isn't counted or recognised. She talks about how recognising women's work is important for making things fair. Further, Perez shows how women often end up paying more for things like personal care products or clothes. Understanding these inequalities helps us work towards fairness. Health, anotehr topic that Caroline Criado Perez talks about, is crucial for everyone, but this chapter explains how medical research and treatments have historically focused more on men. This often leads to health issues being overlooked in women. Did you know that car safety tests are often done with a male dummy? Perez covers how this can be dangerous for women because their bodies are different. Finally, she discusses how climate change affects women and men differently. recognising these differences helps us find fair solutions. \\\"Invisible Women\\\" ends by encouraging us to think about how we can make the world more equal. It's like playing a game where everyone has the same chances and nobody feels left out. By understanding and fixing the ways women are made invisible, we can create a world that works better for everyone, regardless of gender.\"},{\"bookTitle\":\"Good Economics for Hard Times\",\"bookAuthor\":\"Abhijit V. Banerjee, Esther Duflo\",\"isItWorthReReading\":true,\"summary\":\"A book that explores big problems in the world and suggests practical solutions using simple language. Imagine you have a big puzzle, and the world is like that puzzle. Abhijit and Esther, the authors, are like puzzle masters. They look at different pieces of the puzzle, like why some people are rich and others are not, or why some countries have a lot of money while others struggle. One of the first puzzles they tackle is about immigration. Imagine people from one place moving to another. Some worry that immigrants take jobs away, but Abhijit and Esther say, \\\"Hold on! It's not that simple.\\\" They show how immigrants can actually create more jobs and help the economy. It's like saying, \\\"When more friends come to play, everyone can have more fun!\\\" Now, let's talk about money. The authors ask, \\\"Why do some countries have a lot of money, and others don't?\\\" They explain that it's not just about having more stuff. It's also about how fair the system is. Imagine you're playing a game, and one person keeps changing the rules to win. That's not fair, right? Abhijit and Esther talk about making the rules fair for everyone, so the game (or the economy) works better. They also look at jobs and why some people have a hard time finding work. The authors suggest that we can make more spots available by helping everyone get the right skills. Next, they explore the big topic of inequality. Abhijit and Esther talk about ways to make sure everyone gets a piece of the pie, not just a few people. The authors also dive into climate change. They say we need to find ways to use energy that won't harm the planet. Health is another piece of the puzzle. Abhijit and Esther talk about how important it is for everyone to be healthy. The authors suggest ways to make sure everyone can be part of the fun. They also touch on education, like the ABCs of life. Abhijit and Esther believe that if we all learn and understand better, we can solve more puzzles together. In the end, the authors want us to think about the world and its puzzles with open minds. They believe that by working together and being fair, we can solve these puzzles and make the world a better place for everyone. So, \\\"Good Economics for Hard Times\\\" is like a friendly guide to understanding the big puzzles of the world and finding smart solutions that make life better for everyone. It's not about making things more complicated; it's about making things more fair, like playing a game where everyone has a chance to win.\"},{\"bookTitle\":\"The Body\",\"bookAuthor\":\"Bill Bryson\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"A captivating exploration of the human body, unraveling its mysteries with wit, humor, and an accessible style that even a non-native English speaker can grasp. Bryson takes readers on a fascinating journey through the intricacies of our anatomy, explaining complex biological concepts in a way that is both informative and entertaining. Bryson breaks down the science of the human body into digestible chunks, making it an engaging read for those unfamiliar with advanced medical terminology. The author delves into the historical context of our understanding of the body, highlighting key moments and discoveries that have shaped modern medicine. He seamlessly weaves together scientific facts, anecdotes, and personal reflections, creating a narrative that is not only educational but also deeply human. He explores various aspects of the body, including the brain, heart, immune system, and more, providing a holistic view of our biological marvel. Moreover, Bryson addresses the peculiarities and quirks of the human body, showcasing its resilience, adaptability, and occasional eccentricities. Whether discussing the intricacies of DNA or the importance of sleep, he connects the scientific details to real-world implications, making the information relevant and relatable. \\\"The Body\\\" is not just a biology lesson, it's a celebration of the remarkable vessel that houses our existence. Bryson delves into the ways our bodies have evolved over time, adapting to diverse environments and challenges. He explores the impact of lifestyle choices on our health, shedding light on the delicate balance that sustains life. From the influence of bacteria in our gut to the marvels of the human skeleton, Bryson paints a vivid picture of our physical selves. The book also delves into the history of medical advancements and the individuals who played pivotal roles in shaping our understanding of the body's intricacies. Bryson's narrative skillfully integrates scientific facts with anecdotes, ensuring that readers, regardless of their language background, can appreciate the marvels of the human body. He demystifies complex topics, breaking them down into comprehensible explanations without sacrificing accuracy. Bryson's exploration of the body extends beyond the physical, touching on the interconnectedness of mental and emotional well-being. He discusses the role of hormones, neurotransmitters, and the brain in shaping our experiences and perceptions. Through engaging storytelling, Bryson fosters an appreciation for the body's resilience and the importance of taking care of it.\"},{\"bookTitle\":\"Rationality\",\"bookAuthor\":\"Steven Pinker\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"\\\"Rationality\\\" by Steven Pinker explores the human capacity for reason and logic. Pinker, a renowned cognitive scientist, delves into the ways our brains process information and make decisions, unraveling the intricate mechanisms that underlie rational thought. Drawing upon a wealth of research from diverse fields such as psychology, economics, and philosophy, Pinker dismantles common misconceptions about human reasoning. He argues that despite our cognitive biases and occasional irrationalities, humans possess a remarkable ability for rational thinking, which has propelled advancements in science, technology, and civilization. Pinker dismantles the myth of the \\\"blank slate\\\" mind, demonstrating how evolution has shaped our cognitive toolkit. He delves into the concept of Bayesian reasoning, emphasising the importance of updating beliefs based on new evidence. The book also explores the role of emotions in decision-making, illustrating how emotions can complement rather than hinder rationality. Pinker navigates through topics like probability, statistics, and cognitive illusions, providing readers with practical insights into improving their own rational thinking. The narrative is enriched with real-world examples, making complex concepts accessible to readers from all walks of life. Pinker emphasises the importance of intellectual virtues such as curiosity, open-mindedness, and skepticism in fostering rationality. He advocates for a culture that values critical thinking and evidence-based reasoning, highlighting the societal benefits that stem from a rational approach to problem-solving. Throughout the book, Pinker encourages readers to embrace a rational mindset, recognising its power to enhance personal and collective well-being. In a world often clouded by misinformation and irrationality, \\\"Rationality\\\" serves as a beacon, guiding readers towards a clearer understanding of the cognitive processes that shape our thoughts and actions. Through engaging prose and compelling examples, Pinker celebrates the triumphs of human rationality while acknowledging its limitations, ultimately inspiring readers to cultivate a more rational and enlightened society.\"},{\"bookTitle\":\"The Stuff of Thought\",\"bookAuthor\":\"Steven Pinker\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"\\\"The Stuff of Thought\\\" by Steven Pinker explores the intricate and fascinating world of language, delving into the depths of how words shape our thoughts and perceptions. Pinker takes readers on a captivating journey through the nuances of language, unraveling the complex threads that weave through our communication. He begins by dissecting the fundamental building blocks of language, examining how words and their meanings are interconnected in our minds. Pinker introduces the concept of \\\"mentalese,\\\" an abstract mental language that transcends the words we speak, providing insight into the cognitive processes underlying our linguistic abilities. The book explores the power of language to express an infinite array of thoughts, emotions, and concepts, showcasing the remarkable flexibility and creativity embedded in human communication. Pinker delves into the subtleties of linguistic phenomena, from metaphors and innuendos to the evolution of slang, shedding light on the rich tapestry of expression that defines human interaction. One of the book's central themes is the connection between language and thought, challenging readers to consider whether language merely reflects our thoughts or actively shapes them. Pinker tackles controversial topics such as political correctness, arguing that linguistic taboos can influence our perception of reality and hinder honest discourse. The author also explores the intriguing world of profanity, dissecting the psychology behind our use of taboo words and their impact on communication. As Pinker navigates through the landscape of language, he delves into the intricacies of grammar and syntax, providing a comprehensive understanding of how these elements contribute to the structure of our thoughts. The book takes an interdisciplinary approach, incorporating insights from psychology, neuroscience, and philosophy to unravel the mysteries of language and cognition. Pinker introduces the concept of the \\\"euphemism treadmill,\\\" illustrating how society's attempt to sanitise language often results in the reinvention of new euphemisms that carry the same underlying taboos. Throughout the narrative, Pinker peppers the discussion with anecdotes, examples, and wit, making the exploration of linguistic complexities both accessible and enjoyable. The book also addresses the universal nature of certain linguistic patterns, revealing how different cultures share commonalities in the way they structure their thoughts through language.\"},{\"bookTitle\":\"The Better Angels of our Nature\",\"bookAuthor\":\"Steven Pinker\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"A comprehensive exploration of the decline of violence throughout human history. Pinker argues that, contrary to popular belief, our world has become less violent over time. The book is structured to reveal this decline through an analysis of historical trends, examining various forms of violence such as war, homicide, and torture. Pinker identifies several \\\"better angels\\\" or positive forces that have contributed to this decline, including the rise of empathy, reason, and the development of systems that encourage cooperation and discourage violence. He supports his arguments with a wealth of historical data, presenting a compelling case for the idea that, despite the persistence of violence in the media and the occasional large-scale conflict, humanity is on a trajectory towards a more peaceful coexistence. Pinker also tackles counterarguments and addresses common misconceptions about violence, offering a nuanced and well-reasoned perspective. The book is not only an analysis of the past but also a call to understand and appreciate the progress that has been made in creating a more peaceful world. Pinker encourages readers to continue fostering the better angels within themselves and society, ultimately providing a hopeful outlook on the future of human civilization.\"},{\"bookTitle\":\"The Illusion of Choice\",\"bookAuthor\":\"Richard Shotton\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"\\\"The Illusion of Choice\\\" prompts readers to reconsider the nature of their decisions, encouraging a deeper understanding of the intricate web of influences that shape the choices we make, ultimately offering a thought-provoking exploration of the subconscious forces at play in the decision-making process. Shotton delves into the psychology of decision-making, unraveling the illusion of choice that pervades our daily lives. He contends that our decisions are not as autonomous as they appear; rather, they are subtly guided by external factors, shaping our perceptions and preferences without our conscious awareness. Drawing on compelling examples from marketing, politics, and everyday life, Shotton exposes the power of context, social norms, and cognitive biases in steering our choices. He sheds light on how marketers and advertisers strategically exploit these psychological quirks to influence consumer behaviour. Through engaging anecdotes and research findings, Shotton provides valuable insights into the mechanisms that drive decision-making, challenging the notion of free will in the face of powerful external influences.\"},{\"bookTitle\":\"Software Architecture Patterns\",\"bookAuthor\":\"Mark Richards\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"\\\"Software Architecture Patterns\\\" by Mark Richards provides a comprehensive guide to understanding the fundamental structures and designs that shape software systems. Richards demystifies complex architectural concepts, making them accessible to readers with varying levels of technical expertise. The book covers key patterns such as Layered Architecture, Microservices, Event-Driven Architecture, and Space-Based Architecture, elucidating their roles in building robust and scalable software. With a focus on clarity, Richards explains the pros and cons of each pattern, allowing even those unfamiliar with software development to grasp the essential principles. He emphasises the significance of selecting the right architecture to meet specific project requirements, illustrating how a well-chosen pattern can enhance flexibility, maintainability, and performance. The author's engaging writing style and real-world examples contribute to a practical understanding of software architecture, making it an invaluable resource for anyone navigating the intricate landscape of designing and developing software systems. Whether you're a software developer, architect, or a curious reader seeking insights into the backbone of digital applications, this book serves as a navigational tool through the intricate world of software architecture, shedding light on the patterns that underpin modern software development practices.\"},{\"bookTitle\":\"Who Moved My Cheese\",\"bookAuthor\":\"Dr Spencer Johnson\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"\\\"Who Moved My Cheese\\\" by Dr. Spencer Johnson is a motivational tale that uses a simple story to convey powerful life lessons. The narrative revolves around four characters—two mice, Sniff and Scurry, and two little people, Hem and Haw—living in a maze in search of cheese, which represents happiness and success. When they discover a massive cheese stash (\\\"Cheese Station C\\\"), the little people become complacent, while the mice, being more adaptable, constantly monitor the situation. However, the cheese eventually runs out, and the characters respond differently to change. The mice quickly move on, embracing the uncertainty, while Hem and Haw resist and fear the unknown. The story urges readers to reflect on their attitudes towards change, teaching that adapting positively to life's inevitable shifts leads to greater happiness and success. It encourages embracing change rather than fearing it, emphasising that one's approach to change can significantly impact personal and professional growth. Through this simple and relatable narrative, Dr. Johnson imparts a timeless message about resilience, adaptability, and the importance of embracing change for a fulfilling life.\"},{\"bookTitle\":\"Business @ The Speed of Thought\",\"bookAuthor\":\"Bill Gates\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"A book that provides a compelling insight into the transformative power of technology in the business world. It serves as a valuable guide for both business leaders and enthusiasts, offering practical insights into the ways technology can be a driving force behind business success in the modern era. Written in a clear and accessible style, Gates, the co-founder of Microsoft, explores how digital innovation can revolutionise the way companies operate. The central theme revolves around the idea that information technology, when harnessed effectively, can significantly enhance the speed and efficiency of decision-making within an organisation. Gates emphasises the importance of using technology not just for automating existing processes but for fundamentally reshaping business strategies. He discusses how digital tools enable companies to access real-time information, allowing for quicker and more informed decision-making. Throughout the book, Gates shares anecdotes and case studies to illustrate how successful businesses leverage technology to gain a competitive edge. He delves into topics such as the role of the internet, the significance of data analysis, and the need for a flexible and adaptive business culture. Gates also addresses the challenges and risks associated with the rapid pace of technological change, urging businesses to stay agile and embrace innovation.\"},{\"bookTitle\":\"21 Lessons for the 21st Century\",\"bookAuthor\":\"Yuval Noah Harari\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"Throughout the book, Harari emphasises adaptability and the ability to learn new skills as essential for navigating an uncertain future. The book is a call to action, challenging readers to confront the realities of our time and take an active role in shaping a better future for humanity. Harari provides insights into crucial topics such as technology, politics, religion, and existential threats. The book is a guide for navigating the complex landscape of the 21st century, urging readers to grapple with issues like artificial intelligence, biotechnology, and the impact of globalisation. Harari encourages individuals to develop critical thinking skills in order to discern the truth amidst the deluge of information in our interconnected world. He addresses the fragility of current political systems and the rise of populist movements, urging citizens to engage actively in the political process. The book delves into the challenges posed by the convergence of technology and biology, warning of potential ethical dilemmas and the need for global cooperation. Harari also reflects on the role of religions and ideologies in shaping human beliefs and behaviours, emphasising the importance of tolerance and understanding in a diverse world.\"},{\"bookTitle\":\"The Obstacle is the Way\",\"bookAuthor\":\"Ryan Holiday\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"\\\"The Obstacle is the Way\\\" by Ryan Holiday is a motivational and practical guide that encourages a positive mindset in the face of challenges. The author draws inspiration from Stoicism, an ancient Greek philosophy, and explores the idea that obstacles are not hindrances but opportunities for growth. Holiday illustrates this concept through historical examples and modern anecdotes, emphasising that challenges can be reframed and used as stepping stones to success. The book advocates for a mindset shift, suggesting that one should view obstacles as a chance to develop resilience, resourcefulness, and inner strength. By embracing difficulties rather than avoiding them, individuals can cultivate a proactive approach to problem-solving. The narrative is structured around three key disciplines: perception, action, and will. Holiday argues that how we perceive obstacles determines our response to them; by adjusting our perspective, we can navigate challenges more effectively. He encourages readers to take decisive action in the face of adversity, using obstacles as a means of progress rather than impediments. The importance of perseverance and determination is underscored throughout, with stories of individuals who turned setbacks into stepping stones to success. The book doesn't promise a life free of difficulties but asserts that one's response to challenges is within their control. Written in a clear and accessible style, \\\"The Obstacle is the Way\\\" offers practical advice on how to approach obstacles with resilience and turn them into opportunities for personal and professional growth, making it a valuable resource for anyone seeking a positive and constructive perspective on overcoming life's challenges.\"},{\"bookTitle\":\"Noise\",\"bookAuthor\":\"Daniel Kahneman, Olivier Sibony, Cass R. Sunstein\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"\\\"Noise\\\" provides a compelling exploration of the hidden influences that affect decision-making, encouraging readers to reconsider the reliability of their judgments and offering valuable perspectives for navigating a world filled with unpredictability and variability. Kahneman, along with co-authors Olivier Sibony and Cass R. Sunstein, explores how noise manifests in various fields, from legal judgments to medical diagnoses and financial predictions. The book highlights the pervasive impact of noise, demonstrating that even experts making similar decisions can produce vastly different results due to this unpredictable element. The authors argue that noise is a significant yet often overlooked factor in decision-making processes, leading to a lack of reliability and fairness in outcomes. Through vivid examples and engaging anecdotes, Kahneman elucidates how noise can undermine the effectiveness of institutions and calls for systematic efforts to reduce it. The book not only sheds light on the importance of recognising and mitigating noise but also offers practical insights for individuals and organisations aiming to improve the consistency and accuracy of their decisions.\"},{\"bookTitle\":\"Hackers and Painters\",\"bookAuthor\":\"Paul Graham\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"\\\"Hackers and Painters\\\" invites readers to appreciate the artistry in coding, urging them to approach it not merely as a technical task but as a form of self-expression and creativity.The book explores the world of programming and the creative mindset behind it, drawing parallels between programming and traditional arts like painting. Graham argues that hackers, in the positive sense of the word, share a common creative spirit with painters, seeking to express themselves through their work. He delves into the history of hacking, tracing its roots to early computer programming and the ethos of exploring and experimenting with technology. Graham contends that the best software is created by those who view it as an art form, using their creativity and passion to craft elegant solutions. He discusses the importance of programming languages and tools, advocating for languages that empower and inspire developers. The book also touches on entrepreneurship, with Graham sharing insights on starting successful companies and the hacker mentality required for innovation. Throughout, Graham emphasises the value of curiosity, ambition, and a willingness to challenge the status quo in both the world of programming and beyond.\"},{\"bookTitle\":\"Purple Cow\",\"bookAuthor\":\"Seth Godin\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"\\\"Purple Cow\\\" by Seth Godin is a marketing guide that encourages businesses to stand out in a crowded marketplace. Imagine a field of black and white cows; they all look the same, and none capture your attention. Now, picture a purple cow in the midst of them. That purple cow is remarkable, it's different, and it grabs your interest. Godin argues that for a product or service to succeed in today's world, it must be a \\\"Purple Cow\\\" – something extraordinary that people notice and talk about. Traditional advertising is no longer enough; instead, businesses should focus on creating remarkable products or services that naturally attract attention. Godin emphasises the importance of innovation and being bold in order to cut through the noise and capture the consumer's imagination. In a world bombarded with information, a purple cow is the key to standing out and creating a meaningful connection with customers. The book serves as a wake-up call for businesses to embrace uniqueness and take risks in order to thrive in an ever-changing market. The book challenges the conventional wisdom of marketing and advocates for a more daring and remarkable approach to business.\"},{\"bookTitle\":\"The Moment of Lift\",\"bookAuthor\":\"Melinda Gates\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"\\\"The Moment of Lift\\\" by Melinda Gates is an inspiring journey into the world of women's empowerment and global development. Melinda, co-chair of the Bill & Melinda Gates Foundation, shares her personal experiences and encounters with women from diverse backgrounds. She narrates compelling stories that highlight the transformative power of lifting women up, not only for their benefit but for the progress of entire communities. Melinda emphasises the importance of breaking down barriers that hold women back, such as unequal access to education and healthcare. She explores the profound impact of family planning and the role it plays in shaping women's lives. Throughout the book, Melinda advocates for gender equality as a key driver of societal progress, citing examples from around the world. She argues that when women are empowered, societies thrive. The book serves as a call to action, urging readers to join the movement for women's rights and become agents of positive change in their communities. Melinda's accessible and heartfelt writing makes the complex issues of global development and women's empowerment relatable and underscores the idea that the moment we collectively lift women up is the moment we lift humanity.\"},{\"bookTitle\":\"Potato\",\"bookAuthor\":\"John Reader\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"\\\"Potato\\\" by John Reader is an expansive and meticulously crafted exploration that unfurls the fascinating journey of the potato, transcending its humble origins in the Andes to its pivotal role as a global dietary cornerstone. The narrative begins with a nuanced examination of the potato's domestication by the indigenous communities of the Andes, underscoring the intricate relationship between humans and this extraordinary tuber. The author skillfully navigates the historical landscape, shedding light on the pivotal moment when Spanish conquistadors introduced the potato to Europe. This introduction marked the initiation of a transformative process that rippled across continents, influencing societies and diets in profound ways. Reader's narrative acumen is evident in his detailed examination of the potato's adaptability to diverse climates. From the high altitudes of the Andes to the temperate regions of Europe, the potato showcased its remarkable resilience, eventually becoming a vital food source in regions as varied as Asia, Africa, and North America. The book delves into the potato's crucial role in mitigating famines, with a particular focus on the tragic Irish Potato Famine, underscoring the interconnectedness of agriculture, geopolitics, and human survival. The richness of \\\"Potato\\\" lies in its ability to seamlessly weave scientific insights, cultural anecdotes, and historical accounts. The narrative not only explores the potato's journey through time but also delves into its profound impact on societies. By examining how the potato revolutionised diets, supported population growth, and influenced economic structures, Reader offers a comprehensive understanding of the tuber's multifaceted significance. The book becomes a lens through which one can view the social implications of potato cultivation, tracing its role in shaping agrarian societies and transforming the dynamics of food production. Moreover, \\\"Potato\\\" transcends historical narratives, incorporating contemporary perspectives on potato cultivation. The book addresses pressing issues, including the challenges posed by industrial agriculture and the critical importance of maintaining genetic diversity to ensure global food security. In doing so, Reader invites readers to reflect not only on the potato's historical legacy but also on its relevance in the face of modern agricultural and environmental challenges. This captivating exploration of the potato emerges as more than a botanical or historical study; it becomes a narrative that traverses the intersections of biology, culture, and economics. \\\"Potato\\\" offers a detailed and accessible account, inviting readers to appreciate the tuber's profound influence on human history and culture. In essence, the book serves as a testament to the potato's enduring legacy, urging us to consider its implications for our present and future as we navigate the complexities of our globalised food systems.\"},{\"bookTitle\":\"Seeking Wisdom - From Darwin to Munger\",\"bookAuthor\":\"Peter Bevelin\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"In essence, \\\"Seeking Wisdom\\\" serves as a roadmap for cultivating a thoughtful and rational approach to decision-making, blending evolutionary insights with the pragmatic wisdom of successful investors like Munger, making it an accessible and enriching guide for individuals seeking to improve their decision-making skills. The book delves into the evolutionary perspective of decision-making, inspired by Charles Darwin's principles, emphasising the importance of adapting to changing circumstances. Bevelin then introduces the thoughts of Charlie Munger, Warren Buffett's business partner, who is renowned for his multidisciplinary approach to problem-solving. The author highlights the significance of mental models, which are cognitive frameworks that help in understanding and navigating the complexities of the world. Bevelin stresses the value of learning from different disciplines such as biology, psychology, and history, advocating for a well-rounded approach to decision-making. The book encourages readers to embrace the idea of inversion – solving problems by approaching them backward, understanding what not to do. It also underscores the significance of checklists in decision-making, inspired by the aviation industry's successful use of systematic procedures. Furthermore, Bevelin explores the role of biases and heuristics in shaping our choices, urging readers to be aware of these mental shortcuts that can lead to suboptimal decisions. Throughout the book, practical wisdom is distilled from a range of sources, providing readers with a comprehensive toolkit for better decision-making in both personal and professional spheres.\"},{\"bookTitle\":\"Trick or Treatment\",\"bookAuthor\":\"Simon Singh\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"\\\"Trick or Treatment\\\" by Simon Singh provides an accessible exploration of alternative medicine, examining its scientific basis and efficacy. The book, written in a clear and engaging style, delves into various alternative therapies, from acupuncture to homeopathy, evaluating them against rigorous scientific standards. Singh, along with co-author Edzard Ernst, a former alternative medicine practitioner turned critic, dissects the evidence behind these treatments, revealing the lack of scientific support for many widely used alternative therapies. The authors advocate for evidence-based medicine, emphasising the importance of rigorous scientific research in determining the effectiveness of medical interventions. Through a combination of historical context, scientific analysis, and real-world examples, Singh highlights the potential dangers of relying on treatments with unproven or dubious claims. The book serves as a valuable guide for readers seeking to navigate the complex landscape of healthcare choices and make informed decisions about their well-being. Singh's witty and informative approach demystifies the world of alternative medicine, encouraging readers to critically assess the evidence before embracing any form of treatment. The book stands as a compelling critique of alternative medicine, promoting a rational and evidence-based approach to healthcare.\"},{\"bookTitle\":\"Only the Paranoid Survive\",\"bookAuthor\":\"Andrew Grove\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"\\\"Only the Paranoid Survive\\\" by Andrew Grove is a business classic that explores the concept of strategic inflection points in the corporate world. Grove, a former Intel CEO, explains that these points are moments when a company must adapt to a changing environment or face decline. Using accessible language, Grove illustrates the importance of being paranoid in business, a term he defines as a constant awareness of potential threats and a readiness to adapt. He emphasises the need for leaders to identify and respond to signals of change in the industry, encouraging a proactive and flexible approach. Grove shares Intel's own experiences, detailing how the company successfully navigated through a strategic inflection point in the microprocessor industry. The book offers practical advice on how to survive and thrive amidst industry shifts, including the importance of honest self-assessment, strategic planning, and continuous innovation. Grove's insights, conveyed in a clear and straightforward manner, make the book valuable for anyone seeking to understand the dynamics of business and the necessity of adaptability in a rapidly changing world.\"},{\"bookTitle\":\"Applied Artificial Intelligence\",\"bookAuthor\":\"Mariya Yao\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"\\\"Applied Artificial Intelligence\\\" by Mariya Yao is a comprehensive guide that demystifies the complex world of artificial intelligence (AI) for a broad audience, making it particularly accessible to those new to the field. The book serves as a roadmap, introducing readers to the practical applications of AI and its real-world impact. Yao skillfully navigates through the intricacies of AI, breaking down technical concepts into easily understandable terms. The narrative covers a wide range of topics, from machine learning and natural language processing to computer vision and robotics. Throughout the book, Yao provides numerous examples and case studies that illustrate how AI is being employed across various industries, such as healthcare, finance, and marketing. She explores the ethical considerations surrounding AI, offering insights into responsible AI development and deployment. One notable aspect of the book is its focus on empowering readers to leverage AI in their own domains, encouraging a hands-on approach through practical advice and guidance. Yao's writing style is engaging and jargon-free, making the book an ideal resource for anyone seeking a clear and insightful introduction to the world of applied artificial intelligence. Whether you're a business professional, a student, or simply curious about the transformative power of AI, this book provides a valuable foundation for understanding and navigating the AI landscape. Overall, \\\"Applied Artificial Intelligence\\\" is a user-friendly and informative guide that bridges the gap between technical intricacies and real-world applications, making the exciting field of AI accessible to a wide audience.\"},{\"bookTitle\":\"Sapiens\",\"bookAuthor\":\"Yuval Noah Harari\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"\\\"Sapiens\\\" offers a compelling exploration of the forces that have shaped the human story, encouraging readers to reflect on the choices and developments that define our collective history and ponder the possibilities that lie ahead. Whether one is well-versed in history or new to the subject, Harari's accessible writing style makes this a fascinating and informative read, providing valuable insights into the complex tapestry of human existence. Harari explores key milestones, beginning with the Cognitive Revolution that sparked the emergence of Homo sapiens as a dominant species. He delves into the Agricultural Revolution, highlighting the shift from nomadic lifestyles to settled farming communities and the profound impact this had on societies. The author then examines the rise and fall of empires, the development of trade networks, and the consequences of industrialization. Throughout the narrative, Harari skillfully weaves together anthropology, biology, and sociology to present a holistic view of human development. He discusses the role of shared myths and ideologies, such as religion and capitalism, in shaping human societies. The book also delves into the impact of scientific and technological advancements, including the unification of humanity through globalisation. Harari raises thought-provoking questions about the future, exploring the potential consequences of contemporary challenges like artificial intelligence and genetic engineering.\"},{\"bookTitle\":\"Homo Deus\",\"bookAuthor\":\"Yuval Noah Harari\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"\\\"Homo Deus\\\" by Yuval Noah Harari prompts readers to reflect on the evolving nature of human desires and the ethical dilemmas posed by our growing capabilities, encouraging us to be mindful of the impact of our technological advancements on the future of humanity. The book explores the future trajectory of humanity, envisioning a world where humans transition from being preoccupied with overcoming basic challenges to aspiring for god-like powers. Harari contends that in the 21st century, humans have largely conquered famine, plague, and war, leading to a new focus on achieving immortality, bliss, and divinity. The author delves into the role of data and algorithms, suggesting that they are becoming the new driving forces shaping our lives, economies, and decision-making processes. The book also examines the potential consequences of this shift, such as the rise of artificial intelligence, the merging of humans with machines, and the possibility of digital surveillance eroding personal privacy. Harari discusses the challenges posed by these developments, emphasising the need for ethical considerations in our pursuit of unprecedented powers.\"},{\"bookTitle\":\"Thinking, Fast and Slow\",\"bookAuthor\":\"Daniel Kahneman\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"\\\"Thinking, Fast and Slow\\\" is a thought-provoking journey into the intricacies of the human mind, providing valuable lessons for anyone interested in the mysteries of decision-making and the quirks of human behaviour. Kahneman, a Nobel Prize-winning psychologist, introduces readers to System 1, the fast and intuitive aspect of thinking that operates effortlessly and automatically, and System 2, the slow and deliberate system that requires conscious effort. Throughout the book, Kahneman delves into the cognitive biases and errors that can influence decision-making, revealing how our minds often rely on shortcuts and heuristics that lead to systematic errors in judgment. From the impact of overconfidence to the pitfalls of anchoring and loss aversion, Kahneman dissects various psychological phenomena, offering insights into how our brains can deceive us. The book also explores the concept of prospect theory, which explains how individuals evaluate potential gains and losses. Kahneman's research, conducted over decades, forms the foundation of behavioural economics, challenging traditional economic assumptions about rational decision-making. The narrative is enriched with engaging anecdotes and real-world examples, making complex psychological concepts accessible to readers. Kahneman's work has profound implications for understanding decision-making in areas ranging from finance to medicine.s\"},{\"bookTitle\":\"How to be Perfect\",\"bookAuthor\":\"Michael Schur\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"In \\\"How to Be Perfect\\\" by Michael Schur, readers embark on a delightful and insightful journey into the intricate realms of perfection. As a creative mind behind acclaimed television series such as \\\"The Good Place,\\\" Schur employs his distinctive blend of wit and wisdom to craft a compelling guide on the pursuit of perfection across various facets of life. Throughout the book, Schur employs relatable anecdotes to underscore the inherent absurdity of striving for an ideal that is often unattainable. In his signature style, he weaves together humour and astute observations, inviting readers to contemplate the folly of perfectionism and the inherent beauty found in life's imperfections. The narrative traverses diverse realms, from the intricacies of relationships to the dynamics of the workplace, and from personal development to the broader canvas of human existence. Schur adeptly dissects societal norms and expectations, urging readers to reconsider their notions of perfection and embrace the nuanced realities of life. By presenting the unattainability of perfection as a central theme, Schur encourages readers to adopt a more balanced and pragmatic perspective, one that acknowledges the inevitability of setbacks and the value of embracing the unpredictable nature of existence. Schur's writing is not just a mere critique of perfectionism; it serves as a guide to navigating the complexities of life with grace and humour. The author's self-deprecating humour serves to create an inclusive atmosphere, inviting readers of all backgrounds to reflect on their own experiences and perceptions of perfection. Through this engaging exploration, Schur challenges societal norms and encourages readers to find joy in the journey, rather than fixating on an idealised destination that remains elusive. This book is more than a literary work; it is a philosophical reflection on the human condition. Schur's narrative captivates readers with its entertaining anecdotes and profound insights, offering a refreshing perspective on the age-old quest for perfection. Whether familiar with Schur's television creations or not, readers are bound to find both amusement and enlightenment in this well-crafted exploration of life's imperfections and the wisdom gained from embracing them.\"},{\"bookTitle\":\"The Good Place and Philosophy\",\"bookAuthor\":\"William Irwin\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"\\\"The Good Place and Philosophy\\\" by William Irwin explores the philosophical themes embedded in the popular television series \\\"The Good Place.\\\" In this insightful book, Irwin delves into the moral and ethical dilemmas presented in the show, making complex philosophical ideas accessible to a wide audience. The narrative follows the characters Eleanor, Chidi, Tahani, and Jason as they navigate the afterlife, prompting readers to ponder questions about the nature of goodness, the consequences of one's actions, and the pursuit of a meaningful life. Irwin skillfully dissects episodes, discussing concepts like utilitarianism, virtue ethics, and existentialism, and relates them to the characters' experiences. The book not only serves as a guide for fans of the show but also acts as an engaging introduction to fundamental philosophical concepts. Irwin's writing style is approachable, making the book suitable for readers unfamiliar with academic philosophy. Whether one is a seasoned philosopher or a casual viewer of \\\"The Good Place,\\\" Irwin's work encourages contemplation on the complexities of human morality and the quest for a 'good' life in a manner that is both entertaining and intellectually stimulating. Through its blend of humour and thoughtful analysis, \\\"The Good Place and Philosophy\\\" invites readers, foreign or familiar, to explore profound philosophical ideas in the context of a beloved TV series, creating an accessible bridge between popular culture and timeless questions about the nature of morality and existence.\"},{\"bookTitle\":\"The Power of Ethics\",\"bookAuthor\":\"Susan Liautaud and Lisa Sweetingham\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"\\\"The Power of Ethics\\\" serves as a practical guide for individuals seeking to navigate the complexities of moral choices, fostering a deeper understanding of the impact of ethics on personal and professional success in a manner that resonates with a global audience. This book explores the critical role ethics plays in our personal and professional lives, offering insights accessible to readers from diverse backgrounds. The book delves into the significance of ethical decision-making in a global context, addressing the challenges individuals face in navigating complex moral landscapes. Liautaud and Sweetingham emphasise the practicality of ethical principles, illustrating how they can be applied in everyday situations. The authors highlight the impact of ethical choices on personal well-being, relationships, and the broader community. Through real-life examples and relatable anecdotes, they guide readers in understanding the consequences of ethical lapses and the rewards of principled conduct. The book goes beyond theoretical discussions, providing actionable advice on cultivating an ethical mindset and integrating it into various aspects of life. It explores the dynamics of power and the responsibility that comes with it, shedding light on how individuals can use their influence ethically. Moreover, the authors emphasise the importance of accountability, encouraging readers to take ownership of their decisions and learn from ethical dilemmas. With clarity and a conversational tone, Liautaud and Sweetingham demystify ethical concepts, making them accessible to readers who may be new to the subject.\"},{\"bookTitle\":\"A Mind for Numbers\",\"bookAuthor\":\"Barbara Oakley\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"\\\"A Mind for Numbers\\\" serves as a roadmap for anyone struggling with mathematics or science, offering insights and strategies that can be applied to any learning endeavour, making it an invaluable resource for those seeking to develop effective study habits and conquer the challenges of technical subjects. Oakley, drawing from her personal experiences as a struggling math student turned successful professor, breaks down complex learning techniques into simple, actionable steps. The book emphasises the importance of adopting effective study habits, such as the Pomodoro Technique, which involves focused bursts of study followed by short breaks to enhance concentration. Oakley explores the concept of focused and diffuse thinking, explaining how alternating between the two can improve understanding and problem-solving skills. She advocates for the creation of a dedicated learning environment and the use of metaphor and analogy to make abstract concepts more concrete. The book also delves into overcoming procrastination and transforming negative attitudes towards challenging subjects. With a blend of neuroscience and practical advice, Oakley encourages readers to embrace a growth mindset and view mistakes as valuable learning opportunities. Throughout the book, anecdotes, relatable examples, and engaging exercises make the content accessible to learners at various levels.\"},{\"bookTitle\":\"Remote - Office Not Required\",\"bookAuthor\":\"David Heinemeier Hansson\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"\\\"Remote: Office Not Required\\\" presents a comprehensive guide to reimagining work in the digital age, encouraging organisations to embrace flexibility and leverage technology to create a more dynamic and adaptive work environment that benefits both employers and employees. The book explores the concept of working outside traditional office environments, providing insights into the benefits and challenges of remote work. The book argues that the traditional office setup is not a necessity for productive and successful work, and that remote work offers numerous advantages. It emphasises the importance of results-driven work cultures over the need for physical presence in an office, pointing out that many jobs can be effectively performed from any location. The author advocates for a shift in mindset towards trusting employees to manage their own time and tasks, promoting a healthy work-life balance. The book delves into the use of technology to facilitate remote collaboration, highlighting tools and strategies for effective communication and teamwork. It addresses common concerns and misconceptions about remote work, offering practical solutions for maintaining productivity and team cohesion. Additionally, the book recognises the impact of remote work on company culture, hiring practices, and the design of physical workspaces.\"},{\"bookTitle\":\"Do Nothing\",\"bookAuthor\":\"Celeste Headlee\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"\\\"Do Nothing\\\" by Celeste Headlee explores the modern obsession with busyness and the constant pursuit of productivity, urging readers to reassess their approach to work and life. Headlee contends that society's emphasis on constant activity and the glorification of busyness are detrimental to our well-being, creativity, and relationships. Drawing on research from various fields, she argues that the relentless quest for productivity not only leads to burnout and stress but also hinders our ability to think deeply and cultivate meaningful connections. The author advocates for a more balanced and mindful approach to life, emphasising the importance of rest, leisure, and genuine human connection. Headlee encourages readers to challenge societal norms that equate busyness with success and to redefine their priorities. By embracing moments of stillness and allowing ourselves to \\\"do nothing\\\" without guilt, she suggests that we can enhance our overall happiness and effectiveness. The book serves as a call to action, urging individuals to reclaim their time and focus on what truly matters, ultimately fostering a healthier and more fulfilling way of living in the modern world.\"},{\"bookTitle\":\"Weapons of Math Destruction\",\"bookAuthor\":\"Cathy O'Neil\",\"yearWhenLastFinishedReading\":\"2023\",\"summary\":\"Algorithms are everywhere, from deciding which videos you might like on the internet to helping banks decide who gets a loan. But here's the catch: not all algorithms are \\\"good\\\". Some are like villains in disguise, and Cathy O'Neil calls them \\\"Weapons of Math Destruction\\\" or WMDs. Just like how a superhero can accidentally cause chaos, these WMDs can mess up people's lives without anyone realising it. One WMD example is when algorithms decide who gets a job interview. If these algorithms are not carefully designed, they might end up favoring certain people over others, like only choosing people who live in a certain neighborhood or went to a specific school. That's not fair! Algorithms should be fair and treat everyone equally. But some WMDs don't follow this rule. They can unintentionally create unfair situations, especially for those who are already facing challenges. If algorithms are not accurate, they might label things incorrectly. If the algorithm is biased, it might unfairly reject some people or charge them more money just because of where they live or their background. One important thing to understand is that these WMDs are not evil on purpose. They're like well-meaning robots that sometimes make mistakes. Cathy O'Neil wants people to pay attention and make sure these algorithms are fair and don't unintentionally hurt anyone. By understanding how these algorithms work and demanding fairness, we can make the world a better place.\"},{\"bookTitle\":\"Predictably Irrational\",\"bookAuthor\":\"Dan Ariely\",\"yearWhenLastFinishedReading\":\"2022\",\"summary\":\"The book explores the fascinating realm of human decision-making, revealing the systematic patterns of irrationality that govern our choices. Ariely, a behavioral economist, delves into the irrational aspects of our behavior and provides insightful explanations for seemingly irrational decisions. He challenges the conventional belief that people always act in their best interest, demonstrating that our choices are often influenced by predictable cognitive biases. Ariely introduces the concept of \\\"predictable irrationality\\\" to explain how we consistently deviate from rational decision-making due to cognitive shortcuts and emotional influences. Through a series of engaging experiments and real-life examples, Ariely highlights various cognitive biases, such as the decoy effect, anchoring, and the power of free offers, that consistently shape our choices. The book explores topics like the relativity of value, social norms, and the impact of expectations on our perception of experiences. One of the key takeaways is that understanding our irrational tendencies can empower us to make better decisions. Ariely also addresses the role of dishonesty in human behavior, uncovering the factors that lead people to cheat and lie. The book concludes by emphasising the importance of designing systems and policies that consider the predictable irrationality of individuals. Overall, \\\"Predictably Irrational\\\" provides a captivating journey into the quirks of human decision-making, offering valuable insights for individuals, businesses, and policymakers alike to navigate the complexities of our irrational minds.\"},{\"bookTitle\":\"The Language Instinct\",\"bookAuthor\":\"Steven Pinker\",\"yearWhenLastFinishedReading\":\"2022\",\"summary\":\"\\\"The Language Instinct\\\" is an enlightening and accessible exploration of the profound and instinctive nature of human language, providing a compelling argument for the biological basis of this unique human capacity. It explores the fascinating world of human language in a captivating journey through linguistics. The book delves into the core idea that language is an innate human instinct, a natural ability embedded in our genes. He challenges the common belief that language is a cultural artifact, arguing that it is a biological adaptation shaped by natural selection. Pinker elucidates complex linguistic concepts with clarity and wit, making the subject accessible to readers from all backgrounds. The book examines the intricate mechanics of language, from phonetics to grammar, shedding light on the universal aspects that underpin the world's diverse languages. Pinker introduces the concept of the \\\"language organ,\\\" suggesting that the brain is hardwired for language, and he explores the role of genetics in shaping linguistic abilities. Drawing on a wealth of examples and studies, Pinker debunks myths about language acquisition, emphasising the ease with which children acquire complex linguistic structures. He contrasts the biological view with competing theories, providing a comprehensive overview of the ongoing debates in linguistics. Pinker also delves into the historical development of language, tracing its evolutionary roots and dispelling misconceptions about the supposed simplicity of early forms of communication. Throughout the book, Pinker employs a conversational style, employing humour and real-world examples to elucidate intricate linguistic theories. He addresses common questions about language evolution, such as the origin of grammar and the nature of linguistic universals. Pinker's exploration extends to the impact of technology on language, including the influence of writing systems and the advent of the internet. The book concludes with a reflection on the future of language, contemplating the potential evolution of new languages and dialects.\"},{\"bookTitle\":\"The Blank Slate\",\"bookAuthor\":\"Steven Pinker\",\"yearWhenLastFinishedReading\":\"2022\",\"summary\":\"In \\\"The Blank Slate\\\" Steven Pinker advocates for a more balanced and scientifically informed approach to understanding human nature, challenging the simplistic views that have dominated discussions on the subject. The book is a thought-provoking exploration of the nature vs. nurture debate, dissecting the origins of human behaviour and intelligence. Pinker challenges the notion of the \\\"blank slate,\\\" the idea that humans are born with minds like empty canvases waiting to be shaped solely by experience and culture. Drawing on diverse disciplines such as psychology, genetics, and neuroscience, Pinker argues that our minds are not blank slates but rather products of a complex interplay between genes and environment. He dismantles the extreme ideologies that deny the role of biology in shaping human traits, advocating for a more nuanced understanding that considers both genetic and environmental factors. Pinker addresses controversial topics like intelligence, gender differences, and human violence, dismantling misconceptions and emphasising the importance of scientific evidence in understanding these phenomena. Throughout the book, he promotes a middle-ground perspective that acknowledges both the significance of biological predispositions and the impact of culture and education.\"},{\"bookTitle\":\"How the Mind Works\",\"bookAuthor\":\"Steven Pinker\",\"yearWhenLastFinishedReading\":\"2022\",\"summary\":\"\\\"How the Mind Works\\\" by Steven Pinker delves into the intricacies of the human mind, aiming to unravel the mysteries of our cognitive functions in a way that is accessible to readers from diverse backgrounds. The book is a captivating journey into the depths of human cognition, unraveling the complexities of our mental processes with clarity and insight. Pinker's ability to distil intricate scientific concepts into an engaging narrative makes this work not only informative but also enjoyable for readers seeking a deeper understanding of what makes us human. The book embarks on a fascinating exploration of the mind's architecture, dissecting its evolution, mechanisms, and the purpose behind its seemingly complex operations. The book begins by elucidating the concept of natural selection and how it has sculpted the human brain over millions of years. Pinker argues that the mind, like any other organ, is a product of evolutionary processes, shaped by the demands and challenges faced by our ancestors. He employs a witty and engaging style to demystify various cognitive phenomena, ranging from language acquisition to emotion, memory, and decision-making. Pinker contends that many aspects of human behaviour can be explained by evolutionary principles, dispelling the notion of a \\\"blank slate\\\" and highlighting the role of genes in shaping our mental landscape. He skillfully weaves together insights from psychology, neuroscience, and evolutionary biology, presenting a comprehensive and comprehensible overview of the mind's inner workings. Throughout the book, Pinker employs vivid metaphors and real-world examples to clarify complex ideas, ensuring that readers from various linguistic backgrounds can grasp the essence of his arguments. He dissects the brain's modular structure, likening it to a Swiss Army knife with specialised modules for different functions. In doing so, Pinker tackles the age-old debate of nature versus nurture, asserting that both factors play a crucial role in shaping the mind. He navigates through the labyrinth of memory, illustrating how our recollections are often flawed and influenced by various cognitive biases. Pinker also explores the social aspects of the mind, examining the dynamics of human relationships and cooperation. He sheds light on the concept of reciprocal altruism, proposing that cooperation and social bonds have evolutionary roots. Pinker's narrative is laced with humour and wit, making even the most intricate topics entertaining and accessible. He addresses the often contentious subject of gender differences, arguing that some disparities in behaviour may have evolutionary origins but are not deterministic. The book concludes with reflections on the implications of understanding the mind's inner workings, touching on topics such as free will and morality.\"},{\"bookTitle\":\"Grit\",\"bookAuthor\":\"Angela Duckworth\",\"isItWorthReReading\":true,\"summary\":\"Imagine you're trying to build the tallest tower out of blocks. Grit is like having the determination and courage to keep building, even when it gets difficult or you make mistakes. Angela Duckworth tells us that having talent is good, but having grit is even more important. She says it's like a magical ingredient that helps us reach our goals. Grit is like having a superpower. It's not about being the smartest or the most talented. Instead, it's about working really, really hard and not giving up, even when things are tough. Duckworth found that grit is a big reason why some people succeed. Duckworth created something called the \\\"Grit Scale.\\\" It's like a quiz that helps us understand how gritty we are. It asks questions like, \\\"Do you finish what you begin?\\\" and \\\"Do setbacks make you want to give up?\\\" Your answers help you see how much grit you have. Duckworth says that effort counts twice. This means that it's not just about being smart or talented. It's about putting in a lot of effort. Imagine you're learning to ride a bike. You might fall down a lot, but if you keep trying and don't give up, you'll eventually get better. Grit is a mix of passion and perseverance. Passion is like having a big dream or goal. Perseverance is about sticking with it, even when it gets tough. So, if you really love drawing and you practice every day, that's passion and perseverance working together. Duckworth also talks about the 10,000-hour rule, which is the idea that it takes about 10,000 hours of practice to become really, really good at something. This could be playing the piano, playing soccer, or anything else. So, if you want to be amasing at something, you need to practice a lot. Throughout the book, Duckworth shares stories about gritty people. These are real-life examples of how grit helped them succeed. For example, she talks about a famous basketball player who wasn't always the best, but he practiced a lot and became one of the greatest. Duckworth introduces the concept of a growth mindset. This means believing that you can get better at something if you work hard. If you think you can improve, you're more likely to have grit. So, if you're not good at math right now, a growth mindset says you can get better with practice. The book also explores how grit is important in school. Duckworth says that even if you're not the smartest, if you work hard and stay determined, you can do well. Gritty students keep trying, ask for help when needed, and don't give up easily. Duckworth discusses how parents and teachers can help kids develop grit. Encouraging children to pursue their passions, praising their effort instead of just their intelligence, and teaching them that mistakes are a part of learning are some of the ways to nurture grit. Finally, Duckworth suggests something called the \\\"Hard Thing Rule.\\\" It means each person in the family should pick something hard to do and stick with it. This helps everyone practice grit together. In a nutshell, \\\"Grit\\\" teaches us that success is not just about being naturally smart or talented. It's about working hard, sticking with our goals, and not giving up when things get tough. Grit is like a secret weapon that can help us become superheroes in our own lives. So, if you ever feel like giving up, just remember the power of grit!\"},{\"bookTitle\":\"Be Water, My Friend\",\"bookAuthor\":\"Shannon Lee\",\"inProgress\":true,\"summary\":\"\"},{\"bookTitle\":\"The Personal MBA\",\"bookAuthor\":\"Josh Kaufman\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"A captivating journey into the world of business simplified for anyone, whether you're a child or new to the business realm. Imagine embarking on an adventure armed with a treasure map filled with easy-to-understand ideas. At its core, the book emphasises that you don't need an expensive degree to navigate business successfully. It breaks down essential concepts, presenting them as 'big ideas' that are as clear as building blocks in a Lego castle. From creating value to understanding the human mind, the book unfolds the puzzle of business with simplicity. It unveils the power of systems, the art of negotiation, and the importance of marketing, likening these to magical tools for success. It encourages working smarter, not harder, and introduces the money game, transforming financial matters into a magical journey. Making wise decisions becomes a superpower, and the art of selling is akin to showcasing a special talent. In essence, \\\"The Personal MBA\\\" transforms intricate business concepts into a delightful adventure, making it accessible and enjoyable for everyone ready to explore the enchanted land of business.\"},{\"bookTitle\":\"Freakonomics\",\"bookAuthor\":\"Steven D Levitt and Stephen J Dubner\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"An engaging exploration of economics in everyday life, presented in a way that is accessible to readers unfamiliar with the subject. A thought-provoking journey that demonstrates the power of economic analysis to uncover the unexpected forces shaping our world. The book delves into intriguing questions, revealing unconventional connections and surprising insights. Levitt and Dubner use the tools of economics to dissect a range of topics, from crime rates and school performance to sumo wrestling and baby names. One of the central themes is the idea that incentives drive human behavior, and the authors challenge traditional thinking by examining the hidden motives behind actions. The book encourages readers to think critically about cause and effect, illustrating how economic thinking can shed light on seemingly unrelated phenomena.\"},{\"bookTitle\":\"SuperFreakonomics\",\"bookAuthor\":\"Steven D Levitt and Stephen J Dubner\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"The book covers the unconventional side of economics, presented in an accessible manner for readers unfamiliar with the field. The authors, known for their previous bestseller \\\"Freakonomics,\\\" delve into intriguing topics, from the economics of prostitution to the unexpected effectiveness of cheap and simple solutions. The book challenges conventional wisdom, illustrating how incentives shape human behaviour and drive economic outcomes. Levitt and Dubner introduce the concept of \\\"thinking like a freak,\\\" encouraging readers to question established norms and consider alternative perspectives. One notable chapter investigates climate change, proposing innovative and controversial solutions such as geoengineering. Throughout the book, the authors use real-world examples and anecdotes to make economic concepts relatable and entertaining. \\\"SuperFreakonomics\\\" is a thought-provoking journey that demystifies economic principles, making them accessible to a wide audience while encouraging a fresh and open-minded approach to understanding the world.\"},{\"bookTitle\":\"Think Like a Freak\",\"bookAuthor\":\"Steven D Levitt and Stephen J Dubner\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"A continuation in the series of Freakonomics, this book is all about the art of unconventional thinking and problem-solving. The authors this time encourage readers to break away from traditional approaches and embrace a 'freakish' mindset. They argue that by questioning conventional wisdom and challenging assumptions, one can uncover innovative solutions to a variety of issues. The book shares insightful anecdotes, ranging from solving complex problems to everyday challenges, illustrating the power of thinking differently. Levitt and Dubner stress the importance of admitting when you don't know something, advocating for experimentation, and being willing to fail in order to learn. They emphasise the value of incentives and how they shape human behaviour, encouraging readers to understand the motivations behind actions. With wit and real-world examples, the authors empower readers to approach problems with curiosity, creativity, and a willingness to challenge the status quo. Overall, the book serves as a practical guide for those seeking to cultivate a mindset that embraces unconventional thinking to navigate the complexities of the world.\"},{\"bookTitle\":\"The Undercover Economist\",\"bookAuthor\":\"Tim Harford\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"In thsi book Tim Harford takes readers on a journey to unravel the hidden principles of economics that shape our world. Using relatable examples, he demystifies complex economic concepts, making them understandable for readers unfamiliar with the subject. The book introduces the idea of the \\\"undercover economist\\\" as someone who scrutinises the economic forces at play in various situations, from coffee shops to supermarkets. Harford delves into topics like supply and demand, incentives, and market dynamics, shedding light on how these forces influence our decisions and interactions. The book delves into topics such as supply and demand, market dynamics, and the unintended consequences of policies. Harford introduces readers to the concept of the \\\"invisible hand\\\" and how it guides economic interactions. He also highlights the importance of incentives and how they influence human behavior. The narrative is sprinkled with anecdotes and practical examples, illustrating economic principles in action. Whether exploring the pricing of coffee or the impact of government regulations, Harford's narrative provides a fresh perspective on the world we live in.\"},{\"bookTitle\":\"The Logic Of Life\",\"bookAuthor\":\"Tim Harford\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"\\\"The Logic of Life\\\" presents a compelling case for understanding the economic motives that shape our decisions, providing a fresh perspective on the intricacies of human behaviour in a way that is accessible and relatable to readers from all backgrounds. The book contains the intriguing concept of behavioral economics, revealing how our everyday choices are influenced by a combination of rational decision-making and social forces. Harford argues that our decisions, from career choices to relationships, can be better understood by applying economic principles to human behavior. Harford delves into the dynamics of crime, education, and even the complexities of love and dating, unveiling the economic patterns that underlie seemingly irrational decisions. With wit and clarity, he explains concepts such as game theory and rational choice theory, making them accessible to readers unfamiliar with economic jargon. The book challenges the traditional view of human behavior and sheds light on the hidden economic logic that governs our lives, offering a thought-provoking exploration of the intersection between economics and human nature.\"},{\"bookTitle\":\"Messy\",\"bookAuthor\":\"Tim Harford\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"Throughout the book, Harford presents a compelling case for the benefits of embracing disorder, encouraging readers to see chaos not as a hindrance but as a catalyst for growth and innovation in both personal and professional aspects of life. The book covers the value of disorder and randomness in our lives, challenging the conventional wisdom that neatness and order are always preferable. Harford argues that embracing messiness can lead to greater creativity, resilience, and success in a variety of fields. Drawing on examples from business, sports, and art, he illustrates how chaos and unpredictability often foster innovation and adaptation. The book delves into the concept of \\\"messy\\\" problem-solving, where the most effective solutions emerge from a dynamic and flexible approach rather than rigid planning. Harford also discusses the importance of improvisation, highlighting how some of the most successful individuals and organisations thrive in uncertain environments by remaining adaptable and open to change. Furthermore, \\\"Messy\\\" challenges the notion of linear career paths, suggesting that embracing a non-linear, unpredictable journey can lead to more fulfilling and successful outcomes.\"},{\"bookTitle\":\"How to Make the World Add Up\",\"bookAuthor\":\"Tim Harford\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"\\\"How to Make the World Add Up\\\" serves as a practical guide for readers to become more discerning consumers of information, encouraging them to embrace the power of statistical thinking in their everyday lives. It is a compelling exploration of the power of statistics and data in understanding the world around us. Harford, a renowned economist and journalist, takes readers on a journey to demystify the often perplexing realm of numbers. Through engaging anecdotes and real-world examples, he explains how statistics shape our lives, influence decision-making, and can be both enlightening and deceptive. Harford emphasises the importance of critical thinking when confronted with data, urging readers to question assumptions and scrutinise the context in which statistics are presented. The book addresses common pitfalls, such as cherry-picking data and drawing misleading conclusions, while also highlighting the potential for statistics to reveal profound insights and guide positive change. Harford's accessible writing style and humour make complex concepts accessible, making this book an excellent resource for anyone looking to navigate the data-driven world with a clearer understanding and a sharper analytical mindset.\"},{\"bookTitle\":\"You Are Now Less Dumb\",\"bookAuthor\":\"David McRaney\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"The book serves as a valuable guide for anyone seeking to enhance their critical thinking skills and navigate the complexities of the human mind, making it an accessible for readers of all language backgrounds. It talks about the quirks and fallacies that shape human thinking, presented in a manner accessible to readers from diverse linguistic backgrounds. In this enlightening book, McRaney delves into the fascinating world of cognitive biases and illusions that influence our perceptions and decision-making. With engaging anecdotes and real-life examples, he unveils the surprising ways our minds can deceive us, illustrating concepts such as confirmation bias, hindsight bias, and the Dunning-Kruger effect. The author skillfully breaks down complex psychological phenomena, making them comprehensible to those new to the English language. McRaney doesn't just highlight our cognitive shortcomings; he offers practical insights on how to overcome them. Readers will find themselves on a journey of self-discovery, gaining a better understanding of the mental traps we all fall into and, more importantly, learning how to navigate through them. Whether exploring the intricacies of memory or dissecting the illusions of control, McRaney's writing style is clear and engaging, ensuring that even non-native speakers can grasp the nuances of the subject matter.\"},{\"bookTitle\":\"Tools of Titans\",\"bookAuthor\":\"Timothy Ferriss\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"With its easy-to-digest format and practical insights, \\\"Tools of Titans\\\" serves as a comprehensive guide for anyone seeking to improve their health, wealth, and wisdom, offering a roadmap to personal and professional success. The book serves as a manual for success, offering insights and practical advice from the likes of entrepreneurs, athletes, and artists. Ferriss categorises the content into three sections: Healthy, Wealthy, and Wise. In the 'Healthy' section, he explores topics such as fitness, mindfulness, and health routines, emphasising the significance of simple habits like morning rituals and regular exercise. The 'Wealthy' section delves into the strategies and mindset of successful business figures, discussing their approaches to investment, productivity, and time management. Lastly, the 'Wise' section covers personal development, learning, and self-discovery, encouraging readers to embrace failure and continuously seek knowledge. Ferriss also introduces the concept of 'titans,' individuals who have mastered their respective fields, and extractAs valuable lessons from their experiences. Throughout the book, Ferriss advocates for a mindset of experimentation, urging readers to explore different tools and strategies to discACover what works best for them.\"},{\"bookTitle\":\"On Writing Well\",\"bookAuthor\":\"William Zinsser\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"\\\"On Writing Well\\\" by William Zinsser is a comprehensive guide that serves as a valuable resource for anyone looking to enhance their writing skills. It is a user-friendly and informative guide that empowers writers to communicate effectively and connect with their readers, making it an invaluable resource for those seeking to improve their writing skills. Zinsser's approach to writing is both practical and insightful, making it accessible for readers from various linguistic backgrounds. The book emphasises simplicity, clarity, and brevity as essential elements of good writing. Zinsser advocates for a clear and direct writing style, encouraging writers to focus on conveying their ideas in the most straightforward manner possible. He emphasises the importance of knowing your audience and tailoring your writing to suit their needs. Zinsser provides practical advice on various writing forms, including nonfiction, memoirs, and business writing, offering tips on how to engage readers and maintain their interest. The book also delves into the editing process, stressing the significance of revising and polishing one's work to achieve precision and impact. Zinsser's guidance extends beyond mere technicalities; he explores the writer's mindset, highlighting the importance of authenticity, passion, and a genuine connection with the subject matter. Throughout the book, Zinsser uses real-world examples to illustrate his points, making it easy for foreign readers to grasp the concepts.\"},{\"bookTitle\":\"Guns, Germs, and Steel\",\"bookAuthor\":\"Jared Diamond\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"\\\"Guns, Germs, and Steel\\\" offers a thought-provoking narrative that seeks to demystify the roots of global inequality and the varied trajectories of human development. It is a compelling exploration of human history that seeks to answer the question of why certain societies developed faster than others. Diamond argues that the disparities in human development can be attributed to environmental factors rather than inherent differences in intelligence or ability. The author begins by examining the rise of civilizations in different regions and identifies geographic and environmental factors as key determinants of success. He contends that societies with access to fertile land, domesticable plants and animals, and advantageous geographical locations were able to develop agriculture, establish settled communities, and ultimately build more complex societies. The spread of domesticated crops and animals, facilitated by the east-west axis of Eurasia, played a crucial role in the development of advanced societies. Diamond also delves into the impact of germs and diseases, which were inadvertently transmitted between humans and animals during the process of domestication. This exchange led to the development of immunities in some populations, while devastating others. Furthermore, the author explores the role of technology and the advantages conferred by certain geographical regions in the shaping of human societies. Diamond's comprehensive analysis provides a holistic perspective on the factors that influenced the course of human history, challenging traditional notions of cultural superiority and highlighting the complex interplay between geography, biology, and culture.\"},{\"bookTitle\":\"Emotional Intelligence\",\"bookAuthor\":\"Daniel Goleman\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"\\\"Emotional Intelligence\\\" by Daniel Goleman explores the critical role emotions play in our lives, delving into the concept of emotional intelligence (EI) and its profound impact on personal and professional success. Goleman argues that mastering emotions is as important as intellectual abilities in achieving excellence. The book begins by distinguishing between two types of intelligence: cognitive intelligence, measured by IQ, and emotional intelligence, which encompasses self-awareness, self-regulation, motivation, empathy, and social skills. Goleman contends that while a high IQ may contribute to academic success, emotional intelligence is the key to effective leadership, strong relationships, and overall well-being. The author presents scientific evidence that emotions significantly influence decision-making, memory, and even physical health. Goleman explores the idea that individuals with high emotional intelligence can better navigate life's challenges by understanding and managing their own emotions while also empathising with others. The book highlights the importance of early emotional development, suggesting that children who learn to handle their emotions fare better in various aspects of life. Goleman also emphasises the plasticity of emotional intelligence, suggesting that it can be developed and improved over time. The narrative incorporates real-life examples and case studies, illustrating how individuals and organisations have benefited from applying emotional intelligence in various contexts. Goleman discusses the workplace extensively, asserting that emotional intelligence is a crucial factor in effective leadership, teamwork, and communication. The book concludes by exploring the societal implications of emotional intelligence, proposing that fostering emotional intelligence on a global scale could contribute to a more harmonious and cooperative world. In essence, \\\"Emotional Intelligence\\\" provides a comprehensive exploration of the impact emotions have on our lives, making a compelling case for the significance of emotional intelligence in achieving personal and collective success.\"},{\"bookTitle\":\"Algorithms to Live By\",\"bookAuthor\":\"Brian Christian and Tom Griffiths\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"\\\"Algorithms to Live By\\\" by Brian Christian and Tom Griffiths is a fascinating exploration of how computer science concepts can be applied to everyday human decision-making. The authors draw parallels between algorithms used in computing and the cognitive processes we employ in our lives, offering valuable insights into making better choices. The book introduces the concept of \\\"optimal stopping,\\\" suggesting that in situations like house hunting or hiring, setting a time to explore options before making a decision can lead to the best outcome. The exploration of the \\\"explore/exploit\\\" trade-off reveals how balancing between trying new things and sticking to what we know can be optimally managed, akin to algorithms used in information gathering. The authors also delve into the concept of sorting, emphasising its relevance in organising priorities and managing daily tasks. The book introduces the idea of \\\"caching,\\\" which explains how our brains store and retrieve memories, and it suggests practical strategies for memory enhancement. The concept of \\\"randomness\\\" ias explored in decision-making, demonstrating how introducing an element of chance can lead to better outcomes. The authors also tackle the challenges of \\\"overfitting\\\" in our minds, where we can become too entrenched in past experiences, hindering our adaptability. The relevance of computational concepts in social dynamics is discussed, such as the application of game theory in negotiations and the importance of signalling in communication. Throughout the book, the authors provide accessible real-world examples and anecdotes, making complex ideas understandable. \\\"Algorithms to Live By\\\" is not just a guide to decision-making; it's a bridge between the abstract world of computer science and the practical challenges of daily life, offering readers a new perspective on how to navigate the complexities of the human experience.\"},{\"bookTitle\":\"Never Eat Alone\",\"bookAuthor\":\"Keith Ferrazzi and Tahl Raz\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"\\\"Never Eat Alone\\\" by Keith Ferrazzi and Tahl Raz is a compelling guide to the art of networking, providing invaluable insights on building meaningful connections in both personal and professional spheres. Ferrazzi, a successful entrepreneur and networking expert, shares practical advice on how to cultivate relationships and leverage them for personal and career growth. The central theme revolves around the significance of genuine, reciprocal relationships and the idea that success is not a solo journey. Ferrazzi encourages readers to move beyond transactional networking and embrace a more holistic approach that focuses on long-term, mutually beneficial connections. The book emphasises the importance of authenticity, generosity, and vulnerability in building trust and rapport with others. Ferrazzi introduces the concept of the \\\"relationship currency,\\\" suggesting that the value of our networks is not just in what we can gain but also in what we can give. The authors stress the power of networking events, social gatherings, and shared meals as opportunities to connect with people from diverse backgrounds. The title, \\\"Never Eat Alone,\\\" symbolises the idea that every meal is a chance to strengthen relationships and create lasting bonds. Throughout the book, Ferrazzi shares personal anecdotes and success stories, illustrating how strategic networking has played a pivotal role in his own life. The narrative also delves into the psychology of networking, addressing common fears and misconceptions that may hinder individuals from effectively connecting with others. The book provides practical tips on topics such as building an authentic personal brand, mastering the art of small talk, and using social media to enhance one's network. Additionally, Ferrazzi advocates for the creation of \\\"lifeline relationships,\\\" a select group of individuals who provide unwavering support and guidance. Overall, \\\"Never Eat Alone\\\" serves as a comprehensive guide for individuals seeking to enhance their networking skills, offering timeless principles that are applicable to both seasoned professionals and those just starting their career journey. The authors' engaging writing style and real-world examples make this book accessible and relatable, making it a valuable resource for anyone looking to foster meaningful connections and achieve success through the power of relationships.\"},{\"bookTitle\":\"The Ascent of Money\",\"bookAuthor\":\"Niall Ferguson\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"\\\"The Ascent of Money\\\" by Niall Ferguson is a compelling exploration of the history and significance of finance, taking readers on a captivating journey through the evolution of money and its impact on human civilization. Ferguson begins by delving into the origins of money, tracing its roots from the barter system to the development of currency. He skillfully narrates the rise of financial institutions, such as banks, and their crucial role in shaping the economic landscape. The author sheds light on the influence of key individuals, from the powerful Medici family in Renaissance Italy to the modern financiers of Wall Street, illustrating how their actions have shaped the course of history. Ferguson's narrative extends to the consequences of financial crises, such as the Great Depression and the 2008 global economic downturn, providing valuable insights into the patterns and lessons learned from these events. Additionally, he examines the role of empires in the financial world, emphasising the link between economic power and global dominance. The book masterfully weaves together economic theory, historical anecdotes, and biographical sketches, making complex financial concepts accessible to readers of all backgrounds. With a keen eye for storytelling, Ferguson presents a comprehensive overview of the journey of money and finance, making it an engaging read that both educates and entertains.\"},{\"bookTitle\":\"Money - The True Story of a Made-Up Thing\",\"bookAuthor\":\"Jacob Goldstein\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"The book is about the evolution of money and its profound impact on human societies. Goldstein takes readers on a journey through time, unraveling the fascinating history of money from its humble beginnings to its current complex forms. He skillfully demystifies the concept of money, portraying it as a human invention that has evolved over centuries, shaped by societal needs and collective beliefs. Goldstein delves into key moments in history, such as the gold standard era and the creation of central banks, providing insightful explanations without overwhelming the reader with technical details. The author introduces us to various characters who played pivotal roles in the monetary narrative, from ancient merchants to modern-day central bankers. Throughout the narrative, Goldstein emphasises the dual nature of money, both a practical tool for facilitating trade and a symbolic representation of trust in the social contract. He artfully navigates through economic theories and concepts, making them accessible to readers unfamiliar with the subject. The book also explores the role of money in shaping power dynamics, social structures, and the global economy. Goldstein addresses the challenges and controversies surrounding modern monetary systems, including the recurring themes of inflation, debt, and financial crises. Importantly, he highlights the ongoing debate about the future of money in the digital age, examining the rise of cryptocurrencies and their potential impact on the traditional financial landscape.\"},{\"bookTitle\":\"Phishing for Phools\",\"bookAuthor\":\"George A. Akerlof and Robert J. Shiller\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"The book tackles the concept of \\\"phishing\\\" beyond its typical association with online scams. The authors extend the term to describe how individuals and markets are manipulated in various spheres of life, not just in the digital realm. They argue that we are often \\\"phished\\\" in our daily lives by those who exploit our psychological vulnerabilities, leading us to make decisions that may not be in our best interest. Akerlof and Shiller delve into the role of information asymmetry and manipulation in markets, highlighting how businesses and marketers often target and take advantage of consumers' cognitive biases and emotional vulnerabilities. The authors suggest that the pursuit of profit can sometimes lead to the production of \\\"phools,\\\" individuals who are deceived or manipulated for the benefit of others. They provide examples from different industries, such as the tobacco and fast-food industries, to illustrate how businesses can profit by creating and sustaining an environment that encourages individuals to make choices that are not necessarily in their long-term well-being. The book also explores the role of government and regulation in mitigating these deceptive practices, proposing that an understanding of the \\\"phishing equilibrium\\\" can help design policies to protect consumers.\"},{\"bookTitle\":\"Guide to Financial Markets\",\"bookAuthor\":\"Marc Levinson\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"\\\"Guide to Financial Markets\\\" is an invaluable resource that equips readers, irrespective of their familiarity with finance, with the knowledge needed to navigate and comprehend the intricate dynamics of global financial markets. Levinson begins by demystifying the fundamental concepts, elucidating the purpose and functioning of financial markets, which serve as the backbone of the global economy. The book systematically navigates through various financial instruments, including stocks, bonds, and derivatives, breaking down their roles and risks in plain language. Levinson elucidates the mechanisms of stock exchanges, explaining how buyers and sellers interact to determine market prices. As the narrative unfolds, the author delves into the vital role of central banks and their policies, shedding light on the intricate dance between interest rates, inflation, and economic stability. The book skillfully explores the impact of technological advancements on financial markets, emphasising the transformative influence of electronic trading and algorithms. Levinson navigates the reader through the historical events that have shaped financial markets, drawing parallels between past crises and contemporary challenges. Throughout the guide, he elucidates the significance of regulatory bodies and the evolving landscape of financial regulations. The author masterfully weaves together real-world examples and anecdotes to illustrate complex concepts, offering practical insights for anyone seeking a lucid understanding of the financial world.\"},{\"bookTitle\":\"The Complete Guide to Capital Markets for Quantitative Professionals\",\"bookAuthor\":\"Alex Kuznetsov\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"This book stands out as a comprehensive and approachable resource designed to empower individuals with a nuanced understanding of capital markets, particularly from a quantitative standpoint. In this extensively crafted guide, Kuznetsov adeptly untangles the intricacies of financial markets, rendering them accessible to readers with varying levels of familiarity with the complexities of global finance. The book commences by establishing a robust foundation, elucidating fundamental concepts such as stocks, bonds, and derivatives, and contextualising the role of these financial instruments within the broader economic landscape. It progressively navigates through the inner workings of market operations, exploring diverse topics that span trading strategies to risk management, providing pragmatic insights that cater to both seasoned professionals and novices alike. One notable feature of Kuznetsov's work is his commitment to grounding theoretical discussions in practical relevance. The incorporation of real-world examples and case studies effectively illustrates key principles, fostering a deeper understanding of complex ideas. Moreover, the author doesn't shy away from addressing the evolving landscape of capital markets, acknowledging the escalating influence of technological advancements, particularly in the realms of quantitative methods and algorithmic trading. Throughout the book, there is a consistent emphasis on demystifying jargon, ensuring that readers, irrespective of their prior exposure to financial terminology, can confidently engage with and comprehend the material. An exceptional aspect of Kuznetsov's approach is the judicious balance struck between theory and application. By intertwining theoretical frameworks with real-life scenarios, the guide serves as a practical roadmap for quantitative professionals seeking to navigate the intricate terrains of capital markets. This not only enriches the learning experience but also equips readers with a set of skills that transcends the theoretical realm, proving invaluable in practical, real-world financial scenarios. In essence, Kuznetsov's guide emerges as a user-friendly expedition into the realm of capital markets, ensuring that individuals unfamiliar with the subject matter can progressively assimilate the essentials. It transcends the typical barriers to entry in finance literature, offering a bridge for readers to cross into a domain that might initially seem daunting. The book's emphasis on clarity, relevance, and a holistic understanding of financial markets positions it as an indispensable resource, whether one is looking to enhance their existing knowledge or embark on a journey to proficiency in the intricate world of finance. Overall, this guide stands as a testament to Kuznetsov's commitment to demystifying capital markets for a broad audience, making it an enduring reference for those seeking to augment their financial acumen.\"},{\"bookTitle\":\"Debt - The First 5.000 Years\",\"bookAuthor\":\"David Greber\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"Through accessible language and insightful storytelling, \\\"Debt: The First 5,000 Years\\\" invites readers, foreign and domestic alike, to reconsider their understanding of debt and its profound implications for the human experience. Graeber challenges traditional economic theories by delving into the anthropological roots of debt, unveiling how it has shaped societies and human relationships. Spanning diverse cultures and epochs, the book traces the evolution of debt from ancient Mesopotamia to the present day. Graeber contends that debt is not just an economic transaction but a social and moral construct, deeply intertwined with power structures and societal values. He scrutinises the moral implications of debt, exposing the contradictions embedded in our perceptions of debt as both a sin and a duty. The author also critically examines the role of debt in the rise and fall of empires, shedding light on how debt has been used as a tool of control and domination. Furthermore, Graeber challenges the conventional narrative of money's origin, proposing that credit and debt existed long before the emergence of coins. He questions the morality of debt repayment, arguing that debt has often been used as a means to perpetuate social hierarchies and inequality. The book offers a thought-provoking analysis of the impact of debt on human relationships, questioning the assumptions that underpin our contemporary economic systems. Graeber's engaging narrative weaves together history, anthropology, and economics, providing a fresh perspective on the profound role that debt has played in shaping human societies over the millennia.\"},{\"bookTitle\":\"How to Win Friends and Influence People in the Digital Age\",\"bookAuthor\":\"Dale Carnagie\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"This adaptation of Carnegie's classic provides practical guidance for navigating the complexities of the digital age while upholding the timeless principles of building genuine relationships and influencing others positively. The book underscores the enduring importance of interpersonal skills in building meaningful relationships, even in the age of technology. It delves into fundamental principles such as the significance of genuinely listening to others, acknowledging their perspectives, and expressing appreciation. Carnegie's insights are translated into a digital context, emphasising the value of online etiquette, positive communication, and the judicious use of social media. The book advocates for a people-centric approach in the digital realm, urging readers to focus on understanding others rather than pushing their own agenda. It highlights the power of empathy, encouraging individuals to connect emotionally with their online audience. The significance of authenticity is a recurring theme, stressing that sincerity fosters trust in both face-to-face and virtual interactions. Carnegie also addresses the challenges of criticism in the digital age, advising readers to handle disagreements with tact and grace, fostering a collaborative rather than confrontational atmosphere. The book explores the impact of technology on leadership, advocating for a balance between digital and personal communication to effectively lead and inspire teams.\"},{\"bookTitle\":\"The 7 Habits of Highly Effective People\",\"bookAuthor\":\"Stephen R. Coley\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"The book inspires readers to cultivate a proactive mindset, set clear goals, and engage in empathetic communication, ultimately leading to a more fulfilling and successful life. At its core, Covey emphasises the importance of character development and a paradigm shift to achieve lasting success. The first three habits focus on self-mastery: being proactive, beginning with the end in mind, and putting first things first. Covey encourages individuals to take initiative, define their goals, and prioritise tasks based on importance rather than urgency. The next three habits revolve around interpersonal effectiveness, stressing the significance of teamwork, synergy, and empathetic communication. Covey introduces the concept of 'win-win' collaboration, where mutual benefits are sought in relationships. The seventh habit, 'sharpening the saw', underscores the need for continuous self-renewal in physical, mental, and emotional aspects. Covey's approach transcends cultural barriers, promoting universal principles that foster effectiveness, leadership, and personal growth. \"},{\"bookTitle\":\"How To Be A Stoic\",\"bookAuthor\":\"David Dillinger\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"\\\"How to Be a Stoic\\\" by David Dillinger is a practical guide to applying Stoicism, an ancient philosophy, in modern life. Dillinger explores the teachings of Stoic philosophers like Epictetus, Seneca, and Marcus Aurelius, offering a clear and accessible roadmap for readers seeking a more resilient and balanced approach to life's challenges. The book introduces fundamental Stoic principles, such as distinguishing between what is within our control and what isn't, cultivating an attitude of acceptance, and maintaining a focus on virtue. Dillinger illustrates these concepts with relatable examples and provides actionable advice on how to implement Stoic practices, including mindfulness, journaling, and ethical decision-making. The author emphasises the Stoic belief in the power of reason over emotions, encouraging readers to develop a rational mindset to navigate difficulties. \\\"How to Be a Stoic\\\" is not just a theoretical exploration of philosophy; it's a hands-on manual for readers from all walks of life, offering timeless wisdom that can be applied to enhance well-being, cope with challenges, and lead a more fulfilling existence. With a conversational tone and a blend of ancient wisdom and modern psychology, Dillinger's book is an accessible guide for anyone seeking a practical philosophy for a meaningful life.\"},{\"bookTitle\":\"12 Rules for Life - An Antidote to Chaos\",\"bookAuthor\":\"Jordan B. Peterson\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"The book offers practical wisdom and guidance for navigating life's challenges. Peterson presents a set of twelve principles rooted in psychology, philosophy, and religious teachings. These rules are designed to provide individuals, including foreigners, with a framework for living a meaningful and disciplined life. Peterson emphasises the importance of taking responsibility for one's actions, confronting chaos, and finding purpose in the face of life's inevitable struggles. Central themes include the significance of truth, the necessity of maintaining good posture in both a physical and metaphorical sense, and the idea that comparing oneself to others can lead to a more meaningful and fulfilling existence. The book encourages readers to pursue what is personally meaningful rather than what is expedient, fostering self-improvement and resilience in the face of life's uncertainties. Peterson's accessible language and illustrative anecdotes make the book a valuable guide for anyone seeking clarity and direction in their journey through life.\"},{\"bookTitle\":\"Beyond Order - 12 More Rules for Life\",\"bookAuthor\":\"Jordan B. Peterson\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"A guide to navigating the complexities of life with wisdom and purpose. Peterson offers practical advice in simple terms, making it accessible to a wide audience, including foreigners. The book expands on his previous work, \\\"12 Rules for Life,\\\" and delves into the importance of finding meaning in a chaotic world. Peterson emphasises the significance of taking responsibility for one's life, facing challenges head-on, and embracing the inherent struggles that come with personal growth. He explores the balance between order and chaos, urging readers to seek a meaningful existence while acknowledging the inevitable uncertainties. Through engaging anecdotes, psychological insights, and a blend of philosophy and practicality, Peterson encourages individuals to develop resilience, stand up to adversity, and pursue their goals with a sense of purpose. \\\"Beyond Order\\\" serves as a valuable guide for those seeking clarity and direction in their journey through life, offering universally applicable principles that resonate across cultural boundaries. Peterson's accessible language and relatable examples make this book a useful resource for anyone navigating the complexities of existence, providing a roadmap for personal development and a deeper understanding of the human experience.\"},{\"bookTitle\":\"The Lean Startup\",\"bookAuthor\":\"Eric Ries\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"\\\"The Lean Startup\\\" by Eric Ries is a revolutionary guide to entrepreneurship, presenting a methodology that is accessible and impactful for innovators worldwide. Ries introduces the concept of a lean startup, emphasising the importance of validated learning, iterative development, and efficient use of resources. At its core, the lean startup philosophy encourages entrepreneurs to test their business hypotheses quickly and adapt based on real customer feedback. The build-measure-learn feedback loop becomes the central theme, encouraging entrepreneurs to build a Minimum Viable Product (MVP), measure its success using actionable metrics, and learn from the results to make informed decisions. Ries also discusses the importance of the 'pivot'—the strategic shift in direction based on validated learning—allowing startups to stay agile and responsive in a volatile business environment. The book addresses the risks associated with traditional product development methods, advocating for a shift from detailed planning to a more flexible, experimental approach. Throughout the narrative, Ries shares real-world examples and case studies, making the principles of lean startup methodology applicable and relatable. The concept of 'innovation accounting' is introduced to help entrepreneurs quantify their progress accurately and avoid vanity metrics. Additionally, Ries stresses the significance of a 'startup culture' within established companies, promoting entrepreneurial thinking and experimentation even in larger organisations. The Lean Startup is a guide that transcends cultural and linguistic barriers, offering a universal approach to entrepreneurship by focusing on fundamental principles that can be applied across industries and geographies. Whether you're a budding entrepreneur in London or Tokyo, Ries provides a blueprint for navigating the unpredictable journey of starting and scaling a successful business, making it an essential read for anyone looking to innovate in the dynamic landscape of the 21st century.\"},{\"bookTitle\":\"Conscious\",\"bookAuthor\":\"Annaka Harris\",\"yearWhenLastFinishedReading\":\"2021\",\"summary\":\"\\\"Conscious\\\" by Annaka Harris explores the intriguing concept of consciousness in a manner accessible to all readers. Harris delves into the nature of consciousness, investigating what it means to be aware and self-aware. She navigates through complex ideas with clarity, offering a journey into the realms of neuroscience, philosophy, and contemplative traditions. The author challenges traditional views and prompts readers to ponder fundamental questions about the mind and its essence. With a lucid writing style, Harris invites even those unfamiliar with the subject to contemplate the mysteries of consciousness. The book seamlessly combines scientific insights with a philosophical approach, making it an engaging read for both beginners and those well-versed in the topic. Through anecdotes and thought experiments, Harris provides a captivating exploration of the enigma that is consciousness, encouraging readers to reflect on their own perceptions and awareness. The book serves as an accessible guide to the profound and complex nature of consciousness, making it an enlightening read for anyone curious about the mysteries of the mind.\"},{\"bookTitle\":\"The 4-Hour Workweek\",\"bookAuthor\":\"Timothy Ferriss\",\"yearWhenLastFinishedReading\":\"2020\",\"summary\":\"A guide to achieving a more fulfilling and efficient life by challenging traditional work norms. Ferriss advocates for the concept of lifestyle design, encouraging readers to question the societal expectation of working 40 hours a week for the majority of their lives. He emphasises the importance of time management and outsourcing tasks to free up one's schedule for more meaningful activities. Ferriss introduces the concept of the 'New Rich,' individuals who prioritise time and experiences over traditional wealth accumulation. The book provides practical advice on how to automate and delegate work, allowing readers to create passive income streams and achieve greater financial independence. Ferriss shares personal anecdotes and case studies to illustrate his principles, covering topics such as remote work, entrepreneurship, and travel.\"},{\"bookTitle\":\"The Subtle Art of Not Giving a Fck\",\"bookAuthor\":\"Mark Manson\",\"yearWhenLastFinishedReading\":\"2020\",\"summary\":\"Written in a straightforward and accessible style, this book offers a refreshing perspective on personal growth, urging readers to embrace life's challenges and find meaning in the midst of adversity. A no-nonsense guide to living a more meaningful life. In this book, Manson challenges the conventional self-help wisdom that promotes relentless positivity and the pursuit of constant happiness. Instead, he argues that life is inherently difficult, and true fulfilment comes from embracing and solving our problems. Manson encourages readers to be selective about the things they care deeply about, focusing on what truly matters rather than trying to please everyone or seeking constant approval. He advocates for a realistic and grounded approach to life, asserting that it's okay not to be okay all the time. The book emphasises the importance of taking responsibility for our choices and actions, rather than playing the victim. Manson also explores the concept of 'The Feedback Loop from Hell,' where our unrealistic expectations and constant desire for more can lead to dissatisfaction and unhappiness. Ultimately, the key message is that we should be mindful of where we invest our time and energy, learning to let go of societal pressures and choosing to care about what genuinely aligns with our values. \"},{\"bookTitle\":\"Make Your Bed\",\"bookAuthor\":\"Admiral William H. McRaven\",\"yearWhenLastFinishedReading\":\"2020\",\"summary\":\"A motivational book that distills life lessons from Navy SEAL training into practical advice. The author, drawing from his experiences, emphasises the importance of starting the day with a simple yet significant task: making your bed. This small act symbolises discipline, attention to detail, and the completion of a task, setting a positive tone for the rest of the day. McRaven delves into the power of resilience, stating that life is filled with challenges and that overcoming them requires perseverance. He shares anecdotes of SEAL training to illustrate the value of teamwork, asserting that no one succeeds alone. The author also highlights the significance of taking risks and pushing one's limits, advocating for a mindset that embraces failure as a stepping stone to success. McRaven suggests that individuals should not shy away from standing up to bullies, using the metaphor of a shark to represent such challenges. The book concludes with the notion that making a difference in the world begins with the completion of small tasks, and success comes to those who can navigate adversity with determination. Overall, \\\"Make Your Bed\\\" is a concise guide to life's principles, offering practical wisdom in an accessible manner, suitable for anyone seeking inspiration and guidance on the path to success.\"},{\"bookTitle\":\"The Psychology of Security\",\"bookAuthor\":\"Bruce Schneier\",\"yearWhenLastFinishedReading\":\"2019\",\"summary\":\"The book explores the intricate relationship between human behaviour and the effectiveness of security measures. Schneier delves into the cognitive aspects that shape our perceptions and decisions in the realm of security. He emphasises that security systems must align with the natural inclinations and limitations of human psychology to be truly effective. The book sheds light on the phenomenon of 'security theatre,' where measures are implemented more for the perception of security than actual protection. Schneier argues that understanding the psychology of both attackers and defenders is crucial in developing robust security strategies. He discusses the concept of 'security mindsets' and how individuals, influenced by biases and heuristics, often make predictable and exploitable security errors. Schneier calls for a holistic approach that considers human factors alongside technological solutions. He advocates for security measures that are intuitive, minimising the likelihood of human error. Through real-world examples and insights, Schneier's work underscores the importance of marrying technical expertise with an appreciation for the intricacies of human behaviour to create security systems that genuinely safeguard against threats.\"},{\"bookTitle\":\"The Art of Software Testing\",\"bookAuthor\":\"Glenford Myers\",\"yearWhenLastFinishedReading\":\"2019\",\"summary\":\"A comprehensive guide that demystifies the intricate world of software testing. Myers elucidates the fundamental concepts of software testing in a lucid manner, making it accessible even to those unfamiliar with the subject. The book serves as a roadmap for both novice and seasoned testers, offering valuable insights into the artistry of ensuring software reliability. Myers covers diverse testing techniques, from the basic to the advanced, outlining strategies for identifying and fixing defects. With a clear emphasis on practical application, he provides real-world examples and case studies, aiding comprehension for readers whose native language may not be English. The author also explores the human elements of testing, acknowledging the critical role of intuition and experience in this dynamic field. Myers' prose is straightforward and devoid of unnecessary jargon, making it an ideal resource for foreign readers seeking to grasp the nuances of software testing in a digestible manner. This book is not just a manual; it's a guide that nurtures a deeper understanding of the craft, fostering a mindset essential for effective software quality assurance. Whether you're an aspiring tester or a developer delving into the realms of testing, Myers' work is a valuable companion, unraveling the artistry inherent in the meticulous process of software testing.\"},{\"bookTitle\":\"The Pragmatic Programmer\",\"bookAuthor\":\"Andrew Hunt and David Thomas\",\"yearWhenLastFinishedReading\":\"2018\",\"summary\":\"\\\"The Pragmatic Programmer\\\" by Andrew Hunt and David Thomas is a foundational guide for software developers, offering timeless principles and practical advice in the ever-evolving world of programming. The authors advocate for a pragmatic approach to coding, emphasising the importance of thinking critically and continuously learning. They delve into various aspects of software development, covering topics such as code organisation, debugging, and testing. The book encourages developers to be efficient problem solvers and to embrace the concept of orthogonality, where each component of a system has a distinct purpose. The authors stress the significance of good communication within a development team, urging programmers to document their code effectively and consider future maintainers. They discuss the DRY (Don't Repeat Yourself) principle, advising against duplication in code to enhance maintainability. The book also explores the idea of programming by coincidence, cautioning against relying on accidental successes. With a focus on craftsmanship, the authors advocate for continuous improvement, suggesting practices such as automation, version control, and regular refactoring. Overall, \\\"The Pragmatic Programmer\\\" serves as a practical guide for developers, offering timeless wisdom and actionable tips to navigate the challenges of software development with a pragmatic mindset.\"},{\"bookTitle\":\"The Undoing Project\",\"bookAuthor\":\"Michael Lewis\",\"yearWhenLastFinishedReading\":\"2018\",\"summary\":\"\\\"The Undoing Project\\\" by Michael Lewis explores the fascinating collaboration between psychologists Daniel Kahneman and Amos Tversky, whose groundbreaking work revolutionised our understanding of human decision-making. Set against the backdrop of their deep friendship and intellectual partnership, the book delves into their research on cognitive biases and heuristics—mental shortcuts that often lead people to make irrational choices. Lewis skillfully narrates their journey from Israel to the United States, detailing the challenges they faced in challenging conventional economic theories. The book highlights the duo's significant contributions to the field of behavioral economics, exposing the flaws in traditional assumptions about human rationality. Through vivid storytelling, Lewis elucidates their experiments and the development of prospect theory, shedding light on how individuals assess risk and make choices in uncertain situations. \\\"The Undoing Project\\\" not only explores the scientific achievements of Kahneman and Tversky but also delves into the personal dynamics that eventually strained their relationship. Lewis crafts an accessible narrative that captivates readers, offering insights into the complexities of human thought and decision-making while capturing the essence of these two brilliant minds and the lasting impact of their work on fields beyond psychology.\"},{\"bookTitle\":\"Man's Search for Meaning\",\"bookAuthor\":\"Viktor E. Frankl\",\"yearWhenLastFinishedReading\":\"2016\",\"summary\":\"A profound exploration of human resilience and the quest for purpose in the face of extreme suffering. The book, drawing from the author's experiences as a Holocaust survivor, is divided into two parts. In the first part, Frankl recounts his harrowing experiences in Nazi concentration camps, offering a poignant insight into the brutality and dehumanization of the Holocaust. Amidst unimaginable suffering, he observes that those who maintained a sense of meaning and purpose were more likely to endure the hardships. The second part introduces Frankl's therapeutic approach, Logotherapy, which centres around the belief that life is meaningful, even in its most challenging moments, and individuals can find purpose by identifying a greater meaning beyond themselves. Frankl argues that our ability to choose our attitude towards unavoidable suffering gives us a degree of freedom and responsibility. In essence, he suggests that finding meaning in life, no matter the circumstances, is crucial for psychological well-being. \\\"Man's Search for Meaning\\\" is a timeless exploration of the human spirit, offering profound insights into the importance of finding purpose in life to navigate through adversity and discover a deeper sense of fulfilment.\"},{\"bookTitle\":\"Liar's Poker\",\"bookAuthor\":\"Michael Lewis\",\"wishlisted\":true},{\"bookTitle\":\"Архипелаг ГУЛАГ\",\"bookAuthor\":\"Александр Исаевич Солженицын\",\"dropped\":true,\"dropReason\":\"(was enough after 50%)\",\"summary\":\"A powerful and eye-opening book that tells the story of the Soviet Union's vast system of forced labor camps, known as the Gulag, during the mid-20th century. Imagine a country where people were punished severely for simply speaking their minds or having different ideas. This is what happened in the Soviet Union, a big country in Europe and Asia. The government, led by a group of powerful people, wanted everyone to think and act the same way. Aleksandr Solzhenitsyn, is like a brave detective. He decided to find out the truth about what was happening in his country. Instead of solving crimes, he uncovered a huge secret - a network of prisons where innocent people were sent for saying or doing things that the government didn't like. These secret prisons were called the Gulag, a place where the government would send regular people - teachers, writers, workers, and even kids - to these faraway, cold, and dark places. People were not sent to the Gulag because they were really bad. It was more like someone didn't like what they said or did, and the government would accuse them of made-up crimes. Life in the Gulag was like being stuck in a really sad and scary fairy tale. There was very little food, and people had to work all day, every day. It was so cold, and there were guards everywhere making sure nobody tried to escape. Families were torn apart, and children were sent to special camps where they had to grow up without their parents. Solzhenitsyn wrote down the stories of the people he met in the Gulag. He wanted the whole world to know about the unfairness and cruelty happening in his country. Through his writing, Solzhenitsyn encouraged people to speak up against injustice, even if it was scary. He believed that if more people knew about the Gulag, they would join together to stop the unfairness. It's like telling everyone about a bully so that others can help stop the bullying. \\\"The Gulag Archipelago\\\" is a story about bravery, injustice, and the power of words. It teaches us that even in the darkest times, one person's voice can make a difference. It's a reminder to stand up for what is right and to speak out against unfairness.\"},{\"bookTitle\":\"On the Origin of Species\",\"bookAuthor\":\"Charles Darwin\",\"dropped\":true,\"dropReason\":\"(written in a manner too difficult for me to comprehend)\",\"summary\":\"Imagine you're in a world of amasing creatures – birds with different beaks, turtles with various shells, and flowers with different colors. Charles Darwin wondered how these fantastic beings came to be. In this book he explained his brilliant idea – evolution. Darwin starts by talking about how farmers and breeders choose the best animals or plants for certain traits, like a farmer picking the biggest potatoes or a breeder choosing the fastest horses. He suggests that nature does something similar, letting the fittest animals and plants survive and pass on their good traits to their babies. Darwin says there are a lot of animals and plants in the world, but there's not enough food and space for everyone. This creates a competition – a struggle for existence. Only the strongest and best-suited survive and have babies. It's like a big race, and only the fastest runners get medals. Darwin explains that every living thing is a bit different from its parents. Imagine you have siblings, and each of you has something special about you – maybe one is taller, and another is faster. This variation is essential for the survival of a species. The coolest part of Darwin's idea is natural selection. Imagine a world where birds try to find the best food. Some birds might have long beaks, and others short. If the best food is deep inside a tree's bark, the birds with long beaks can reach it, survive, and have babies. Over time, more birds with long beaks will be around. This is like nature picking the best tools for the job. Darwin talks more about how species change slowly over time. It's like a story that goes on for many chapters, with each generation adding a little twist. Eventually, the story becomes very different from where it started. On the topic of instinct, Darwin goes over some animals that have some incredible abilities. For example, birds migrating thousands of miles without a map. Darwin suggests that these abilities also come from the slow changes over many generations. It's like learning from mistakes and getting better over time. He also covers hybridism. Sometimes different species can have babies together, but these hybrid babies are often not as strong or healthy. Darwin uses this to show that species are like big families – they might look different, but they're related. He also talks about how it's hard to find all the clues from the past. It's like trying to read a story when some pages are missing. Even though we might not have all the details, the evidence we do have supports the idea of evolution. Closer to the end of the book Darwin looks at how different animals and plants are related. It's like making a family tree for all living things. He also talks about how embryos (baby animals before they are born) of different species look very similar, suggesting a common ancestry.\"},{\"bookTitle\":\"The Wealth of Nations\",\"bookAuthor\":\"Adam Smith\",\"dropped\":true,\"dropReason\":\"(written in a manner too difficult for me to comprehend)\",\"summary\":\"Adam Smith talks about something he calls the \\\"invisible hand.\\\" It's like magic! He says that when people work to make money for themselves, it helps everyone. If a baker makes tasty bread and sells it, not only does he make money, but the people in the village get to eat delicious bread. So, by chasing their own interests, people unknowingly help others. It's like magic fingers making everything better! Next, Smith thinks that if everyone focuses on what they are good at, instead of trying to do everything, the whole village becomes more efficient. Imagine if everyone in a village tried to be a baker, a farmer, and a blacksmith at the same time. Things would be chaotic! But if they specialise in what they're good at, like one person baking, another farming, and another making tools, everything runs smoothly. Supply and Demand - If everyone in the village wants a toy, the toy makers will make a lot, and the price will be lower. But if no one wants toys, the price will be higher because they are rare. That's supply and demand. When something is rare and many people want it, the price goes up. But if there's a lot of it, the price goes down. Smith also talks about money. Money makes trading easier. Instead of swapping goods directly, like trading a potato for a shoe, people can use money. It's like a common language for trading. If you sell your potatoes for money, you can use that money to buy whatever you want. Additionally, Adam Smith believes that governments should not control everything. He thinks governments should protect people and make sure everyone plays fair, but they shouldn't tell people how to do everything. It's like having a referee in a game. They make sure the game is fair, but they don't play it for you. Finally, Smith talks about wealth, and he doesn't just mean gold and silver. He says real wealth is having a lot of things that make life better—like good roads, schools, and happy people. It's not just about having piles of gold.\"},{\"bookTitle\":\"Maps of Meaning - The Architecture of Belief\",\"bookAuthor\":\"Jordan B. Peterson\",\"dropped\":true,\"dropReason\":\"(written in a manner too difficult for me to comprehend)\",\"summary\":\"A book that explores the deep and complex nature of human beliefs, emotions, and the stories we tell ourselves to make sense of the world. Imagine life as a grand journey. You, me, and everyone else are like explorers, trying to find our way in a vast and sometimes confusing world. Jordan Peterson talks about how we all create \\\"maps\\\" to help us navigate this journey. These maps are not like the ones you use to find your way on the street; they are more like mental guides that tell us what's important and how we should behave. In our journey, there are dragons – not real ones, but metaphorical ones. These dragons are the challenges and problems we face in life. They could be anything from a difficult homework assignment to a big personal problem. Heroes, on the other hand, are the brave people who face these challenges and overcome them. Peterson talks about how ancient stories and myths often feature heroes facing dragons, teaching us that challenges are a natural part of life. Next, Peterson explores the ideas of chaos and order. Too much chaos is confusing, but too much order can be boring. Peterson suggests that finding the right balance between chaos and order is essential for a happy and meaningful life. He also covers the Power of Stories - they are more than just entertainment. They are like guides for how we should live. Peterson believes that stories help us make sense of the world, giving us a structure to understand what is right and wrong, good and bad. After that, Peterson dives into the deep waters of truth and meaning. He suggests that what we believe to be true is often linked to what we find meaningful. For example, if you believe being kind is good, it's because you find meaning in kindness. Our beliefs and values shape our maps, guiding us through the journey of life. And life is full of mysteries and things we don't understand. Peterson talks about the importance of facing the unknown, just like explorers stepping into uncharted territory. Instead of being afraid, he encourages us to be curious and open-minded, ready to learn and grow. Afterwards, he speak about the importance of responsibility. Peterson emphasises that we have the power to shape our lives, and with that power comes responsibility. Making good choices and facing challenges head-on is part of growing up and becoming the hero of our own story. Peterson believes that finding meaning and purpose in our lives is crucial. This doesn't mean we all have to do something extraordinary, like become a famous scientist or a superhero. It means finding something that feels important and fulfilling to us personally, whether it's helping others, creating art, or being a good friend. Like a caterpillar turning into a butterfly, Peterson talks about the process of becoming a better person. It involves facing challenges, learning from mistakes, and growing wiser. He believes that by striving to be better, we contribute to making the world a better place. Finally, Peterson explores the idea that our individual journeys are connected. Just like pieces of a puzzle, our stories and experiences overlap and interact. Understanding this connection can help us relate to and appreciate others, fostering a sense of community and shared purpose.\"},{\"bookTitle\":\"Artificial Unintelligence\",\"bookAuthor\":\"Meredith Broussard\",\"dropped\":true,\"dropReason\":\"(did not capture my attention)\",\"summary\":\"This book explores the world of artificial intelligence (AI) and challenges some common misconceptions. Firstly, Broussard talked about the idea that AI can do everything better than humans. She said, \\\"Hold on a second! AI is not a magical solution to all our problems. It's not as smart as you think.\\\" She wanted people to understand that computers and AI have their limits and can't replace the unique things humans can do. She also explained that sometimes people trust AI too much. Imagine if your friend told you a joke, and you laughed, but if a robot told you the same joke, it might not feel right. That's because AI doesn't really understand things the way humans do. It's like a super-fast calculator that can't grasp the emotions and meanings behind things. Another important point that Broussard made was about data. She said, \\\"AI needs a lot of information to learn, but sometimes the data it learns from is biased.\\\" What does biased mean? Well, it's like if you only ate your favorite food every day and never tried anything else. Your taste would be a bit biased, right? AI can be like that too, learning from data that might not represent everyone fairly. Broussard wanted people to be aware that just because something uses AI, doesn't mean it's always the best or fairest choice. She encouraged us to think critically about the technology we use and not just believe it's perfect. In her book, she also talked about how some people think technology can solve big problems like poverty or climate change. But she reminded us that real solutions involve more than just fancy gadgets. Humans need to work together and think carefully about the choices they make. She didn't want us to be scared of technology, though. Instead, Broussard encouraged us to be curious and ask questions. If a robot does something cool, we should wonder how it works and not just accept it without thinking.\"},{\"bookTitle\":\"Drift into Failure\",\"bookAuthor\":\"Sidney Dekker\",\"dropped\":true,\"dropReason\":\"(a bit too dry)\",\"summary\":\"\\\"Drift into Failure\\\" is like a guidebook for exploring the world of accidents. It's not about blaming someone but understanding how things can go wrong and making our adventures safer and more enjoyable. Just like in a game, we learn, adapt, and strive to be better players in the adventure of life. Accidents are like unexpected adventures. Sometimes, things don't go the way we plan, just like a surprise twist in a story. In this book, there's a cool idea that accidents aren't caused by bad guys. Instead, they happen when things get really complicated, like a puzzle with lots of pieces. One small mistake can lead to a chain of events, just like knocking down dominoes. Sometimes, it's the small things that start the whole adventure of accidents. Like a tiny pebble causing a big ripple in a pond. When you make a mistake, it's not about blaming someone. It's about learning from it, so you don't make the same mistake again. If you trip and fall, what do you do? You get up and keep going! The book talks about how important it is to bounce back after an accident and make things better. People make mistakes, but it's not because they want to. The book explains how our nature sometimes plays a role. Additionally, in this book, they use hindsight to understand accidents better, like watching a replay of a game to see what went wrong. Just like crossing the street, it's important to be mindful and watch out for potential dangers. In the book, being watchful helps prevent accidents. Communication is key! The book talks about how good communication can prevent accidents. Finally, the book suggests preparing for the unexpected, like having an umbrella when it might rain. Moreover, being flexible and adapting to change can help avoid accidents.\"},{\"bookTitle\":\"Fahrenheit 451\",\"bookAuthor\":\"Ray Bradbury\",\"dropped\":true,\"dropReason\":\"(although the message is vital and known to me, the style of the book was not captivating enough)\",\"summary\":\"A dystopian novel set in a future society where books are banned and \\\"firemen\\\" are employed to burn any that are found. The protagonist, Guy Montag, is one such fireman who begins to question this oppressive regime and the shallow, conformist culture it enforces. In this society, intellectualism is discouraged, and people are distracted by mindless entertainment on large screens. The novel explores themes of censorship, individualism, and the power of literature. Montag goes on a journey of self-discovery as he rebels against the conformity of his society, seeking knowledge and truth. Along the way, he encounters a group of rebels who are committed to preserving books and knowledge, even at great personal risk. As Montag becomes increasingly disillusioned with the oppressive regime, he faces the consequences of his defiance and seeks to escape the oppressive conformity that has stifled critical thinking and creativity. \\\"Fahrenheit 451\\\" is a powerful critique of censorship, the dangers of mass media, and the importance of intellectual freedom in a society that prioritises conformity over independent thought.\"},{\"bookTitle\":\"The Alchemist\",\"bookAuthor\":\"Paulo Coelho\",\"dropped\":true,\"dropReason\":\"(lost interest in the story)\",\"summary\":\"A tale of self-discovery and the pursuit of one's dreams. The story follows Santiago, a young shepherd from Andalusia, Spain, who embarks on a journey to find a hidden treasure in the Egyptian pyramids. Along the way, he encounters a series of characters and experiences that shape his understanding of life's meaning. The central theme revolves around the concept of Personal Legend — the idea that each person has a unique destiny or purpose to fulfill.\"},{\"bookTitle\":\"A Promised Land\",\"bookAuthor\":\"Barack Obama\",\"dropped\":true,\"dropReason\":\"(biographies usually do not keep my attention)\",\"summary\":\"A memoir by Barack Obama, the 44th President of the United States. The book takes readers on a compelling journey through Obama's early political career, his historic 2008 presidential campaign, and the initial years of his presidency. Obama reflects on the challenges and triumphs he faced as the first African-American president, offering a candid account of the complexities of leadership and the political landscape. The memoir delves into policy decisions, such as healthcare reform, providing insights into the decision-making process at the highest level of government. Throughout the narrative, Obama shares personal anecdotes, highlighting the toll of public service on his family and the weight of expectations placed on a leader.\"},{\"bookTitle\":\"Hit Refresh\",\"bookAuthor\":\"Satya Nadella\",\"dropped\":true,\"dropReason\":\"(was enough after 20%)\",\"summary\":\"\\\"Hit Refresh\\\" by Satya Nadella provides a compelling journey into the transformation of Microsoft under Nadella's leadership. The book, written in an accessible language, serves as a roadmap for individuals and organisations navigating change in the digital era. Nadella shares his personal and professional experiences, reflecting on the importance of empathy and a growth mindset. One concrete example from the book is Nadella's emphasis on Microsoft's cultural shift, moving away from a know-it-all attitude to a learn-it-all philosophy. He recalls a moment when he recognised the need for cultural change, referencing a disastrous product launch that highlighted the company's shortcomings. Another key aspect is Nadella's advocacy for inclusivity, evident in his commitment to diversity within Microsoft. He discusses the relevance of accessibility features in technology, citing the creation of an adaptive controller for Xbox as a prime example of Microsoft's commitment to making technology accessible to everyone. Furthermore, the book delves into the significance of artificial intelligence (AI) and cloud computing in shaping the future. Nadella explores Microsoft's role in advancing AI for social good, such as utilising the technology to help people with disabilities.\"},{\"bookTitle\":\"How to Avoid a Climate Disaster\",\"bookAuthor\":\"Bill Gates\",\"dropped\":true,\"dropReason\":\"(was enough after 15%)\",\"summary\":\"\\\"How to Avoid a Climate Disaster\\\" by Bill Gates serves as a comprehensive guide for readers, both familiar and unfamiliar with climate issues, outlining practical solutions to mitigate climate change. Gates emphasises the urgency of addressing carbon emissions, presenting a clear and accessible roadmap to achieve net-zero by 2050. He breaks down the challenge into five key areas: making steel and cement without emitting carbon, using clean electricity to produce goods and services, decarbonising transportation, developing breakthrough technologies, and adopting policies to incentivise change. Gates introduces the concept of \\\"green premiums,\\\" the additional cost of choosing a green alternative over a traditional, more carbon-intensive option. He highlights the need for innovation and research to reduce these premiums, making green choices economically competitive. One concrete example he explores is the production of green steel through the use of hydrogen instead of coal, thereby significantly reducing emissions. Gates also delves into the challenges of transitioning to electric vehicles, stressing the importance of innovations in battery technology to make them more affordable and efficient. Another key aspect is the need for reliable and affordable clean energy, with Gates shedding light on the potential of advanced nuclear power as a dependable and sustainable source. Throughout the book, Gates underlines the crucial role of government policies in driving change, calling for global collaboration and investment in research and development.\"}]"));}),
"[project]/pages/reading.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$Layout$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layout/Layout.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$books$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/pages/api/books.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
;
;
;
;
const Reading = ()=>{
    const renderReadingStats = ()=>{
        const booksGroupedByYear = Object.groupBy(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$books$2e$json__$28$json$29$__["default"], (param)=>{
            let { yearWhenLastFinishedReading } = param;
            return yearWhenLastFinishedReading;
        });
        const maxBooksReadInAYear = Math.max(...Object.values(booksGroupedByYear).map((b)=>Math.max(b.length)));
        const renderRelativeProgressByYear = (param)=>{
            let { year, numberOfBooks } = param;
            const percentage = "".concat(Math.round(numberOfBooks / maxBooksReadInAYear * 100), "%");
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "skill-lt",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                        children: [
                            year,
                            ": ",
                            numberOfBooks,
                            " ",
                            numberOfBooks === 1 ? "book" : "books"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/reading.js",
                        lineNumber: 23,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "skill-bar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "skill-bar-in",
                            style: {
                                width: percentage
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-toggle": "tooltip",
                                title: percentage
                            }, void 0, false, {
                                fileName: "[project]/pages/reading.js",
                                lineNumber: 28,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/pages/reading.js",
                            lineNumber: 27,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/pages/reading.js",
                        lineNumber: 26,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/pages/reading.js",
                lineNumber: 22,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-lg-4 m-15px-tb",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "education-box",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "2016 - now"
                                }, void 0, false, {
                                    fileName: "[project]/pages/reading.js",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                    children: "Relative % of Books Read Per Year"
                                }, void 0, false, {
                                    fileName: "[project]/pages/reading.js",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/reading.js",
                            lineNumber: 39,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/pages/reading.js",
                        lineNumber: 38,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/pages/reading.js",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-lg-7 ml-auto m-15px-tb",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "skills-box",
                            children: Object.entries(booksGroupedByYear).filter((param)=>{
                                let [year] = param;
                                return year !== "undefined";
                            }).reverse().map((param)=>{
                                let [year, books] = param;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: renderRelativeProgressByYear({
                                        year,
                                        numberOfBooks: books.length
                                    })
                                }, year, false, {
                                    fileName: "[project]/pages/reading.js",
                                    lineNumber: 51,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/pages/reading.js",
                            lineNumber: 46,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "separated"
                        }, void 0, false, {
                            fileName: "[project]/pages/reading.js",
                            lineNumber: 59,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/reading.js",
                    lineNumber: 45,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/reading.js",
            lineNumber: 36,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    const renderBookDetails = (param)=>{
        let { filteredBooks } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "resume-box",
            children: filteredBooks.map((book)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "resume-row",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-sm-3 col-md-3 col-xl-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rb-left",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/static/img/books/".concat(book.bookTitle, ".jpg"),
                                        title: book.title,
                                        alt: book.title
                                    }, void 0, false, {
                                        fileName: "[project]/pages/reading.js",
                                        lineNumber: 74,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/pages/reading.js",
                                    lineNumber: 73,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/pages/reading.js",
                                lineNumber: 72,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-sm-9 col-md-9 col-xl-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rb-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            children: book.bookTitle
                                        }, void 0, false, {
                                            fileName: "[project]/pages/reading.js",
                                            lineNumber: 83,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            children: [
                                                "by: ",
                                                book.bookAuthor
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/reading.js",
                                            lineNumber: 84,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        book.dropReason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            children: book.dropReason
                                        }, void 0, false, {
                                            fileName: "[project]/pages/reading.js",
                                            lineNumber: 85,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: book.summary
                                        }, void 0, false, {
                                            fileName: "[project]/pages/reading.js",
                                            lineNumber: 86,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        !!book.yearWhenLastFinishedReading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rb-time",
                                            children: book.yearWhenLastFinishedReading
                                        }, void 0, false, {
                                            fileName: "[project]/pages/reading.js",
                                            lineNumber: 88,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: book.bookSummary
                                        }, void 0, false, {
                                            fileName: "[project]/pages/reading.js",
                                            lineNumber: 92,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/reading.js",
                                    lineNumber: 82,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/pages/reading.js",
                                lineNumber: 81,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/reading.js",
                        lineNumber: 71,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, book.bookTitle, false, {
                    fileName: "[project]/pages/reading.js",
                    lineNumber: 70,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            })
        }, void 0, false, {
            fileName: "[project]/pages/reading.js",
            lineNumber: 67,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    const renderBookGroupBasedOnStatus = (param)=>{
        let { title, subTitle, filterBy } = param;
        const booksFilteredByStatus = __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$books$2e$json__$28$json$29$__["default"].filter((book)=>{
            if (filterBy.every((f)=>book[f])) {
                return book;
            }
        });
        const numberOfFilteredBooks = booksFilteredByStatus === null || booksFilteredByStatus === void 0 ? void 0 : booksFilteredByStatus.length;
        const years = Array.from(new Set(booksFilteredByStatus.map((b)=>b.yearWhenLastFinishedReading))).filter((b)=>b);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "about-text",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "".concat(title, " (").concat(numberOfFilteredBooks, ")")
                        }, void 0, false, {
                            fileName: "[project]/pages/reading.js",
                            lineNumber: 119,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: subTitle
                        }, void 0, false, {
                            fileName: "[project]/pages/reading.js",
                            lineNumber: 120,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/reading.js",
                    lineNumber: 118,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                years.length ? years.map((year)=>{
                    const filteredBooks = booksFilteredByStatus.filter((b)=>b.yearWhenLastFinishedReading === year);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: year
                            }, void 0, false, {
                                fileName: "[project]/pages/reading.js",
                                lineNumber: 129,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            renderBookDetails({
                                filteredBooks,
                                year
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "separated"
                            }, void 0, false, {
                                fileName: "[project]/pages/reading.js",
                                lineNumber: 131,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, year, true, {
                        fileName: "[project]/pages/reading.js",
                        lineNumber: 128,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        renderBookDetails({
                            filteredBooks: booksFilteredByStatus
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "separated"
                        }, void 0, false, {
                            fileName: "[project]/pages/reading.js",
                            lineNumber: 138,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/reading.js",
                    lineNumber: 136,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
    };
    const renderContainer = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "title",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Reading."
                    }, void 0, false, {
                        fileName: "[project]/pages/reading.js",
                        lineNumber: 149,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/pages/reading.js",
                    lineNumber: 148,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                renderReadingStats(),
                renderBookGroupBasedOnStatus({
                    title: "In Progress",
                    subTitle: "Currently reading",
                    filterBy: [
                        "inProgress"
                    ]
                }),
                renderBookGroupBasedOnStatus({
                    title: "Top 3 Personal Favourites",
                    subTitle: "Books that I would recommend to others, because of the timeless insight they hold",
                    filterBy: [
                        "isItWorthReReading"
                    ]
                }),
                renderBookGroupBasedOnStatus({
                    title: "Finished",
                    subTitle: "Grouped by year, with the recent ones at the top",
                    filterBy: [
                        "yearWhenLastFinishedReading"
                    ]
                }),
                renderBookGroupBasedOnStatus({
                    title: "Wishlisted",
                    filterBy: [
                        "wishlisted"
                    ]
                }),
                renderBookGroupBasedOnStatus({
                    title: "Dropped",
                    filterBy: [
                        "dropped"
                    ]
                })
            ]
        }, void 0, true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$Layout$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        showBackBtn: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "Reading",
            "data-nav-tooltip": "Reading",
            className: "pp-section pp-scrollable section counter",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: renderContainer()
            }, void 0, false, {
                fileName: "[project]/pages/reading.js",
                lineNumber: 187,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/pages/reading.js",
            lineNumber: 182,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/pages/reading.js",
        lineNumber: 181,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Reading;
const __TURBOPACK__default__export__ = Reading;
var _c;
__turbopack_context__.k.register(_c, "Reading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/pages/reading.js [client] (ecmascript)\" } [client] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const PAGE_PATH = "/reading";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/pages/reading.js [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}}),
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/pages/reading\" }": ((__turbopack_context__) => {
"use strict";

var { m: module } = __turbopack_context__;
{
__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/pages/reading.js [client] (ecmascript)\" } [client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__0476e7e2._.js.map