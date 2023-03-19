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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/breadcrumb/Breadcrumb */ \"./src/components/breadcrumb/Breadcrumb.jsx\");\n/* harmony import */ var _components_shop_OthersProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shop/OthersProduct */ \"./src/components/shop/OthersProduct.jsx\");\n/* harmony import */ var _components_shop_ProductDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shop/ProductDetails */ \"./src/components/shop/ProductDetails.jsx\");\n/* harmony import */ var _components_shop_SingleProductDescription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shop/SingleProductDescription */ \"./src/components/shop/SingleProductDescription.jsx\");\n/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/Layout */ \"./src/layout/Layout.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ShopDetails(param) {\n    let { cartItemId  } = param;\n    _s();\n    const [cartItemDetail, setCartItemDetail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(window.location.href.split(\"/\").pop());\n        if (cartItemDetail != null) {\n            axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"http://localhost:8080/api/product/\".concat(cartItemId)).then((res)=>{\n                setCartItemDetail(res.data);\n                console.log(res.data);\n            }).catch((err)=>{\n                throw err;\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                pageName: \"Shop Details\",\n                pageTitle: \"Shop Details\"\n            }, void 0, false, {\n                fileName: \"D:\\\\codegym\\\\hackathon\\\\pet-shop-nextjs\\\\src\\\\pages\\\\shop-details.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"shop-details-page pt-120 mb-120\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shop_ProductDetails__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            props: cartItemDetail\n                        }, void 0, false, {\n                            fileName: \"D:\\\\codegym\\\\hackathon\\\\pet-shop-nextjs\\\\src\\\\pages\\\\shop-details.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shop_SingleProductDescription__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            props: cartItemDetail\n                        }, void 0, false, {\n                            fileName: \"D:\\\\codegym\\\\hackathon\\\\pet-shop-nextjs\\\\src\\\\pages\\\\shop-details.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shop_OthersProduct__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"D:\\\\codegym\\\\hackathon\\\\pet-shop-nextjs\\\\src\\\\pages\\\\shop-details.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\codegym\\\\hackathon\\\\pet-shop-nextjs\\\\src\\\\pages\\\\shop-details.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\codegym\\\\hackathon\\\\pet-shop-nextjs\\\\src\\\\pages\\\\shop-details.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\codegym\\\\hackathon\\\\pet-shop-nextjs\\\\src\\\\pages\\\\shop-details.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(ShopDetails, \"v/UJ2Poem+e/XtyOcuzltpYtRAY=\");\n_c = ShopDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShopDetails);\nvar _c;\n$RefreshReg$(_c, \"ShopDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2hvcC1kZXRhaWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ3lCO0FBQ047QUFDZ0I7QUFDQTtBQUNFO0FBQ29CO0FBRTdDO0FBRXRDLFNBQVNVLFlBQVksS0FBWSxFQUFFO1FBQWQsRUFBQ0MsV0FBVSxFQUFDLEdBQVo7O0lBQ25CLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUV2REMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkVyxRQUFRQyxHQUFHLENBQUNDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsS0FBS0MsR0FBRztRQUMvQyxJQUFJUixrQkFBa0IsSUFBSSxFQUFFO1lBQzFCWixpREFDTSxDQUFDLHFDQUFnRCxPQUFYVyxhQUN6Q1csSUFBSSxDQUFDQyxDQUFBQSxNQUFPO2dCQUNYVixrQkFBa0JVLElBQUlDLElBQUk7Z0JBQzFCVixRQUFRQyxHQUFHLENBQUNRLElBQUlDLElBQUk7WUFDdEIsR0FDQ0MsS0FBSyxDQUFDQyxDQUFBQSxNQUFPO2dCQUNaLE1BQU1BLElBQUk7WUFDWjtRQUNKLENBQUM7SUFDSCxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2pCLHNEQUFNQTs7MEJBQ0wsOERBQUNKLHlFQUFVQTtnQkFBQ3NCLFVBQVM7Z0JBQWVDLFdBQVU7Ozs7OzswQkFDOUMsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUN2Qix1RUFBY0E7NEJBQUN3QixPQUFPbkI7Ozs7OztzQ0FDdkIsOERBQUNKLGlGQUF3QkE7NEJBQUN1QixPQUFPbkI7Ozs7OztzQ0FDakMsOERBQUNOLHNFQUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt4QjtHQTlCU0k7S0FBQUE7QUFnQ1QsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Nob3AtZGV0YWlscy5qcz82YzdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSBcIi4uL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9CcmVhZGNydW1iXCI7XG5pbXBvcnQgT3RoZXJzUHJvZHVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9zaG9wL090aGVyc1Byb2R1Y3RcIjtcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tIFwiLi4vY29tcG9uZW50cy9zaG9wL1Byb2R1Y3REZXRhaWxzXCI7XG5pbXBvcnQgU2luZ2xlUHJvZHVjdERlc2NyaXB0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3Nob3AvU2luZ2xlUHJvZHVjdERlc2NyaXB0aW9uXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2xheW91dC9MYXlvdXRcIjtcblxuZnVuY3Rpb24gU2hvcERldGFpbHMoe2NhcnRJdGVtSWR9KSB7XG4gIGNvbnN0IFtjYXJ0SXRlbURldGFpbCwgc2V0Q2FydEl0ZW1EZXRhaWxdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKS5wb3AoKSk7XG4gICAgaWYgKGNhcnRJdGVtRGV0YWlsICE9IG51bGwpIHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvcHJvZHVjdC8ke2NhcnRJdGVtSWR9YClcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICBzZXRDYXJ0SXRlbURldGFpbChyZXMuZGF0YSk7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxCcmVhZGNydW1iIHBhZ2VOYW1lPVwiU2hvcCBEZXRhaWxzXCIgcGFnZVRpdGxlPVwiU2hvcCBEZXRhaWxzXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1kZXRhaWxzLXBhZ2UgcHQtMTIwIG1iLTEyMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxQcm9kdWN0RGV0YWlscyBwcm9wcz17Y2FydEl0ZW1EZXRhaWx9Lz5cbiAgICAgICAgICA8U2luZ2xlUHJvZHVjdERlc2NyaXB0aW9uIHByb3BzPXtjYXJ0SXRlbURldGFpbH0vPlxuICAgICAgICAgIDxPdGhlcnNQcm9kdWN0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3BEZXRhaWxzO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVBhcmFtcyIsIkJyZWFkY3J1bWIiLCJPdGhlcnNQcm9kdWN0IiwiUHJvZHVjdERldGFpbHMiLCJTaW5nbGVQcm9kdWN0RGVzY3JpcHRpb24iLCJMYXlvdXQiLCJTaG9wRGV0YWlscyIsImNhcnRJdGVtSWQiLCJjYXJ0SXRlbURldGFpbCIsInNldENhcnRJdGVtRGV0YWlsIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNwbGl0IiwicG9wIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJjYXRjaCIsImVyciIsInBhZ2VOYW1lIiwicGFnZVRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/shop-details.js\n"));

/***/ })

});