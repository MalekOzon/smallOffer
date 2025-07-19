module.exports = {

"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/app/lib/loginservices/api.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const BASE_URL = "https://smalloffertest.onrender.com/api/";
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
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
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}accounts/token/refresh/`, {
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
}}),
"[project]/app/lib/Errors.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/app/lib/loginservices/mutations.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/loginservices/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$context$2f$EmailContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/context/EmailContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$context$2f$PhoneContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/context/PhoneContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$Errors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/Errors.ts [app-ssr] (ecmascript)");
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
            const displayName = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$Errors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldNameMap"][key] || key;
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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { setEmail } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$context$2f$EmailContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEmail"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserFirst"])(data),
        onMutate: ()=>{
            console.log("جاري إنشاء الحساب...");
        },
        onError: (error)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
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
        },
        onSuccess: (data)=>{
            setEmail(data.user.email);
            setNotification({
                message: data.detail,
                type: "success"
            });
            setTimeout(()=>{
                router.push("signup/step1");
            }, 1200); // بعد انتهاء عرض التنبيه
        },
        onSettled: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    "accounts/register"
                ]
            });
        }
    });
}
function useValidateUserFirst(setNotification) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateUserFirst"])(data),
        onMutate: ()=>{
            console.log("mutate Signup Step1");
        },
        onError: (error)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
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
        },
        onSuccess: (data)=>{
            setNotification({
                message: data.detail,
                type: "success"
            });
            setTimeout(()=>{
                router.push("step2");
            }, 1200); // بعد انتهاء عرض التنبيه
        },
        onSettled: async (_, error)=>{
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
    });
}
function useCreateUserSecond(setNotification) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { setPhoneNumber } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$context$2f$PhoneContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePhone"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUserSecond"])(data),
        onMutate: ()=>{
            console.log("mutate Signup Step2");
        },
        onError: (error)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
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
        },
        onSuccess: (data)=>{
            setPhoneNumber(data.user.phone_number);
            setNotification({
                message: data.detail,
                type: "success"
            });
            setTimeout(()=>{
                router.push("step3");
            }, 2200); // بعد انتهاء عرض التنبيه
        },
        onSettled: async (_, error)=>{
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
    });
}
function useLogin(setNotification) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loginUser"])(data),
        onMutate: ()=>{
            console.log("mutate Login");
        },
        onError: (error)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
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
        },
        onSuccess: (data)=>{
            localStorage.setItem("accessToken", data.access);
            localStorage.setItem("refreshToken", data.refresh);
            console.log("refresh: ", data.refresh);
            console.log("access: ", data.access);
            setNotification({
                message: data.detail,
                type: "success"
            });
            setTimeout(()=>{
                router.push("/");
            }, 1200); // بعد انتهاء عرض التنبيه
        },
        onSettled: async (_, error)=>{
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
    });
}
function useLogout(setNotification) {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logoutUser"])(data),
        onMutate: ()=>{
            console.log("mutate Logout");
        },
        onError: (error)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
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
        },
        onSuccess: (data)=>{
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            console.log("LOGOUT DONE");
            setNotification({
                message: data.detail,
                type: "success"
            });
            setTimeout(()=>{
                window.location.href = "/";
            }, 1200);
        },
        onSettled: async (_, error)=>{
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
    });
}
function useForgetPassword(setNotification) {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forgetPassword"])(data),
        onMutate: ()=>{
            console.log("mutate Forget Password ");
        },
        onError: (error)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
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
        },
        onSuccess: (data)=>{
            setNotification({
                message: data.detail,
                type: "success"
            });
            setTimeout(()=>{
                console.log("Forget Done");
            }, 1200); // بعد انتهاء عرض التنبيه
        },
        onSettled: async (_, error)=>{
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
    });
}
function useResetPassword(setNotification) {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetPassword"])(data),
        onMutate: ()=>{
            console.log("mutate Reset Password ");
        },
        onError: (error)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
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
        },
        onSuccess: (data)=>{
            setNotification({
                message: data.detail,
                type: "success"
            });
            setTimeout(()=>{
                router.push("/login");
            }, 1200); // بعد انتهاء عرض التنبيه
        },
        onSettled: async (_, error)=>{
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
    });
}
function useResendEmailCode(setNotification) {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resendCode"])(data),
        onMutate: ()=>{
            console.log("mutate RESEND CODE ");
        },
        onError: (error)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
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
        },
        onSuccess: (data)=>{
            setNotification({
                message: data.detail,
                type: "success"
            });
        },
        onSettled: async (_, error)=>{
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
    });
}
function useResendUrl(setNotification) {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resendUrl"])(data),
        onMutate: ()=>{
            console.log("mutate RESEND URL ");
        },
        onError: (error)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
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
        },
        onSuccess: (data)=>{
            console.log("RESEND DONE");
            setNotification({
                message: data.detail,
                type: "success"
            });
        },
        onSettled: async (_, error)=>{
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
    });
}
}}),
"[project]/app/components/ui/Notification.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const Notification = ({ message, type, duration = 4000, onClose })=>{
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            setVisible(false);
            onClose?.();
        }, duration);
        return ()=>clearTimeout(timer);
    }, [
        duration,
        onClose
    ]);
    if (!visible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-4 left-4 right-4 sm:top-5 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:right-auto z-50 pointer-events-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `w-full max-w-xl mx-auto p-4 sm:p-6 rounded-lg shadow-lg text-sm sm:text-lg transition-all duration-300 ${type === "success" ? "bg-green-100 text-green-900 border border-green-400" : "bg-red-100 text-red-900 border border-red-400"}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start sm:items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "whitespace-pre-line font-semibold flex-1 leading-relaxed",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/app/components/ui/Notification.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
