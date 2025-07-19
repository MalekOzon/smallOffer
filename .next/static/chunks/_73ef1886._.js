(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/ui/ProgressSteps.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const ProgressSteps = ({ currentStep, totalSteps })=>{
    const steps = Array.from({
        length: totalSteps
    }, (_, i)=>i + 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center w-full mt-2  ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between w-full",
            children: steps.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-6 h-6 rounded-full flex items-center justify-center ${step <= currentStep ? "border-cgreen  border-4" : "bg-gray-300"}`,
                            children: step <= currentStep && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white text-xs"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ui/ProgressSteps.tsx",
                                lineNumber: 25,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/ui/ProgressSteps.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this),
                        step < totalSteps && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex-1 h-1  mx-2 ${step < currentStep ? "bg-cgreen  " : "bg-clightgray"}`
                        }, void 0, false, {
                            fileName: "[project]/app/components/ui/ProgressSteps.tsx",
                            lineNumber: 29,
                            columnNumber: 15
                        }, this)
                    ]
                }, step, true, {
                    fileName: "[project]/app/components/ui/ProgressSteps.tsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/app/components/ui/ProgressSteps.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ui/ProgressSteps.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_c = ProgressSteps;
const __TURBOPACK__default__export__ = ProgressSteps;
var _c;
__turbopack_context__.k.register(_c, "ProgressSteps");
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
"[project]/app/lib/loginservices/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "axiosInstance": (()=>axiosInstance),
    "createUserFirst": (()=>createUserFirst),
    "createUserSecond": (()=>createUserSecond),
    "default": (()=>__TURBOPACK__default__export__),
    "forgetPassword": (()=>forgetPassword),
    "loginUser": (()=>loginUser),
    "logoutUser": (()=>logoutUser),
    "resendCode": (()=>resendCode),
    "resendUrl": (()=>resendUrl),
    "resetPassword": (()=>resetPassword),
    "validateUserFirst": (()=>validateUserFirst)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const BASE_URL = "https://smalloffertest.onrender.com/api/";
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});
axiosInstance.interceptors.request.use((config)=>{
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
axiosInstance.interceptors.response.use((response)=>response, async (error)=>{
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry && localStorage.getItem("refreshToken")) {
        originalRequest._retry = true;
        try {
            const refreshToken = localStorage.getItem("refreshToken");
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}accounts/token/refresh/`, {
                refresh: refreshToken
            });
            const { access, refresh } = res.data; // استخراج كلا الحقلين
            localStorage.setItem("accessToken", access); // تحديث الـ access token
            localStorage.setItem("refreshToken", refresh); // تحديث الـ refresh token
            originalRequest.headers.Authorization = `Bearer ${access}`;
            return axiosInstance(originalRequest);
        } catch (refreshError) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            window.location.href = "/login";
            return Promise.reject(refreshError);
        }
    }
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = axiosInstance;
const createUserFirst = async (data)=>{
    const response = await axiosInstance.post("accounts/register/", data);
    return response.data;
};
const validateUserFirst = async (data)=>{
    const response = await axiosInstance.post("accounts/verify-email/", data);
    return response.data;
};
const createUserSecond = async (data)=>{
    const response = await axiosInstance.post("accounts/second-register/", data);
    return response.data;
};
const loginUser = async (data)=>{
    const response = await axiosInstance.post("accounts/login/", data);
    return response.data;
};
const logoutUser = async (data)=>{
    const response = await axiosInstance.post("accounts/logout/", data);
    return response.data;
};
const forgetPassword = async (data)=>{
    const response = await axiosInstance.post("accounts/password/request-reset/", data);
    return response.data;
};
const resetPassword = async (data)=>{
    const response = await axiosInstance.post("accounts/password/set-new/", data);
    return response.data;
};
const resendCode = async (data)=>{
    const response = await axiosInstance.post("accounts/resend-email/", data);
    return response.data;
};
const resendUrl = async (data)=>{
    const response = await axiosInstance.post("accounts/password/resend-url/", data);
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/lib/Errors.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "fieldNameMap": (()=>fieldNameMap)
});
const fieldNameMap = {
    title: "اسم المنتج",
    description: "وصف المنتج",
    price: "سعر المنتج",
    price_type: "نوع السعر",
    city: "المحافظة",
    hood: "المنطقة",
    // Car fields
    hu: "تاريخ الفحص الفني",
    brand: "االماركة",
    mileage: "عدد الكيلومترات",
    status: "الحالة",
    first_registration: "تاريخ التسجيل الأول",
    fuel_type: "نوع الوقود",
    color: "اللون",
    car_type: "نوع السيارة",
    model: "الموديل",
    internal_materials: "المواد الداخلية",
    class_of_pollutants: "فئة الملوثات",
    performance: "الأداء",
    external_features: "المميزات الخارجية",
    number_of_doors: "عدد الأبواب",
    protection: "أنظمة الحماية",
    gearbox: "ناقل الحركة",
    environmental_sticker: "ملصق البيئة",
    internal_features: "المميزات الداخلية",
    // Land fields
    land_type: "نوع الأرض",
    offer_type: "نوع العرض",
    available_from: "متاح من تاريخ",
    area: "المساحة (متر مربع)",
    // Apartment fields
    floor: "الطابق",
    living_space: "المساحة السكنية (متر مربع)",
    furniture: "الأثاث",
    bath: "عدد الحمامات",
    bed_room: "عدد غرف النوم",
    room: "عدد الغرف",
    year: "سنة البناء",
    general_characteristics: "مميزات المنزل",
    apartment_offer_type: "نوع العرض",
    // House fields
    real_estate_space: "مساحة العقار (متر مربع)",
    house_type: "نوع المنزل",
    house_offer_type: "نوع العرض",
    // Electronics fields
    electronics_status: "حالة الجهاز",
    // Mobile fields
    mobile_status: "حالة الجهاز",
    mobile_brand: "الماركة",
    mobile_color: "اللون",
    accessories: "الملحقات"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/lib/loginservices/mutations.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "extractMessages": (()=>extractMessages),
    "useCreateUserFirst": (()=>useCreateUserFirst),
    "useCreateUserSecond": (()=>useCreateUserSecond),
    "useForgetPassword": (()=>useForgetPassword),
    "useLogin": (()=>useLogin),
    "useLogout": (()=>useLogout),
    "useResendEmailCode": (()=>useResendEmailCode),
    "useResendUrl": (()=>useResendUrl),
    "useResetPassword": (()=>useResetPassword),
    "useValidateUserFirst": (()=>useValidateUserFirst)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/loginservices/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$context$2f$EmailContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/context/EmailContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$context$2f$PhoneContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/context/PhoneContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$Errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/Errors.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function extractMessages(obj, parentKey = "") {
    const messages = [];
    const traverse = (o, parentKey = "")=>{
        for(const key in o){
            const value = o[key];
            // استخدم الاسم العربي إذا كان موجودًا في الجدول
            const fieldName = parentKey ? `${parentKey}.${key}` : key;
            const displayName = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$Errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldNameMap"][key] || key;
            if (Array.isArray(value)) {
                value.forEach((msg)=>messages.push(`${displayName}: ${msg}`));
            } else if (typeof value === "string") {
                messages.push(`${displayName}: ${value}`);
            } else if (typeof value === "object" && value !== null) {
                traverse(value, fieldName);
            }
        }
    };
    traverse(obj, parentKey);
    return messages;
}
function useCreateUserFirst(setNotification) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { setEmail } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$context$2f$EmailContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEmail"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateUserFirst.useMutation": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUserFirst"])(data)
        }["useCreateUserFirst.useMutation"],
        onMutate: {
            "useCreateUserFirst.useMutation": ()=>{
                console.log("جاري إنشاء الحساب...");
            }
        }["useCreateUserFirst.useMutation"],
        onError: {
            "useCreateUserFirst.useMutation": (error)=>{
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    const detail = error.response?.data?.detail;
                    const errors = error.response?.data?.errors;
                    const messages = errors ? extractMessages(errors) : [];
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
        }["useCreateUserFirst.useMutation"],
        onSuccess: {
            "useCreateUserFirst.useMutation": (data)=>{
                setEmail(data.user.email);
                setNotification({
                    message: data.detail,
                    type: "success"
                });
                setTimeout({
                    "useCreateUserFirst.useMutation": ()=>{
                        router.push("signup/step1");
                    }
                }["useCreateUserFirst.useMutation"], 1200); // بعد انتهاء عرض التنبيه
            }
        }["useCreateUserFirst.useMutation"],
        onSettled: {
            "useCreateUserFirst.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "accounts/register"
                    ]
                });
            }
        }["useCreateUserFirst.useMutation"]
    });
}
_s(useCreateUserFirst, "fj/tZE5yptyVgIlF1wi1PxO2xjE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$context$2f$EmailContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEmail"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useValidateUserFirst(setNotification) {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useValidateUserFirst.useMutation": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateUserFirst"])(data)
        }["useValidateUserFirst.useMutation"],
        onMutate: {
            "useValidateUserFirst.useMutation": ()=>{
                console.log("mutate Signup Step1");
            }
        }["useValidateUserFirst.useMutation"],
        onError: {
            "useValidateUserFirst.useMutation": (error)=>{
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    const detail = error.response?.data?.detail;
                    const errors = error.response?.data?.errors;
                    const messages = errors ? extractMessages(errors) : [];
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
        }["useValidateUserFirst.useMutation"],
        onSuccess: {
            "useValidateUserFirst.useMutation": (data)=>{
                setNotification({
                    message: data.detail,
                    type: "success"
                });
                setTimeout({
                    "useValidateUserFirst.useMutation": ()=>{
                        router.push("step2");
                    }
                }["useValidateUserFirst.useMutation"], 1200); // بعد انتهاء عرض التنبيه
            }
        }["useValidateUserFirst.useMutation"],
        onSettled: {
            "useValidateUserFirst.useMutation": async (_, error)=>{
                console.log("settled");
                if (error) {
                    console.log(error);
                } else {
                    await queryClient.invalidateQueries({
                        queryKey: [
                            "accounts/verify-email/"
                        ]
                    });
                }
            }
        }["useValidateUserFirst.useMutation"]
    });
}
_s1(useValidateUserFirst, "Q4olKwTidJ6tIfIS/NfiyB78Ktg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useCreateUserSecond(setNotification) {
    _s2();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { setPhoneNumber } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$context$2f$PhoneContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePhone"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateUserSecond.useMutation": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUserSecond"])(data)
        }["useCreateUserSecond.useMutation"],
        onMutate: {
            "useCreateUserSecond.useMutation": ()=>{
                console.log("mutate Signup Step2");
            }
        }["useCreateUserSecond.useMutation"],
        onError: {
            "useCreateUserSecond.useMutation": (error)=>{
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    const detail = error.response?.data?.detail;
                    const errors = error.response?.data?.errors;
                    const messages = errors ? extractMessages(errors) : [];
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
        }["useCreateUserSecond.useMutation"],
        onSuccess: {
            "useCreateUserSecond.useMutation": (data)=>{
                setPhoneNumber(data.user.phone_number);
                setNotification({
                    message: data.detail,
                    type: "success"
                });
                setTimeout({
                    "useCreateUserSecond.useMutation": ()=>{
                        router.push("step3");
                    }
                }["useCreateUserSecond.useMutation"], 2200); // بعد انتهاء عرض التنبيه
            }
        }["useCreateUserSecond.useMutation"],
        onSettled: {
            "useCreateUserSecond.useMutation": async (_, error)=>{
                console.log("settled");
                if (error) {
                    console.log(error);
                } else {
                    await queryClient.invalidateQueries({
                        queryKey: [
                            "accounts/second-register/"
                        ]
                    });
                }
            }
        }["useCreateUserSecond.useMutation"]
    });
}
_s2(useCreateUserSecond, "c3oSEVe5s8r4ldvN961QJME/frQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$context$2f$PhoneContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePhone"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useLogin(setNotification) {
    _s3();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useLogin.useMutation": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginUser"])(data)
        }["useLogin.useMutation"],
        onMutate: {
            "useLogin.useMutation": ()=>{
                console.log("mutate Login");
            }
        }["useLogin.useMutation"],
        onError: {
            "useLogin.useMutation": (error)=>{
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    const detail = error.response?.data?.detail;
                    const errors = error.response?.data?.errors;
                    const messages = errors ? extractMessages(errors) : [];
                    console.log("detail: ", detail);
                    console.log("errors: ", errors);
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
        }["useLogin.useMutation"],
        onSuccess: {
            "useLogin.useMutation": (data)=>{
                localStorage.setItem("accessToken", data.access);
                localStorage.setItem("refreshToken", data.refresh);
                console.log("refresh: ", data.refresh);
                console.log("access: ", data.access);
                setNotification({
                    message: data.detail,
                    type: "success"
                });
                setTimeout({
                    "useLogin.useMutation": ()=>{
                        router.push("/");
                    }
                }["useLogin.useMutation"], 1200); // بعد انتهاء عرض التنبيه
            }
        }["useLogin.useMutation"],
        onSettled: {
            "useLogin.useMutation": async (_, error)=>{
                console.log("settled");
                if (error) {
                    console.log(error);
                } else {
                    await queryClient.invalidateQueries({
                        queryKey: [
                            "accounts/login/"
                        ]
                    });
                }
            }
        }["useLogin.useMutation"]
    });
}
_s3(useLogin, "Q4olKwTidJ6tIfIS/NfiyB78Ktg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useLogout(setNotification) {
    _s4();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useLogout.useMutation": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logoutUser"])(data)
        }["useLogout.useMutation"],
        onMutate: {
            "useLogout.useMutation": ()=>{
                console.log("mutate Logout");
            }
        }["useLogout.useMutation"],
        onError: {
            "useLogout.useMutation": (error)=>{
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    const detail = error.response?.data?.detail;
                    const errors = error.response?.data?.errors;
                    const messages = errors ? extractMessages(errors) : [];
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
        }["useLogout.useMutation"],
        onSuccess: {
            "useLogout.useMutation": (data)=>{
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                console.log("LOGOUT DONE");
                setNotification({
                    message: data.detail,
                    type: "success"
                });
                setTimeout({
                    "useLogout.useMutation": ()=>{
                        window.location.href = "/";
                    }
                }["useLogout.useMutation"], 1200);
            }
        }["useLogout.useMutation"],
        onSettled: {
            "useLogout.useMutation": async (_, error)=>{
                console.log("settled Logout");
                if (error) {
                    console.log(error);
                } else {
                    await queryClient.invalidateQueries({
                        queryKey: [
                            "accounts/logout/"
                        ]
                    });
                }
            }
        }["useLogout.useMutation"]
    });
}
_s4(useLogout, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useForgetPassword(setNotification) {
    _s5();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useForgetPassword.useMutation": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forgetPassword"])(data)
        }["useForgetPassword.useMutation"],
        onMutate: {
            "useForgetPassword.useMutation": ()=>{
                console.log("mutate Forget Password ");
            }
        }["useForgetPassword.useMutation"],
        onError: {
            "useForgetPassword.useMutation": (error)=>{
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    const detail = error.response?.data?.detail;
                    const errors = error.response?.data?.errors;
                    const messages = errors ? extractMessages(errors) : [];
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
        }["useForgetPassword.useMutation"],
        onSuccess: {
            "useForgetPassword.useMutation": (data)=>{
                setNotification({
                    message: data.detail,
                    type: "success"
                });
                setTimeout({
                    "useForgetPassword.useMutation": ()=>{
                        console.log("Forget Done");
                    }
                }["useForgetPassword.useMutation"], 1200); // بعد انتهاء عرض التنبيه
            }
        }["useForgetPassword.useMutation"],
        onSettled: {
            "useForgetPassword.useMutation": async (_, error)=>{
                console.log("settled");
                if (error) {
                    console.log(error);
                } else {
                    await queryClient.invalidateQueries({
                        queryKey: [
                            "accounts/password/request-reset/"
                        ]
                    });
                }
            }
        }["useForgetPassword.useMutation"]
    });
}
_s5(useForgetPassword, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useResetPassword(setNotification) {
    _s6();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useResetPassword.useMutation": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetPassword"])(data)
        }["useResetPassword.useMutation"],
        onMutate: {
            "useResetPassword.useMutation": ()=>{
                console.log("mutate Reset Password ");
            }
        }["useResetPassword.useMutation"],
        onError: {
            "useResetPassword.useMutation": (error)=>{
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    const detail = error.response?.data?.detail;
                    const errors = error.response?.data?.errors;
                    const messages = errors ? extractMessages(errors) : [];
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
        }["useResetPassword.useMutation"],
        onSuccess: {
            "useResetPassword.useMutation": (data)=>{
                setNotification({
                    message: data.detail,
                    type: "success"
                });
                setTimeout({
                    "useResetPassword.useMutation": ()=>{
                        router.push("/login");
                    }
                }["useResetPassword.useMutation"], 1200); // بعد انتهاء عرض التنبيه
            }
        }["useResetPassword.useMutation"],
        onSettled: {
            "useResetPassword.useMutation": async (_, error)=>{
                console.log("settled");
                if (error) {
                    console.log(error);
                } else {
                    await queryClient.invalidateQueries({
                        queryKey: [
                            "accounts/password/set-new/"
                        ]
                    });
                }
            }
        }["useResetPassword.useMutation"]
    });
}
_s6(useResetPassword, "OMPBWmuGqcicNpy0gW6DnCxqRr0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useResendEmailCode(setNotification) {
    _s7();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useResendEmailCode.useMutation": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resendCode"])(data)
        }["useResendEmailCode.useMutation"],
        onMutate: {
            "useResendEmailCode.useMutation": ()=>{
                console.log("mutate RESEND CODE ");
            }
        }["useResendEmailCode.useMutation"],
        onError: {
            "useResendEmailCode.useMutation": (error)=>{
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    const detail = error.response?.data?.detail;
                    const errors = error.response?.data?.errors;
                    const messages = errors ? extractMessages(errors) : [];
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
        }["useResendEmailCode.useMutation"],
        onSuccess: {
            "useResendEmailCode.useMutation": (data)=>{
                setNotification({
                    message: data.detail,
                    type: "success"
                });
            }
        }["useResendEmailCode.useMutation"],
        onSettled: {
            "useResendEmailCode.useMutation": async (_, error)=>{
                console.log("settled");
                if (error) {
                    console.log(error);
                } else {
                    await queryClient.invalidateQueries({
                        queryKey: [
                            "accounts/password/resend-email/"
                        ]
                    });
                }
            }
        }["useResendEmailCode.useMutation"]
    });
}
_s7(useResendEmailCode, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useResendUrl(setNotification) {
    _s8();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useResendUrl.useMutation": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resendUrl"])(data)
        }["useResendUrl.useMutation"],
        onMutate: {
            "useResendUrl.useMutation": ()=>{
                console.log("mutate RESEND URL ");
            }
        }["useResendUrl.useMutation"],
        onError: {
            "useResendUrl.useMutation": (error)=>{
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    const detail = error.response?.data?.detail;
                    const errors = error.response?.data?.errors;
                    const messages = errors ? extractMessages(errors) : [];
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
        }["useResendUrl.useMutation"],
        onSuccess: {
            "useResendUrl.useMutation": (data)=>{
                console.log("RESEND DONE");
                setNotification({
                    message: data.detail,
                    type: "success"
                });
            }
        }["useResendUrl.useMutation"],
        onSettled: {
            "useResendUrl.useMutation": async (_, error)=>{
                console.log("settled");
                if (error) {
                    console.log(error);
                } else {
                    await queryClient.invalidateQueries({
                        queryKey: [
                            "accounts/password/resend-url/"
                        ]
                    });
                }
            }
        }["useResendUrl.useMutation"]
    });
}
_s8(useResendUrl, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/resourses/signupPhoto.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/signupPhoto.d0ff55b2.svg");}}),
"[project]/public/resourses/signupPhoto.svg.mjs { IMAGE => \"[project]/public/resourses/signupPhoto.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$signupPhoto$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/signupPhoto.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$signupPhoto$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 591,
    height: 580,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/resourses/signupPhoto2.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/signupPhoto2.2d98965c.svg");}}),
"[project]/public/resourses/signupPhoto2.svg.mjs { IMAGE => \"[project]/public/resourses/signupPhoto2.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$signupPhoto2$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/signupPhoto2.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$signupPhoto2$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 595,
    height: 577,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/resgister/SignPhoto.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$signupPhoto$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$signupPhoto$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/signupPhoto.svg.mjs { IMAGE => "[project]/public/resourses/signupPhoto.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$signupPhoto2$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$signupPhoto2$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/signupPhoto2.svg.mjs { IMAGE => "[project]/public/resourses/signupPhoto2.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
"use client";
;
;
;
;
const SignPhoto = ({ isLogin })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hidden w-[40%] lg:flex lg:items-center lg:justify-center h-full   xl:mr-[48px] xl:ml-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: isLogin ? __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$signupPhoto2$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$signupPhoto2$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$signupPhoto$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$signupPhoto$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            alt: "Signup Illustration",
            width: 590,
            height: 580,
            className: "w-auto h-auto object-contain"
        }, void 0, false, {
            fileName: "[project]/app/components/resgister/SignPhoto.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/resgister/SignPhoto.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
_c = SignPhoto;
const __TURBOPACK__default__export__ = SignPhoto;
var _c;
__turbopack_context__.k.register(_c, "SignPhoto");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/ui/Notification.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const Notification = ({ message, type, duration = 4000, onClose })=>{
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Notification.useEffect": ()=>{
            const timer = setTimeout({
                "Notification.useEffect.timer": ()=>{
                    setVisible(false);
                    onClose?.();
                }
            }["Notification.useEffect.timer"], duration);
            return ({
                "Notification.useEffect": ()=>clearTimeout(timer)
            })["Notification.useEffect"];
        }
    }["Notification.useEffect"], [
        duration,
        onClose
    ]);
    if (!visible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-4 left-4 right-4 sm:top-5 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:right-auto z-50 pointer-events-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `w-full max-w-xl mx-auto p-4 sm:p-6 rounded-lg shadow-lg text-sm sm:text-lg transition-all duration-300 ${type === "success" ? "bg-green-100 text-green-900 border border-green-400" : "bg-red-100 text-red-900 border border-red-400"}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start sm:items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "whitespace-pre-line font-semibold flex-1 leading-relaxed",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/app/components/ui/Notification.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex-shrink-0 text-2xl sm:text-3xl font-bold text-gray-700 hover:text-gray-900 transition-colors duration-200 p-1 -m-1",
                        onClick: ()=>{
                            setVisible(false);
                            onClose?.();
                        },
                        "aria-label": "Close notification",
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ui/Notification.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ui/Notification.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/ui/Notification.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Notification.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
};
_s(Notification, "+l2LUTlfMHnsWfc+O34BMiR0NHk=");
_c = Notification;
const __TURBOPACK__default__export__ = Notification;
var _c;
__turbopack_context__.k.register(_c, "Notification");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/resourses/test.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/test.90673d5c.png");}}),
"[project]/public/resourses/test.png.mjs { IMAGE => \"[project]/public/resourses/test.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$test$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/test.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$test$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1416,
    height: 256,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAD0lEQVR42mOQl5f/jw8DAKkRCuE+JKJ6AAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 1
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/resgister/HeaderSignup.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$test$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$test$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/test.png.mjs { IMAGE => "[project]/public/resourses/test.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
;
const HeaderSignup = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex px-10 my-2 h-14 mt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-start w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$test$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$test$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    alt: "Logo",
                    width: 1000,
                    height: 1000,
                    className: "w-40 h-14"
                }, void 0, false, {
                    fileName: "[project]/app/components/resgister/HeaderSignup.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/resgister/HeaderSignup.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                        className: "font-bold text-xl max-lg:hidden",
                        children: [
                            "لديك حساب؟ قم",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-cgreen px-1 mr-1 py-1 rounded-sm  hover:text-cwhite hover:bg-cgreen transition-colors duration-300 ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    children: "بتسجيل الدخول"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/resgister/HeaderSignup.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/resgister/HeaderSignup.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/resgister/HeaderSignup.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-cgreen px-1 mr-1 py-1 rounded-sm hover:text-cwhite hover:bg-cgreen transition-colors duration-300 lg:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/login",
                            children: "تسجيل الدخول"
                        }, void 0, false, {
                            fileName: "[project]/app/components/resgister/HeaderSignup.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/resgister/HeaderSignup.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/resgister/HeaderSignup.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/resgister/HeaderSignup.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
};
_c = HeaderSignup;
const __TURBOPACK__default__export__ = HeaderSignup;
var _c;
__turbopack_context__.k.register(_c, "HeaderSignup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/signup/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ContactForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>"); // يمكنك استخدام أيقونات أخرى أو من Heroicons
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$ProgressSteps$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/ProgressSteps.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/v3/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/loginservices/mutations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$resgister$2f$SignPhoto$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/resgister/SignPhoto.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Notification.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$resgister$2f$HeaderSignup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/resgister/HeaderSignup.tsx [app-client] (ecmascript)");
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
;
// Zod schema
const passwordRequirements = "كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، وحرف كبير، حرف صغير، رقم، ورمز خاص.";
const formSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])().email("يرجى إدخال بريد إلكتروني صحيح."),
    password: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])().min(8, passwordRequirements).regex(/[A-Z]/, passwordRequirements).regex(/[a-z]/, passwordRequirements).regex(/[0-9]/, passwordRequirements).regex(/[^A-Za-z0-9]/, passwordRequirements),
    confirmPassword: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])().min(8, passwordRequirements)
}).refine((data)=>data.password === data.confirmPassword, {
    path: [
        "confirmPassword"
    ],
    message: "كلمة المرور وتأكيد كلمة المرور غير متطابقين."
});
function ContactForm() {
    _s();
    const { register, handleSubmit, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(formSchema)
    });
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCompany, setIsCompany] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirmPassword, setShowConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const createUserFirstMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateUserFirst"])(setNotification);
    const { isPending: isLoading } = createUserFirstMutation;
    const onSubmit = (data)=>{
        if (data.password !== data.confirmPassword) {
            setNotification({
                message: "كلمة المرور وتأكيد كلمة المرور غير متطابقين.",
                type: "error"
            });
            return;
        }
        const jsonData = JSON.stringify({
            email: data.email,
            password: data.password,
            is_company: isCompany
        });
        console.log("json:", jsonData);
        createUserFirstMutation.mutate(JSON.parse(jsonData));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " h-[85vh] ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$resgister$2f$HeaderSignup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/signup/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full  flex flex-col lg:flex-row 2xl:items-center xl:justify-center gap-10 max-lg:px-5 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$resgister$2f$SignPhoto$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isLogin: false
                    }, void 0, false, {
                        fileName: "[project]/app/signup/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:w-[46%] w-[90%] xl:mx-[8%] lg:mx-[4%] mx-auto  ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$ProgressSteps$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                currentStep: 1,
                                totalSteps: 4
                            }, void 0, false, {
                                fileName: "[project]/app/signup/page.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: " ",
                                children: [
                                    notification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        message: notification.message,
                                        type: notification.type,
                                        onClose: ()=>setNotification(null)
                                    }, void 0, false, {
                                        fileName: "[project]/app/signup/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-medium lg:text-1 max-lg:text-2 text-right ",
                                                children: "إنشاء حساب"
                                            }, void 0, false, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full mt-6 max-w-sm mx-auto lg:mx-0 border-2 border-clightgray p-1 rounded-xl mb-6 flex",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "w-1/2 text-6 font-semibold",
                                                        variant: !isCompany ? "primary" : "none",
                                                        onClick: ()=>setIsCompany(false),
                                                        children: "شخصي"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "w-1/2 text-6 font-semibold",
                                                        variant: isCompany ? "primary" : "none",
                                                        onClick: ()=>setIsCompany(true),
                                                        children: "شركة"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: handleSubmit(onSubmit),
                                                className: "space-y-3 ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-cdarkgray text-lg font-semibold text-right",
                                                                children: "البريد الالكتروني"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/signup/page.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                ...register("email"),
                                                                placeholder: "أدخل بريدك الالكتروني",
                                                                className: "mt-1 p-3 block w-full text-lg border-clightgray border-2 rounded-md"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/signup/page.tsx",
                                                                lineNumber: 123,
                                                                columnNumber: 19
                                                            }, this),
                                                            errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-red-500 text-sm text-right",
                                                                children: errors.email.message
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/signup/page.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-cdarkgray text-lg font-semibold max-lg:mt-6 text-right",
                                                                children: "كلمة المرور"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/signup/page.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: showPassword ? "text" : "password",
                                                                        ...register("password"),
                                                                        placeholder: "أدخل كلمة المرور",
                                                                        className: "mt-1 p-3  block w-full text-lg border-clightgray border-2 rounded-md"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/signup/page.tsx",
                                                                        lineNumber: 142,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setShowPassword((prev)=>!prev),
                                                                        className: "absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 hover:text-gray-800",
                                                                        children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                                            size: 20
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/signup/page.tsx",
                                                                            lineNumber: 155,
                                                                            columnNumber: 39
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                            size: 20
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/signup/page.tsx",
                                                                            lineNumber: 155,
                                                                            columnNumber: 62
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/signup/page.tsx",
                                                                        lineNumber: 150,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/signup/page.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 19
                                                            }, this),
                                                            errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-red-500 text-p text-right",
                                                                children: errors.password.message
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/signup/page.tsx",
                                                                lineNumber: 160,
                                                                columnNumber: 21
                                                            }, this),
                                                            !errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-cdarkgray mt-1 text-p text-right",
                                                                children: "كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، وحرف كبير، حرف صغير، رقم، ورمز خاص."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/signup/page.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-cdarkgray text-lg font-semibold max-lg:mt-6 text-right",
                                                                children: "تأكيد كلمة المرور"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/signup/page.tsx",
                                                                lineNumber: 175,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: showConfirmPassword ? "text" : "password",
                                                                        ...register("confirmPassword"),
                                                                        placeholder: "أعد إدخال كلمة المرور",
                                                                        className: "mt-1 p-3 block w-full text-lg border-clightgray border-2 rounded-md"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/signup/page.tsx",
                                                                        lineNumber: 180,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setShowConfirmPassword((prev)=>!prev),
                                                                        className: "absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 hover:text-gray-800",
                                                                        children: showConfirmPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                                            size: 20
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/signup/page.tsx",
                                                                            lineNumber: 194,
                                                                            columnNumber: 25
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                            size: 20
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/signup/page.tsx",
                                                                            lineNumber: 196,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/signup/page.tsx",
                                                                        lineNumber: 188,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/signup/page.tsx",
                                                                lineNumber: 179,
                                                                columnNumber: 19
                                                            }, this),
                                                            errors.confirmPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-red-500 text-sm text-right",
                                                                children: errors.confirmPassword.message
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/signup/page.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "max-lg:text-p lg:text-sm text-black text-right mt-6",
                                                        children: [
                                                            "من خلال اختيارك لإنشاء حساب شخصي، فإنك توافق على",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/TermsOfService",
                                                                className: "text-cgreen underline",
                                                                children: "اتفاقية المستخدم"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/signup/page.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 19
                                                            }, this),
                                                            " ",
                                                            "و",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/PrivacyPolicy",
                                                                className: "text-cgreen underline",
                                                                children: "سياسة الخصوصية"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/signup/page.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: isLoading,
                                                        className: "w-full mt-2 mb-1 py-3 bg-cgreen text-cwhite rounded-md hover:bg-chgreen text-lg font-semibold disabled:opacity-70",
                                                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex justify-center items-center",
                                                            children: "جاري المعالجة..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/signup/page.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 21
                                                        }, this) : "إنشاء حساب شخصي"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/signup/page.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/signup/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/signup/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/signup/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/signup/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/signup/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/signup/page.tsx",
        lineNumber: 77,
        columnNumber: 1
    }, this);
}
_s(ContactForm, "mXjgpx/hQJOU7EojR/dIPUUQVyA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateUserFirst"]
    ];
});
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_73ef1886._.js.map