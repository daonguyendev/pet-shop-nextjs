"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/shop-details",{

/***/ "./src/pages/shop-details.js":
/*!***********************************!*\
  !*** ./src/pages/shop-details.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/breadcrumb/Breadcrumb */ \"./src/components/breadcrumb/Breadcrumb.jsx\");\n/* harmony import */ var _components_shop_OthersProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shop/OthersProduct */ \"./src/components/shop/OthersProduct.jsx\");\n/* harmony import */ var _components_shop_ProductDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shop/ProductDetails */ \"./src/components/shop/ProductDetails.jsx\");\n/* harmony import */ var _components_shop_SingleProductDescription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shop/SingleProductDescription */ \"./src/components/shop/SingleProductDescription.jsx\");\n/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/Layout */ \"./src/layout/Layout.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ShopDetails(param) {\n    let { props  } = param;\n    _s();\n    const [cartItemDetail, setCartItemDetail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // console.log(window.location.href.split('/').pop());\n        console.log(props);\n        if (cartItemDetail != null) {\n            axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"http://localhost:8080/api/product/\".concat(props.id)).then((res)=>{\n                setCartItemDetail(res.data);\n                console.log(res.data);\n            }).catch((err)=>{\n                throw err;\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                pageName: \"Shop Details\",\n                pageTitle: \"Shop Details\"\n            }, void 0, false, {\n                fileName: \"D:\\\\codegym\\\\hackathon\\\\pet-shop-nextjs\\\\src\\\\pages\\\\shop-details.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"shop-details-page pt-120 mb-120\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shop_ProductDetails__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            props: cartItemDetail\n                        }, void 0, false, {\n                            fileName: \"D:\\\\codegym\\\\hackathon\\\\pet-shop-nextjs\\\\src\\\\pages\\\\shop-details.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shop_SingleProductDescription__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            props: cartItemDetail\n                        }, void 0, false, {\n                            fileName: \"D:\\\\codegym\\\\hackathon\\\\pet-shop-nextjs\\\\src\\\\pages\\\\shop-details.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shop_OthersProduct__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"D:\\\\codegym\\\\hackathon\\\\pet-shop-nextjs\\\\src\\\\pages\\\\shop-details.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\codegym\\\\hackathon\\\\pet-shop-nextjs\\\\src\\\\pages\\\\shop-details.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\codegym\\\\hackathon\\\\pet-shop-nextjs\\\\src\\\\pages\\\\shop-details.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\codegym\\\\hackathon\\\\pet-shop-nextjs\\\\src\\\\pages\\\\shop-details.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(ShopDetails, \"v/UJ2Poem+e/XtyOcuzltpYtRAY=\");\n_c = ShopDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShopDetails);\nvar _c;\n$RefreshReg$(_c, \"ShopDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2hvcC1kZXRhaWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ3lCO0FBQ047QUFDZ0I7QUFDQTtBQUNFO0FBQ29CO0FBRTdDO0FBRXRDLFNBQVNVLFlBQVksS0FBTyxFQUFFO1FBQVQsRUFBQ0MsTUFBSyxFQUFDLEdBQVA7O0lBQ25CLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUV2REMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLHNEQUFzRDtRQUN0RFcsUUFBUUMsR0FBRyxDQUFDSjtRQUNaLElBQUlDLGtCQUFrQixJQUFJLEVBQUU7WUFDMUJaLGlEQUNNLENBQUMscUNBQThDLE9BQVRXLE1BQU1NLEVBQUUsR0FDakRDLElBQUksQ0FBQ0MsQ0FBQUEsTUFBTztnQkFDWE4sa0JBQWtCTSxJQUFJQyxJQUFJO2dCQUMxQk4sUUFBUUMsR0FBRyxDQUFDSSxJQUFJQyxJQUFJO1lBQ3RCLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBTztnQkFDWixNQUFNQSxJQUFJO1lBQ1o7UUFDSixDQUFDO0lBQ0gsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNiLHNEQUFNQTs7MEJBQ0wsOERBQUNKLHlFQUFVQTtnQkFBQ2tCLFVBQVM7Z0JBQWVDLFdBQVU7Ozs7OzswQkFDOUMsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNuQix1RUFBY0E7NEJBQUNJLE9BQU9DOzs7Ozs7c0NBQ3ZCLDhEQUFDSixpRkFBd0JBOzRCQUFDRyxPQUFPQzs7Ozs7O3NDQUNqQyw4REFBQ04sc0VBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hCO0dBL0JTSTtLQUFBQTtBQWlDVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc2hvcC1kZXRhaWxzLmpzPzZjN2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgQnJlYWRjcnVtYiBmcm9tIFwiLi4vY29tcG9uZW50cy9icmVhZGNydW1iL0JyZWFkY3J1bWJcIjtcbmltcG9ydCBPdGhlcnNQcm9kdWN0IGZyb20gXCIuLi9jb21wb25lbnRzL3Nob3AvT3RoZXJzUHJvZHVjdFwiO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gXCIuLi9jb21wb25lbnRzL3Nob3AvUHJvZHVjdERldGFpbHNcIjtcbmltcG9ydCBTaW5nbGVQcm9kdWN0RGVzY3JpcHRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hvcC9TaW5nbGVQcm9kdWN0RGVzY3JpcHRpb25cIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vbGF5b3V0L0xheW91dFwiO1xuXG5mdW5jdGlvbiBTaG9wRGV0YWlscyh7cHJvcHN9KSB7XG4gIGNvbnN0IFtjYXJ0SXRlbURldGFpbCwgc2V0Q2FydEl0ZW1EZXRhaWxdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKS5wb3AoKSk7XG4gICAgY29uc29sZS5sb2cocHJvcHMpXG4gICAgaWYgKGNhcnRJdGVtRGV0YWlsICE9IG51bGwpIHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvcHJvZHVjdC8ke3Byb3BzLmlkfWApXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgc2V0Q2FydEl0ZW1EZXRhaWwocmVzLmRhdGEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8QnJlYWRjcnVtYiBwYWdlTmFtZT1cIlNob3AgRGV0YWlsc1wiIHBhZ2VUaXRsZT1cIlNob3AgRGV0YWlsc1wiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtZGV0YWlscy1wYWdlIHB0LTEyMCBtYi0xMjBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8UHJvZHVjdERldGFpbHMgcHJvcHM9e2NhcnRJdGVtRGV0YWlsfS8+XG4gICAgICAgICAgPFNpbmdsZVByb2R1Y3REZXNjcmlwdGlvbiBwcm9wcz17Y2FydEl0ZW1EZXRhaWx9Lz5cbiAgICAgICAgICA8T3RoZXJzUHJvZHVjdCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaG9wRGV0YWlscztcbiJdLCJuYW1lcyI6WyJheGlvcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VQYXJhbXMiLCJCcmVhZGNydW1iIiwiT3RoZXJzUHJvZHVjdCIsIlByb2R1Y3REZXRhaWxzIiwiU2luZ2xlUHJvZHVjdERlc2NyaXB0aW9uIiwiTGF5b3V0IiwiU2hvcERldGFpbHMiLCJwcm9wcyIsImNhcnRJdGVtRGV0YWlsIiwic2V0Q2FydEl0ZW1EZXRhaWwiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwiaWQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwicGFnZU5hbWUiLCJwYWdlVGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/shop-details.js\n"));

/***/ })

});