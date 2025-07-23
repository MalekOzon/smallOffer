(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/lib/dashboardServices/dashboardMutation.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useChangePasswordDash": (()=>useChangePasswordDash),
    "useDeleteAccount": (()=>useDeleteAccount),
    "useEmailNotificationsDash": (()=>useEmailNotificationsDash),
    "useFeedbackEmail": (()=>useFeedbackEmail),
    "useSetUserInfo": (()=>useSetUserInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/loginservices/mutations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dashboardServices$2f$dashboardApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/dashboardServices/dashboardApi.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
;
;
;
;
function useChangePasswordDash(setNotification) {
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useChangePasswordDash.useMutation": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dashboardServices$2f$dashboardApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["changePasswordDash"])(data)
        }["useChangePasswordDash.useMutation"],
        onMutate: {
            "useChangePasswordDash.useMutation": ()=>{
                console.log("جاري تغيير كلمة المرور...");
            }
        }["useChangePasswordDash.useMutation"],
        onError: {
            "useChangePasswordDash.useMutation": (error)=>{
                console.log("Error in change password");
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    const detail = error.response?.data?.detail;
                    const errors = error.response?.data?.errors;
                    const messages = errors ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMessages"])(errors) : [];
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
        }["useChangePasswordDash.useMutation"],
        onSuccess: {
            "useChangePasswordDash.useMutation": (data)=>{
                console.log("Password Changed");
                setNotification({
                    message: data.detail,
                    type: "success"
                });
            }
        }["useChangePasswordDash.useMutation"],
        onSettled: {
            "useChangePasswordDash.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "accounts/dashboard/change-password/"
                    ]
                });
            }
        }["useChangePasswordDash.useMutation"]
    });
}
_s(useChangePasswordDash, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useEmailNotificationsDash(setNotification) {
    _s1();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useEmailNotificationsDash.useMutation": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dashboardServices$2f$dashboardApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailNotificationsDash"])(data)
        }["useEmailNotificationsDash.useMutation"],
        onMutate: {
            "useEmailNotificationsDash.useMutation": ()=>{
                console.log("جاري تغيير  اعدادات الاشعارات...");
            }
        }["useEmailNotificationsDash.useMutation"],
        onError: {
            "useEmailNotificationsDash.useMutation": (error)=>{
                console.log("Error in change password");
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    const detail = error.response?.data?.detail;
                    const errors = error.response?.data?.errors;
                    const messages = errors ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMessages"])(errors) : [];
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
        }["useEmailNotificationsDash.useMutation"],
        onSuccess: {
            "useEmailNotificationsDash.useMutation": (data)=>{
                console.log("NOTI Changed");
                setNotification({
                    message: data.detail,
                    type: "success"
                });
            }
        }["useEmailNotificationsDash.useMutation"],
        onSettled: {
            "useEmailNotificationsDash.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "accounts/dashboard/settings/"
                    ]
                });
            }
        }["useEmailNotificationsDash.useMutation"]
    });
}
_s1(useEmailNotificationsDash, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useDeleteAccount(setNotification) {
    _s2();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useDeleteAccount.useMutation": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dashboardServices$2f$dashboardApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteAccount"])(data)
        }["useDeleteAccount.useMutation"],
        onMutate: {
            "useDeleteAccount.useMutation": ()=>{
                console.log("جاري حذف الحساب...");
            }
        }["useDeleteAccount.useMutation"],
        onError: {
            "useDeleteAccount.useMutation": (error)=>{
                console.log("Error in Delete Account");
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    const detail = error.response?.data?.detail;
                    const errors = error.response?.data?.errors;
                    const messages = errors ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMessages"])(errors) : [];
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
        }["useDeleteAccount.useMutation"],
        onSuccess: {
            "useDeleteAccount.useMutation": (data)=>{
                console.log("Account DELETED");
                setNotification({
                    message: data.detail,
                    type: "success"
                });
            }
        }["useDeleteAccount.useMutation"],
        onSettled: {
            "useDeleteAccount.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "accounts/dashboard/settings/"
                    ]
                });
            }
        }["useDeleteAccount.useMutation"]
    });
}
_s2(useDeleteAccount, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useFeedbackEmail(setNotification) {
    _s3();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useFeedbackEmail.useMutation": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dashboardServices$2f$dashboardApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["feedbackEmail"])(data)
        }["useFeedbackEmail.useMutation"],
        onMutate: {
            "useFeedbackEmail.useMutation": ()=>{
                console.log("جاري ارسال الايميل ...");
            }
        }["useFeedbackEmail.useMutation"],
        onError: {
            "useFeedbackEmail.useMutation": (error)=>{
                console.log("Error in Send Email");
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    const detail = error.response?.data?.detail;
                    const errors = error.response?.data?.errors;
                    const messages = errors ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMessages"])(errors) : [];
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
        }["useFeedbackEmail.useMutation"],
        onSuccess: {
            "useFeedbackEmail.useMutation": (data)=>{
                console.log("Email Send Done");
                setNotification({
                    message: data.detail,
                    type: "success"
                });
            }
        }["useFeedbackEmail.useMutation"],
        onSettled: {
            "useFeedbackEmail.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "accounts/dashboard/settings/feedback/"
                    ]
                });
            }
        }["useFeedbackEmail.useMutation"]
    });
}
_s3(useFeedbackEmail, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useSetUserInfo(setNotification) {
    _s4();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useSetUserInfo.useMutation": (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dashboardServices$2f$dashboardApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setUserInfo"])(data)
        }["useSetUserInfo.useMutation"],
        onMutate: {
            "useSetUserInfo.useMutation": ()=>{
                console.log("جاري تعديل البيانات  ...");
            }
        }["useSetUserInfo.useMutation"],
        onError: {
            "useSetUserInfo.useMutation": (error)=>{
                console.log("Error in Edit Info");
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    const detail = error.response?.data?.detail;
                    const errors = error.response?.data?.errors;
                    const messages = errors ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$loginservices$2f$mutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMessages"])(errors) : [];
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
        }["useSetUserInfo.useMutation"],
        onSuccess: {
            "useSetUserInfo.useMutation": (data)=>{
                console.log("data: ", data);
                setNotification({
                    message: data.detail,
                    type: "success"
                });
            }
        }["useSetUserInfo.useMutation"],
        onSettled: {
            "useSetUserInfo.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "accounts/dashboard/"
                    ]
                });
            }
        }["useSetUserInfo.useMutation"]
    });
} // ---------------------------------------------------------------------------------------------------------------------------
_s4(useSetUserInfo, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/dashboard/profile/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/v3/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dashboardServices$2f$dashboardMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/dashboardServices/dashboardMutation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const countryCallingCodes = [
    "+1",
    "+7",
    "+20",
    "+27",
    "+30",
    "+31",
    "+32",
    "+33",
    "+34",
    "+36",
    "+39",
    "+40",
    "+41",
    "+44",
    "+45",
    "+46",
    "+47",
    "+48",
    "+49",
    "+51",
    "+52",
    "+53",
    "+54",
    "+55",
    "+56",
    "+57",
    "+58",
    "+60",
    "+61",
    "+62",
    "+63",
    "+64",
    "+65",
    "+66",
    "+81",
    "+82",
    "+84",
    "+86",
    "+90",
    "+91",
    "+92",
    "+93",
    "+94",
    "+95",
    "+98",
    "+211",
    "+212",
    "+213",
    "+216",
    "+218",
    "+220",
    "+221",
    "+222",
    "+223",
    "+224",
    "+225",
    "+226",
    "+227",
    "+228",
    "+229",
    "+230",
    "+231",
    "+232",
    "+233",
    "+234",
    "+235",
    "+236",
    "+237",
    "+238",
    "+239",
    "+240",
    "+241",
    "+242",
    "+243",
    "+244",
    "+245",
    "+246",
    "+247",
    "+248",
    "+249",
    "+250",
    "+251",
    "+252",
    "+253",
    "+254",
    "+255",
    "+256",
    "+257",
    "+258",
    "+260",
    "+261",
    "+262",
    "+263",
    "+264",
    "+265",
    "+266",
    "+267",
    "+268",
    "+269",
    "+290",
    "+291",
    "+297",
    "+298",
    "+299",
    "+350",
    "+351",
    "+352",
    "+353",
    "+354",
    "+355",
    "+356",
    "+357",
    "+358",
    "+359",
    "+370",
    "+371",
    "+372",
    "+373",
    "+374",
    "+375",
    "+376",
    "+377",
    "+378",
    "+380",
    "+381",
    "+382",
    "+385",
    "+386",
    "+387",
    "+389",
    "+420",
    "+421",
    "+423",
    "+500",
    "+501",
    "+502",
    "+503",
    "+504",
    "+505",
    "+506",
    "+507",
    "+508",
    "+509",
    "+590",
    "+591",
    "+592",
    "+593",
    "+594",
    "+595",
    "+596",
    "+597",
    "+598",
    "+599",
    "+670",
    "+672",
    "+673",
    "+674",
    "+675",
    "+676",
    "+677",
    "+678",
    "+679",
    "+680",
    "+681",
    "+682",
    "+683",
    "+685",
    "+686",
    "+687",
    "+688",
    "+689",
    "+690",
    "+691",
    "+692",
    "+850",
    "+852",
    "+853",
    "+855",
    "+856",
    "+880",
    "+886",
    "+960",
    "+961",
    "+962",
    "+963",
    "+964",
    "+965",
    "+966",
    "+967",
    "+968",
    "+970",
    "+971",
    "+972",
    "+973",
    "+974",
    "+975",
    "+976",
    "+977",
    "+992",
    "+993",
    "+994",
    "+995",
    "+996",
    "+998"
];
// تأكد من ترتيب الرموز من الأطول إلى الأقصر لتجنب مشاكل التداخل
countryCallingCodes.sort((a, b)=>b.length - a.length);
function extractCountryCode(phone) {
    if (!phone) return null; // تحقق من أن phone ليس null أو undefined
    for (const code of countryCallingCodes){
        if (phone.startsWith(code)) {
            return code;
        }
    }
    return null; // لم يتم العثور على رمز دولة مطابق
}
// تعريف الـ Zod schema
const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("يرجى إدخال بريد إلكتروني صحيح."),
    firstName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "الاسم الأول يجب أن يكون أطول من حرفين"),
    lastName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "الاسم الأخير يجب أن يكون أطول من حرفين"),
    username: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "اسم المستخدم يجب أن يكون أطول من 2 أحرف"),
    phoneCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    phoneNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(9, "رقم الهاتف غير صحيح"),
    city: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    hood: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "المنطقة يجب أن تكون صحيحة"),
    detailed_location: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(5, "تفاصيل العنوان يجب أن تكون صحيحة"),
    profile_image: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].instanceof(File),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    ])
});
const ProfileForm = ()=>{
    _s();
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { data, isLoading } = useUserInfo();
    const setUserInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dashboardServices$2f$dashboardMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetUserInfo"])();
    const [selectedCity, setSelectedCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(schema),
        defaultValues: {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            phoneCode: "963",
            phoneNumber: "",
            city: "",
            hood: "",
            detailed_location: "",
            profile_image: ""
        }
    });
    const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = form;
    const coverImage = watch("profile_image");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileForm.useEffect": ()=>{
            if (!isLoading && data) {
                const phone = data.phone || "";
                const code = phone.slice(0, 3) || "963";
                const localNumber = phone.slice(3) || "";
                const cityFromApi = cities.find({
                    "ProfileForm.useEffect": (city)=>city.value === data.city
                }["ProfileForm.useEffect"])?.value;
                setSelectedCity(cityFromApi || "");
                reset({
                    firstName: data.first_name || "",
                    lastName: data.last_name || "",
                    username: data.username || "",
                    email: data.email || "",
                    phoneCode: code,
                    phoneNumber: localNumber,
                    city: data.city || cityFromApi,
                    hood: data.hood || "",
                    detailed_location: data.detailed_location || "",
                    profile_image: data.profile_image || ""
                });
            }
        }
    }["ProfileForm.useEffect"], [
        isLoading,
        data,
        reset
    ]);
    const handleImageChange = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
            setValue("profile_image", file, {
                shouldValidate: true,
                shouldDirty: true
            });
        }
    };
    const onSubmit = (values)=>{
        const formData = new FormData();
        formData.append("first_name", values.firstName);
        formData.append("last_name", values.lastName);
        formData.append("username", values.username);
        formData.append("email", values.email);
        formData.append("phone", values.phoneCode + values.phoneNumber);
        formData.append("city", values.city);
        formData.append("hood", values.hood);
        formData.append("detailed_location", values.detailed_location);
        if (values.profile_image instanceof File) {
            formData.append("profile_image", values.profile_image);
        }
        setUserInfo.mutate(formData);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Form, {
        ...form,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit(onSubmit),
            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-1 md:col-span-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "profile_image",
                            children: "الصورة الشخصية"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/profile/page.tsx",
                            lineNumber: 374,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-32 h-32 border rounded-full overflow-hidden mb-2",
                            children: preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: preview,
                                alt: "preview",
                                width: 128,
                                height: 128,
                                className: "object-cover w-full h-full"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/profile/page.tsx",
                                lineNumber: 377,
                                columnNumber: 15
                            }, this) : typeof coverImage === "string" && coverImage !== "" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: coverImage,
                                alt: "current",
                                width: 128,
                                height: 128,
                                className: "object-cover w-full h-full"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/profile/page.tsx",
                                lineNumber: 385,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center w-full h-full text-4xl text-cgreen",
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/profile/page.tsx",
                                lineNumber: 393,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/profile/page.tsx",
                            lineNumber: 375,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                            type: "file",
                            accept: "image/*",
                            id: "profile_image",
                            onChange: handleImageChange
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/profile/page.tsx",
                            lineNumber: 398,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/profile/page.tsx",
                    lineNumber: 373,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                    label: "الاسم الأول",
                    ...register("firstName"),
                    error: errors.firstName?.message
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/profile/page.tsx",
                    lineNumber: 407,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                    label: "الاسم الأخير",
                    ...register("lastName"),
                    error: errors.lastName?.message
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/profile/page.tsx",
                    lineNumber: 414,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                    label: "اسم المستخدم",
                    ...register("username"),
                    error: errors.username?.message
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/profile/page.tsx",
                    lineNumber: 421,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                    label: "البريد الإلكتروني",
                    ...register("email"),
                    error: errors.email?.message
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/profile/page.tsx",
                    lineNumber: 428,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                            label: "رمز الدولة",
                            className: "w-20",
                            ...register("phoneCode"),
                            error: errors.phoneCode?.message
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/profile/page.tsx",
                            lineNumber: 436,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                            label: "رقم الهاتف",
                            ...register("phoneNumber"),
                            error: errors.phoneNumber?.message
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/profile/page.tsx",
                            lineNumber: 442,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/profile/page.tsx",
                    lineNumber: 435,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectInput, {
                    label: "المحافظة",
                    options: cities,
                    value: selectedCity,
                    onChange: (value)=>{
                        setValue("city", value, {
                            shouldDirty: true,
                            shouldValidate: true
                        });
                        setSelectedCity(value);
                    },
                    error: errors.city?.message
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/profile/page.tsx",
                    lineNumber: 450,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                    label: "المنطقة",
                    ...register("hood"),
                    error: errors.hood?.message
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/profile/page.tsx",
                    lineNumber: 465,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextareaInput, {
                    label: "تفاصيل إضافية",
                    ...register("detailed_location"),
                    error: errors.detailed_location?.message
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/profile/page.tsx",
                    lineNumber: 472,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-1 md:col-span-2 mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        type: "submit",
                        className: "w-full",
                        children: "حفظ التعديلات"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/profile/page.tsx",
                        lineNumber: 480,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/profile/page.tsx",
                    lineNumber: 479,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/profile/page.tsx",
            lineNumber: 368,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/dashboard/profile/page.tsx",
        lineNumber: 367,
        columnNumber: 5
    }, this);
};
_s(ProfileForm, "btdwDAKg+ma/5hTWO4t2mGKDHpw=", true, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dashboardServices$2f$dashboardMutation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetUserInfo"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = ProfileForm;
const __TURBOPACK__default__export__ = EditProfilePage;
var _c;
__turbopack_context__.k.register(_c, "ProfileForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_8a57b535._.js.map