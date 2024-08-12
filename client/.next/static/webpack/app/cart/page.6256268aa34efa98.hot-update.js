"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/cart/page",{

/***/ "(app-pages-browser)/./src/context/cartContext.js":
/*!************************************!*\
  !*** ./src/context/cartContext.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: function() { return /* binding */ CartProvider; },\n/* harmony export */   useCart: function() { return /* binding */ useCart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_getAuthor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/getAuthor */ \"(app-pages-browser)/./src/utils/getAuthor.js\");\n/* harmony import */ var _utils_fetchUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/fetchUser */ \"(app-pages-browser)/./src/utils/fetchUser.js\");\n/* __next_internal_client_entry_do_not_use__ CartProvider,useCart auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CartProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const { dataUserLog, setUserId } = (0,_utils_fetchUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const { isLogIn, userId } = (0,_utils_getAuthor__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [cartLength, setCartLength] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isLogIn) {\n            var _dataUserLog_cart;\n            setUserId(userId);\n            setCart((dataUserLog === null || dataUserLog === void 0 ? void 0 : dataUserLog.cart) || []);\n            const length = dataUserLog === null || dataUserLog === void 0 ? void 0 : (_dataUserLog_cart = dataUserLog.cart) === null || _dataUserLog_cart === void 0 ? void 0 : _dataUserLog_cart.length;\n            if (length) {\n                setCartLength(length);\n            }\n        }\n    }, [\n        isLogIn,\n        userId,\n        setUserId,\n        dataUserLog\n    ]);\n    console.log(dataUserLog.cart);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cart,\n            setCart,\n            cartLength,\n            setCartLength\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\context\\\\cartContext.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CartProvider, \"vLhRe9T8Qumu1V2LEy3RiQc0OhI=\");\n_c = CartProvider;\nconst useCart = ()=>{\n    _s1();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n    if (!context) {\n        throw new Error(\"useCart must be used within a CartProvider\");\n    }\n    return context;\n};\n_s1(useCart, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nvar _c;\n$RefreshReg$(_c, \"CartProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L2NhcnRDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM4RTtBQUN0QztBQUNFO0FBQzFDLE1BQU1PLDRCQUFjTixvREFBYUE7QUFFMUIsTUFBTU8sZUFBZTtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDdkMsTUFBTSxFQUFFQyxXQUFXLEVBQUVDLFNBQVMsRUFBRSxHQUFHTCw0REFBU0E7SUFDNUMsTUFBTSxFQUFFTSxPQUFPLEVBQUVDLE1BQU0sRUFBRSxHQUFHUiw0REFBT0E7SUFDbkMsTUFBTSxDQUFDUyxNQUFNQyxRQUFRLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsTUFBTSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFDO0lBQzdDQyxnREFBU0EsQ0FBQztRQUNSLElBQUlRLFNBQVM7Z0JBR0lGO1lBRmZDLFVBQVVFO1lBQ1ZFLFFBQVFMLENBQUFBLHdCQUFBQSxrQ0FBQUEsWUFBYUksSUFBSSxLQUFJLEVBQUU7WUFDL0IsTUFBTUksU0FBU1Isd0JBQUFBLG1DQUFBQSxvQkFBQUEsWUFBYUksSUFBSSxjQUFqQkosd0NBQUFBLGtCQUFtQlEsTUFBTTtZQUN4QyxJQUFJQSxRQUFRO2dCQUNWRCxjQUFjQztZQUNoQjtRQUNGO0lBQ0YsR0FBRztRQUFDTjtRQUFTQztRQUFRRjtRQUFXRDtLQUFZO0lBQzVDUyxRQUFRQyxHQUFHLENBQUNWLFlBQVlJLElBQUk7SUFDNUIscUJBQ0UsOERBQUNQLFlBQVljLFFBQVE7UUFBQ0MsT0FBTztZQUFFUjtZQUFNQztZQUFTQztZQUFZQztRQUFjO2tCQUNyRVI7Ozs7OztBQUdQLEVBQUU7R0FyQldEO0tBQUFBO0FBdUJOLE1BQU1lLFVBQVU7O0lBQ3JCLE1BQU1DLFVBQVV0QixpREFBVUEsQ0FBQ0s7SUFDM0IsSUFBSSxDQUFDaUIsU0FBUztRQUNaLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE9BQU9EO0FBQ1QsRUFBRTtJQU5XRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9jYXJ0Q29udGV4dC5qcz8yZDQ5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZ2V0QXV0aCBmcm9tIFwiQC91dGlscy9nZXRBdXRob3JcIjtcclxuaW1wb3J0IGZldGNoVXNlciBmcm9tIFwiQC91dGlscy9mZXRjaFVzZXJcIjtcclxuY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YVVzZXJMb2csIHNldFVzZXJJZCB9ID0gZmV0Y2hVc2VyKCk7XHJcbiAgY29uc3QgeyBpc0xvZ0luLCB1c2VySWQgfSA9IGdldEF1dGgoKTtcclxuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NhcnRMZW5ndGgsIHNldENhcnRMZW5ndGhdID0gdXNlU3RhdGUoMCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc0xvZ0luKSB7XHJcbiAgICAgIHNldFVzZXJJZCh1c2VySWQpO1xyXG4gICAgICBzZXRDYXJ0KGRhdGFVc2VyTG9nPy5jYXJ0IHx8IFtdKTtcclxuICAgICAgY29uc3QgbGVuZ3RoID0gZGF0YVVzZXJMb2c/LmNhcnQ/Lmxlbmd0aDtcclxuICAgICAgaWYgKGxlbmd0aCkge1xyXG4gICAgICAgIHNldENhcnRMZW5ndGgobGVuZ3RoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtpc0xvZ0luLCB1c2VySWQsIHNldFVzZXJJZCwgZGF0YVVzZXJMb2ddKTtcclxuICBjb25zb2xlLmxvZyhkYXRhVXNlckxvZy5jYXJ0KVxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY2FydCwgc2V0Q2FydCwgY2FydExlbmd0aCwgc2V0Q2FydExlbmd0aCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUNhcnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xyXG4gIGlmICghY29udGV4dCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlQ2FydCBtdXN0IGJlIHVzZWQgd2l0aGluIGEgQ2FydFByb3ZpZGVyXCIpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldEF1dGgiLCJmZXRjaFVzZXIiLCJDYXJ0Q29udGV4dCIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwiZGF0YVVzZXJMb2ciLCJzZXRVc2VySWQiLCJpc0xvZ0luIiwidXNlcklkIiwiY2FydCIsInNldENhcnQiLCJjYXJ0TGVuZ3RoIiwic2V0Q2FydExlbmd0aCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ2FydCIsImNvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/cartContext.js\n"));

/***/ })

});