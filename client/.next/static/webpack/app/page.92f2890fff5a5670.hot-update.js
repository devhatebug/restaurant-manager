"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/utils/handlePro.js":
/*!********************************!*\
  !*** ./src/utils/handlePro.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useProduct: function() { return /* binding */ useProduct; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\nvar _s = $RefreshSig$();\n\n\nconst URL_API = \"http://127.0.0.1:8080/api-menu/menu\";\nconst useProduct = (idAdd)=>{\n    _s();\n    const [proAddToCard, setProAddToCard] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const selectPro = async ()=>{\n            try {\n                const proSelect = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"\".concat(URL_API, \"/\").concat(idAdd));\n                setProAddToCard(proSelect.data);\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        if (idAdd) {\n            selectPro();\n        }\n    }, [\n        idAdd\n    ]);\n    return proAddToCard;\n};\n_s(useProduct, \"/Kq0+fPzSnKFyj+FEr3a5fNW8ek=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy91dGlscy9oYW5kbGVQcm8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEM7QUFDbEI7QUFFMUIsTUFBTUcsVUFBVTtBQUVULE1BQU1DLGFBQWEsQ0FBQ0M7O0lBQ3pCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFDO0lBRWpEQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1PLFlBQVk7WUFDaEIsSUFBSTtnQkFDRixNQUFNQyxZQUFZLE1BQU1QLDZDQUFLQSxDQUFDUSxHQUFHLENBQUMsR0FBY0wsT0FBWEYsU0FBUSxLQUFTLE9BQU5FO2dCQUNoREUsZ0JBQWdCRSxVQUFVRSxJQUFJO1lBQ2hDLEVBQUUsT0FBT0MsS0FBSztnQkFDWkMsUUFBUUMsR0FBRyxDQUFDRjtZQUNkO1FBQ0Y7UUFDQSxJQUFJUCxPQUFPO1lBQ1RHO1FBQ0Y7SUFDRixHQUFHO1FBQUNIO0tBQU07SUFFVixPQUFPQztBQUNULEVBQUU7R0FsQldGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9oYW5kbGVQcm8uanM/MGFjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IFVSTF9BUEkgPSBcImh0dHA6Ly8xMjcuMC4wLjE6ODA4MC9hcGktbWVudS9tZW51XCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUHJvZHVjdCA9IChpZEFkZCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9BZGRUb0NhcmQsIHNldFByb0FkZFRvQ2FyZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdFBybyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwcm9TZWxlY3QgPSBhd2FpdCBheGlvcy5nZXQoYCR7VVJMX0FQSX0vJHtpZEFkZH1gKTtcclxuICAgICAgICBzZXRQcm9BZGRUb0NhcmQocHJvU2VsZWN0LmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgaWYgKGlkQWRkKSB7XHJcbiAgICAgIHNlbGVjdFBybygpO1xyXG4gICAgfVxyXG4gIH0sIFtpZEFkZF0pO1xyXG5cclxuICByZXR1cm4gcHJvQWRkVG9DYXJkO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIlVSTF9BUEkiLCJ1c2VQcm9kdWN0IiwiaWRBZGQiLCJwcm9BZGRUb0NhcmQiLCJzZXRQcm9BZGRUb0NhcmQiLCJzZWxlY3RQcm8iLCJwcm9TZWxlY3QiLCJnZXQiLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/utils/handlePro.js\n"));

/***/ })

});