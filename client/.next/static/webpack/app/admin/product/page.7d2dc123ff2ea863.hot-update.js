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

/***/ "(app-pages-browser)/./src/app/admin/product/page.js":
/*!***************************************!*\
  !*** ./src/app/admin/product/page.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_tableProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/tableProducts */ \"(app-pages-browser)/./src/components/tableProducts.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Product = ()=>{\n    _s();\n    const URL_API = \"http://127.0.0.1:8080/api-menu/menu\";\n    const [dataProducts, setDataProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [middleCheck, setMiddleCheck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [lengthPagination, setLengthPagination] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const limit = 10;\n    const getAllProducts = async ()=>{\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"\".concat(URL_API));\n            setDataProducts(res.data);\n            const lenghtAllProducts = res.data.length;\n            setLengthPagination(Math.ceil(lenghtAllProducts / limit));\n            setMiddleCheck(0);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getAllProducts();\n    }, [\n        middleCheck\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"products ml-0 sm:ml-[230px] pl-[10px] pr-[10px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between pt-[30px] mb-[50px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title-page\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"font-semibold sm:text-2xl text-base\",\n                            children: \"Danh s\\xe1ch sản phẩm\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"search-box\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center max-w-sm mx-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"simple-search\",\n                                    className: \"sr-only\",\n                                    children: \"Search\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative w-full\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                className: \"w-4 h-4 text-gray-500 dark:text-gray-400\",\n                                                \"aria-hidden\": \"true\",\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                fill: \"none\",\n                                                viewBox: \"0 0 18 20\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    stroke: \"currentColor\",\n                                                    strokeLinecap: \"round\",\n                                                    strokeLinejoin: \"round\",\n                                                    strokeWidth: \"2\",\n                                                    d: \"M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                                                    lineNumber: 38,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                                                lineNumber: 37,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            id: \"simple-search\",\n                                            className: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 \",\n                                            placeholder: \"T\\xecm kiếm sản phẩm\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            className: \"w-4 h-4\",\n                                            \"aria-hidden\": \"true\",\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            fill: \"none\",\n                                            viewBox: \"0 0 20 20\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                stroke: \"currentColor\",\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\",\n                                                strokeWidth: \"2\",\n                                                d: \"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"sr-only\",\n                                            children: \"Search\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"table-users mb-[30px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tableProducts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    products: dataProducts,\n                    middleCheck: middleCheck,\n                    setMiddleCheck: setMiddleCheck,\n                    lengthPagination: lengthPagination,\n                    limit: limit\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Product, \"V4uZTRiCfolJ0ht6/zlGPzhZ1ok=\");\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWRtaW4vcHJvZHVjdC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ21EO0FBQ0k7QUFDN0I7QUFFMUIsTUFBTUssVUFBVTs7SUFDWixNQUFNQyxVQUFXO0lBQ2pCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQTtJQUNoRCxNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDVSxrQkFBa0JDLG9CQUFvQixHQUFHWCwrQ0FBUUE7SUFDeEQsTUFBTVksUUFBUTtJQUNkLE1BQU1DLGlCQUFpQjtRQUNuQixJQUFJO1lBQ0EsTUFBTUMsTUFBTSxNQUFNWCw2Q0FBS0EsQ0FBQ1ksR0FBRyxDQUFDLEdBQVcsT0FBUlY7WUFDL0JFLGdCQUFnQk8sSUFBSUUsSUFBSTtZQUN4QixNQUFNQyxvQkFBb0JILElBQUlFLElBQUksQ0FBQ0UsTUFBTTtZQUN6Q1Asb0JBQW9CUSxLQUFLQyxJQUFJLENBQUNILG9CQUFvQkw7WUFDbERILGVBQWU7UUFDbkIsRUFBRSxPQUFPWSxLQUFLO1lBQ1ZDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDaEI7SUFDSjtJQUNBcEIsZ0RBQVNBLENBQUM7UUFDTlk7SUFDSixHQUFHO1FBQUNMO0tBQVk7SUFDaEIscUJBQ0ksOERBQUNnQjtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0M7NEJBQUdELFdBQVU7c0NBQXNDOzs7Ozs7Ozs7OztrQ0FFeEQsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNFO29DQUFNQyxTQUFRO29DQUFnQkgsV0FBVTs4Q0FBVTs7Ozs7OzhDQUNuRCw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNYLDhEQUFDRDs0Q0FBSUMsV0FBVTtzREFDWCw0RUFBQ0k7Z0RBQUlKLFdBQVU7Z0RBQTJDSyxlQUFZO2dEQUFPQyxPQUFNO2dEQUE2QkMsTUFBSztnREFBT0MsU0FBUTswREFDaEksNEVBQUNDO29EQUFLQyxRQUFPO29EQUFlQyxlQUFjO29EQUFRQyxnQkFBZTtvREFBUUMsYUFBWTtvREFBSUMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7OztzREFHbkcsOERBQUNDOzRDQUFNQyxNQUFLOzRDQUFPQyxJQUFHOzRDQUFnQmpCLFdBQVU7NENBQXlJa0IsYUFBWTs0Q0FBb0JDLFFBQVE7Ozs7Ozs7Ozs7Ozs4Q0FFck8sOERBQUNDO29DQUFPcEIsV0FBVTs7c0RBQ2QsOERBQUNJOzRDQUFJSixXQUFVOzRDQUFVSyxlQUFZOzRDQUFPQyxPQUFNOzRDQUE2QkMsTUFBSzs0Q0FBT0MsU0FBUTtzREFDL0YsNEVBQUNDO2dEQUFLQyxRQUFPO2dEQUFlQyxlQUFjO2dEQUFRQyxnQkFBZTtnREFBUUMsYUFBWTtnREFBSUMsR0FBRTs7Ozs7Ozs7Ozs7c0RBRS9GLDhEQUFDTzs0Q0FBS3JCLFdBQVU7c0RBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUsxQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUN2QixpRUFBYUE7b0JBQ1Y2QyxVQUFVekM7b0JBQ1ZFLGFBQWFBO29CQUNiQyxnQkFBZ0JBO29CQUNoQkMsa0JBQWtCQTtvQkFDbEJFLE9BQU9BOzs7Ozs7Ozs7Ozs7Ozs7OztBQU0zQjtHQTFETVI7S0FBQUE7QUE0RE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hZG1pbi9wcm9kdWN0L3BhZ2UuanM/YTcwNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRhYmxlUHJvZHVjdHMgZnJvbSBcIkAvY29tcG9uZW50cy90YWJsZVByb2R1Y3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBVUkxfQVBJID0gYGh0dHA6Ly8xMjcuMC4wLjE6ODA4MC9hcGktbWVudS9tZW51YDtcclxuICAgIGNvbnN0IFtkYXRhUHJvZHVjdHMsIHNldERhdGFQcm9kdWN0c10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW21pZGRsZUNoZWNrLCBzZXRNaWRkbGVDaGVja10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtsZW5ndGhQYWdpbmF0aW9uLCBzZXRMZW5ndGhQYWdpbmF0aW9uXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBsaW1pdCA9IDEwO1xyXG4gICAgY29uc3QgZ2V0QWxsUHJvZHVjdHMgPSBhc3luYygpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7VVJMX0FQSX1gKTtcclxuICAgICAgICAgICAgc2V0RGF0YVByb2R1Y3RzKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgbGVuZ2h0QWxsUHJvZHVjdHMgPSByZXMuZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgIHNldExlbmd0aFBhZ2luYXRpb24oTWF0aC5jZWlsKGxlbmdodEFsbFByb2R1Y3RzIC8gbGltaXQpKTtcclxuICAgICAgICAgICAgc2V0TWlkZGxlQ2hlY2soMCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRBbGxQcm9kdWN0cygpO1xyXG4gICAgfSwgW21pZGRsZUNoZWNrXSk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cyBtbC0wIHNtOm1sLVsyMzBweF0gcGwtWzEwcHhdIHByLVsxMHB4XVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwdC1bMzBweF0gbWItWzUwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBzbTp0ZXh0LTJ4bCB0ZXh0LWJhc2VcIj5EYW5oIHPDoWNoIHPhuqNuIHBo4bqpbTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWF4LXctc20gbXgtYXV0b1wiPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNpbXBsZS1zZWFyY2hcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+U2VhcmNoPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIHN0YXJ0LTAgZmxleCBpdGVtcy1jZW50ZXIgcHMtMyBwb2ludGVyLWV2ZW50cy1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAxOCAyMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk0zIDV2MTBNMyA1YTIgMiAwIDEgMCAwLTQgMiAyIDAgMCAwIDAgNFptMCAxMGEyIDIgMCAxIDAgMCA0IDIgMiAwIDAgMCAwLTRabTEyIDBhMiAyIDAgMSAwIDAgNCAyIDIgMCAwIDAgMC00Wm0wIDBWNmEzIDMgMCAwIDAtMy0zSDltMS41LTItMiAyIDIgMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzaW1wbGUtc2VhcmNoXCIgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwcy0xMCBwLTIuNSBcIiBwbGFjZWhvbGRlcj1cIlTDrG0ga2nhur9tIHPhuqNuIHBo4bqpbVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMi41IG1zLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy00IGgtNFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIm0xOSAxOS00LTRtMC03QTcgNyAwIDEgMSAxIDhhNyA3IDAgMCAxIDE0IDBaXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+U2VhcmNoPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS11c2VycyBtYi1bMzBweF1cIj5cclxuICAgICAgICAgICAgICAgIDxUYWJsZVByb2R1Y3RzIFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzPXtkYXRhUHJvZHVjdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgbWlkZGxlQ2hlY2s9e21pZGRsZUNoZWNrfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldE1pZGRsZUNoZWNrPXtzZXRNaWRkbGVDaGVja31cclxuICAgICAgICAgICAgICAgICAgICBsZW5ndGhQYWdpbmF0aW9uPXtsZW5ndGhQYWdpbmF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0PXtsaW1pdH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRhYmxlUHJvZHVjdHMiLCJheGlvcyIsIlByb2R1Y3QiLCJVUkxfQVBJIiwiZGF0YVByb2R1Y3RzIiwic2V0RGF0YVByb2R1Y3RzIiwibWlkZGxlQ2hlY2siLCJzZXRNaWRkbGVDaGVjayIsImxlbmd0aFBhZ2luYXRpb24iLCJzZXRMZW5ndGhQYWdpbmF0aW9uIiwibGltaXQiLCJnZXRBbGxQcm9kdWN0cyIsInJlcyIsImdldCIsImRhdGEiLCJsZW5naHRBbGxQcm9kdWN0cyIsImxlbmd0aCIsIk1hdGgiLCJjZWlsIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImg0IiwibGFiZWwiLCJodG1sRm9yIiwic3ZnIiwiYXJpYS1oaWRkZW4iLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94IiwicGF0aCIsInN0cm9rZSIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwiZCIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImJ1dHRvbiIsInNwYW4iLCJwcm9kdWN0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/admin/product/page.js\n"));

/***/ })

});