module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/product/[id].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data.json":
/*!*******************!*\
  !*** ./data.json ***!
  \*******************/
/*! exports provided: products, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"products\\\":[{\\\"id\\\":1,\\\"name\\\":\\\"T-Shirt\\\",\\\"image\\\":\\\"/black.png\\\",\\\"price\\\":20,\\\"description\\\":\\\"2 rooms flat for sale\\\"},{\\\"id\\\":2,\\\"name\\\":\\\"Short sleeve t-shirt\\\",\\\"image\\\":\\\"/blue.png\\\",\\\"price\\\":25,\\\"description\\\":\\\"3 rooms flat for sale\\\"},{\\\"id\\\":3,\\\"name\\\":\\\"Black Hat\\\",\\\"image\\\":\\\"/cap.png\\\",\\\"price\\\":60.12,\\\"description\\\":\\\"1 bed flat for rent\\\"},{\\\"id\\\":4,\\\"name\\\":\\\"Short sleeve\\\",\\\"image\\\":\\\"/gray.png\\\",\\\"price\\\":249.99,\\\"description\\\":\\\"4 rooms flat for sale\\\"},{\\\"id\\\":5,\\\"name\\\":\\\"Bomber Jacket\\\",\\\"image\\\":\\\"/jacket.png\\\",\\\"price\\\":26,\\\"description\\\":\\\"2 rooms flat for sale\\\"},{\\\"id\\\":6,\\\"name\\\":\\\"Lightweight Jacket\\\",\\\"image\\\":\\\"/yellow.png\\\",\\\"price\\\":52,\\\"description\\\":\\\"1 room flat for sale\\\"}]}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2RhdGEuanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./data.json\n");

/***/ }),

/***/ "./pages/product/[id].tsx":
/*!********************************!*\
  !*** ./pages/product/[id].tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.json */ \"./data.json\");\nvar _data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data.json */ \"./data.json\", 1);\n\n\nvar _jsxFileName = \"/Users/rv/Documents/ReactProj/nextjs-app/pages/product/[id].tsx\";\n\n\n\nconst ProductDetail = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const product = _data_json__WEBPACK_IMPORTED_MODULE_2__.products.find(p => String(p.id) === router.query.id);\n  if (!product) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: \"loading...\"\n  }, void 0, false);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"product\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      className: \"product__title\",\n      children: product && product.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"product__description\",\n      children: product && product.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, undefined);\n}; // export const getStaticProps: GetStaticProps = async ({ params }) => {\n//   console.log(\"productId \", params?.id);\n//   return {\n//     props: {\n//       product: {\n//         id: 1,\n//         name: \"test product \" + params?.id,\n//       },\n//     },\n//   };\n// };\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0Ly50c3g/OWVkZCJdLCJuYW1lcyI6WyJQcm9kdWN0RGV0YWlsIiwicm91dGVyIiwidXNlUm91dGVyIiwicHJvZHVjdCIsInByb2R1Y3REYXRhIiwicHJvZHVjdHMiLCJmaW5kIiwicCIsIlN0cmluZyIsImlkIiwicXVlcnkiLCJuYW1lIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUVBOztBQU1BLE1BQU1BLGFBQWEsR0FBRyxNQUFNO0FBQzFCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxRQUFNQyxPQUFPLEdBQUdDLHVDQUFXLENBQUNDLFFBQVosQ0FBcUJDLElBQXJCLENBQ2JDLENBQUQsSUFBT0MsTUFBTSxDQUFDRCxDQUFDLENBQUNFLEVBQUgsQ0FBTixLQUFpQlIsTUFBTSxDQUFDUyxLQUFQLENBQWFELEVBRHZCLENBQWhCO0FBSUEsTUFBSSxDQUFDTixPQUFMLEVBQWMsb0JBQU87QUFBQTtBQUFBLG1CQUFQO0FBQ2Qsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLGdCQUFkO0FBQUEsZ0JBQWdDQSxPQUFPLElBQUlBLE9BQU8sQ0FBQ1E7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUcsZUFBUyxFQUFDLHNCQUFiO0FBQUEsZ0JBQXFDUixPQUFPLElBQUlBLE9BQU8sQ0FBQ1M7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXFCRCxDQTdCRCxDLENBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNlWiw0RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3QvW2lkXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSBcIi4uLy4uL3NyYy9tb2RlbHMvcHJvZHVjdFwiO1xuaW1wb3J0IHByb2R1Y3REYXRhIGZyb20gXCIuLi8uLi9kYXRhLmpzb25cIjtcblxuaW50ZXJmYWNlIElQcm9kdWN0UHJvcHMge1xuICBwcm9kdWN0OiBJUHJvZHVjdDtcbn1cblxuY29uc3QgUHJvZHVjdERldGFpbCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3REYXRhLnByb2R1Y3RzLmZpbmQoXG4gICAgKHApID0+IFN0cmluZyhwLmlkKSA9PT0gcm91dGVyLnF1ZXJ5LmlkXG4gICk7XG5cbiAgaWYgKCFwcm9kdWN0KSByZXR1cm4gPD5sb2FkaW5nLi4uPC8+O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInByb2R1Y3RfX3RpdGxlXCI+e3Byb2R1Y3QgJiYgcHJvZHVjdC5uYW1lfTwvaDI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0X19kZXNjcmlwdGlvblwiPntwcm9kdWN0ICYmIHByb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgey8qIFxuICAgICAgPGltZyBzcmM9e3Byb3BzLnByb2R1Y3QuaW1hZ2V9IGFsdD1cIlwiIGNsYXNzTmFtZT1cInByb2R1Y3RfX2ltYWdlXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9fcHJpY2UtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfX3ByaWNlXCI+JHtwcm9wcy5wcm9kdWN0LnByaWNlLnRvRml4ZWQoMil9PC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJzbmlwY2FydC1hZGQtaXRlbSBwcm9kdWN0X19idXR0b25cIlxuICAgICAgICAgIGRhdGEtaXRlbS1pZD17cHJvcHMucHJvZHVjdC5pZH1cbiAgICAgICAgICBkYXRhLWl0ZW0tbmFtZT17cHJvcHMucHJvZHVjdC5uYW1lfVxuICAgICAgICAgIGRhdGEtaXRlbS1wcmljZT17cHJvcHMucHJvZHVjdC5wcmljZX1cbiAgICAgICAgICBkYXRhLWl0ZW0tdXJsPXtwcm9wcy5yb3V0ZXIucGF0aG5hbWV9XG4gICAgICAgICAgZGF0YS1pdGVtLWltYWdlPXtwcm9wcy5wcm9kdWN0LmltYWdlfVxuICAgICAgICA+XG4gICAgICAgICAgQWRkIHRvIGNhcnRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbi8vICAgY29uc29sZS5sb2coXCJwcm9kdWN0SWQgXCIsIHBhcmFtcz8uaWQpO1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBwcm9kdWN0OiB7XG4vLyAgICAgICAgIGlkOiAxLFxuLy8gICAgICAgICBuYW1lOiBcInRlc3QgcHJvZHVjdCBcIiArIHBhcmFtcz8uaWQsXG4vLyAgICAgICB9LFxuLy8gICAgIH0sXG4vLyAgIH07XG4vLyB9O1xuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/[id].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });