const CHUNK_PUBLIC_PATH = "server/pages/_error.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_d491f09c._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__b1b7bf5e._.js");
runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/node_modules/next/error.js [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/pages/_document.js [ssr] (ecmascript)\", INNER_APP => \"[project]/pages/_app.js [ssr] (ecmascript)\" } [ssr] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/node_modules/next/error.js [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/pages/_document.js [ssr] (ecmascript)\", INNER_APP => \"[project]/pages/_app.js [ssr] (ecmascript)\" } [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
