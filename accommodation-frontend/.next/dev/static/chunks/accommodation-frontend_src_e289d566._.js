(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/accommodation-frontend/src/lib/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAuthToken",
    ()=>getAuthToken,
    "getUser",
    ()=>getUser,
    "isAuthenticated",
    ()=>isAuthenticated,
    "logout",
    ()=>logout,
    "removeAuthToken",
    ()=>removeAuthToken,
    "removeUser",
    ()=>removeUser,
    "setAuthToken",
    ()=>setAuthToken,
    "setUser",
    ()=>setUser
]);
function getAuthToken() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return localStorage.getItem('token');
}
function setAuthToken(token) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem('token', token);
}
function removeAuthToken() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.removeItem('token');
}
function getUser() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const userStr = localStorage.getItem('user');
    if (!userStr) return null;
    try {
        return JSON.parse(userStr);
    } catch  {
        return null;
    }
}
function setUser(user) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem('user', JSON.stringify(user));
}
function removeUser() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.removeItem('user');
}
function isAuthenticated() {
    return !!getAuthToken();
}
function logout() {
    removeAuthToken();
    removeUser();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/accommodation-frontend/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/accommodation-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/accommodation-frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/accommodation-frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/accommodation-frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/accommodation-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/accommodation-frontend/src/lib/auth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "2b3dbddc934cc6055a9fbbbf304ee6c62abf6f6f386fe6e1f96c86e2d5f24434") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2b3dbddc934cc6055a9fbbbf304ee6c62abf6f6f386fe6e1f96c86e2d5f24434";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [authenticated, setAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [user, setUserState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Navbar[useEffect()]": ()=>{
                setAuthenticated((0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAuthenticated"])());
                setUserState((0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUser"])());
            }
        })["Navbar[useEffect()]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== pathname) {
        t1 = [
            pathname
        ];
        $[2] = pathname;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Navbar[handleLogout]": ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logout"])();
                setAuthenticated(false);
                setUserState(null);
                window.location.href = "/";
            }
        })["Navbar[handleLogout]"];
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handleLogout = t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "flex items-center gap-3 group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-600 to-pink-600 shadow-lg shadow-rose-600/25 transition-transform group-hover:scale-105",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "h-6 w-6 text-white",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        }, void 0, false, {
                            fileName: "[project]/accommodation-frontend/src/components/Navbar.tsx",
                            lineNumber: 57,
                            columnNumber: 344
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/accommodation-frontend/src/components/Navbar.tsx",
                        lineNumber: 57,
                        columnNumber: 254
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/accommodation-frontend/src/components/Navbar.tsx",
                    lineNumber: 57,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent",
                    children: "Roomie"
                }, void 0, false, {
                    fileName: "[project]/accommodation-frontend/src/components/Navbar.tsx",
                    lineNumber: 57,
                    columnNumber: 574
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/accommodation-frontend/src/components/Navbar.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const t4 = `text-sm font-semibold transition-colors ${pathname === "/listings" ? "text-rose-600" : "text-gray-700 hover:text-rose-600"}`;
    let t5;
    if ($[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/listings",
            className: t4,
            children: "Browse Listings"
        }, void 0, false, {
            fileName: "[project]/accommodation-frontend/src/components/Navbar.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== authenticated || $[9] !== pathname || $[10] !== user?.name) {
        t6 = authenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/dashboard",
                    className: `text-sm font-semibold transition-colors ${pathname?.startsWith("/dashboard") ? "text-rose-600" : "text-gray-700 hover:text-rose-600"}`,
                    children: "Dashboard"
                }, void 0, false, {
                    fileName: "[project]/accommodation-frontend/src/components/Navbar.tsx",
                    lineNumber: 73,
                    columnNumber: 28
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium text-gray-700",
                            children: user?.name
                        }, void 0, false, {
                            fileName: "[project]/accommodation-frontend/src/components/Navbar.tsx",
                            lineNumber: 73,
                            columnNumber: 257
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLogout,
                            className: "rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-200",
                            children: "Logout"
                        }, void 0, false, {
                            fileName: "[project]/accommodation-frontend/src/components/Navbar.tsx",
                            lineNumber: 73,
                            columnNumber: 328
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/accommodation-frontend/src/components/Navbar.tsx",
                    lineNumber: 73,
                    columnNumber: 216
                }, this)
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/login",
                    className: "text-sm font-semibold text-gray-700 transition-colors hover:text-rose-600",
                    children: "Login"
                }, void 0, false, {
                    fileName: "[project]/accommodation-frontend/src/components/Navbar.tsx",
                    lineNumber: 73,
                    columnNumber: 544
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/register",
                    className: "rounded-xl bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-600/25 transition-all hover:bg-rose-700 hover:shadow-xl hover:shadow-rose-600/30",
                    children: "Sign Up"
                }, void 0, false, {
                    fileName: "[project]/accommodation-frontend/src/components/Navbar.tsx",
                    lineNumber: 73,
                    columnNumber: 662
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/accommodation-frontend/src/components/Navbar.tsx",
            lineNumber: 73,
            columnNumber: 503
        }, this);
        $[8] = authenticated;
        $[9] = pathname;
        $[10] = user?.name;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t5 || $[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden items-center gap-8 md:flex",
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/accommodation-frontend/src/components/Navbar.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[12] = t5;
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    const t8 = authenticated ? "/dashboard" : "/login";
    let t9;
    if ($[15] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: t8,
                className: "text-sm font-semibold text-gray-700 hover:text-rose-600",
                children: "Menu"
            }, void 0, false, {
                fileName: "[project]/accommodation-frontend/src/components/Navbar.tsx",
                lineNumber: 93,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/accommodation-frontend/src/components/Navbar.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[15] = t8;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== t7 || $[18] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-16 items-center justify-between",
                    children: [
                        t3,
                        t7,
                        t9
                    ]
                }, void 0, true, {
                    fileName: "[project]/accommodation-frontend/src/components/Navbar.tsx",
                    lineNumber: 101,
                    columnNumber: 159
                }, this)
            }, void 0, false, {
                fileName: "[project]/accommodation-frontend/src/components/Navbar.tsx",
                lineNumber: 101,
                columnNumber: 103
            }, this)
        }, void 0, false, {
            fileName: "[project]/accommodation-frontend/src/components/Navbar.tsx",
            lineNumber: 101,
            columnNumber: 11
        }, this);
        $[17] = t7;
        $[18] = t9;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    return t10;
}
_s(Navbar, "Sn/x1MPkhpMU/kQQ5mb+aCNKqMk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/accommodation-frontend/src/components/SearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/accommodation-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/accommodation-frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/accommodation-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/accommodation-frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function SearchBar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "b3d3f0373be1cbd4145fcc36678bb81ff61f695aa6536f544d564303cd072bed") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b3d3f0373be1cbd4145fcc36678bb81ff61f695aa6536f544d564303cd072bed";
    }
    const { initialCity: t1, initialBudget: t2, initialRoomType, onSearch } = t0;
    const initialCity = t1 === undefined ? "" : t1;
    let t3;
    if ($[1] !== t2) {
        t3 = t2 === undefined ? {
            min: 0,
            max: 5000
        } : t2;
        $[1] = t2;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const initialBudget = t3;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialCity);
    let t4;
    if ($[3] !== initialBudget.min) {
        t4 = initialBudget.min.toString();
        $[3] = initialBudget.min;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const [minPrice, setMinPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    let t5;
    if ($[5] !== initialBudget.max) {
        t5 = initialBudget.max.toString();
        $[5] = initialBudget.max;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const [maxPrice, setMaxPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t5);
    const [roomType, setRoomType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialRoomType || "");
    let t6;
    if ($[7] !== city || $[8] !== maxPrice || $[9] !== minPrice || $[10] !== onSearch || $[11] !== roomType || $[12] !== router) {
        t6 = ({
            "SearchBar[handleSubmit]": (e)=>{
                e.preventDefault();
                const filters = {
                    city,
                    budget: {
                        min: parseInt(minPrice) || 0,
                        max: parseInt(maxPrice) || 5000
                    },
                    roomType
                };
                if (onSearch) {
                    onSearch(filters);
                } else {
                    const params = new URLSearchParams();
                    if (city) {
                        params.append("city", city);
                    }
                    if (minPrice) {
                        params.append("minPrice", minPrice);
                    }
                    if (maxPrice) {
                        params.append("maxPrice", maxPrice);
                    }
                    if (roomType) {
                        params.append("roomType", roomType);
                    }
                    router.push(`/listings?${params.toString()}`);
                }
            }
        })["SearchBar[handleSubmit]"];
        $[7] = city;
        $[8] = maxPrice;
        $[9] = minPrice;
        $[10] = onSearch;
        $[11] = roomType;
        $[12] = router;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    const handleSubmit = t6;
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "city",
            className: "mb-2 block text-sm font-semibold text-gray-700",
            children: "Location"
        }, void 0, false, {
            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-5 w-5 text-gray-400",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    }, void 0, false, {
                        fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
                        lineNumber: 123,
                        columnNumber: 189
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    }, void 0, false, {
                        fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
                        lineNumber: 123,
                        columnNumber: 345
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
                lineNumber: 123,
                columnNumber: 96
            }, this)
        }, void 0, false, {
            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
            lineNumber: 123,
            columnNumber: 10
        }, this);
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "SearchBar[<input>.onChange]": (e_0)=>setCity(e_0.target.value)
        })["SearchBar[<input>.onChange]"];
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== city) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-1",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        t8,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "city",
                            type: "text",
                            value: city,
                            onChange: t9,
                            placeholder: "Where to?",
                            className: "block w-full rounded-lg border-0 bg-gray-50 py-3 pl-10 pr-3 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:leading-6"
                        }, void 0, false, {
                            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
                            lineNumber: 139,
                            columnNumber: 76
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
                    lineNumber: 139,
                    columnNumber: 46
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[17] = city;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "roomType",
            className: "mb-2 block text-sm font-semibold text-gray-700",
            children: "Room Type"
        }, void 0, false, {
            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "SearchBar[<select>.onChange]": (e_1)=>setRoomType(e_1.target.value)
        })["SearchBar[<select>.onChange]"];
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    let t14;
    let t15;
    let t16;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Any type"
        }, void 0, false, {
            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "single",
            children: "Single Room"
        }, void 0, false, {
            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "shared",
            children: "Shared Room"
        }, void 0, false, {
            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "entire",
            children: "Entire Place"
        }, void 0, false, {
            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[21] = t13;
        $[22] = t14;
        $[23] = t15;
        $[24] = t16;
    } else {
        t13 = $[21];
        t14 = $[22];
        t15 = $[23];
        t16 = $[24];
    }
    let t17;
    if ($[25] !== roomType) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            id: "roomType",
            value: roomType,
            onChange: t12,
            className: "block w-full appearance-none rounded-lg border-0 bg-gray-50 py-3 pl-3 pr-10 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:leading-6",
            children: [
                t13,
                t14,
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[25] = roomType;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-5 w-5 text-gray-400",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M19 9l-7 7-7-7"
                }, void 0, false, {
                    fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
                    lineNumber: 190,
                    columnNumber: 191
                }, this)
            }, void 0, false, {
                fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
                lineNumber: 190,
                columnNumber: 98
            }, this)
        }, void 0, false, {
            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[27] = t18;
    } else {
        t18 = $[27];
    }
    let t19;
    if ($[28] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        t17,
                        t18
                    ]
                }, void 0, true, {
                    fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
                    lineNumber: 197,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[28] = t17;
        $[29] = t19;
    } else {
        t19 = $[29];
    }
    let t20;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "minPrice",
            className: "mb-2 block text-sm font-semibold text-gray-700",
            children: "Min Price"
        }, void 0, false, {
            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[30] = t20;
    } else {
        t20 = $[30];
    }
    let t21;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-gray-500",
                children: "$"
            }, void 0, false, {
                fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
                lineNumber: 212,
                columnNumber: 97
            }, this)
        }, void 0, false, {
            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[31] = t21;
    } else {
        t21 = $[31];
    }
    let t22;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = ({
            "SearchBar[<input>.onChange]": (e_2)=>setMinPrice(e_2.target.value)
        })["SearchBar[<input>.onChange]"];
        $[32] = t22;
    } else {
        t22 = $[32];
    }
    let t23;
    if ($[33] !== minPrice) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        t21,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "minPrice",
                            type: "number",
                            value: minPrice,
                            onChange: t22,
                            placeholder: "0",
                            min: "0",
                            className: "block w-full rounded-lg border-0 bg-gray-50 py-3 pl-7 pr-3 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:leading-6"
                        }, void 0, false, {
                            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
                            lineNumber: 228,
                            columnNumber: 52
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
                    lineNumber: 228,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[33] = minPrice;
        $[34] = t23;
    } else {
        t23 = $[34];
    }
    let t24;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "maxPrice",
            className: "mb-2 block text-sm font-semibold text-gray-700",
            children: "Max Price"
        }, void 0, false, {
            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[35] = t24;
    } else {
        t24 = $[35];
    }
    let t25;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-gray-500",
                children: "$"
            }, void 0, false, {
                fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
                lineNumber: 243,
                columnNumber: 97
            }, this)
        }, void 0, false, {
            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[36] = t25;
    } else {
        t25 = $[36];
    }
    let t26;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = ({
            "SearchBar[<input>.onChange]": (e_3)=>setMaxPrice(e_3.target.value)
        })["SearchBar[<input>.onChange]"];
        $[37] = t26;
    } else {
        t26 = $[37];
    }
    let t27;
    if ($[38] !== maxPrice) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        t25,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "maxPrice",
                            type: "number",
                            value: maxPrice,
                            onChange: t26,
                            placeholder: "5000",
                            min: "0",
                            className: "block w-full rounded-lg border-0 bg-gray-50 py-3 pl-7 pr-3 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:leading-6"
                        }, void 0, false, {
                            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
                            lineNumber: 259,
                            columnNumber: 52
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
                    lineNumber: 259,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[38] = maxPrice;
        $[39] = t27;
    } else {
        t27 = $[39];
    }
    let t28;
    if ($[40] !== t10 || $[41] !== t19 || $[42] !== t23 || $[43] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6",
            children: [
                t10,
                t19,
                t23,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[40] = t10;
        $[41] = t19;
        $[42] = t23;
        $[43] = t27;
        $[44] = t28;
    } else {
        t28 = $[44];
    }
    let t29;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 flex justify-end",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "inline-flex items-center gap-2 rounded-xl bg-rose-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-rose-600/25 transition-all hover:bg-rose-700 hover:shadow-xl hover:shadow-rose-600/30 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-offset-2",
                children: [
                    "Search",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "h-5 w-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        }, void 0, false, {
                            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
                            lineNumber: 278,
                            columnNumber: 443
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
                        lineNumber: 278,
                        columnNumber: 364
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
                lineNumber: 278,
                columnNumber: 50
            }, this)
        }, void 0, false, {
            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[45] = t29;
    } else {
        t29 = $[45];
    }
    let t30;
    if ($[46] !== t28) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl bg-white p-4 shadow-xl shadow-gray-900/5 ring-1 ring-gray-900/5 md:p-6",
            children: [
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[46] = t28;
        $[47] = t30;
    } else {
        t30 = $[47];
    }
    let t31;
    if ($[48] !== handleSubmit || $[49] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "w-full",
            children: t30
        }, void 0, false, {
            fileName: "[project]/accommodation-frontend/src/components/SearchBar.tsx",
            lineNumber: 293,
            columnNumber: 11
        }, this);
        $[48] = handleSubmit;
        $[49] = t30;
        $[50] = t31;
    } else {
        t31 = $[50];
    }
    return t31;
}
_s(SearchBar, "wDlW0o6NgPkICI7SIWR0xN3XhUM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$accommodation$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=accommodation-frontend_src_e289d566._.js.map