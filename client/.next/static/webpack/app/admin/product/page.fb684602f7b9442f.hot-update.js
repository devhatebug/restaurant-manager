"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/product/page",{

/***/ "(app-pages-browser)/./src/components/pagination.js":
/*!**************************************!*\
  !*** ./src/components/pagination.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Pagination = (param)=>{\n    let { currentPage, setCurrentPage, lengthPagination } = param;\n    const pages = Array.from({\n        length: lengthPagination\n    }, (_, i)=>i + 1);\n    const prePage = ()=>{\n        if (currentPage > 1) {\n            setCurrentPage(currentPage - 1);\n        }\n    };\n    const nextPage = ()=>{\n        if (currentPage < lengthPagination) {\n            setCurrentPage(currentPage + 1);\n        }\n    };\n    const checkCurrentPage = (e)=>{\n        setCurrentPage(Number(e.target.value));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        \"aria-label\": \"Page navigation example\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"flex items-center -space-x-px h-8 text-sm\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: currentPage === 1 ? true : false,\n                        onClick: prePage,\n                        className: \"flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 \".concat(currentPage === 1 ? \"hover:bg-white hover:text-gray-500 cursor-not-allowed\" : \"\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"sr-only\",\n                                children: \"Previous\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\components\\\\pagination.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"w-2.5 h-2.5 rtl:rotate-180\",\n                                \"aria-hidden\": \"true\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                fill: \"none\",\n                                viewBox: \"0 0 6 10\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    stroke: \"currentColor\",\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    strokeWidth: \"2\",\n                                    d: \"M5 1 1 5l4 4\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\components\\\\pagination.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\components\\\\pagination.js\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\components\\\\pagination.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\components\\\\pagination.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                pages.map((dt, id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: checkCurrentPage,\n                            value: dt,\n                            className: \"flex items-center justify-center px-3 h-8 leading-tight text-black border border-gray-300 hover:bg-gray-100 hover:text-gray-700 \".concat(currentPage === dt ? \"bg-slate-600 text-white\" : \"\"),\n                            children: dt\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\components\\\\pagination.js\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined)\n                    }, id, false, {\n                        fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\components\\\\pagination.js\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: currentPage === lengthPagination ? true : false,\n                        onClick: nextPage,\n                        className: \"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 \".concat(currentPage === lengthPagination ? \"hover:bg-white hover:text-gray-500 cursor-not-allowed\" : \"\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"sr-only\",\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\components\\\\pagination.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"w-2.5 h-2.5 rtl:rotate-180\",\n                                \"aria-hidden\": \"true\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                fill: \"none\",\n                                viewBox: \"0 0 6 10\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    stroke: \"currentColor\",\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    strokeWidth: \"2\",\n                                    d: \"m1 9 4-4-4-4\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\components\\\\pagination.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\components\\\\pagination.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\components\\\\pagination.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\components\\\\pagination.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\components\\\\pagination.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\components\\\\pagination.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3BhZ2luYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsYUFBYTtRQUFDLEVBQUVDLFdBQVcsRUFBRUMsY0FBYyxFQUFFQyxnQkFBZ0IsRUFBRTtJQUNuRSxNQUFNQyxRQUFRQyxNQUFNQyxJQUFJLENBQUM7UUFBRUMsUUFBUUo7SUFBaUIsR0FBRyxDQUFDSyxHQUFHQyxJQUFNQSxJQUFJO0lBRXJFLE1BQU1DLFVBQVU7UUFDZCxJQUFJVCxjQUFjLEdBQUc7WUFDbkJDLGVBQWVELGNBQWM7UUFDL0I7SUFDRjtJQUVBLE1BQU1VLFdBQVc7UUFDZixJQUFJVixjQUFjRSxrQkFBa0I7WUFDbENELGVBQWVELGNBQWM7UUFDL0I7SUFDRjtJQUVBLE1BQU1XLG1CQUFtQixDQUFDQztRQUN4QlgsZUFBZVksT0FBT0QsRUFBRUUsTUFBTSxDQUFDQyxLQUFLO0lBQ3RDO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLGNBQVc7a0JBQ2QsNEVBQUNDO1lBQUdDLFdBQVU7OzhCQUNaLDhEQUFDQzs4QkFDQyw0RUFBQ0M7d0JBQ0NDLFVBQVV0QixnQkFBZ0IsSUFBSSxPQUFPO3dCQUNyQ3VCLFNBQVNkO3dCQUNUVSxXQUFXLDRLQUlWLE9BSENuQixnQkFBZ0IsSUFDWiwwREFDQTs7MENBR04sOERBQUN3QjtnQ0FBS0wsV0FBVTswQ0FBVTs7Ozs7OzBDQUMxQiw4REFBQ007Z0NBQ0NOLFdBQVU7Z0NBQ1ZPLGVBQVk7Z0NBQ1pDLE9BQU07Z0NBQ05DLE1BQUs7Z0NBQ0xDLFNBQVE7MENBRVIsNEVBQUNDO29DQUNDQyxRQUFPO29DQUNQQyxlQUFjO29DQUNkQyxnQkFBZTtvQ0FDZkMsYUFBWTtvQ0FDWkMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFLVGhDLE1BQU1pQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSUMsbUJBQ2QsOERBQUNsQjtrQ0FDQyw0RUFBQ0M7NEJBQ0NFLFNBQVNaOzRCQUNUSSxPQUFPc0I7NEJBQ1BsQixXQUFXLG1JQUVWLE9BRENuQixnQkFBZ0JxQyxLQUFLLDRCQUE0QjtzQ0FHbERBOzs7Ozs7dUJBUklDOzs7Ozs4QkFZWCw4REFBQ2xCOzhCQUNDLDRFQUFDQzt3QkFDQ0MsVUFBVXRCLGdCQUFnQkUsbUJBQW1CLE9BQU87d0JBQ3BEcUIsU0FBU2I7d0JBQ1RTLFdBQVcsNEpBSVYsT0FIQ25CLGdCQUFnQkUsbUJBQ1osMERBQ0E7OzBDQUdOLDhEQUFDc0I7Z0NBQUtMLFdBQVU7MENBQVU7Ozs7OzswQ0FDMUIsOERBQUNNO2dDQUNDTixXQUFVO2dDQUNWTyxlQUFZO2dDQUNaQyxPQUFNO2dDQUNOQyxNQUFLO2dDQUNMQyxTQUFROzBDQUVSLDRFQUFDQztvQ0FDQ0MsUUFBTztvQ0FDUEMsZUFBYztvQ0FDZEMsZ0JBQWU7b0NBQ2ZDLGFBQVk7b0NBQ1pDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFsQjtLQTdGTXBDO0FBK0ZOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3BhZ2luYXRpb24uanM/YjQ3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQYWdpbmF0aW9uID0gKHsgY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlLCBsZW5ndGhQYWdpbmF0aW9uIH0pID0+IHtcclxuICBjb25zdCBwYWdlcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGxlbmd0aFBhZ2luYXRpb24gfSwgKF8sIGkpID0+IGkgKyAxKTtcclxuXHJcbiAgY29uc3QgcHJlUGFnZSA9ICgpID0+IHtcclxuICAgIGlmIChjdXJyZW50UGFnZSA+IDEpIHtcclxuICAgICAgc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgLSAxKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBuZXh0UGFnZSA9ICgpID0+IHtcclxuICAgIGlmIChjdXJyZW50UGFnZSA8IGxlbmd0aFBhZ2luYXRpb24pIHtcclxuICAgICAgc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgKyAxKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjaGVja0N1cnJlbnRQYWdlID0gKGUpID0+IHtcclxuICAgIHNldEN1cnJlbnRQYWdlKE51bWJlcihlLnRhcmdldC52YWx1ZSkpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgYXJpYS1sYWJlbD1cIlBhZ2UgbmF2aWdhdGlvbiBleGFtcGxlXCI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciAtc3BhY2UteC1weCBoLTggdGV4dC1zbVwiPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRQYWdlID09PSAxID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcmVQYWdlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC0zIGgtOCBtcy0wIGxlYWRpbmctdGlnaHQgdGV4dC1ncmF5LTUwMCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWUtMCBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1zLWxnIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOnRleHQtZ3JheS03MDAgJHtcclxuICAgICAgICAgICAgICBjdXJyZW50UGFnZSA9PT0gMVxyXG4gICAgICAgICAgICAgICAgPyBcImhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtZ3JheS01MDAgY3Vyc29yLW5vdC1hbGxvd2VkXCJcclxuICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yLjUgaC0yLjUgcnRsOnJvdGF0ZS0xODBcIlxyXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNiAxMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTUgMSAxIDVsNCA0XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAge3BhZ2VzLm1hcCgoZHQsIGlkKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtpZH0+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtjaGVja0N1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtkdH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC0zIGgtOCBsZWFkaW5nLXRpZ2h0IHRleHQtYmxhY2sgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3Zlcjp0ZXh0LWdyYXktNzAwICR7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZSA9PT0gZHQgPyBcImJnLXNsYXRlLTYwMCB0ZXh0LXdoaXRlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZHR9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50UGFnZSA9PT0gbGVuZ3RoUGFnaW5hdGlvbiA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgb25DbGljaz17bmV4dFBhZ2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTMgaC04IGxlYWRpbmctdGlnaHQgdGV4dC1ncmF5LTUwMCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtZS1sZyBob3ZlcjpiZy1ncmF5LTEwMCBob3Zlcjp0ZXh0LWdyYXktNzAwICR7XHJcbiAgICAgICAgICAgICAgY3VycmVudFBhZ2UgPT09IGxlbmd0aFBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgID8gXCJob3ZlcjpiZy13aGl0ZSBob3Zlcjp0ZXh0LWdyYXktNTAwIGN1cnNvci1ub3QtYWxsb3dlZFwiXHJcbiAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yLjUgaC0yLjUgcnRsOnJvdGF0ZS0xODBcIlxyXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNiAxMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgICAgICBkPVwibTEgOSA0LTQtNC00XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUGFnaW5hdGlvbiIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJsZW5ndGhQYWdpbmF0aW9uIiwicGFnZXMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaSIsInByZVBhZ2UiLCJuZXh0UGFnZSIsImNoZWNrQ3VycmVudFBhZ2UiLCJlIiwiTnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiLCJuYXYiLCJhcmlhLWxhYmVsIiwidWwiLCJjbGFzc05hbWUiLCJsaSIsImJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsInNwYW4iLCJzdmciLCJhcmlhLWhpZGRlbiIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJwYXRoIiwic3Ryb2tlIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwibWFwIiwiZHQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/pagination.js\n"));

/***/ })

});