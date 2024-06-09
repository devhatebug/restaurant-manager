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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_tableProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/tableProducts */ \"(app-pages-browser)/./src/components/tableProducts.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Product = ()=>{\n    _s();\n    const URL_API = \"http://127.0.0.1:8080/api-menu/menu\";\n    const [dataProducts, setDataProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [middleCheck, setMiddleCheck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [lengthPagination, setLengthPagination] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isSuccess, setIsSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [isErr, setIsErr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const limit = 10;\n    const getAllProducts = async ()=>{\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"\".concat(URL_API));\n            setDataProducts(res.data);\n            const lenghtAllProducts = res.data.length;\n            setLengthPagination(Math.ceil(lenghtAllProducts / limit));\n            setMiddleCheck(0);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getAllProducts();\n    }, [\n        middleCheck\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"products ml-0 sm:ml-[260px] pl-[10px] pr-[10px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between pt-[30px] mb-[50px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title-page\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"font-semibold sm:text-2xl text-base\",\n                            children: \"Danh s\\xe1ch sản phẩm\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"search-box\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center max-w-sm mx-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"simple-search\",\n                                    className: \"sr-only\",\n                                    children: \"Search\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative w-full\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                className: \"w-4 h-4 text-gray-500 dark:text-gray-400\",\n                                                \"aria-hidden\": \"true\",\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                fill: \"none\",\n                                                viewBox: \"0 0 18 20\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    stroke: \"currentColor\",\n                                                    strokeLinecap: \"round\",\n                                                    strokeLinejoin: \"round\",\n                                                    strokeWidth: \"2\",\n                                                    d: \"M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                                                lineNumber: 39,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            id: \"simple-search\",\n                                            className: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 \",\n                                            placeholder: \"T\\xecm kiếm sản phẩm\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            className: \"w-4 h-4\",\n                                            \"aria-hidden\": \"true\",\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            fill: \"none\",\n                                            viewBox: \"0 0 20 20\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                stroke: \"currentColor\",\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\",\n                                                strokeWidth: \"2\",\n                                                d: \"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"sr-only\",\n                                            children: \"Search\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"table-users mb-[30px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tableProducts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    products: dataProducts,\n                    middleCheck: middleCheck,\n                    setMiddleCheck: setMiddleCheck,\n                    lengthPagination: lengthPagination,\n                    limit: limit,\n                    setIsSuccess: setIsSuccess,\n                    setIsErr: setIsErr\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, undefined),\n            isSuccess && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                role: \"alert\",\n                className: \"alert alert-success absolute bottom-[10px] w-[350px] right-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        className: \"stroke-current shrink-0 h-6 w-6\",\n                        fill: \"none\",\n                        viewBox: \"0 0 24 24\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            strokeLinecap: \"round\",\n                            strokeLinejoin: \"round\",\n                            strokeWidth: \"2\",\n                            d: \"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                            lineNumber: 67,\n                            columnNumber: 137\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                        lineNumber: 67,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Your purchase has been confirmed!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                        lineNumber: 68,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n                lineNumber: 66,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\togia\\\\Desktop\\\\restaurant-manager\\\\client\\\\src\\\\app\\\\admin\\\\product\\\\page.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Product, \"zTuA6P3wMK28kNf8WBzFHPOfMSQ=\");\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWRtaW4vcHJvZHVjdC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ21EO0FBQ0k7QUFDN0I7QUFFMUIsTUFBTUssVUFBVTs7SUFDWixNQUFNQyxVQUFXO0lBQ2pCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQTtJQUNoRCxNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDVSxrQkFBa0JDLG9CQUFvQixHQUFHWCwrQ0FBUUE7SUFDeEQsTUFBTSxDQUFDWSxXQUFXQyxhQUFhLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNZ0IsUUFBUTtJQUNkLE1BQU1DLGlCQUFpQjtRQUNuQixJQUFJO1lBQ0EsTUFBTUMsTUFBTSxNQUFNZiw2Q0FBS0EsQ0FBQ2dCLEdBQUcsQ0FBQyxHQUFXLE9BQVJkO1lBQy9CRSxnQkFBZ0JXLElBQUlFLElBQUk7WUFDeEIsTUFBTUMsb0JBQW9CSCxJQUFJRSxJQUFJLENBQUNFLE1BQU07WUFDekNYLG9CQUFvQlksS0FBS0MsSUFBSSxDQUFDSCxvQkFBb0JMO1lBQ2xEUCxlQUFlO1FBQ25CLEVBQUUsT0FBT2dCLEtBQUs7WUFDVkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNoQjtJQUNKO0lBQ0F4QixnREFBU0EsQ0FBQztRQUNOZ0I7SUFDSixHQUFHO1FBQUNUO0tBQVk7SUFDaEIscUJBQ0ksOERBQUNvQjtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0M7NEJBQUdELFdBQVU7c0NBQXNDOzs7Ozs7Ozs7OztrQ0FFeEQsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNFO29DQUFNQyxTQUFRO29DQUFnQkgsV0FBVTs4Q0FBVTs7Ozs7OzhDQUNuRCw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNYLDhEQUFDRDs0Q0FBSUMsV0FBVTtzREFDWCw0RUFBQ0k7Z0RBQUlKLFdBQVU7Z0RBQTJDSyxlQUFZO2dEQUFPQyxPQUFNO2dEQUE2QkMsTUFBSztnREFBT0MsU0FBUTswREFDaEksNEVBQUNDO29EQUFLQyxRQUFPO29EQUFlQyxlQUFjO29EQUFRQyxnQkFBZTtvREFBUUMsYUFBWTtvREFBSUMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7OztzREFHbkcsOERBQUNDOzRDQUFNQyxNQUFLOzRDQUFPQyxJQUFHOzRDQUFnQmpCLFdBQVU7NENBQXlJa0IsYUFBWTs0Q0FBb0JDLFFBQVE7Ozs7Ozs7Ozs7Ozs4Q0FFck8sOERBQUNDO29DQUFPcEIsV0FBVTs7c0RBQ2QsOERBQUNJOzRDQUFJSixXQUFVOzRDQUFVSyxlQUFZOzRDQUFPQyxPQUFNOzRDQUE2QkMsTUFBSzs0Q0FBT0MsU0FBUTtzREFDL0YsNEVBQUNDO2dEQUFLQyxRQUFPO2dEQUFlQyxlQUFjO2dEQUFRQyxnQkFBZTtnREFBUUMsYUFBWTtnREFBSUMsR0FBRTs7Ozs7Ozs7Ozs7c0RBRS9GLDhEQUFDTzs0Q0FBS3JCLFdBQVU7c0RBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUsxQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUMzQixpRUFBYUE7b0JBQ1ZpRCxVQUFVN0M7b0JBQ1ZFLGFBQWFBO29CQUNiQyxnQkFBZ0JBO29CQUNoQkMsa0JBQWtCQTtvQkFDbEJNLE9BQU9BO29CQUNQSCxjQUFjQTtvQkFDZEUsVUFBVUE7Ozs7Ozs7Ozs7O1lBR2pCSCwyQkFDRyw4REFBQ2dCO2dCQUFJd0IsTUFBSztnQkFBUXZCLFdBQVU7O2tDQUN4Qiw4REFBQ0k7d0JBQUlFLE9BQU07d0JBQTZCTixXQUFVO3dCQUFrQ08sTUFBSzt3QkFBT0MsU0FBUTtrQ0FBWSw0RUFBQ0M7NEJBQUtFLGVBQWM7NEJBQVFDLGdCQUFlOzRCQUFRQyxhQUFZOzRCQUFJQyxHQUFFOzs7Ozs7Ozs7OztrQ0FDekwsOERBQUNPO2tDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUI7R0FuRU05QztLQUFBQTtBQXFFTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2FkbWluL3Byb2R1Y3QvcGFnZS5qcz9hNzA1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVGFibGVQcm9kdWN0cyBmcm9tIFwiQC9jb21wb25lbnRzL3RhYmxlUHJvZHVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgUHJvZHVjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFVSTF9BUEkgPSBgaHR0cDovLzEyNy4wLjAuMTo4MDgwL2FwaS1tZW51L21lbnVgO1xyXG4gICAgY29uc3QgW2RhdGFQcm9kdWN0cywgc2V0RGF0YVByb2R1Y3RzXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbbWlkZGxlQ2hlY2ssIHNldE1pZGRsZUNoZWNrXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2xlbmd0aFBhZ2luYXRpb24sIHNldExlbmd0aFBhZ2luYXRpb25dID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtpc1N1Y2Nlc3MsIHNldElzU3VjY2Vzc10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtpc0Vyciwgc2V0SXNFcnJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgbGltaXQgPSAxMDtcclxuICAgIGNvbnN0IGdldEFsbFByb2R1Y3RzID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke1VSTF9BUEl9YCk7XHJcbiAgICAgICAgICAgIHNldERhdGFQcm9kdWN0cyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlbmdodEFsbFByb2R1Y3RzID0gcmVzLmRhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICBzZXRMZW5ndGhQYWdpbmF0aW9uKE1hdGguY2VpbChsZW5naHRBbGxQcm9kdWN0cyAvIGxpbWl0KSk7XHJcbiAgICAgICAgICAgIHNldE1pZGRsZUNoZWNrKDApO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0QWxsUHJvZHVjdHMoKTtcclxuICAgIH0sIFttaWRkbGVDaGVja10pO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMgbWwtMCBzbTptbC1bMjYwcHhdIHBsLVsxMHB4XSBwci1bMTBweF1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHQtWzMwcHhdIG1iLVs1MHB4XVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1wYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgc206dGV4dC0yeGwgdGV4dC1iYXNlXCI+RGFuaCBzw6FjaCBz4bqjbiBwaOG6qW08L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1heC13LXNtIG14LWF1dG9cIj4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzaW1wbGUtc2VhcmNoXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlNlYXJjaDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCBzdGFydC0wIGZsZXggaXRlbXMtY2VudGVyIHBzLTMgcG9pbnRlci1ldmVudHMtbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMTggMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNMyA1djEwTTMgNWEyIDIgMCAxIDAgMC00IDIgMiAwIDAgMCAwIDRabTAgMTBhMiAyIDAgMSAwIDAgNCAyIDIgMCAwIDAgMC00Wm0xMiAwYTIgMiAwIDEgMCAwIDQgMiAyIDAgMCAwIDAtNFptMCAwVjZhMyAzIDAgMCAwLTMtM0g5bTEuNS0yLTIgMiAyIDJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic2ltcGxlLXNlYXJjaFwiIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcHMtMTAgcC0yLjUgXCIgcGxhY2Vob2xkZXI9XCJUw6xtIGtp4bq/bSBz4bqjbiBwaOG6qW1cIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTIuNSBtcy0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBiZy1ibHVlLTcwMCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItYmx1ZS03MDAgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBoLTRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJtMTkgMTktNC00bTAtN0E3IDcgMCAxIDEgMSA4YTcgNyAwIDAgMSAxNCAwWlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlNlYXJjaDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtdXNlcnMgbWItWzMwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVQcm9kdWN0cyBcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cz17ZGF0YVByb2R1Y3RzfVxyXG4gICAgICAgICAgICAgICAgICAgIG1pZGRsZUNoZWNrPXttaWRkbGVDaGVja31cclxuICAgICAgICAgICAgICAgICAgICBzZXRNaWRkbGVDaGVjaz17c2V0TWlkZGxlQ2hlY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoUGFnaW5hdGlvbj17bGVuZ3RoUGFnaW5hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBsaW1pdD17bGltaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNTdWNjZXNzPXtzZXRJc1N1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNFcnI9e3NldElzRXJyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtpc1N1Y2Nlc3MgJiYgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJhbGVydFwiIGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3MgYWJzb2x1dGUgYm90dG9tLVsxMHB4XSB3LVszNTBweF0gcmlnaHQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cInN0cm9rZS1jdXJyZW50IHNocmluay0wIGgtNiB3LTZcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk05IDEybDIgMiA0LTRtNiAyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwiIC8+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+WW91ciBwdXJjaGFzZSBoYXMgYmVlbiBjb25maXJtZWQhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRhYmxlUHJvZHVjdHMiLCJheGlvcyIsIlByb2R1Y3QiLCJVUkxfQVBJIiwiZGF0YVByb2R1Y3RzIiwic2V0RGF0YVByb2R1Y3RzIiwibWlkZGxlQ2hlY2siLCJzZXRNaWRkbGVDaGVjayIsImxlbmd0aFBhZ2luYXRpb24iLCJzZXRMZW5ndGhQYWdpbmF0aW9uIiwiaXNTdWNjZXNzIiwic2V0SXNTdWNjZXNzIiwiaXNFcnIiLCJzZXRJc0VyciIsImxpbWl0IiwiZ2V0QWxsUHJvZHVjdHMiLCJyZXMiLCJnZXQiLCJkYXRhIiwibGVuZ2h0QWxsUHJvZHVjdHMiLCJsZW5ndGgiLCJNYXRoIiwiY2VpbCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsImxhYmVsIiwiaHRtbEZvciIsInN2ZyIsImFyaWEtaGlkZGVuIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInBhdGgiLCJzdHJva2UiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJpbnB1dCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJidXR0b24iLCJzcGFuIiwicHJvZHVjdHMiLCJyb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/admin/product/page.js\n"));

/***/ })

});