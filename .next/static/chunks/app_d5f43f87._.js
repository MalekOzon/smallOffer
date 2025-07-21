(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
const getPublicProfileInfo = async (username)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`accounts/users/${username}/posts/cards/`);
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
function useGetPublicProfileInfo(username) {
    _s7();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "accounts/posts/outdoor-space",
            username
        ],
        queryFn: {
            "useGetPublicProfileInfo.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublicProfileInfo"])(username)
        }["useGetPublicProfileInfo.useQuery"],
        enabled: !!username,
        staleTime: 1000 * 60 * 5,
        retry: 1
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
"[project]/app/(public)/publicstore/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$userAvatar$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$userAvatar$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/userAvatar.svg.mjs { IMAGE => "[project]/public/resourses/userAvatar.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postQueries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/postServices/postQueries.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Star = ({ filled })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: filled ? "#FFD600" : "#E0E0E0",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
            display: "inline"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
        }, void 0, false, {
            fileName: "[project]/app/(public)/publicstore/page.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(public)/publicstore/page.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this);
_c = Star;
const PublicStore = ()=>{
    _s();
    // get The information from API
    const getUserInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postQueries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPublicProfileInfo"])();
    const { data } = getUserInfo;
    const user = data?.results.user;
    // حساب عدد النجوم
    const rating = user?.average_rating || 0;
    const ratingCount = user?.rating_count || 0;
    const stars = Array.from({
        length: 5
    }, (_, i)=>i < Math.round(rating));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-row-reverse justify-between items-start px-8 py-6 gap-8 rtl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center min-w-[260px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 mb-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$userAvatar$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$userAvatar$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                alt: "profile image",
                                width: 80,
                                height: 80
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/publicstore/page.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/publicstore/page.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xl font-bold mb-1 text-right w-full",
                            children: user ? `${user.first_name} ${user.last_name}` : "---"
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/publicstore/page.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 mb-1",
                            children: stars.map((filled, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Star, {
                                    filled: filled
                                }, idx, false, {
                                    fileName: "[project]/app/(public)/publicstore/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/publicstore/page.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-gray-600 mt-1 text-right w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "(تقييم ",
                                        ratingCount,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/publicstore/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold mx-1",
                                    children: rating.toFixed(1)
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/publicstore/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(public)/publicstore/page.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(public)/publicstore/page.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(public)/publicstore/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                fileName: "[project]/app/(public)/publicstore/page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(public)/publicstore/page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
_s(PublicStore, "R9hXN9GN4NS8viYzI/RraCR/XFU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postQueries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPublicProfileInfo"]
    ];
});
_c1 = PublicStore;
const __TURBOPACK__default__export__ = PublicStore;
var _c, _c1;
__turbopack_context__.k.register(_c, "Star");
__turbopack_context__.k.register(_c1, "PublicStore");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_d5f43f87._.js.map