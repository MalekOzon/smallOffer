(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/(public)/preview/[category]/[id]/ImageGallery.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ImageGallery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ImageGallery({ images }) {
    _s();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "  flex flex-col gap-4 items-center shadow-md ml-4 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[70vh] w-[90%] max-sm:w-full ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: images[selected].image,
                    alt: `صورة الإعلان ${selected + 1}`,
                    className: "w-full aspect-square object-fill rounded-lg shadow h-full ",
                    width: 1000,
                    height: 100
                }, void 0, false, {
                    fileName: "[project]/app/(public)/preview/[category]/[id]/ImageGallery.tsx",
                    lineNumber: 16,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(public)/preview/[category]/[id]/ImageGallery.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-4 gap-2 w-[90%] mb-4 ",
                children: images.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelected(i),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: img.image,
                            className: ` h-20 object-cover rounded border ${selected === i ? "border-cgreen" : "border-gray-200"}`,
                            alt: `صورة ${i + 1}`,
                            width: 1000,
                            height: 1000
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/preview/[category]/[id]/ImageGallery.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    }, img.id, false, {
                        fileName: "[project]/app/(public)/preview/[category]/[id]/ImageGallery.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(public)/preview/[category]/[id]/ImageGallery.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(public)/preview/[category]/[id]/ImageGallery.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(ImageGallery, "gGT9ux4E8pnUkSZL1bYkDrfRDO0=");
_c = ImageGallery;
var _c;
__turbopack_context__.k.register(_c, "ImageGallery");
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
    "createRate": (()=>createRate),
    "createReport": (()=>createReport),
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
    "getPostDetail": (()=>getPostDetail),
    "getPublicPage": (()=>getPublicPage)
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
const getPublicPage = async (username, page, page_size)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`accounts/users/${username}/posts/cards/?page=${page}&page_size=${page_size}&ordering=-created_at`);
    return res.data;
};
const getPostDetail = async (category, id)=>{
    console.log("cata= ", category);
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`accounts/posts/${category}/${id}/`);
    console.log("resrrrr ", res.data);
    return res.data;
};
const createReport = async (formData, username)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`accounts/report-user/${username}/`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
};
const createRate = async (formData, username)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`accounts/rate-user/${username}/`, formData, {
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
    "useGetOutdoorSpacePostId": (()=>useGetOutdoorSpacePostId),
    "useGetPostDetail": (()=>useGetPostDetail),
    "useGetPublicPage": (()=>useGetPublicPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/postServices/postApi.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature();
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
function useGetPublicPage(username, page, page_size) {
    _s7();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "accounts/posts/",
            username,
            page
        ],
        queryFn: {
            "useGetPublicPage.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublicPage"])(username, page ?? 1, page_size ?? 10)
        }["useGetPublicPage.useQuery"],
        enabled: !!username,
        staleTime: 1000 * 60 * 5
    });
}
_s7(useGetPublicPage, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useGetPostDetail(category, id) {
    _s8();
    console.log("cat from qq ", category);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "accounts/posts/",
            category,
            id
        ],
        queryFn: {
            "useGetPostDetail.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPostDetail"])(category, id)
        }["useGetPostDetail.useQuery"],
        staleTime: 1000 * 60 * 5
    });
}
_s8(useGetPostDetail, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(public)/preview/[category]/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/preview/[category]/[id]/page.tsx
__turbopack_context__.s({
    "default": (()=>PostPreviewPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$public$292f$preview$2f5b$category$5d2f5b$id$5d2f$ImageGallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(public)/preview/[category]/[id]/ImageGallery.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postQueries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/postServices/postQueries.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function PostPreviewPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const category = typeof params.category === "string" ? params.category : "";
    const id = typeof params.id === "string" ? params.id : "";
    let isCar = false;
    let isApartment = false;
    let isHouse = false;
    let isMobile = false;
    let isElec = false;
    let isOutdoor = false;
    let cat = "generic";
    if (category === "cars") {
        isCar = true;
        cat = "cars";
    } else if (category === "mobiles") {
        isMobile = true;
        cat = "mobile"; // استخدام "mobile" ليتوافق مع الـ API
    } else if (category === "apartments") {
        isApartment = true;
        cat = "apartments";
    } else if (category === "houses") {
        isHouse = true;
        cat = "houses";
    } else if (category === "electronics") {
        isElec = true;
        cat = "electronics";
    } else if (category === "outdoor-space") {
        isOutdoor = true;
        cat = "outdoor-space";
    }
    console.log("id  ", id);
    console.log("cat  ", cat);
    const { data, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postQueries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPostDetail"])(cat, id);
    // التعامل مع حالات التحميل والأخطاء
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "جاري التحميل..."
    }, void 0, false, {
        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
        lineNumber: 46,
        columnNumber: 25
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            "خطأ: ",
            error.message
        ]
    }, void 0, true, {
        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
        lineNumber: 47,
        columnNumber: 21
    }, this);
    if (!data) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])();
    const allImages = [
        {
            id: 0,
            image: data.cover_image
        },
        ...data.gallery_images || []
    ];
    function translateColor(color) {
        const colorTranslations = {
            purple: "بنفسجي",
            red: "أحمر",
            blue: "أزرق",
            green: "أخضر",
            yellow: "أصفر",
            black: "أسود",
            white: "أبيض",
            gray: "رمادي",
            orange: "برتقالي",
            brown: "بني",
            pink: "وردي"
        };
        const key = color.toLowerCase();
        return COLOR_CHOICES[key] || color; // إرجاع الترجمة إذا وجدت، أو الاسم الأصلي إذا لم توجد
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: " gap-6 p-4  ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2  ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$public$292f$preview$2f5b$category$5d2f5b$id$5d2f$ImageGallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        images: allImages
                    }, void 0, false, {
                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 max-w-[90%] max-sm:max-w-full   mt-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-bold ",
                                        children: data.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "ayghj"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/publicstore/${data.username}`,
                                className: "text-2xl font-bold text-cgreen",
                                children: [
                                    "متجر ",
                                    data.user_first_name,
                                    " ",
                                    data.user_last_name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mt-5 text-lg",
                                children: data.description
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "text-clightgray "
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "my-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-cgreen font-bold text-3xl",
                                        children: [
                                            data.price,
                                            " ليرة سورية"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-cdarkgray  text-lg font-semibold mt-2",
                                        children: data.price_type === "fixed" ? "سعر ثابت" : "قابل للتفاوض"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "text-clightgray "
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 font-semibold my-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-cdarkgray  text-lg",
                                        children: data.city
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-cdarkgray  text-lg",
                                        children: data.hood
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "text-clightgray "
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-full bg-cgreen text-white py-3 rounded hover:bg-chgreen transition",
                                children: "تواصل مع البائع"
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            isMobile && data.mobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[95%] max-sm:w-full shadow-md p-2 mt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl  font-semibold text-cgreen border-b-2 border-cgreen pb-1 mb-2",
                        children: "تفاصيل المنتج"
                    }, void 0, false, {
                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "text-sm text-gray-700 space-y-1",
                        children: [
                            data.mobile.brand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "my-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: " العلامة التجارية: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, this),
                                    data.mobile.brand
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 122,
                                columnNumber: 15
                            }, this),
                            data.mobile.color && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "my-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "اللون: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this),
                                    translateColor(data.mobile.color)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 128,
                                columnNumber: 15
                            }, this),
                            data.mobile.accessories !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "my-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "الإكسسوارات: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, this),
                                    data.mobile.accessories ? "نعم" : "لا"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, this),
            isCar && data.car && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[95%] max-sm:w-full shadow-md p-2 mt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl  font-semibold text-cgreen border-b-2 border-cgreen pb-1 mb-2",
                        children: "تفاصيل المنتج"
                    }, void 0, false, {
                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "text-sm text-gray-700 space-y-1",
                        children: [
                            data.car.brand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "my-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: " العلامة التجارية: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this),
                                    data.car.brand
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this),
                            data.car.color && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "my-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "اللون: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this),
                                    translateColor(data.car.color)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this),
                            data.car.car_type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "my-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "النوع: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this),
                                    data.car.car_type
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this),
                            data.car.class_of_pollutants && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "my-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "فئة الملوثات: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 17
                                    }, this),
                                    data.car.class_of_pollutants
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 171,
                                columnNumber: 15
                            }, this),
                            data.car.environmental_sticker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "my-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "ملصق البيئة: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, this),
                                    data.car.environmental_sticker
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 178,
                                columnNumber: 15
                            }, this),
                            data.car.first_registration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "my-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "سنة التسجيل الأول: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 17
                                    }, this),
                                    data.car.first_registration
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 185,
                                columnNumber: 15
                            }, this),
                            data.car.fuel_type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "my-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "نوع الوقود: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 17
                                    }, this),
                                    data.car.fuel_type
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 192,
                                columnNumber: 15
                            }, this),
                            data.car.gearbox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "my-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "نوع الغيار: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 17
                                    }, this),
                                    data.car.gearbox
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 199,
                                columnNumber: 15
                            }, this),
                            data.car.hu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "my-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "تاريخ الفحص الفني : "
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 17
                                    }, this),
                                    data.car.hu
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 206,
                                columnNumber: 15
                            }, this),
                            data.car.mileage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "my-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "عدد الكيلومترات: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 214,
                                        columnNumber: 17
                                    }, this),
                                    data.car.mileage
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 213,
                                columnNumber: 15
                            }, this),
                            data.car.model && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "my-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "الموديل: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 221,
                                        columnNumber: 17
                                    }, this),
                                    data.car.model
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 220,
                                columnNumber: 15
                            }, this),
                            data.car.number_of_doors && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "my-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "عدد الأبواب: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 17
                                    }, this),
                                    data.car.number_of_doors
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 227,
                                columnNumber: 15
                            }, this),
                            data.car.performance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "my-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "الأداء: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 17
                                    }, this),
                                    data.car.performance
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 234,
                                columnNumber: 15
                            }, this),
                            data.car.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "my-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "الحالة: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 242,
                                        columnNumber: 17
                                    }, this),
                                    data.car.status
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 241,
                                columnNumber: 15
                            }, this),
                            data.car.external_features && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "my-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "المميزات الخارجة: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 249,
                                        columnNumber: 17
                                    }, this),
                                    data.car.external_features
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 248,
                                columnNumber: 15
                            }, this),
                            data.car.internal_features && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "my-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "المميزات الداخلية: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 256,
                                        columnNumber: 17
                                    }, this),
                                    data.car.internal_features
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 255,
                                columnNumber: 15
                            }, this),
                            data.car.internal_materials && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "my-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: " المواد الداخلية: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 263,
                                        columnNumber: 17
                                    }, this),
                                    data.car.internal_materials
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 262,
                                columnNumber: 15
                            }, this),
                            data.car.protection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "my-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "أنظمة الحماية: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                        lineNumber: 270,
                                        columnNumber: 17
                                    }, this),
                                    data.car.protection
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                                lineNumber: 269,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(public)/preview/[category]/[id]/page.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(PostPreviewPage, "TH9KjvEIelsvGGc9UaOrHhB/wfY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$postServices$2f$postQueries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPostDetail"]
    ];
});
_c = PostPreviewPage;
var _c;
__turbopack_context__.k.register(_c, "PostPreviewPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_43864f93._.js.map