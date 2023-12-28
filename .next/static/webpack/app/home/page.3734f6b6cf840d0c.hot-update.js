"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/home/page",{

/***/ "(app-pages-browser)/./app/home/page.tsx":
/*!***************************!*\
  !*** ./app/home/page.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link */ \"(app-pages-browser)/./app/home/Link.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ECommerceHomePage = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response = await fetch(\"http://localhost:3000/api/BuyMeAll/products\");\n            const data = await response.json();\n            setProducts(data);\n            setLoading(false);\n        };\n        fetchData().catch((error)=>{\n            console.log(error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto p-4 pt-6 md:p-8 lg:pt-12 xl:pt-16 2xl:pt-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lotfi\\\\Desktop\\\\Leagacy-Project\\\\app\\\\home\\\\page.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"border-b-2 border-gray-200 py-8 shadow-md z-10 flex justify-content-space-between align-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-4xl font-bold leading-tight text-gray-800 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl\",\n                    children: \"BuyMeAll\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lotfi\\\\Desktop\\\\Leagacy-Project\\\\app\\\\home\\\\page.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lotfi\\\\Desktop\\\\Leagacy-Project\\\\app\\\\home\\\\page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-wrap -mx-4\",\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full p-4 animatedSpin\",\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lotfi\\\\Desktop\\\\Leagacy-Project\\\\app\\\\home\\\\page.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, undefined) : products === null || products === void 0 ? void 0 : products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full justify-center p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" flex-col items-center justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: product.image,\n                                    alt: product.product_name,\n                                    width: 800,\n                                    height: 600,\n                                    className: \"rounded overflowshadow w-24 h-24\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lotfi\\\\Desktop\\\\Leagacy-Project\\\\app\\\\home\\\\page.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex-colJustifyContentSpaceBetween\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-lg leading-tight text-gray-800\",\n                                            children: product.product_name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lotfi\\\\Desktop\\\\Leagacy-Project\\\\app\\\\home\\\\page.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-sm leading-tight text-gray-500\",\n                                            children: [\n                                                \"$\",\n                                                product.price,\n                                                \".00\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\lotfi\\\\Desktop\\\\Leagacy-Project\\\\app\\\\home\\\\page.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\lotfi\\\\Desktop\\\\Leagacy-Project\\\\app\\\\home\\\\page.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\lotfi\\\\Desktop\\\\Leagacy-Project\\\\app\\\\home\\\\page.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 15\n                        }, undefined)\n                    }, product.id, false, {\n                        fileName: \"C:\\\\Users\\\\lotfi\\\\Desktop\\\\Leagacy-Project\\\\app\\\\home\\\\page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lotfi\\\\Desktop\\\\Leagacy-Project\\\\app\\\\home\\\\page.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-gray-100 py-8 shadow-md z-10 flex justify-content-space-between align-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-sm leading-tight text-gray-500\",\n                    children: \"\\xa9 2023 Electronics Store.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lotfi\\\\Desktop\\\\Leagacy-Project\\\\app\\\\home\\\\page.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lotfi\\\\Desktop\\\\Leagacy-Project\\\\app\\\\home\\\\page.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lotfi\\\\Desktop\\\\Leagacy-Project\\\\app\\\\home\\\\page.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ECommerceHomePage, \"5kM5tJOLTu4uNHd5g5ws5fZ0PLE=\");\n_c = ECommerceHomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ECommerceHomePage);\nvar _c;\n$RefreshReg$(_c, \"ECommerceHomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ob21lL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMwQjtBQUNrQjtBQUNiO0FBQ0g7QUFVNUIsTUFBTUssb0JBQW9COztJQUN4QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQVksRUFBRTtJQUN0RCxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMsWUFBWTtZQUNoQixNQUFNQyxXQUFXLE1BQU1DLE1BQU07WUFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQ2hDUCxZQUFZTTtZQUNaSixXQUFXO1FBQ2I7UUFFQUMsWUFBWUssS0FBSyxDQUFDLENBQUNDO1lBQ2pCQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNoQiw2Q0FBTUE7Ozs7OzBCQUNULDhEQUFDaUI7Z0JBQU9ELFdBQVU7MEJBQ2hCLDRFQUFDRTtvQkFBR0YsV0FBVTs4QkFBOEc7Ozs7Ozs7Ozs7OzBCQUk5SCw4REFBQ0c7Z0JBQUtILFdBQVU7MEJBQ2JaLHdCQUNDLDhEQUFDVztvQkFBSUMsV0FBVTs4QkFBMEI7Ozs7O2dDQUV6Q2QscUJBQUFBLCtCQUFBQSxTQUFVa0IsR0FBRyxDQUFDLENBQUNDLHdCQUNiLDhEQUFDTjt3QkFBcUJDLFdBQVU7a0NBQzlCLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNqQixtREFBS0E7b0NBQ0p1QixLQUFLRCxRQUFRRSxLQUFLO29DQUNsQkMsS0FBS0gsUUFBUUksWUFBWTtvQ0FDekJDLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JYLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDRDs0Q0FBSUMsV0FBVTtzREFDWkssUUFBUUksWUFBWTs7Ozs7O3NEQUV2Qiw4REFBQ1Y7NENBQUlDLFdBQVU7O2dEQUFzQztnREFDakRLLFFBQVFPLEtBQUs7Z0RBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBZGRQLFFBQVFRLEVBQUU7Ozs7Ozs7Ozs7MEJBc0IxQiw4REFBQ0M7Z0JBQU9kLFdBQVU7MEJBQ2hCLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFBc0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTdEO0dBekRNZjtLQUFBQTtBQTJETiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ob21lL3BhZ2UudHN4PzExMjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vTGluayc7XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdCB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBwcm9kdWN0X25hbWU6IHN0cmluZztcclxuICBwcmljZTogbnVtYmVyO1xyXG4gIHF1YW50aXR5OiBudW1iZXI7XHJcbiAgaW1hZ2U6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgRUNvbW1lcmNlSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZTxQcm9kdWN0W10+KFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvQnV5TWVBbGwvcHJvZHVjdHMnKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0UHJvZHVjdHMoZGF0YSk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBwLTQgcHQtNiBtZDpwLTggbGc6cHQtMTIgeGw6cHQtMTYgMnhsOnB0LTIwXCI+XHJcbiAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYm9yZGVyLWItMiBib3JkZXItZ3JheS0yMDAgcHktOCBzaGFkb3ctbWQgei0xMCBmbGV4IGp1c3RpZnktY29udGVudC1zcGFjZS1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbGVhZGluZy10aWdodCB0ZXh0LWdyYXktODAwIHNtOnRleHQtNXhsIG1kOnRleHQtNnhsIGxnOnRleHQtN3hsIHhsOnRleHQtOHhsIDJ4bDp0ZXh0LTl4bFwiPlxyXG4gICAgICAgICAgQnV5TWVBbGxcclxuICAgICAgICA8L2gxPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgLW14LTRcIj5cclxuICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNCBhbmltYXRlZFNwaW5cIj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIHByb2R1Y3RzPy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT1cInctZnVsbCBqdXN0aWZ5LWNlbnRlciBwLTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC5wcm9kdWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXs4MDB9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NjAwfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkIG92ZXJmbG93c2hhZG93IHctMjQgaC0yNFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbEp1c3RpZnlDb250ZW50U3BhY2VCZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBsZWFkaW5nLXRpZ2h0IHRleHQtZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5wcm9kdWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy10aWdodCB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtwcm9kdWN0LnByaWNlfS4wMFxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIHB5LTggc2hhZG93LW1kIHotMTAgZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3BhY2UtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy10aWdodCB0ZXh0LWdyYXktNTAwXCI+JmNvcHk7IDIwMjMgRWxlY3Ryb25pY3MgU3RvcmUuPC9kaXY+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVDb21tZXJjZUhvbWVQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJIZWFkZXIiLCJFQ29tbWVyY2VIb21lUGFnZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaDEiLCJtYWluIiwibWFwIiwicHJvZHVjdCIsInNyYyIsImltYWdlIiwiYWx0IiwicHJvZHVjdF9uYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJwcmljZSIsImlkIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/home/page.tsx\n"));

/***/ })

});