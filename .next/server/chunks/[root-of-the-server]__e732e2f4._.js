module.exports = {

"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/child_process [external] (child_process, cjs)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[project]/pages/api/last-commit.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Get the last Git commit date for a specified file
__turbopack_context__.s({
    "default": (()=>handler)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/child_process [external] (child_process, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
async function handler(req, res) {
    const { file } = req.query;
    // Basic validation to prevent directory traversal attacks
    if (!file || file.includes('..') || !file.match(/^[a-zA-Z0-9\/\._-]+$/)) {
        return res.status(400).json({
            error: 'Invalid file parameter'
        });
    }
    // Get the file's absolute path - relative to project root
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), file);
    try {
        // Execute git command to get the last commit date for the specific file
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__["exec"])(`git log -1 --format=%cd --date=iso ${filePath}`, (error, stdout, stderr)=>{
            if (error) {
                console.error(`Error executing git command: ${error}`);
                return res.status(500).json({
                    error: 'Failed to get commit date'
                });
            }
            if (stderr) {
                console.error(`Git command stderr: ${stderr}`);
            }
            const date = stdout.trim();
            if (!date) {
                return res.status(404).json({
                    error: 'No commit history found'
                });
            }
            return res.status(200).json({
                date
            });
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            error: 'Internal server error'
        });
    }
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__e732e2f4._.js.map