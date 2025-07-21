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
    "getOutdoorSpacePostId": (()=>getOutdoorSpacePostId)
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
    "useGetOutdoorSpacePostId": (()=>useGetOutdoorSpacePostId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/postServices/postApi.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
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
"[project]/app/lib/postServices/postMutations.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useCreateApartmentPost": (()=>useCreateApartmentPost),
    "useCreateCarPost": (()=>useCreateCarPost),
    "useCreateElectronicsPost": (()=>useCreateElectronicsPost),
    "useCreateHousePost": (()=>useCreateHousePost),
    "useCreateLandPost": (()=>useCreateLandPost),
    "useCreateMobilePost": (()=>useCreateMobilePost),
    "useCreatePost": (()=>useCreatePost)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/postServices/postApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/loginservices/mutations.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
;
;
;
;
function useCreatePost(setNotification) {
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreatePost.useMutation": (formData)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPost"])(formData)
        }["useCreatePost.useMutation"],
        onMutate: {
            "useCreatePost.useMutation": ()=>{
                console.log("جاري إنشاء إعلان جديد...");
            }
        }["useCreatePost.useMutation"],
        onError: {
            "useCreatePost.useMutation": (error)=>{
                console.log("خطا في انشاء اعلان جديد", error);
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
        }["useCreatePost.useMutation"],
        onSuccess: {
            "useCreatePost.useMutation": (data)=>{
                console.log("Done Global Form");
                setNotification({
                    message: data.detail,
                    type: "success"
                });
            }
        }["useCreatePost.useMutation"],
        onSettled: {
            "useCreatePost.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "accounts/posts/generic/"
                    ]
                });
            }
        }["useCreatePost.useMutation"]
    });
}
_s(useCreatePost, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useCreateCarPost(setNotification) {
    _s1();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateCarPost.useMutation": (formData)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCarPost"])(formData)
        }["useCreateCarPost.useMutation"],
        onMutate: {
            "useCreateCarPost.useMutation": ()=>{
                console.log("جاري إنشاء إعلان سيارة جديد...");
            }
        }["useCreateCarPost.useMutation"],
        onError: {
            "useCreateCarPost.useMutation": (error)=>{
                console.log("خطا في انشاء اعلان سيارة", error);
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
        }["useCreateCarPost.useMutation"],
        onSuccess: {
            "useCreateCarPost.useMutation": (data)=>{
                console.log("Done CAR Form");
                setNotification({
                    message: data.detail,
                    type: "success"
                });
            }
        }["useCreateCarPost.useMutation"],
        onSettled: {
            "useCreateCarPost.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "accounts/posts/cars/"
                    ]
                });
            }
        }["useCreateCarPost.useMutation"]
    });
}
_s1(useCreateCarPost, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useCreateElectronicsPost(setNotification) {
    _s2();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateElectronicsPost.useMutation": (formData)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElectronicsPost"])(formData)
        }["useCreateElectronicsPost.useMutation"],
        onMutate: {
            "useCreateElectronicsPost.useMutation": ()=>{
                console.log("جاري إنشاء إعلان سيارة جديد...");
            }
        }["useCreateElectronicsPost.useMutation"],
        onError: {
            "useCreateElectronicsPost.useMutation": (error)=>{
                console.log("جاري إنشاء إعلان إلكترونيات جديد...");
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
        }["useCreateElectronicsPost.useMutation"],
        onSuccess: {
            "useCreateElectronicsPost.useMutation": (data)=>{
                console.log("Done الكترونياتForm");
                setNotification({
                    message: data.detail,
                    type: "success"
                });
            }
        }["useCreateElectronicsPost.useMutation"],
        onSettled: {
            "useCreateElectronicsPost.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "accounts/posts/electronics/"
                    ]
                });
            }
        }["useCreateElectronicsPost.useMutation"]
    });
}
_s2(useCreateElectronicsPost, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useCreateHousePost(setNotification) {
    _s3();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateHousePost.useMutation": (formData)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHousePost"])(formData)
        }["useCreateHousePost.useMutation"],
        onMutate: {
            "useCreateHousePost.useMutation": ()=>{
                console.log("جاري إنشاء إعلان منزل جديد...");
            }
        }["useCreateHousePost.useMutation"],
        onError: {
            "useCreateHousePost.useMutation": (error)=>{
                console.log("خطا في انشاء اعلان منزل", error);
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
        }["useCreateHousePost.useMutation"],
        onSuccess: {
            "useCreateHousePost.useMutation": (data)=>{
                setNotification({
                    message: data.detail,
                    type: "success"
                });
            }
        }["useCreateHousePost.useMutation"],
        onSettled: {
            "useCreateHousePost.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "accounts/posts/houses/"
                    ]
                });
            }
        }["useCreateHousePost.useMutation"]
    });
}
_s3(useCreateHousePost, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useCreateLandPost(setNotification) {
    _s4();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateLandPost.useMutation": (formData)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLandPost"])(formData)
        }["useCreateLandPost.useMutation"],
        onMutate: {
            "useCreateLandPost.useMutation": ()=>{
                console.log("جاري إنشاء إعلان أرض جديد...");
            }
        }["useCreateLandPost.useMutation"],
        onError: {
            "useCreateLandPost.useMutation": (error)=>{
                console.log("خطا في انشاء اعلان أرض", error);
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
        }["useCreateLandPost.useMutation"],
        onSuccess: {
            "useCreateLandPost.useMutation": (data)=>{
                setNotification({
                    message: data.detail,
                    type: "success"
                });
            }
        }["useCreateLandPost.useMutation"],
        onSettled: {
            "useCreateLandPost.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "accounts/posts/outdoor-space/"
                    ]
                });
            }
        }["useCreateLandPost.useMutation"]
    });
}
_s4(useCreateLandPost, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useCreateApartmentPost(setNotification) {
    _s5();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateApartmentPost.useMutation": (formData)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createApartmentPost"])(formData)
        }["useCreateApartmentPost.useMutation"],
        onMutate: {
            "useCreateApartmentPost.useMutation": ()=>{
                console.log("جاري إنشاء إعلان شقة جديد...");
            }
        }["useCreateApartmentPost.useMutation"],
        onError: {
            "useCreateApartmentPost.useMutation": (error)=>{
                console.log("خطا في انشاء اعلان شقة", error);
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
        }["useCreateApartmentPost.useMutation"],
        onSuccess: {
            "useCreateApartmentPost.useMutation": (data)=>{
                setNotification({
                    message: data.detail,
                    type: "success"
                });
            }
        }["useCreateApartmentPost.useMutation"],
        onSettled: {
            "useCreateApartmentPost.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "accounts/posts/apartment/"
                    ]
                });
            }
        }["useCreateApartmentPost.useMutation"]
    });
}
_s5(useCreateApartmentPost, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useCreateMobilePost(setNotification) {
    _s6();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateMobilePost.useMutation": (formData)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMobilePost"])(formData)
        }["useCreateMobilePost.useMutation"],
        onMutate: {
            "useCreateMobilePost.useMutation": ()=>{
                console.log("جاري إنشاء إعلان موبايل جديد...");
            }
        }["useCreateMobilePost.useMutation"],
        onError: {
            "useCreateMobilePost.useMutation": (error)=>{
                console.log("خطا في انشاء اعلان موبايل", error);
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
        }["useCreateMobilePost.useMutation"],
        onSuccess: {
            "useCreateMobilePost.useMutation": (data)=>{
                setNotification({
                    message: data.detail,
                    type: "success"
                });
            }
        }["useCreateMobilePost.useMutation"],
        onSettled: {
            "useCreateMobilePost.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "accounts/posts/mobile/"
                    ]
                });
            }
        }["useCreateMobilePost.useMutation"]
    });
}
_s6(useCreateMobilePost, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(public)/newpost/components/MobileForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "COLOR_CHOICES": (()=>COLOR_CHOICES),
    "STATUS_CHOICES": (()=>STATUS_CHOICES),
    "default": (()=>MobileForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/postServices/postMutations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$signup$2f$step2$2f$syrianGovernorates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/signup/step2/syrianGovernorates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Notification.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const STATUS_CHOICES = [
    [
        "new",
        "جديد"
    ],
    [
        "used_very_good",
        "مستعمل جيد جداً"
    ],
    [
        "working_good",
        "يعمل بشكل جيد"
    ],
    [
        "defective",
        "عيب (يحتاج صيانة)"
    ]
];
const COLOR_CHOICES = [
    [
        "silver",
        "فضي"
    ],
    [
        "white",
        "أبيض"
    ],
    [
        "blue",
        "أزرق"
    ],
    [
        "gray",
        "رمادي"
    ],
    [
        "yellow",
        "أصفر"
    ],
    [
        "brown",
        "بني"
    ],
    [
        "black",
        "أسود"
    ],
    [
        "gold",
        "ذهبي"
    ],
    [
        "pink",
        "زهري"
    ],
    [
        "orange",
        "برتقالي"
    ],
    [
        "red",
        "أحمر"
    ],
    [
        "green",
        "أخضر"
    ],
    [
        "purple",
        "بنفسجي"
    ],
    [
        "beige",
        "بيج"
    ],
    [
        "other",
        "ألوان أخرى"
    ]
];
function MobileForm({ Gcategory, Gsubcategory }) {
    _s();
    const { register, handleSubmit, formState: { errors }, setValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({});
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const createMobilePost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateMobilePost"])(setNotification);
    const { isPending: isLoading } = createMobilePost;
    const [accessoriesValue, setAccessoriesValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSearch, setIsSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const onSubmit = (data)=>{
        console.log("daTA: ", data);
        const formData = new FormData();
        formData.append("offer_type", data.offer_type ?? "sell");
        formData.append("title", data.title ?? "");
        formData.append("description", data.description ?? "");
        formData.append("price", data.price ?? "");
        formData.append("price_type", data.price_type ?? "fixed");
        formData.append("city", data.city ?? "");
        formData.append("hood", data.hood ?? "");
        formData.append("detailed_location", data.detailed_location ?? "");
        if (data.cover_image && "object" !== "undefined") {
            if (typeof data.cover_image === "object" && "length" in data.cover_image && typeof data.cover_image.item === "function") {
                // Likely a FileList
                formData.append("cover_image", data.cover_image[0]);
            } else if (isBlob(data.cover_image)) {
                // File inherits from Blob
                formData.append("cover_image", data.cover_image);
            }
        }
        formData.append("category", Gcategory);
        formData.append("subcategory", Gsubcategory);
        const mobileDetails = {
            status: data.mobile.status,
            brand: data.mobile.brand,
            color: data.mobile.color,
            accessories: data.mobile.accessories
        };
        formData.append("mobile_details", JSON.stringify(mobileDetails));
        if (data.gallery && data.gallery.length > 0) {
            if (typeof globalThis.FileList !== "undefined" && data.gallery instanceof globalThis.FileList) {
                Array.from(data.gallery).forEach((img)=>{
                    formData.append("gallery", img);
                });
            } else if (Array.isArray(data.gallery)) {
                data.gallery.forEach((img)=>{
                    formData.append("gallery", img);
                });
            }
        }
        createMobilePost.mutate(formData);
    };
    function isBlob(obj) {
        return "object" !== "undefined" && typeof obj === "object" && obj !== null && typeof window.Blob !== "undefined" && obj instanceof window.Blob;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit(onSubmit),
        className: "w-full mx-auto space-y-10",
        children: [
            notification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                message: notification.message,
                type: notification.type,
                onClose: ()=>setNotification(null)
            }, void 0, false, {
                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-6 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-bold text-xl text-gray-800 mb-2 text-right",
                        children: "معلومات أساسية"
                    }, void 0, false, {
                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                        lineNumber: 147,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-6 text-right",
                        children: "أدخل معلومات الإعلان الأساسية لتظهر بوضوح للمشترين، مثل العنوان والوصف العام والموقع."
                    }, void 0, false, {
                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                        lineNumber: 150,
                        columnNumber: 7
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
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 158,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                lineNumber: 156,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full mt-2 max-w-sm  border-2 border-clightgray p-1.5 rounded-xl mb-6 flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        type: "button",
                                        className: "w-1/2 text-6 font-semibold",
                                        variant: isSearch === false ? "primary" : "none",
                                        onClick: ()=>{
                                            setIsSearch(false);
                                            setValue("offer_type", "sell");
                                        },
                                        children: "أنا أعرض"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 161,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        type: "button",
                                        className: "w-1/2 text-6 font-semibold",
                                        variant: isSearch === true ? "primary" : "none",
                                        onClick: ()=>{
                                            setIsSearch(true);
                                            setValue("offer_type", "search");
                                        },
                                        children: "أنا أبحث"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 172,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                lineNumber: 160,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                        lineNumber: 154,
                        columnNumber: 7
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
                                            "اسم المنتج",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500 text-xl mr-1",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                                lineNumber: 190,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 188,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        ...register("title"),
                                        type: "text",
                                        placeholder: "اسم المنتج",
                                        className: "w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 192,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                lineNumber: 187,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm:ml-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block font-medium text-gray-700",
                                        children: "صور المنتج"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 202,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        multiple: true,
                                        ...register("gallery"),
                                        className: "w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 205,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                lineNumber: 201,
                                columnNumber: 9
                            }, this),
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
                                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                                lineNumber: 216,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 214,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        required: true,
                                        ...register("city"),
                                        className: "mt-1  w-full p-3 border-2 rounded-lg bg-cwhite text-gray-700 focus:outline-none focus:ring-1 focus:ring-cgreen focus:border-transparent transition duration-200",
                                        style: {
                                            borderColor: "#277F60"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "اختر الإدخال"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                                lineNumber: 226,
                                                columnNumber: 13
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$signup$2f$step2$2f$syrianGovernorates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syrianGovernorates"].map((gov)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: gov.value,
                                                    children: gov.name
                                                }, gov.value, false, {
                                                    fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 15
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 218,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                lineNumber: 213,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm:ml-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block font-medium text-gray-700",
                                        children: [
                                            "المنطقة",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500 text-xl mr-1",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                                lineNumber: 238,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 236,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        ...register("hood"),
                                        className: "w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm",
                                        placeholder: "المنطقة"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 240,
                                        columnNumber: 11
                                    }, this),
                                    errors.hood && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-600 text-sm mt-1",
                                        children: String(errors.hood.message)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                lineNumber: 235,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                        lineNumber: 186,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 sm:ml-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block font-medium text-gray-700",
                                        children: "تفاصيل العنوان"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 255,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ...register("detailed_location"),
                                        className: "w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm",
                                        placeholder: "تفاصيل العنوان"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 258,
                                        columnNumber: 11
                                    }, this),
                                    errors.detailed_location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-600 text-sm mt-1",
                                        children: String(errors.detailed_location.message)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                lineNumber: 254,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block font-medium text-gray-700",
                                        children: [
                                            "وصف المنتج",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500 text-xl mr-1",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                                lineNumber: 272,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 270,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        required: true,
                                        ...register("description"),
                                        className: "w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm",
                                        placeholder: "ادخل وصف المنتج هنا"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 274,
                                        columnNumber: 11
                                    }, this),
                                    errors.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-600 text-sm mt-1",
                                        children: String(errors.description.message)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                lineNumber: 269,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                        lineNumber: 253,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                lineNumber: 146,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white rounded-2xl shadow-lg border border-gray-200 p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-bold text-xl text-gray-800 mb-2 text-right",
                        children: "سعر المنتج"
                    }, void 0, false, {
                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-6 text-right",
                        children: "حدد سعر الإعلان أو اختر إذا كان قابل للتفاوض، وسيساعد المستخدمين على معرفة القيمة بسهولة."
                    }, void 0, false, {
                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                        lineNumber: 294,
                        columnNumber: 9
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
                                            fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                            lineNumber: 302,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    required: true,
                                    ...register("price"),
                                    className: "w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm",
                                    placeholder: "ادخل سعر المنتج"
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block font-medium text-gray-700",
                                children: [
                                    "نوع السعر",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500 text-xl mr-1",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                lineNumber: 315,
                                columnNumber: 11
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
                                                value: "negotiable",
                                                ...register("price_type"),
                                                className: "accent-cgreen"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                                lineNumber: 321,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "سعر قابل للتفاوض"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                                lineNumber: 328,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 320,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2 text-gray-700 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "radio",
                                                value: "fixed",
                                                ...register("price_type"),
                                                className: "accent-cgreen"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                                lineNumber: 331,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "سعر ثابت"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                                lineNumber: 337,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-bold text-lg mb-2",
                        children: "تفاصيل الموبايل"
                    }, void 0, false, {
                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                        lineNumber: 345,
                        columnNumber: 9
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
                                            "أدخل ماركة الموبايل",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500 text-xl mr-1",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                                lineNumber: 351,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 349,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        ...register("mobile.brand"),
                                        className: "w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm",
                                        dir: "rtl"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 353,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm:ml-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block font-medium text-gray-700",
                                        children: "اللون"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 362,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        ...register("mobile.color"),
                                        className: "mt-1  w-full p-3 py-3.5 border-2 rounded-lg bg-cwhite text-gray-700 focus:outline-none focus:ring-1 focus:ring-cgreen focus:border-transparent transition duration-200",
                                        style: {
                                            borderColor: "#277F60"
                                        },
                                        dir: "rtl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "اختر اللون"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                                lineNumber: 371,
                                                columnNumber: 15
                                            }, this),
                                            COLOR_CHOICES.map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: value,
                                                    children: label
                                                }, value, false, {
                                                    fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 363,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                lineNumber: 361,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm:ml-16 bg-cwhite rounded-md p-2 shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block font-medium text-gray-700",
                                        children: [
                                            "اختر الحالة",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500 text-xl mr-1",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                                lineNumber: 385,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 383,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-4 mt-2",
                                        children: STATUS_CHOICES.map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center gap-1 ml-2 text-gray-700 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        type: "radio",
                                                        value: value,
                                                        ...register("mobile.status"),
                                                        className: "accent-cgreen"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, value, true, {
                                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                                lineNumber: 390,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 388,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                lineNumber: 382,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-medium mb-3 mt-6 ",
                                children: "الملحقات المتوفرة"
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                lineNumber: 408,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full mt-2 max-w-sm border-2 border-clightgray p-1.5 rounded-xl mb-6 flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        type: "button",
                                        className: "w-1/2 text-6 font-semibold",
                                        variant: accessoriesValue === true ? "primary" : "none",
                                        onClick: ()=>{
                                            setAccessoriesValue(true);
                                            setValue("mobile.accessories", true);
                                        },
                                        children: "يوجد ملحقات"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 410,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        type: "button",
                                        className: "w-1/2 text-6 font-semibold",
                                        variant: accessoriesValue === false ? "primary" : "none",
                                        onClick: ()=>{
                                            setAccessoriesValue(false);
                                            setValue("mobile.accessories", false);
                                        },
                                        children: "لا يوجد ملحقات"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                        lineNumber: 421,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                lineNumber: 409,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                        lineNumber: 381,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        className: "mt-6 mb-3 text-clightgray"
                    }, void 0, false, {
                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                        lineNumber: 435,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-4 mb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>window.location.href = "/perview",
                                type: "submit",
                                className: "mt-8 ml-6 max-sm:ml-0 text-white rounded",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center group outline-2 outline-cgreen text-gray-800 hover:bg-chgreen hover:outline-chgreen hover:text-cwhite py-3 px-12 max-sm:px-[55px] rounded text-xl transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "ml-1 text-cgreen group-hover:text-cwhite"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                            lineNumber: 444,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        "معاينة"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                    lineNumber: 443,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                lineNumber: 438,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "mt-8 ml-6 max-sm:ml-0 text-white rounded",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-cgreen hover:bg-chgreen py-3 px-32 max-sm:px-20 rounded text-xl transition-all duration-300",
                                    children: isLoading ? "جار النشر ..." : "نشر"
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                    lineNumber: 454,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                                lineNumber: 450,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                        lineNumber: 436,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
                lineNumber: 344,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(public)/newpost/components/MobileForm.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_s(MobileForm, "topBxKWUpBxNWlAviO/amH9OpIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateMobilePost"]
    ];
});
_c = MobileForm;
var _c;
__turbopack_context__.k.register(_c, "MobileForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(public)/editpost/editMobile/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postQueries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/postServices/postQueries.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$editPostMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/postServices/editPostMutation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Notification.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$signup$2f$step2$2f$syrianGovernorates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/signup/step2/syrianGovernorates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$sections$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/sections/categories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$SkeletonNotificationSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/SkeletonNotificationSettings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$public$292f$newpost$2f$components$2f$MobileForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(public)/newpost/components/MobileForm.tsx [app-client] (ecmascript)");
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
const EditMobile = ()=>{
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const id = params.id;
    const { data, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postQueries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetMobilePostId"])(id);
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const editMobileForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$editPostMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditMobileForm"])(setNotification);
    const isPending = editMobileForm.isPending;
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
        cover_image: "",
        gallery: [],
        offer_type: "sell",
        mobile: {
            brand: "",
            status: "new",
            color: "",
            accessories: false
        }
    });
    const [isSearch, setIsSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [accessoriesValue, setAccessoriesValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditMobile.useEffect": ()=>{
            if (data) {
                setFormData({
                    ...data,
                    mobile: {
                        ...data.mobile
                    }
                });
                setIsSearch(data.offer_type === "search");
                setAccessoriesValue(data.mobile?.accessories ?? false);
            }
        }
    }["EditMobile.useEffect"], [
        data
    ]);
    const handleInputChange = (e)=>{
        const { name, value, type } = e.target;
        const files = e.target.files;
        if (type === "file") {
            setFormData((prev)=>({
                    ...prev,
                    [name]: files ? Array.from(files) : []
                }));
        } else {
            setFormData((prev)=>({
                    ...prev,
                    [name]: value
                }));
        }
    };
    const handleMobileInputChange = (e)=>{
        const { name, value, type } = e.target;
        const key = name.replace("mobile.", "");
        setFormData((prev)=>{
            const baseMobile = prev.mobile ?? {
                brand: "",
                status: "new",
                color: "",
                accessories: false
            };
            const newMobile = {
                ...baseMobile
            };
            if (type === "checkbox") {
                newMobile[key] = e.target.checked;
            } else {
                newMobile[key] = value;
            }
            return {
                ...prev,
                mobile: newMobile
            };
        });
    };
    function isBlob(obj) {
        return "object" !== "undefined" && typeof obj === "object" && obj !== null && typeof window.Blob !== "undefined" && obj instanceof window.Blob;
    }
    // تحديث offer_type عند الضغط على الأزرار
    const handleOfferType = (type)=>{
        setIsSearch(type === "search");
        setFormData((prev)=>({
                ...prev,
                offer_type: type
            }));
    };
    // تحديث accessories عند الضغط على الأزرار
    const handleAccessories = (val)=>{
        setAccessoriesValue(val);
        setFormData((prev)=>({
                ...prev,
                mobile: {
                    ...prev.mobile,
                    accessories: val
                }
            }));
    };
    const onSubmit = (e)=>{
        e.preventDefault();
        if (!id) {
            setNotification({
                message: "معرف الإعلان غير صالح.",
                type: "error"
            });
            return;
        }
        const data = formData;
        const form = new FormData();
        form.append("offer_type", data.offer_type ?? "sell");
        form.append("title", data.title ?? "");
        form.append("description", data.description ?? "");
        form.append("price", data.price ?? "");
        form.append("price_type", data.price_type ?? "fixed");
        form.append("city", data.city ?? "");
        form.append("hood", data.hood ?? "");
        form.append("category", data.category ?? "");
        form.append("subcategory", data.subcategory ?? "");
        form.append("detailed_location", data.detailed_location ?? "");
        if (data.cover_image && "object" !== "undefined") {
            if (typeof data.cover_image === "object" && "length" in data.cover_image && typeof data.cover_image.item === "function") {
                form.append("cover_image", data.cover_image[0]);
            } else if (isBlob(data.cover_image)) {
                form.append("cover_image", data.cover_image);
            } else if (typeof data.cover_image === "string") {
                form.append("cover_image", data.cover_image);
            }
        }
        if (data.gallery && data.gallery.length > 0) {
            if (typeof globalThis.FileList !== "undefined" && data.gallery instanceof globalThis.FileList) {
                Array.from(data.gallery).forEach((img)=>{
                    form.append("gallery", img);
                });
            } else if (Array.isArray(data.gallery)) {
                data.gallery.forEach((img)=>{
                    if (img instanceof File) {
                        form.append("gallery", img);
                    } else if (typeof img === "string") {
                        form.append("gallery", img);
                    }
                });
            }
        }
        // Mobile details
        const mobileDetails = {
            brand: data.mobile?.brand,
            status: data.mobile?.status,
            color: data.mobile?.color,
            accessories: data.mobile?.accessories
        };
        form.append("mobile_details", JSON.stringify(mobileDetails));
        editMobileForm.mutate({
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
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$SkeletonNotificationSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
        lineNumber: 209,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen py-4 bg-gray-100 flex flex-col items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: onSubmit,
            className: "w-[90%]",
            children: [
                notification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    message: notification.message,
                    type: notification.type,
                    onClose: ()=>setNotification(null)
                }, void 0, false, {
                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                    lineNumber: 215,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold mb-2 flex justify-start max-sm:text-2xl",
                            children: "تعديل إعلان الموبايل"
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 flex justify-start max-sm:block",
                            children: [
                                "بنشرك تعديلاتك فإنك توافق على ",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "text-cgreen underline hover:text-chgreen mx-1",
                                    children: "سياسة النشر"
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this),
                                " ",
                                "الخاصة بـ small-offer"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-bold text-xl mb-2 text-gray-800",
                            children: "تصنيف المنتج"
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                            className: "mb-6 text-clightgray"
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                            lineNumber: 237,
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
                                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 240,
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
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                    lineNumber: 239,
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
                                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 254,
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
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-bold text-xl text-gray-800 mb-2 text-right",
                            children: "معلومات أساسية"
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                            lineNumber: 271,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-6 text-right",
                            children: "أدخل معلومات الإعلان الأساسية لتظهر بوضوح للمشترين، مثل العنوان والوصف العام والموقع."
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                            lineNumber: 272,
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
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 279,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                    lineNumber: 277,
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
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            type: "button",
                                            className: "w-1/2 text-6 font-semibold",
                                            variant: isSearch === true ? "primary" : "none",
                                            onClick: ()=>handleOfferType("search"),
                                            children: "أنا أبحث"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 290,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                    lineNumber: 281,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                            lineNumber: 275,
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
                                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 28
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 302,
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
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:ml-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block font-medium text-gray-700",
                                            children: "صور المنتج"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 316,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            multiple: true,
                                            name: "gallery",
                                            onChange: handleInputChange,
                                            className: "w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 317,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                    lineNumber: 315,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                            lineNumber: 300,
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
                                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 328,
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
                                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 17
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$signup$2f$step2$2f$syrianGovernorates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syrianGovernorates"].map((gov)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: gov.value,
                                                        children: gov.name
                                                    }, gov.value, false, {
                                                        fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                    lineNumber: 327,
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
                                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 349,
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
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 352,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                    lineNumber: 348,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                            lineNumber: 326,
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
                                        fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "detailed_location",
                                        value: formData.detailed_location || "",
                                        onChange: handleInputChange,
                                        className: "w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm",
                                        placeholder: "تفاصيل العنوان"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                lineNumber: 363,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                            lineNumber: 362,
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
                                                fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                                lineNumber: 377,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                        lineNumber: 376,
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
                                        fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                        lineNumber: 379,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                lineNumber: 375,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                            lineNumber: 374,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                    lineNumber: 270,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "bg-white rounded-2xl shadow-lg border border-gray-200 p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-bold text-xl text-gray-800 mb-2 text-right",
                            children: "سعر المنتج"
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                            lineNumber: 392,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-6 text-right",
                            children: "حدد سعر الإعلان أو اختر إذا كان قابل للتفاوض، وسيساعد المستخدمين على معرفة القيمة بسهولة."
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                            lineNumber: 393,
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
                                                fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                                lineNumber: 400,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                        lineNumber: 398,
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
                                        fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                        lineNumber: 402,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                lineNumber: 397,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                            lineNumber: 396,
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
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 415,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                    lineNumber: 414,
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
                                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "سعر قابل للتفاوض"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                                    lineNumber: 428,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 418,
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
                                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "سعر ثابت"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 430,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                    lineNumber: 417,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                            lineNumber: 413,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                    lineNumber: 391,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-bold text-lg mb-2",
                            children: "تفاصيل الموبايل"
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                            lineNumber: 446,
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
                                                "أدخل ماركة الموبايل ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500 text-xl mr-1",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 449,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            name: "mobile.brand",
                                            value: formData.mobile?.brand || "",
                                            onChange: handleMobileInputChange,
                                            className: "w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm",
                                            dir: "rtl"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 452,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                    lineNumber: 448,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:ml-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block font-medium text-gray-700",
                                            children: "اللون"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 462,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            name: "mobile.color",
                                            value: formData.mobile?.color || "",
                                            onChange: handleMobileInputChange,
                                            className: "mt-1  w-full p-3 py-3.5 border-2 rounded-lg bg-cwhite text-gray-700 focus:outline-none focus:ring-1 focus:ring-cgreen focus:border-transparent transition duration-200",
                                            style: {
                                                borderColor: "#277F60"
                                            },
                                            dir: "rtl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "اختر اللون"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                                    lineNumber: 471,
                                                    columnNumber: 17
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$public$292f$newpost$2f$components$2f$MobileForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_CHOICES"].map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: value,
                                                        children: label
                                                    }, value, false, {
                                                        fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                                        lineNumber: 473,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 463,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                    lineNumber: 461,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                            lineNumber: 447,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:ml-16 bg-cwhite rounded-md p-2 shadow-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block font-medium text-gray-700",
                                            children: [
                                                "اختر الحالة ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500 text-xl mr-1",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                                    lineNumber: 483,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 482,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-4 mt-2",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$public$292f$newpost$2f$components$2f$MobileForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_CHOICES"].map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-1 ml-2 text-gray-700 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            required: true,
                                                            type: "radio",
                                                            value: value,
                                                            name: "mobile.status",
                                                            checked: formData.mobile?.status === value,
                                                            onChange: handleMobileInputChange,
                                                            className: "accent-cgreen"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                                            lineNumber: 497,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, value, true, {
                                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 485,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                    lineNumber: 481,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-medium mb-3 mt-6 ",
                                    children: "الملحقات المتوفرة"
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                    lineNumber: 503,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full mt-2 max-w-sm border-2 border-clightgray p-1.5 rounded-xl mb-6 flex",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            type: "button",
                                            className: "w-1/2 text-6 font-semibold",
                                            variant: accessoriesValue === true ? "primary" : "none",
                                            onClick: ()=>handleAccessories(true),
                                            children: "يوجد ملحقات"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 505,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            type: "button",
                                            className: "w-1/2 text-6 font-semibold",
                                            variant: accessoriesValue === false ? "primary" : "none",
                                            onClick: ()=>handleAccessories(false),
                                            children: "لا يوجد ملحقات"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                            lineNumber: 513,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                    lineNumber: 504,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                            lineNumber: 480,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                            className: "mt-6 mb-3 text-clightgray"
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                            lineNumber: 523,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-4 mb-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "mt-8 ml-6 max-sm:ml-0 text-white rounded",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-cgreen hover:bg-chgreen py-3 px-32 max-md:px-20 rounded text-xl transition-all duration-300",
                                    children: isPending ? "جارٍ التعديل ..." : "تعديل"
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                    lineNumber: 529,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                                lineNumber: 525,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                            lineNumber: 524,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
                    lineNumber: 445,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
            lineNumber: 213,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(public)/editpost/editMobile/[id]/page.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
};
_s(EditMobile, "n01TBJsLFF528ANy7EJ6TtkF1ew=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postQueries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetMobilePostId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$editPostMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditMobileForm"]
    ];
});
_c = EditMobile;
const __TURBOPACK__default__export__ = EditMobile;
var _c;
__turbopack_context__.k.register(_c, "EditMobile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_bd4a0971._.js.map