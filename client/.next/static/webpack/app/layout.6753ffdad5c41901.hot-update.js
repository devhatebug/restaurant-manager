"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/context/cartContext.js":
/*!************************************!*\
  !*** ./src/context/cartContext.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: function() { return /* binding */ CartProvider; },\n/* harmony export */   useCart: function() { return /* binding */ useCart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_getAuthor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/getAuthor */ \"(app-pages-browser)/./src/utils/getAuthor.js\");\n/* harmony import */ var _utils_fetchUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/fetchUser */ \"(app-pages-browser)/./src/utils/fetchUser.js\");\n/* __next_internal_client_entry_do_not_use__ CartProvider,useCart auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CartProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const { dataUserLog, setUserId } = (0,_utils_fetchUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const { isLogIn, userId } = (0,_utils_getAuthor__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [cartLength, setCartLength] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isLogIn) {\n            var _dataUserLog_cart;\n            setUserId(userId);\n            setCart((dataUserLog === null || dataUserLog === void 0 ? void 0 : dataUserLog.cart) || []);\n            const length = dataUserLog === null || dataUserLog === void 0 ? void 0 : (_dataUserLog_cart = dataUserLog.cart) === null || _dataUserLog_cart === void 0 ? void 0 : _dataUserLog_cart.length;\n            if (length) {\n                setCartLength(length);\n            }\n        }\n    }, [\n        isLogIn,\n        userId,\n        setUserId,\n        dataUserLog\n    ]);\n    console.log(dataUserLog === null || dataUserLog === void 0 ? void 0 : dataUserLog.cart);\n    console.log(cart);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cart,\n            setCart,\n            cartLength,\n            setCartLength\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\context\\\\cartContext.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CartProvider, \"vLhRe9T8Qumu1V2LEy3RiQc0OhI=\");\n_c = CartProvider;\nconst useCart = ()=>{\n    _s1();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n    if (!context) {\n        throw new Error(\"useCart must be used within a CartProvider\");\n    }\n    return context;\n};\n_s1(useCart, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nvar _c;\n$RefreshReg$(_c, \"CartProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L2NhcnRDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM4RTtBQUN0QztBQUNFO0FBQzFDLE1BQU1PLDRCQUFjTixvREFBYUE7QUFFMUIsTUFBTU8sZUFBZTtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDdkMsTUFBTSxFQUFFQyxXQUFXLEVBQUVDLFNBQVMsRUFBRSxHQUFHTCw0REFBU0E7SUFDNUMsTUFBTSxFQUFFTSxPQUFPLEVBQUVDLE1BQU0sRUFBRSxHQUFHUiw0REFBT0E7SUFDbkMsTUFBTSxDQUFDUyxNQUFNQyxRQUFRLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsTUFBTSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFDO0lBQzdDQyxnREFBU0EsQ0FBQztRQUNSLElBQUlRLFNBQVM7Z0JBR0lGO1lBRmZDLFVBQVVFO1lBQ1ZFLFFBQVFMLENBQUFBLHdCQUFBQSxrQ0FBQUEsWUFBYUksSUFBSSxLQUFJLEVBQUU7WUFDL0IsTUFBTUksU0FBU1Isd0JBQUFBLG1DQUFBQSxvQkFBQUEsWUFBYUksSUFBSSxjQUFqQkosd0NBQUFBLGtCQUFtQlEsTUFBTTtZQUN4QyxJQUFJQSxRQUFRO2dCQUNWRCxjQUFjQztZQUNoQjtRQUNGO0lBQ0YsR0FBRztRQUFDTjtRQUFTQztRQUFRRjtRQUFXRDtLQUFZO0lBQzVDUyxRQUFRQyxHQUFHLENBQUNWLHdCQUFBQSxrQ0FBQUEsWUFBYUksSUFBSTtJQUM3QkssUUFBUUMsR0FBRyxDQUFDTjtJQUNaLHFCQUNFLDhEQUFDUCxZQUFZYyxRQUFRO1FBQUNDLE9BQU87WUFBRVI7WUFBTUM7WUFBU0M7WUFBWUM7UUFBYztrQkFDckVSOzs7Ozs7QUFHUCxFQUFFO0dBdEJXRDtLQUFBQTtBQXdCTixNQUFNZSxVQUFVOztJQUNyQixNQUFNQyxVQUFVdEIsaURBQVVBLENBQUNLO0lBQzNCLElBQUksQ0FBQ2lCLFNBQVM7UUFDWixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFDQSxPQUFPRDtBQUNULEVBQUU7SUFOV0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvY2FydENvbnRleHQuanM/MmQ0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGdldEF1dGggZnJvbSBcIkAvdXRpbHMvZ2V0QXV0aG9yXCI7XHJcbmltcG9ydCBmZXRjaFVzZXIgZnJvbSBcIkAvdXRpbHMvZmV0Y2hVc2VyXCI7XHJcbmNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB7IGRhdGFVc2VyTG9nLCBzZXRVc2VySWQgfSA9IGZldGNoVXNlcigpO1xyXG4gIGNvbnN0IHsgaXNMb2dJbiwgdXNlcklkIH0gPSBnZXRBdXRoKCk7XHJcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjYXJ0TGVuZ3RoLCBzZXRDYXJ0TGVuZ3RoXSA9IHVzZVN0YXRlKDApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNMb2dJbikge1xyXG4gICAgICBzZXRVc2VySWQodXNlcklkKTtcclxuICAgICAgc2V0Q2FydChkYXRhVXNlckxvZz8uY2FydCB8fCBbXSk7XHJcbiAgICAgIGNvbnN0IGxlbmd0aCA9IGRhdGFVc2VyTG9nPy5jYXJ0Py5sZW5ndGg7XHJcbiAgICAgIGlmIChsZW5ndGgpIHtcclxuICAgICAgICBzZXRDYXJ0TGVuZ3RoKGxlbmd0aCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbaXNMb2dJbiwgdXNlcklkLCBzZXRVc2VySWQsIGRhdGFVc2VyTG9nXSk7XHJcbiAgY29uc29sZS5sb2coZGF0YVVzZXJMb2c/LmNhcnQpXHJcbiAgY29uc29sZS5sb2coY2FydClcclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNhcnQsIHNldENhcnQsIGNhcnRMZW5ndGgsIHNldENhcnRMZW5ndGggfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDYXJ0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcclxuICBpZiAoIWNvbnRleHQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcInVzZUNhcnQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIENhcnRQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRBdXRoIiwiZmV0Y2hVc2VyIiwiQ2FydENvbnRleHQiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImRhdGFVc2VyTG9nIiwic2V0VXNlcklkIiwiaXNMb2dJbiIsInVzZXJJZCIsImNhcnQiLCJzZXRDYXJ0IiwiY2FydExlbmd0aCIsInNldENhcnRMZW5ndGgiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUNhcnQiLCJjb250ZXh0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/cartContext.js\n"));

/***/ })

});