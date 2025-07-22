(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/ui/Button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Button = ({ children, onClick, variant = 'primary', className = '', type })=>{
    const baseStyles = 'px-4 py-2 rounded font-medium focus:outline-none transition-colors';
    const variantStyles = {
        primary: 'bg-cgreen text-cwhite ',
        secondary: 'bg-clightgray text-cwhite ',
        outline: 'border border-cgreen text-cgreen hover:bg-green-50',
        none: ''
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        className: `${baseStyles} ${variantStyles[variant]} ${className}`,
        onClick: onClick,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Button.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
};
_c = Button;
const __TURBOPACK__default__export__ = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/lib/postServices/postApi.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createApartmentPost": (()=>createApartmentPost),
    "createCarPost": (()=>createCarPost),
    "createElectronicsPost": (()=>createElectronicsPost),
    "createHousePost": (()=>createHousePost),
    "createLandPost": (()=>createLandPost),
    "createMobilePost": (()=>createMobilePost),
    "createPost": (()=>createPost),
    "editApartmentForm": (()=>editApartmentForm),
    "editCarForm": (()=>editCarForm),
    "editElectronicsForm": (()=>editElectronicsForm),
    "editGenericForm": (()=>editGenericForm),
    "editHouseForm": (()=>editHouseForm),
    "editMobileForm": (()=>editMobileForm),
    "editOutdoor_spaceForm": (()=>editOutdoor_spaceForm),
    "getApartmentPostId": (()=>getApartmentPostId),
    "getCarPostId": (()=>getCarPostId),
    "getElectronicPostId": (()=>getElectronicPostId),
    "getGenericPostId": (()=>getGenericPostId),
    "getHousePostId": (()=>getHousePostId),
    "getMobilePostId": (()=>getMobilePostId),
    "getOutdoorSpacePostId": (()=>getOutdoorSpacePostId),
    "getPublicProfileInfo": (()=>getPublicProfileInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/loginservices/api.ts [app-client] (ecmascript)");
;
const createPost = async (formData)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("accounts/posts/generic/", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
};
const createCarPost = async (formData)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("accounts/posts/cars/", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
};
const createElectronicsPost = async (formData)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("accounts/posts/electronics/", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
};
const createHousePost = async (formData)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("accounts/posts/house/", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
};
const createLandPost = async (formData)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("accounts/posts/outdoor-space/", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
};
const createApartmentPost = async (formData)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("accounts/posts/apartment/", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
};
const createMobilePost = async (formData)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("accounts/posts/mobile/", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
};
const getGenericPostId = async (id)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`accounts/posts/generic/` + id);
    return res.data;
};
const getCarPostId = async (id)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`accounts/posts/cars/` + id);
    return res.data;
};
const getElectronicPostId = async (id)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`accounts/posts/electronics/` + id);
    return res.data;
};
const getHousePostId = async (id)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`accounts/posts/house/` + id);
    return res.data;
};
const getMobilePostId = async (id)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`accounts/posts/mobile/` + id);
    return res.data;
};
const getOutdoorSpacePostId = async (id)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`accounts/posts/outdoor-space/` + id);
    return res.data;
};
const getApartmentPostId = async (id)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`accounts/posts/apartment/` + id);
    return res.data;
};
const editGenericForm = async (formData, id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch("accounts/posts/generic/" + id + "/", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
};
const editApartmentForm = async (formData, id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch("accounts/posts/apartment/" + id + "/", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
};
const editCarForm = async (formData, id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("accounts/posts/cars/" + id + "/", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
};
const editElectronicsForm = async (formData, id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch("accounts/posts/electronics/" + id + "/", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
};
const editHouseForm = async (formData, id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch("accounts/posts/house/" + id + "/", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
};
const editMobileForm = async (formData, id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch("accounts/posts/mobile/" + id + "/", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
};
const editOutdoor_spaceForm = async (formData, id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch("accounts/posts/outdoor-space/" + id + "/", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
};
const getPublicProfileInfo = async (username, page, page_size)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`accounts/users/${username}/posts/cards/?page=${page}&page_size=${page_size}&ordering=-created_at`);
    return res.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/lib/postServices/postQueries.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useGetApartmentPostId": (()=>useGetApartmentPostId),
    "useGetCarPostId": (()=>useGetCarPostId),
    "useGetElectronicsPostId": (()=>useGetElectronicsPostId),
    "useGetGenericPostId": (()=>useGetGenericPostId),
    "useGetHousePostId": (()=>useGetHousePostId),
    "useGetMobilePostId": (()=>useGetMobilePostId),
    "useGetOutdoorSpacePostId": (()=>useGetOutdoorSpacePostId),
    "useGetPublicProfileInfo": (()=>useGetPublicProfileInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/postServices/postApi.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature();
;
;
function useGetGenericPostId(id) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "accounts/posts/generic",
            id
        ],
        queryFn: {
            "useGetGenericPostId.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGenericPostId"])(id)
        }["useGetGenericPostId.useQuery"],
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
        retry: 1
    });
}
_s(useGetGenericPostId, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useGetCarPostId(id) {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "accounts/posts/cars",
            id
        ],
        queryFn: {
            "useGetCarPostId.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCarPostId"])(id)
        }["useGetCarPostId.useQuery"],
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
        retry: 1
    });
}
_s1(useGetCarPostId, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useGetHousePostId(id) {
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "accounts/posts/house",
            id
        ],
        queryFn: {
            "useGetHousePostId.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHousePostId"])(id)
        }["useGetHousePostId.useQuery"],
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
        retry: 1
    });
}
_s2(useGetHousePostId, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useGetApartmentPostId(id) {
    _s3();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "accounts/posts/apartment",
            id
        ],
        queryFn: {
            "useGetApartmentPostId.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApartmentPostId"])(id)
        }["useGetApartmentPostId.useQuery"],
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
        retry: 1
    });
}
_s3(useGetApartmentPostId, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useGetMobilePostId(id) {
    _s4();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "accounts/posts/mobile",
            id
        ],
        queryFn: {
            "useGetMobilePostId.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMobilePostId"])(id)
        }["useGetMobilePostId.useQuery"],
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
        retry: 1
    });
}
_s4(useGetMobilePostId, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useGetElectronicsPostId(id) {
    _s5();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "accounts/posts/electronics",
            id
        ],
        queryFn: {
            "useGetElectronicsPostId.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getElectronicPostId"])(id)
        }["useGetElectronicsPostId.useQuery"],
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
        retry: 1
    });
}
_s5(useGetElectronicsPostId, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useGetOutdoorSpacePostId(id) {
    _s6();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "accounts/posts/outdoor-space",
            id
        ],
        queryFn: {
            "useGetOutdoorSpacePostId.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOutdoorSpacePostId"])(id)
        }["useGetOutdoorSpacePostId.useQuery"],
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
        retry: 1
    });
}
_s6(useGetOutdoorSpacePostId, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useGetPublicProfileInfo(username, page, page_size) {
    _s7();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "accounts/posts/",
            username,
            page
        ],
        queryFn: {
            "useGetPublicProfileInfo.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublicProfileInfo"])(username, page ?? 1, page_size ?? 10)
        }["useGetPublicProfileInfo.useQuery"],
        enabled: !!username,
        staleTime: 1000 * 60 * 5
    });
}
_s7(useGetPublicProfileInfo, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/signup/step2/syrianGovernorates.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "syrianGovernorates": (()=>syrianGovernorates)
});
const syrianGovernorates = [
    {
        name: "دمشق",
        value: "دمشق"
    },
    {
        name: "ريف دمشق",
        value: "ريف دمشق"
    },
    {
        name: "حلب",
        value: "حلب"
    },
    {
        name: "حمص",
        value: "حمص"
    },
    {
        name: "حماة",
        value: "حماة"
    },
    {
        name: "اللاذقية",
        value: "اللاذقية"
    },
    {
        name: "إدلب",
        value: "إدلب"
    },
    {
        name: "درعا",
        value: "درعا"
    },
    {
        name: "السويداء",
        value: "السويداء"
    },
    {
        name: "طرطوس",
        value: "طرطوس"
    },
    {
        name: "دير الزور",
        value: "دير الزور"
    },
    {
        name: "الحسكة",
        value: "الحسكة"
    },
    {
        name: "الرقة",
        value: "الرقة"
    },
    {
        name: "القنيطرة",
        value: "القنيطرة"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/lib/postServices/editPostMutation.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useEditApartmentForm": (()=>useEditApartmentForm),
    "useEditCarForm": (()=>useEditCarForm),
    "useEditElectronicForm": (()=>useEditElectronicForm),
    "useEditGenericForm": (()=>useEditGenericForm),
    "useEditHouseForm": (()=>useEditHouseForm),
    "useEditMobileForm": (()=>useEditMobileForm),
    "useEditOutdoor_spaceForm": (()=>useEditOutdoor_spaceForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/loginservices/mutations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/postServices/postApi.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
;
;
;
;
function useEditGenericForm(setNotification) {
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useEditGenericForm.useMutation": ({ formData, id })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editGenericForm"])(formData, id)
        }["useEditGenericForm.useMutation"],
        onMutate: {
            "useEditGenericForm.useMutation": ()=>{
                console.log("جاري تعديل إعلان  ...");
            }
        }["useEditGenericForm.useMutation"],
        onError: {
            "useEditGenericForm.useMutation": (error)=>{
                console.log("خطا في تعديل اعلان ", error);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    console.log("Response status:", error.response?.status);
                    console.log("Response data:", error.response?.data);
                    console.log("Response headers:", error.response?.headers);
                    const detail = error.response?.data?.detail;
                    const errors = error.response?.data?.errors;
                    let messages = errors ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMessages"])(errors) : [];
                    if (!messages.length) {
                        messages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMessages"])(error.response?.data || {});
                    }
                    console.log("messages: ", messages);
                    const fallbackMessage = detail || "حدث خطأ غير معروف.";
                    const finalMessage = messages.length ? messages.join("\n") : fallbackMessage;
                    setNotification({
                        message: finalMessage,
                        type: "error"
                    });
                } else {
                    setNotification({
                        message: "حدث خطأ أثناء الاتصال بالسيرفر.",
                        type: "error"
                    });
                }
            }
        }["useEditGenericForm.useMutation"],
        onSuccess: {
            "useEditGenericForm.useMutation": (data)=>{
                setNotification({
                    message: data.detail,
                    type: "success"
                });
            }
        }["useEditGenericForm.useMutation"],
        onSettled: {
            "useEditGenericForm.useMutation": (variables)=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "accounts/posts/generic/" + variables.id
                    ]
                });
            }
        }["useEditGenericForm.useMutation"]
    });
}
_s(useEditGenericForm, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useEditCarForm(setNotification) {
    _s1();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useEditCarForm.useMutation": ({ formData, id })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editCarForm"])(formData, id)
        }["useEditCarForm.useMutation"],
        onMutate: {
            "useEditCarForm.useMutation": ()=>{
                console.log("جاري تعديل إعلان  ...");
            }
        }["useEditCarForm.useMutation"],
        onError: {
            "useEditCarForm.useMutation": (error)=>{
                console.log("خطا في تعديل اعلان ", error);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    console.log("Response status:", error.response?.status);
                    console.log("Response data:", error.response?.data);
                    console.log("Response headers:", error.response?.headers);
                    const detail = error.response?.data?.detail;
                    const errors = error.response?.data?.errors;
                    let messages = errors ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMessages"])(errors) : [];
                    if (!messages.length) {
                        messages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMessages"])(error.response?.data || {});
                    }
                    console.log("messages: ", messages);
                    const fallbackMessage = detail || "حدث خطأ غير معروف.";
                    const finalMessage = messages.length ? messages.join("\n") : fallbackMessage;
                    setNotification({
                        message: finalMessage,
                        type: "error"
                    });
                } else {
                    setNotification({
                        message: "حدث خطأ أثناء الاتصال بالسيرفر.",
                        type: "error"
                    });
                }
            }
        }["useEditCarForm.useMutation"],
        onSuccess: {
            "useEditCarForm.useMutation": (data)=>{
                setNotification({
                    message: data.detail,
                    type: "success"
                });
            }
        }["useEditCarForm.useMutation"],
        onSettled: {
            "useEditCarForm.useMutation": (variables)=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "accounts/posts/cars/" + variables.id
                    ]
                });
            }
        }["useEditCarForm.useMutation"]
    });
}
_s1(useEditCarForm, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useEditHouseForm(setNotification) {
    _s2();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useEditHouseForm.useMutation": ({ formData, id })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editHouseForm"])(formData, id)
        }["useEditHouseForm.useMutation"],
        onMutate: {
            "useEditHouseForm.useMutation": ()=>{
                console.log("جاري تعديل إعلان  ...");
            }
        }["useEditHouseForm.useMutation"],
        onError: {
            "useEditHouseForm.useMutation": (error)=>{
                console.log("خطا في تعديل اعلان ", error);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    console.log("Response status:", error.response?.status);
                    console.log("Response data:", error.response?.data);
                    console.log("Response headers:", error.response?.headers);
                    const detail = error.response?.data?.detail;
                    const errors = error.response?.data?.errors;
                    let messages = errors ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMessages"])(errors) : [];
                    if (!messages.length) {
                        messages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMessages"])(error.response?.data || {});
                    }
                    console.log("messages: ", messages);
                    const fallbackMessage = detail || "حدث خطأ غير معروف.";
                    const finalMessage = messages.length ? messages.join("\n") : fallbackMessage;
                    setNotification({
                        message: finalMessage,
                        type: "error"
                    });
                } else {
                    setNotification({
                        message: "حدث خطأ أثناء الاتصال بالسيرفر.",
                        type: "error"
                    });
                }
            }
        }["useEditHouseForm.useMutation"],
        onSuccess: {
            "useEditHouseForm.useMutation": (data)=>{
                setNotification({
                    message: data.detail,
                    type: "success"
                });
            }
        }["useEditHouseForm.useMutation"],
        onSettled: {
            "useEditHouseForm.useMutation": (variables)=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "accounts/posts/house/" + variables.id
                    ]
                });
            }
        }["useEditHouseForm.useMutation"]
    });
}
_s2(useEditHouseForm, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useEditApartmentForm(setNotification) {
    _s3();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useEditApartmentForm.useMutation": ({ formData, id })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editApartmentForm"])(formData, id)
        }["useEditApartmentForm.useMutation"],
        onMutate: {
            "useEditApartmentForm.useMutation": ()=>{
                console.log("جاري تعديل إعلان  ...");
            }
        }["useEditApartmentForm.useMutation"],
        onError: {
            "useEditApartmentForm.useMutation": (error)=>{
                console.log("خطا في تعديل اعلان ", error);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    console.log("Response status:", error.response?.status);
                    console.log("Response data:", error.response?.data);
                    console.log("Response headers:", error.response?.headers);
                    const detail = error.response?.data?.detail;
                    const errors = error.response?.data?.errors;
                    let messages = errors ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMessages"])(errors) : [];
                    if (!messages.length) {
                        messages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMessages"])(error.response?.data || {});
                    }
                    console.log("messages: ", messages);
                    const fallbackMessage = detail || "حدث خطأ غير معروف.";
                    const finalMessage = messages.length ? messages.join("\n") : fallbackMessage;
                    setNotification({
                        message: finalMessage,
                        type: "error"
                    });
                } else {
                    setNotification({
                        message: "حدث خطأ أثناء الاتصال بالسيرفر.",
                        type: "error"
                    });
                }
            }
        }["useEditApartmentForm.useMutation"],
        onSuccess: {
            "useEditApartmentForm.useMutation": (data)=>{
                setNotification({
                    message: data.detail,
                    type: "success"
                });
            }
        }["useEditApartmentForm.useMutation"],
        onSettled: {
            "useEditApartmentForm.useMutation": (variables)=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "accounts/posts/apartment/" + variables.id
                    ]
                });
            }
        }["useEditApartmentForm.useMutation"]
    });
}
_s3(useEditApartmentForm, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useEditMobileForm(setNotification) {
    _s4();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useEditMobileForm.useMutation": ({ formData, id })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editMobileForm"])(formData, id)
        }["useEditMobileForm.useMutation"],
        onMutate: {
            "useEditMobileForm.useMutation": ()=>{
                console.log("جاري تعديل إعلان  ...");
            }
        }["useEditMobileForm.useMutation"],
        onError: {
            "useEditMobileForm.useMutation": (error)=>{
                console.log("خطا في تعديل اعلان ", error);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    console.log("Response status:", error.response?.status);
                    console.log("Response data:", error.response?.data);
                    console.log("Response headers:", error.response?.headers);
                    const detail = error.response?.data?.detail;
                    const errors = error.response?.data?.errors;
                    let messages = errors ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMessages"])(errors) : [];
                    if (!messages.length) {
                        messages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMessages"])(error.response?.data || {});
                    }
                    console.log("messages: ", messages);
                    const fallbackMessage = detail || "حدث خطأ غير معروف.";
                    const finalMessage = messages.length ? messages.join("\n") : fallbackMessage;
                    setNotification({
                        message: finalMessage,
                        type: "error"
                    });
                } else {
                    setNotification({
                        message: "حدث خطأ أثناء الاتصال بالسيرفر.",
                        type: "error"
                    });
                }
            }
        }["useEditMobileForm.useMutation"],
        onSuccess: {
            "useEditMobileForm.useMutation": (data)=>{
                setNotification({
                    message: data.detail,
                    type: "success"
                });
            }
        }["useEditMobileForm.useMutation"],
        onSettled: {
            "useEditMobileForm.useMutation": (variables)=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "accounts/posts/mobile/" + variables.id
                    ]
                });
            }
        }["useEditMobileForm.useMutation"]
    });
}
_s4(useEditMobileForm, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useEditOutdoor_spaceForm(setNotification) {
    _s5();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useEditOutdoor_spaceForm.useMutation": ({ formData, id })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editOutdoor_spaceForm"])(formData, id)
        }["useEditOutdoor_spaceForm.useMutation"],
        onMutate: {
            "useEditOutdoor_spaceForm.useMutation": ()=>{
                console.log("جاري تعديل إعلان  ...");
            }
        }["useEditOutdoor_spaceForm.useMutation"],
        onError: {
            "useEditOutdoor_spaceForm.useMutation": (error)=>{
                console.log("خطا في تعديل اعلان ", error);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    console.log("Response status:", error.response?.status);
                    console.log("Response data:", error.response?.data);
                    console.log("Response headers:", error.response?.headers);
                    const detail = error.response?.data?.detail;
                    const errors = error.response?.data?.errors;
                    let messages = errors ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMessages"])(errors) : [];
                    if (!messages.length) {
                        messages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMessages"])(error.response?.data || {});
                    }
                    console.log("messages: ", messages);
                    const fallbackMessage = detail || "حدث خطأ غير معروف.";
                    const finalMessage = messages.length ? messages.join("\n") : fallbackMessage;
                    setNotification({
                        message: finalMessage,
                        type: "error"
                    });
                } else {
                    setNotification({
                        message: "حدث خطأ أثناء الاتصال بالسيرفر.",
                        type: "error"
                    });
                }
            }
        }["useEditOutdoor_spaceForm.useMutation"],
        onSuccess: {
            "useEditOutdoor_spaceForm.useMutation": (data)=>{
                setNotification({
                    message: data.detail,
                    type: "success"
                });
            }
        }["useEditOutdoor_spaceForm.useMutation"],
        onSettled: {
            "useEditOutdoor_spaceForm.useMutation": (variables)=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "accounts/posts/outdoor-space/" + variables.id
                    ]
                });
            }
        }["useEditOutdoor_spaceForm.useMutation"]
    });
}
_s5(useEditOutdoor_spaceForm, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useEditElectronicForm(setNotification) {
    _s6();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useEditElectronicForm.useMutation": ({ formData, id })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editElectronicsForm"])(formData, id)
        }["useEditElectronicForm.useMutation"],
        onMutate: {
            "useEditElectronicForm.useMutation": ()=>{
                console.log("جاري تعديل إعلان  ...");
            }
        }["useEditElectronicForm.useMutation"],
        onError: {
            "useEditElectronicForm.useMutation": (error)=>{
                console.log("خطا في تعديل اعلان ", error);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    console.log("Response status:", error.response?.status);
                    console.log("Response data:", error.response?.data);
                    console.log("Response headers:", error.response?.headers);
                    const detail = error.response?.data?.detail;
                    const errors = error.response?.data?.errors;
                    let messages = errors ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMessages"])(errors) : [];
                    if (!messages.length) {
                        messages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMessages"])(error.response?.data || {});
                    }
                    console.log("messages: ", messages);
                    const fallbackMessage = detail || "حدث خطأ غير معروف.";
                    const finalMessage = messages.length ? messages.join("\n") : fallbackMessage;
                    setNotification({
                        message: finalMessage,
                        type: "error"
                    });
                } else {
                    setNotification({
                        message: "حدث خطأ أثناء الاتصال بالسيرفر.",
                        type: "error"
                    });
                }
            }
        }["useEditElectronicForm.useMutation"],
        onSuccess: {
            "useEditElectronicForm.useMutation": (data)=>{
                setNotification({
                    message: data.detail,
                    type: "success"
                });
            }
        }["useEditElectronicForm.useMutation"],
        onSettled: {
            "useEditElectronicForm.useMutation": (variables)=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "accounts/posts/electronics/" + variables.id
                    ]
                });
            }
        }["useEditElectronicForm.useMutation"]
    });
}
_s6(useEditElectronicForm, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/ui/SkeletonNotificationSettings.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/ui/SkeletonNotificationSettings.tsx
__turbopack_context__.s({
    "default": (()=>SkeletonNotificationSettings)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SkeletonNotificationSettings() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-5 rounded-xl space-y-4 animate-pulse max-w-md mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-6 w-1/2 bg-gray-300 rounded"
            }, void 0, false, {
                fileName: "[project]/app/components/ui/SkeletonNotificationSettings.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-4 w-2/3 bg-gray-300 rounded"
            }, void 0, false, {
                fileName: "[project]/app/components/ui/SkeletonNotificationSettings.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            [
                1,
                2,
                3
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-gray-200 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 w-40 bg-gray-300 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ui/SkeletonNotificationSettings.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-3 w-32 bg-gray-300 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ui/SkeletonNotificationSettings.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ui/SkeletonNotificationSettings.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-11 h-7 bg-gray-300 rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/app/components/ui/SkeletonNotificationSettings.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/app/components/ui/SkeletonNotificationSettings.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-4 w-full bg-gray-300 rounded mt-4"
            }, void 0, false, {
                fileName: "[project]/app/components/ui/SkeletonNotificationSettings.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-10 w-full bg-gray-400 rounded"
            }, void 0, false, {
                fileName: "[project]/app/components/ui/SkeletonNotificationSettings.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ui/SkeletonNotificationSettings.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
_c = SkeletonNotificationSettings;
var _c;
__turbopack_context__.k.register(_c, "SkeletonNotificationSettings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(public)/editpost/editGeneric/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Notification.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postQueries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/postServices/postQueries.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$signup$2f$step2$2f$syrianGovernorates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/signup/step2/syrianGovernorates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$sections$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/sections/categories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$editPostMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/postServices/editPostMutation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$SkeletonNotificationSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/SkeletonNotificationSettings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const EditGeneric = ()=>{
    _s();
    const { setValue, register, formState: {} } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            gallery: []
        }
    });
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const id = params.id;
    const getPostDetail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postQueries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetGenericPostId"])(id);
    const { data, isLoading } = getPostDetail;
    console.log("hooooooooon ", data?.gallery);
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const editGenericForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$editPostMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditGenericForm"])(setNotification);
    const isPending = editGenericForm.isPending;
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const inputRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [galleryFiles, setGalleryFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // لما تضغط على صندوق رفع الصورة يفتح اختيار الملفات
    const handleClick = ()=>{
        inputRef.current?.click();
    };
    // لما تختار صورة جديدة يتم تحديث preview و formData.cover_image
    const handleImageChange = (e)=>{
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            setFormData((prev)=>({
                    ...prev,
                    cover_image: file
                }));
            setPreview(URL.createObjectURL(file));
        }
    };
    // تحديث صورة في المعرض
    const handleGalleryChange = (e, index)=>{
        const file = e.target.files?.[0];
        if (file) {
            setGalleryFiles((prev)=>{
                const newGallery = [
                    ...prev
                ];
                newGallery[index] = file;
                return newGallery;
            });
            setValue("gallery", [
                ...galleryFiles,
                file
            ], {
                shouldValidate: true,
                shouldDirty: true
            });
        }
    };
    // Handler to remove image at index
    const handleRemoveImage = (index)=>{
        setGalleryFiles((prev)=>prev.filter((_, i)=>i !== index));
        setValue("gallery", galleryFiles.filter((_, i)=>i !== index), {
            shouldValidate: true,
            shouldDirty: true
        });
    };
    // Handler to add new empty slot (up to max 5)
    const handleAddNewGallerySlot = ()=>{
        if (galleryFiles.length < 5) {
            setGalleryFiles((prev)=>[
                    ...prev,
                    ""
                ]);
            setValue("gallery", [
                ...galleryFiles,
                ""
            ], {
                shouldValidate: true,
                shouldDirty: true
            });
        }
    };
    // فتح نافذة اختيار الملفات لصورة معينة
    const triggerFileInput = (index)=>{
        inputRefs.current[index]?.click();
    };
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        category: "",
        subcategory: "",
        title: "",
        description: "",
        price: "",
        price_type: "fixed",
        city: "",
        hood: "",
        detailed_location: "",
        cover_image: null,
        gallery: []
    });
    // تحديث الحقول بمجرد استلام البيانات
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditGeneric.useEffect": ()=>{
            if (data) {
                setFormData({
                    category: data.category || "",
                    subcategory: data.subcategory || "",
                    title: data.title || "",
                    description: data.description || "",
                    price: data.price || "",
                    price_type: data.price_type || "fixed",
                    city: data.city || "",
                    hood: data.hood || "",
                    detailed_location: data.detailed_location || "",
                    cover_image: data.cover_image || "",
                    gallery: data.gallery || [],
                    offer_type: data.offer_type || "sell"
                });
                setGalleryFiles(data.gallery || []);
                setIsSearch(data.offer_type === "search");
            }
        }
    }["EditGeneric.useEffect"], [
        data
    ]);
    const handleInputChange = (e)=>{
        const { name, value, type } = e.target;
        const files = e.target.files;
        if (type === "file") {
            if (name === "gallery") {
                setFormData((prev)=>({
                        ...prev,
                        [name]: files ? Array.from(files) : []
                    }));
            } else if (name === "cover_image") {
                setFormData((prev)=>({
                        ...prev,
                        [name]: files && files.length > 0 ? files[0] : null
                    }));
            }
        } else {
            setFormData((prev)=>({
                    ...prev,
                    [name]: value
                }));
        }
    };
    const [isSearch, setIsSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // تحديث offer_type عند الضغط على الأزرار
    const handleOfferType = (type)=>{
        setIsSearch(type === "search");
        setFormData((prev)=>({
                ...prev,
                offer_type: type
            }));
    };
    // دالة الإرسال الصحيحة
    const onSubmit = (e)=>{
        e.preventDefault();
        const data = formData;
        const form = new FormData();
        form.append("offer_type", data.offer_type ?? "sell");
        form.append("title", data.title ?? "");
        form.append("description", data.description ?? "");
        form.append("price", data.price ?? "");
        form.append("price_type", data.price_type ?? "fixed");
        form.append("city", data.city ?? "");
        form.append("hood", data.hood ?? "");
        form.append("detailed_location", data.detailed_location ?? "");
        if (data.cover_image) {
            if (data.cover_image instanceof File) {
                form.append("cover_image", data.cover_image);
            }
        }
        if (data.gallery && data.gallery.length > 0) {
            data.gallery.forEach((img)=>{
                if (img instanceof File) {
                    form.append("gallery", img);
                } else if (typeof img === "string") {
                    form.append("gallery", img);
                }
            });
        }
        if (!id) {
            setNotification({
                message: "معرف الإعلان غير صالح.",
                type: "error"
            });
            return;
        }
        editGenericForm.mutate({
            formData: form,
            id
        });
    };
    function getArabicName(input) {
        for (const category of __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$sections$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"]){
            if (category.slug === input) {
                return category.name;
            }
            for (const item of category.items){
                if (item.slug === input) {
                    return item.label;
                }
            }
        }
        return null;
    }
    // تحديث preview لو جت بيانات موجودة كسلسلة نصية (رابط صورة من السيرفر مثلا)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditGeneric.useEffect": ()=>{
            if (formData.cover_image && typeof formData.cover_image === "string") {
                setPreview(formData.cover_image);
            }
        }
    }["EditGeneric.useEffect"], [
        formData.cover_image
    ]);
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$SkeletonNotificationSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
        lineNumber: 243,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen py-4 bg-gray-100  flex flex-col items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: onSubmit,
            className: "w-[90%]",
            children: [
                notification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    message: notification.message,
                    type: notification.type,
                    onClose: ()=>setNotification(null)
                }, void 0, false, {
                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                    lineNumber: 250,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold mb-2 flex justify-start max-sm:text-2xl",
                            children: "تعديل الإعلان"
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 flex justify-start max-sm:block",
                            children: [
                                "بنشرك تعديلاتك فإنك توافق على",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "text-cgreen underline hover:text-chgreen mx-1",
                                    children: "سياسة النشر"
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this),
                                " ",
                                "الخاصة بـ small-offer"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                    lineNumber: 258,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-bold text-xl mb-2 text-gray-800",
                            children: "تصنيف المنتج"
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                            className: "mb-6 text-clightgray"
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                            lineNumber: 277,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:ml-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block font-medium text-gray-700",
                                            children: [
                                                "التصنيف",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500 text-xl mr-1",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            readOnly: true,
                                            name: "category",
                                            value: getArabicName(formData.category ?? "") || "",
                                            type: "text",
                                            className: "w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:ml-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block font-medium text-gray-700",
                                            children: [
                                                "التصنيف الفرعي",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500 text-xl mr-1",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            readOnly: true,
                                            name: "subcategory",
                                            value: getArabicName(formData.subcategory ?? "") || "",
                                            type: "text",
                                            className: "w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                    lineNumber: 275,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-bold text-xl text-gray-800 mb-2 text-right",
                            children: "معلومات أساسية"
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                            lineNumber: 313,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-6 text-right",
                            children: "أدخل معلومات الإعلان الأساسية لتظهر بوضوح للمشترين، مثل العنوان والوصف العام والموقع."
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: " mb-6 sm:ml-16 border-b border-clightgray",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-medium mb-3 mt-6 text-lg text-gray-700",
                                    children: [
                                        "نوع المنشور",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500 text-xl mr-1",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                            lineNumber: 324,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                    lineNumber: 322,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full mt-2 max-w-sm  border-2 border-clightgray p-1.5 rounded-xl mb-6 flex",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            type: "button",
                                            className: "w-1/2 text-6 font-semibold",
                                            variant: isSearch === false ? "primary" : "none",
                                            onClick: ()=>handleOfferType("sell"),
                                            children: "أنا أعرض"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                            lineNumber: 327,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            type: "button",
                                            className: "w-1/2 text-6 font-semibold",
                                            variant: isSearch === true ? "primary" : "none",
                                            onClick: ()=>handleOfferType("search"),
                                            children: "أنا أبحث"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                            lineNumber: 320,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:ml-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block font-medium text-gray-700",
                                            children: [
                                                "اسم المنتج ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500 text-xl mr-1",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 28
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                            lineNumber: 348,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            name: "title",
                                            value: formData.title || "",
                                            onChange: handleInputChange,
                                            type: "text",
                                            placeholder: "اسم المنتج",
                                            className: "w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                            lineNumber: 351,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                    lineNumber: 347,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:ml-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block font-medium text-gray-700 mb-2",
                                            children: "صورة غلاف المنتج"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                            lineNumber: 363,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: "image/*",
                                            ref: inputRef,
                                            onChange: handleImageChange,
                                            className: "hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                            lineNumber: 368,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: handleClick,
                                            className: "w-64 h-40 border-2 border-dashed border-cgreen rounded-lg flex items-center justify-center cursor-pointer bg-cwhite overflow-hidden",
                                            children: preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: preview,
                                                alt: "preview",
                                                width: 256,
                                                height: 160,
                                                className: "object-cover w-full h-full"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                                lineNumber: 382,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-cgreen text-4xl",
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                                lineNumber: 390,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                            lineNumber: 377,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                    lineNumber: 362,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "hidden",
                                    ...register("gallery")
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                    lineNumber: 394,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:ml-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block font-medium text-gray-700 mb-2",
                                            children: "صور المنتج"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                            lineNumber: 396,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-4",
                                            children: [
                                                galleryFiles.map((img, index)=>{
                                                    const previewUrl = img instanceof File ? URL.createObjectURL(img) : img;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-24 h-24 border-2 border-cgreen rounded-lg overflow-hidden cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                accept: "image/*",
                                                                className: "hidden",
                                                                onChange: (e)=>handleGalleryChange(e, index),
                                                                ref: (el)=>{
                                                                    inputRefs.current[index] = el;
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                                                lineNumber: 409,
                                                                columnNumber: 23
                                                            }, this),
                                                            previewUrl && previewUrl !== "" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: previewUrl,
                                                                alt: `Gallery image ${index + 1}`,
                                                                fill: true,
                                                                style: {
                                                                    objectFit: "cover"
                                                                },
                                                                onClick: ()=>triggerFileInput(index),
                                                                onLoad: ()=>img instanceof File && URL.revokeObjectURL(previewUrl)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                                                lineNumber: 419,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                onClick: ()=>triggerFileInput(index),
                                                                className: "flex justify-center items-center w-full h-full text-cgreen text-4xl",
                                                                children: "+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                                                lineNumber: 431,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>handleRemoveImage(index),
                                                                className: "absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center",
                                                                children: "×"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                                                lineNumber: 438,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                                        lineNumber: 405,
                                                        columnNumber: 21
                                                    }, this);
                                                }),
                                                galleryFiles.length < 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: handleAddNewGallerySlot,
                                                    className: "w-24 h-24 border-2 border-dashed border-cgreen rounded-lg flex items-center justify-center cursor-pointer text-cgreen text-4xl",
                                                    children: "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                            lineNumber: 399,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                    lineNumber: 395,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                            lineNumber: 346,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:ml-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block font-medium text-gray-700",
                                            children: [
                                                "المحافظة",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500 text-xl mr-1",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                            lineNumber: 466,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            required: true,
                                            name: "city",
                                            value: formData.city || "",
                                            onChange: handleInputChange,
                                            className: "mt-1  w-full p-3 border-2 rounded-lg bg-cwhite text-gray-700 focus:outline-none focus:ring-1 focus:ring-cgreen focus:border-transparent transition duration-200",
                                            style: {
                                                borderColor: "#277F60"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "اختر الإدخال"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                                    lineNumber: 480,
                                                    columnNumber: 17
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$signup$2f$step2$2f$syrianGovernorates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syrianGovernorates"].map((gov)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: gov.value,
                                                        children: gov.name
                                                    }, gov.value, false, {
                                                        fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                                        lineNumber: 482,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                            lineNumber: 470,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                    lineNumber: 465,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:ml-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block font-medium text-gray-700",
                                            children: [
                                                "المنطقة ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500 text-xl mr-1",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                            lineNumber: 490,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            name: "hood",
                                            value: formData.hood || "",
                                            onChange: handleInputChange,
                                            className: "w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm",
                                            placeholder: "المنطقة"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                            lineNumber: 493,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                    lineNumber: 489,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                            lineNumber: 464,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 sm:ml-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block font-medium text-gray-700",
                                        children: "تفاصيل العنوان"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                        lineNumber: 505,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "detailed_location",
                                        value: formData.detailed_location || "",
                                        onChange: handleInputChange,
                                        className: "w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm",
                                        placeholder: "تفاصيل العنوان"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                        lineNumber: 508,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                lineNumber: 504,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                            lineNumber: 503,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6 sm:ml-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block font-medium text-gray-700",
                                        children: [
                                            "وصف المنتج ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500 text-xl mr-1",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                                lineNumber: 520,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                        lineNumber: 519,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        required: true,
                                        name: "description",
                                        value: formData.description || "",
                                        onChange: handleInputChange,
                                        className: "w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm",
                                        placeholder: "ادخل وصف المنتج هنا"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                        lineNumber: 522,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                lineNumber: 518,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                            lineNumber: 517,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                    lineNumber: 312,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "bg-white rounded-2xl shadow-lg border border-gray-200 p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-bold text-xl text-gray-800 mb-2 text-right",
                            children: "سعر المنتج"
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                            lineNumber: 536,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-6 text-right",
                            children: "حدد سعر الإعلان أو اختر إذا كان قابل للتفاوض، وسيساعد المستخدمين على معرفة القيمة بسهولة."
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                            lineNumber: 539,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm:ml-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block font-medium text-gray-700",
                                        children: [
                                            "سعر المنتج (السعر بالليرة السورية)",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500 text-xl mr-1",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                                lineNumber: 547,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                        lineNumber: 545,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        type: "number",
                                        name: "price",
                                        value: formData.price || "",
                                        onChange: handleInputChange,
                                        className: "w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm",
                                        placeholder: "ادخل سعر المنتج"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                        lineNumber: 549,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                lineNumber: 544,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                            lineNumber: 543,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-medium text-gray-700",
                                    children: [
                                        "نوع السعر ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500 text-xl mr-1",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                            lineNumber: 562,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                    lineNumber: 561,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-4 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "ml-2 flex items-center gap-2 text-gray-700 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    type: "radio",
                                                    name: "price_type",
                                                    value: "negotiable",
                                                    checked: formData.price_type === "negotiable",
                                                    onChange: handleInputChange,
                                                    className: "accent-cgreen"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                                    lineNumber: 566,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "سعر قابل للتفاوض"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                                    lineNumber: 575,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                            lineNumber: 565,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 text-gray-700 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "price_type",
                                                    value: "fixed",
                                                    checked: formData.price_type === "fixed",
                                                    onChange: handleInputChange,
                                                    className: "accent-cgreen"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                                    lineNumber: 578,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "سعر ثابت"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                                    lineNumber: 586,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                            lineNumber: 577,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                    lineNumber: 564,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                            lineNumber: 560,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                            className: "mt-6 mb-3 text-clightgray"
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                            lineNumber: 590,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-4 mb-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>window.location.href = "/preview",
                                    className: "mt-8 ml-6 max-sm:ml-0 text-white rounded",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center group outline-2 outline-cgreen text-gray-800 hover:bg-chgreen hover:outline-chgreen hover:text-cwhite py-3 px-12 max-sm:px-[55px] rounded text-xl transition-all duration-300",
                                        children: "معاينة"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                        lineNumber: 598,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                    lineNumber: 593,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "mt-8 ml-6 max-sm:ml-0 text-white rounded",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-cgreen hover:bg-chgreen py-3 px-32 max-md:px-20 rounded text-xl transition-all duration-300",
                                        children: isPending ? "جارٍ النشر ..." : "إعادة نشر"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                        lineNumber: 607,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                                    lineNumber: 603,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                            lineNumber: 591,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
                    lineNumber: 535,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
            lineNumber: 247,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(public)/editpost/editGeneric/[id]/page.tsx",
        lineNumber: 246,
        columnNumber: 5
    }, this);
};
_s(EditGeneric, "aZOhUGEbxZeiYuS/bqcJXhVb2cs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postQueries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetGenericPostId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$editPostMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditGenericForm"]
    ];
});
_c = EditGeneric;
const __TURBOPACK__default__export__ = EditGeneric;
var _c;
__turbopack_context__.k.register(_c, "EditGeneric");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_74eeea69._.js.map