const __TURBOPACK__default__export__ = Notification;
}}),
"[project]/public/resourses/userAvatar.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/userAvatar.a2959f8c.svg");}}),
"[project]/public/resourses/userAvatar.svg.mjs { IMAGE => \"[project]/public/resourses/userAvatar.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$userAvatar$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/userAvatar.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$userAvatar$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 48,
    height: 48,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/app/lib/dashboardServices/dashboardApi.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EmailNotificationsDash": (()=>EmailNotificationsDash),
    "changePasswordDash": (()=>changePasswordDash),
    "deleteAccount": (()=>deleteAccount),
    "feedbackEmail": (()=>feedbackEmail),
    "getEmailNotificationsDash": (()=>getEmailNotificationsDash),
    "getUserFav": (()=>getUserFav),
    "getUserInfo": (()=>getUserInfo),
    "getUserPosts": (()=>getUserPosts),
    "setUserInfo": (()=>setUserInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/loginservices/api.ts [app-ssr] (ecmascript)");
;
const changePasswordDash = async (data)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("accounts/dashboard/change-password/", data);
    return response.data;
};
const EmailNotificationsDash = async (data)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].patch("accounts/dashboard/settings/", data);
    return response.data;
};
const getEmailNotificationsDash = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("accounts/dashboard/settings/");
    return response.data;
};
const deleteAccount = async (data)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete("accounts/dashboard/", {
        data
    }); // just in delete
    return response.data;
};
const feedbackEmail = async (data)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("accounts/dashboard/settings/feedback/", data);
    return response.data;
};
const setUserInfo = async (data)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].patch("accounts/dashboard/", data);
    return response.data;
};
const getUserInfo = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("accounts/dashboard/");
    return response.data;
};
const getUserPosts = async (page)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`accounts/dashboard/posts/cards/?page=${page}&page_size=8?ordering=-created_at`);
    return res.data;
};
const getUserFav = async (page)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`accounts/dashboard/favorites/cards/?page=${page}&page_size=8?ordering=-created_at`);
    return res.data;
};
}}),
"[project]/app/lib/dashboardServices/dashboardQueries.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useGetEmailNotificationsDash": (()=>useGetEmailNotificationsDash),
    "useGetUserFav": (()=>useGetUserFav),
    "useGetUserInfo": (()=>useGetUserInfo),
    "useGetUserPosts": (()=>useGetUserPosts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dashboardServices$2f$dashboardApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/dashboardServices/dashboardApi.ts [app-ssr] (ecmascript)");
;
;
function useGetEmailNotificationsDash() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "accounts/dashboard/settings/"
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dashboardServices$2f$dashboardApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEmailNotificationsDash"],
        staleTime: 1000 * 60 * 5,
        retry: 1
    });
}
function useGetUserInfo() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "accounts/dashboard/"
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dashboardServices$2f$dashboardApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserInfo"],
        staleTime: 1000 * 60 * 5,
        retry: 1
    });
}
const useGetUserPosts = (page)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'user-ads',
            page
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dashboardServices$2f$dashboardApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserPosts"])(page)
    });
};
const useGetUserFav = (page)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'user-fav',
            page
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dashboardServices$2f$dashboardApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserFav"])(page)
    });
};
}}),
"[project]/public/resourses/houses.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/houses.3e965e96.svg");}}),
"[project]/public/resourses/houses.svg.mjs { IMAGE => \"[project]/public/resourses/houses.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$houses$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/houses.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$houses$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/fashion.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/fashion.f3394282.svg");}}),
"[project]/public/resourses/fashion.svg.mjs { IMAGE => \"[project]/public/resourses/fashion.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$fashion$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/fashion.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$fashion$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/mobile.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/mobile.6e7af72f.svg");}}),
"[project]/public/resourses/mobile.svg.mjs { IMAGE => \"[project]/public/resourses/mobile.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$mobile$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/mobile.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$mobile$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/service.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/service.939e7c70.svg");}}),
"[project]/public/resourses/service.svg.mjs { IMAGE => \"[project]/public/resourses/service.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$service$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/service.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$service$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/pets.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/pets.238ac275.svg");}}),
"[project]/public/resourses/pets.svg.mjs { IMAGE => \"[project]/public/resourses/pets.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$pets$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/pets.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$pets$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/books.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/books.75a7de0c.svg");}}),
"[project]/public/resourses/books.svg.mjs { IMAGE => \"[project]/public/resourses/books.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$books$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/books.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$books$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/car.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/car.5e1bb774.svg");}}),
"[project]/public/resourses/car.svg.mjs { IMAGE => \"[project]/public/resourses/car.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$car$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/car.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$car$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/bike.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/bike.2f219a39.svg");}}),
"[project]/public/resourses/bike.svg.mjs { IMAGE => \"[project]/public/resourses/bike.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$bike$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/bike.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$bike$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/tractor.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/tractor.640c1141.svg");}}),
"[project]/public/resourses/tractor.svg.mjs { IMAGE => \"[project]/public/resourses/tractor.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$tractor$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/tractor.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$tractor$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/bus.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/bus.095b53ec.svg");}}),
"[project]/public/resourses/bus.svg.mjs { IMAGE => \"[project]/public/resourses/bus.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$bus$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/bus.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$bus$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/truck.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/truck.cd1b3e0a.svg");}}),
"[project]/public/resourses/truck.svg.mjs { IMAGE => \"[project]/public/resourses/truck.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$truck$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/truck.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$truck$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/tools.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/tools.06d0fd21.svg");}}),
"[project]/public/resourses/tools.svg.mjs { IMAGE => \"[project]/public/resourses/tools.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$tools$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/tools.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$tools$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/boat.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/boat.b5b3da92.svg");}}),
"[project]/public/resourses/boat.svg.mjs { IMAGE => \"[project]/public/resourses/boat.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$boat$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/boat.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$boat$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/pick-up.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/pick-up.8f24731d.svg");}}),
"[project]/public/resourses/pick-up.svg.mjs { IMAGE => \"[project]/public/resourses/pick-up.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$pick$2d$up$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/pick-up.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$pick$2d$up$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/tablet.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/tablet.bf3468ee.svg");}}),
"[project]/public/resourses/tablet.svg.mjs { IMAGE => \"[project]/public/resourses/tablet.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$tablet$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/tablet.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$tablet$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/suit.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/suit.ca38dd8e.svg");}}),
"[project]/public/resourses/suit.svg.mjs { IMAGE => \"[project]/public/resourses/suit.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$suit$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/suit.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$suit$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/store.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/store.fb8de687.svg");}}),
"[project]/public/resourses/store.svg.mjs { IMAGE => \"[project]/public/resourses/store.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$store$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/store.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$store$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/sneakers.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/sneakers.af6b658f.svg");}}),
"[project]/public/resourses/sneakers.svg.mjs { IMAGE => \"[project]/public/resourses/sneakers.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$sneakers$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/sneakers.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$sneakers$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/screen-show.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/screen-show.0b5424ed.svg");}}),
"[project]/public/resourses/screen-show.svg.mjs { IMAGE => \"[project]/public/resourses/screen-show.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$screen$2d$show$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/screen-show.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$screen$2d$show$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/screen.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/screen.af91236b.svg");}}),
"[project]/public/resourses/screen.svg.mjs { IMAGE => \"[project]/public/resourses/screen.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$screen$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/screen.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$screen$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/puzzle.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/puzzle.1e7d3575.svg");}}),
"[project]/public/resourses/puzzle.svg.mjs { IMAGE => \"[project]/public/resourses/puzzle.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$puzzle$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/puzzle.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$puzzle$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/mic.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/mic.266d5bf3.svg");}}),
"[project]/public/resourses/mic.svg.mjs { IMAGE => \"[project]/public/resourses/mic.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$mic$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/mic.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$mic$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/make-up.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/make-up.4d3aeb58.svg");}}),
"[project]/public/resourses/make-up.svg.mjs { IMAGE => \"[project]/public/resourses/make-up.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$make$2d$up$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/make-up.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$make$2d$up$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/listen.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/listen.fd0085e3.svg");}}),
"[project]/public/resourses/listen.svg.mjs { IMAGE => \"[project]/public/resourses/listen.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$listen$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/listen.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$listen$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/laptop.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/laptop.96032b8b.svg");}}),
"[project]/public/resourses/laptop.svg.mjs { IMAGE => \"[project]/public/resourses/laptop.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$laptop$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/laptop.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$laptop$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/land.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/land.99bb666a.svg");}}),
"[project]/public/resourses/land.svg.mjs { IMAGE => \"[project]/public/resourses/land.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$land$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/land.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$land$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/household.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/household.acdbd61d.svg");}}),
"[project]/public/resourses/household.svg.mjs { IMAGE => \"[project]/public/resourses/household.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$household$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/household.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$household$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/horse.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/horse.59d3cf2b.svg");}}),
"[project]/public/resourses/horse.svg.mjs { IMAGE => \"[project]/public/resourses/horse.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$horse$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/horse.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$horse$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/home.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/home.7e6b9d7b.svg");}}),
"[project]/public/resourses/home.svg.mjs { IMAGE => \"[project]/public/resourses/home.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$home$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/home.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$home$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/heels.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/heels.d24e5260.svg");}}),
"[project]/public/resourses/heels.svg.mjs { IMAGE => \"[project]/public/resourses/heels.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$heels$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/heels.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$heels$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/gym.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/gym.a93ea463.svg");}}),
"[project]/public/resourses/gym.svg.mjs { IMAGE => \"[project]/public/resourses/gym.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$gym$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/gym.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$gym$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/gaming.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/gaming.df032d7c.svg");}}),
"[project]/public/resourses/gaming.svg.mjs { IMAGE => \"[project]/public/resourses/gaming.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$gaming$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/gaming.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$gaming$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/fish.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/fish.73f91ca0.svg");}}),
"[project]/public/resourses/fish.svg.mjs { IMAGE => \"[project]/public/resourses/fish.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$fish$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/fish.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$fish$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/dress.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/dress.4ed7216f.svg");}}),
"[project]/public/resourses/dress.svg.mjs { IMAGE => \"[project]/public/resourses/dress.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$dress$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/dress.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$dress$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/dog.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/dog.8731e452.svg");}}),
"[project]/public/resourses/dog.svg.mjs { IMAGE => \"[project]/public/resourses/dog.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$dog$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/dog.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$dog$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/cook.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/cook.8375c948.svg");}}),
"[project]/public/resourses/cook.svg.mjs { IMAGE => \"[project]/public/resourses/cook.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$cook$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/cook.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$cook$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/clean.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/clean.0f9363c2.svg");}}),
"[project]/public/resourses/clean.svg.mjs { IMAGE => \"[project]/public/resourses/clean.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$clean$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/clean.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$clean$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/cat.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/cat.67e88ada.svg");}}),
"[project]/public/resourses/cat.svg.mjs { IMAGE => \"[project]/public/resourses/cat.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$cat$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/cat.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$cat$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/building.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/building.f8eb8db8.svg");}}),
"[project]/public/resourses/building.svg.mjs { IMAGE => \"[project]/public/resourses/building.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$building$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/building.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$building$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/bird.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/bird.b6c81f30.svg");}}),
"[project]/public/resourses/bird.svg.mjs { IMAGE => \"[project]/public/resourses/bird.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$bird$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/bird.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$bird$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/barn.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/barn.1d255732.svg");}}),
"[project]/public/resourses/barn.svg.mjs { IMAGE => \"[project]/public/resourses/barn.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$barn$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/barn.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$barn$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/bag.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/bag.7d9e5d3c.svg");}}),
"[project]/public/resourses/bag.svg.mjs { IMAGE => \"[project]/public/resourses/bag.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$bag$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/bag.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$bag$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/resourses/art.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/art.6b213b04.svg");}}),
"[project]/public/resourses/art.svg.mjs { IMAGE => \"[project]/public/resourses/art.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$art$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/resourses/art.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$art$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/app/sections/categories.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "categories": (()=>categories)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$houses$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$houses$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/houses.svg.mjs { IMAGE => "[project]/public/resourses/houses.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$fashion$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$fashion$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/fashion.svg.mjs { IMAGE => "[project]/public/resourses/fashion.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$mobile$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$mobile$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/mobile.svg.mjs { IMAGE => "[project]/public/resourses/mobile.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$service$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$service$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/service.svg.mjs { IMAGE => "[project]/public/resourses/service.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$pets$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$pets$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/pets.svg.mjs { IMAGE => "[project]/public/resourses/pets.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$books$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$books$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/books.svg.mjs { IMAGE => "[project]/public/resourses/books.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$car$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$car$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/car.svg.mjs { IMAGE => "[project]/public/resourses/car.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$bike$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$bike$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/bike.svg.mjs { IMAGE => "[project]/public/resourses/bike.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$tractor$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$tractor$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/tractor.svg.mjs { IMAGE => "[project]/public/resourses/tractor.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$bus$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$bus$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/bus.svg.mjs { IMAGE => "[project]/public/resourses/bus.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$truck$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$truck$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/truck.svg.mjs { IMAGE => "[project]/public/resourses/truck.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$tools$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$tools$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/tools.svg.mjs { IMAGE => "[project]/public/resourses/tools.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$boat$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$boat$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/boat.svg.mjs { IMAGE => "[project]/public/resourses/boat.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$pick$2d$up$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$pick$2d$up$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/pick-up.svg.mjs { IMAGE => "[project]/public/resourses/pick-up.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$tablet$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$tablet$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/tablet.svg.mjs { IMAGE => "[project]/public/resourses/tablet.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$suit$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$suit$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/suit.svg.mjs { IMAGE => "[project]/public/resourses/suit.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$store$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$store$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/store.svg.mjs { IMAGE => "[project]/public/resourses/store.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$sneakers$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$sneakers$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/sneakers.svg.mjs { IMAGE => "[project]/public/resourses/sneakers.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$screen$2d$show$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$screen$2d$show$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/screen-show.svg.mjs { IMAGE => "[project]/public/resourses/screen-show.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$screen$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$screen$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/screen.svg.mjs { IMAGE => "[project]/public/resourses/screen.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$puzzle$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$puzzle$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/puzzle.svg.mjs { IMAGE => "[project]/public/resourses/puzzle.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$mic$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$mic$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/mic.svg.mjs { IMAGE => "[project]/public/resourses/mic.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$make$2d$up$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$make$2d$up$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/make-up.svg.mjs { IMAGE => "[project]/public/resourses/make-up.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$listen$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$listen$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/listen.svg.mjs { IMAGE => "[project]/public/resourses/listen.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$laptop$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$laptop$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/laptop.svg.mjs { IMAGE => "[project]/public/resourses/laptop.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$land$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$land$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/land.svg.mjs { IMAGE => "[project]/public/resourses/land.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$household$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$household$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/household.svg.mjs { IMAGE => "[project]/public/resourses/household.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$horse$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$horse$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/horse.svg.mjs { IMAGE => "[project]/public/resourses/horse.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$home$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$home$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/home.svg.mjs { IMAGE => "[project]/public/resourses/home.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$heels$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$heels$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/heels.svg.mjs { IMAGE => "[project]/public/resourses/heels.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$gym$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$gym$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/gym.svg.mjs { IMAGE => "[project]/public/resourses/gym.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$gaming$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$gaming$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/gaming.svg.mjs { IMAGE => "[project]/public/resourses/gaming.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$fish$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$fish$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/fish.svg.mjs { IMAGE => "[project]/public/resourses/fish.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$dress$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$dress$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/dress.svg.mjs { IMAGE => "[project]/public/resourses/dress.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$dog$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$dog$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/dog.svg.mjs { IMAGE => "[project]/public/resourses/dog.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$cook$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$cook$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/cook.svg.mjs { IMAGE => "[project]/public/resourses/cook.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$clean$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$clean$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/clean.svg.mjs { IMAGE => "[project]/public/resourses/clean.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$cat$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$cat$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/cat.svg.mjs { IMAGE => "[project]/public/resourses/cat.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$building$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$building$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/building.svg.mjs { IMAGE => "[project]/public/resourses/building.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$bird$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$bird$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/bird.svg.mjs { IMAGE => "[project]/public/resourses/bird.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$barn$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$barn$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/barn.svg.mjs { IMAGE => "[project]/public/resourses/barn.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$bag$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$bag$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/bag.svg.mjs { IMAGE => "[project]/public/resourses/bag.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$art$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$art$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/resourses/art.svg.mjs { IMAGE => "[project]/public/resourses/art.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
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
;
;
;
;
;
;
;
const categories = [
    {
        name: "الآليات",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$car$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$car$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        slug: "vehicles",
        items: [
            {
                label: "سيارات",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$car$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$car$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "cars",
                href: "/categories/vehicles/cars"
            },
            {
                label: "دراجات نارية",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$bike$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$bike$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "motorcycles",
                href: "/categories/vehicles/motorcycles"
            },
            {
                label: "جرارات",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$tractor$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$tractor$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "tractors",
                href: "/categories/vehicles/tractors"
            },
            {
                label: "حافلات",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$bus$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$bus$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "bus",
                href: "/categories/vehicles/buses"
            },
            {
                label: "قطع غيار",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$tools$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$tools$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "spare_parts",
                href: "/categories/vehicles/parts"
            },
            {
                label: "بيك اب",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$pick$2d$up$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$pick$2d$up$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "pickup",
                href: "/categories/vehicles/pickup"
            },
            {
                label: "شاحنات",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$truck$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$truck$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "trucks",
                href: "/categories/vehicles/trucks"
            },
            {
                label: "قوارب",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$boat$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$boat$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "boats",
                href: "/categories/vehicles/boats"
            }
        ]
    },
    {
        name: "الموضة والجمال",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$fashion$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$fashion$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        slug: "fashion_beauty",
        items: [
            {
                label: "ملابس نسائية",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$dress$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$dress$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "womens_clothes",
                href: "/categories/fashion/womens_clothing"
            },
            {
                label: "ملابس أطفال",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$dress$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$dress$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "childrens_clothing",
                href: "/categories/fashion/kids_clothing"
            },
            {
                label: "ملابس رجالية",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$suit$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$suit$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "menswear",
                href: "/categories/fashion/mens_clothing"
            },
            {
                label: "حقائب واكسسوارات",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$bag$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$bag$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "bags_accessories",
                href: "/categories/fashion/bags_accessories"
            },
            {
                label: "مكياج وعناية شخصية",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$make$2d$up$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$make$2d$up$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "makeup",
                href: "/categories/fashion/makeup"
            },
            {
                label: "أحذية",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$heels$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$heels$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "shoes",
                href: "/categories/fashion/shoes"
            },
            {
                label: "ملابس رياضية",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$sneakers$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$sneakers$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "sport_clouths",
                href: "/categories/fashion/sportswear"
            }
        ]
    },
    {
        name: "الخدمات",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$service$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$service$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        slug: "services",
        items: [
            {
                label: "خدمات نقل وتوصيل",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$truck$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$truck$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "delivery",
                href: "/categories/services/transport"
            },
            {
                label: "تنظيف وصيانة",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$clean$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$clean$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "cleaning_maintenance",
                href: "/categories/services/cleaning"
            },
            {
                label: "سوفت وير",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$laptop$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$laptop$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "software",
                href: "/categories/services/software"
            },
            {
                label: "خدمات منزلية",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$home$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$home$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "home_services",
                href: "/categories/services/home_services"
            },
            {
                label: "تصليح الأجهزة",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$tools$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$tools$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "repair",
                href: "/categories/services/device_repair"
            }
        ]
    },
    {
        name: "الإلكترونيات والكهربائيات",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$mobile$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$mobile$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        slug: "electronics",
        items: [
            {
                label: "موبايلات",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$mobile$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$mobile$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "mobiles",
                href: "/categories/electronics/mobiles"
            },
            {
                label: "أجهزة لوحية",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$tablet$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$tablet$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "tablets",
                href: "/categories/electronics/tablets"
            },
            {
                label: "أجهزة كمبيوتر ولابتوب",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$laptop$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$laptop$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "pc",
                href: "/categories/electronics/computers"
            },
            {
                label: "شاشات وأجهزة مكتبية",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$screen$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$screen$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "screens",
                href: "/categories/electronics/screens"
            },
            {
                label: "ألعاب الفيديو",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$gaming$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$gaming$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "games",
                href: "/categories/electronics/gaming"
            },
            {
                label: "تلفزيونات وأجهزة عرض",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$screen$2d$show$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$screen$2d$show$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "tv",
                href: "/categories/electronics/tv_projectors"
            },
            {
                label: "أجهزة منزلية",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$household$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$household$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "home_appliances",
                href: "/categories/electronics/household_appliances"
            },
            {
                label: "قطع وملحقات",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$puzzle$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$puzzle$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "parts_accessories",
                href: "/categories/electronics/accessories"
            },
            {
                label: "ملحقات صوت وفيديو",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$listen$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$listen$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "audio_video_accessories",
                href: "/categories/electronics/audio_video"
            }
        ]
    },
    {
        name: "العقارات",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$houses$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$houses$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        slug: "real_estate",
        items: [
            {
                label: "شقق",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$building$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$building$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "apartments",
                href: "/categories/real_estate/apartments"
            },
            {
                label: "منازل",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$home$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$home$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "houses",
                href: "/categories/real_estate/houses"
            },
            {
                label: "أراضي",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$land$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$land$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "outdoor-space",
                href: "/categories/real_estate/lands"
            },
            {
                label: "مكاتب ومحلات",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$store$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$store$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "shops_offices",
                href: "/categories/real_estate/offices"
            },
            {
                label: "شاليهات ومزارع",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$barn$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$barn$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "chalets",
                href: "/categories/real_estate/chalets"
            },
            {
                label: "خدمات النقل والترحيل",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$truck$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$truck$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "transportation",
                href: "/categories/real_estate/moving_services"
            }
        ]
    },
    {
        name: "الحيوانات الأليفة",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$pets$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$pets$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        slug: "pets",
        items: [
            {
                label: "الكلاب",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$dog$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$dog$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "dogs",
                href: "/categories/pets/dogs"
            },
            {
                label: "القطط",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$cat$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$cat$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "cats",
                href: "/categories/pets/cats"
            },
            {
                label: "أسماك",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$fish$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$fish$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "fishes",
                href: "/categories/pets/fish"
            },
            {
                label: "خيول",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$horse$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$horse$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "horses",
                href: "/categories/pets/horses"
            },
            {
                label: "طيور ومزرعة",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$bird$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$bird$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "birds",
                href: "/categories/pets/birds"
            },
            {
                label: "مستلزمات ورعاية",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$pets$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$pets$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "supplies_care",
                href: "/categories/pets/supplies"
            }
        ]
    },
    {
        name: "الدورات والتعليم",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$books$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$books$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        slug: "learning",
        items: [
            {
                label: "دروس خصوصية",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$books$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$books$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "private_leasons",
                href: "/categories/education/tutoring"
            },
            {
                label: "دورات كمبيوتر",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$laptop$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$laptop$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "cs_courses",
                href: "/categories/education/computer_courses"
            },
            {
                label: "فن وتصميم",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$art$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$art$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "art",
                href: "/categories/education/art_design"
            },
            {
                label: "طبخ وخبز",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$cook$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$cook$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "cooking",
                href: "/categories/education/cooking"
            },
            {
                label: "رياضة وصحة",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$gym$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$gym$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "sport",
                href: "/categories/education/fitness"
            },
            {
                label: "موسيقى وغناء",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$resourses$2f$mic$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$resourses$2f$mic$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                slug: "music",
                href: "/categories/education/music"
            }
        ]
    }
];
}}),
"[project]/app/sections/Navbar.tsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/app/sections/Navbar.tsx'

Expected unicode escape`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__61ab06c1._.js.map