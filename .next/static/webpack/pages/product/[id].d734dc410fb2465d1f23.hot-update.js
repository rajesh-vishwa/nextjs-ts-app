webpackHotUpdate_N_E("pages/product/[id]",{

/***/ "./src/components/product/ProductView/ProductView.tsx":
/*!************************************************************!*\
  !*** ./src/components/product/ProductView/ProductView.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui */ \"./src/components/ui/index.ts\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ProductView_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductView.module.css */ \"./src/components/product/ProductView/ProductView.module.css\");\n/* harmony import */ var _ProductView_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ProductView_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/rv/Documents/ReactProj/nextjs-app/src/components/product/ProductView/ProductView.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar ProductView = function ProductView(_ref) {\n  var product = _ref.product;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"grid gap-8 grid-cols-6 overflow-hidden\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_ProductView_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.productDisplay, \"relative flex px-0 relative box-border col-span-1 bg-violet\"),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(\"w-full\", \"h-auto\", \"max-h-full\", \"objct-cover\"),\n          src: product.image,\n          alt: product.name,\n          width: 1050,\n          height: 1050,\n          quality: \"85\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = ProductView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductView);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductView\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0Vmlldy9Qcm9kdWN0Vmlldy50c3g/ZGYzZiJdLCJuYW1lcyI6WyJQcm9kdWN0VmlldyIsInByb2R1Y3QiLCJjbiIsInMiLCJwcm9kdWN0RGlzcGxheSIsImltYWdlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBUUEsSUFBTUEsV0FBc0IsR0FBRyxTQUF6QkEsV0FBeUIsT0FBaUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDOUMsc0JBQ0UscUVBQUMsNkNBQUQ7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRSx3Q0FBaEI7QUFBQSw2QkFDRTtBQUNFLGlCQUFTLEVBQUVDLGlEQUFFLENBQ1hDLDhEQUFDLENBQUNDLGNBRFMsRUFFWCw2REFGVyxDQURmO0FBQUEsK0JBTUUscUVBQUMsaURBQUQ7QUFDRSxtQkFBUyxFQUFFRixpREFBRSxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLFlBQXJCLEVBQW1DLGFBQW5DLENBRGY7QUFFRSxhQUFHLEVBQUVELE9BQU8sQ0FBQ0ksS0FGZjtBQUdFLGFBQUcsRUFBRUosT0FBTyxDQUFDSyxJQUhmO0FBSUUsZUFBSyxFQUFFLElBSlQ7QUFLRSxnQkFBTSxFQUFFLElBTFY7QUFNRSxpQkFBTyxFQUFDO0FBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUJELENBdEJEOztLQUFNTixXO0FBd0JTQSwwRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3Byb2R1Y3QvUHJvZHVjdFZpZXcvUHJvZHVjdFZpZXcudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvcHJvZHVjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uLy4uL3VpXCI7XG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHMgZnJvbSBcIi4vUHJvZHVjdFZpZXcubW9kdWxlLmNzc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogYW55O1xuICBwcm9kdWN0OiBJUHJvZHVjdDtcbn1cblxuY29uc3QgUHJvZHVjdFZpZXc6IEZDPFByb3BzPiA9ICh7IHByb2R1Y3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJncmlkIGdhcC04IGdyaWQtY29scy02IG92ZXJmbG93LWhpZGRlblwifT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICBzLnByb2R1Y3REaXNwbGF5LFxuICAgICAgICAgICAgXCJyZWxhdGl2ZSBmbGV4IHB4LTAgcmVsYXRpdmUgYm94LWJvcmRlciBjb2wtc3Bhbi0xIGJnLXZpb2xldFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcInctZnVsbFwiLCBcImgtYXV0b1wiLCBcIm1heC1oLWZ1bGxcIiwgXCJvYmpjdC1jb3ZlclwiKX1cbiAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZX1cbiAgICAgICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxuICAgICAgICAgICAgd2lkdGg9ezEwNTB9XG4gICAgICAgICAgICBoZWlnaHQ9ezEwNTB9XG4gICAgICAgICAgICBxdWFsaXR5PVwiODVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0VmlldztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/product/ProductView/ProductView.tsx\n");

/***/ })

})