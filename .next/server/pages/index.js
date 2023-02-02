"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _solana_pay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/pay */ \"@solana/pay\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_pay__WEBPACK_IMPORTED_MODULE_1__]);\n_solana_pay__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Home() {\n    const mintQrRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    // Generate the Solana Pay QR code\n    // This is a transaction request, with our checkout API as the link\n    // We can only generate a QR code on the client, so do it in the useEffect\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const { location  } = window;\n        // location.protocol is http: or https:\n        // location.host is localhost:3000\n        const apiUrl = `${location.protocol}//${location.host}/api/checkout`;\n        const mintUrlFields = {\n            link: new URL(apiUrl)\n        };\n        const mintUrl = (0,_solana_pay__WEBPACK_IMPORTED_MODULE_1__.encodeURL)(mintUrlFields);\n        const mintQr = (0,_solana_pay__WEBPACK_IMPORTED_MODULE_1__.createQR)(mintUrl, 350, \"transparent\", \"blue\");\n        // Set the generated QR code on the QR ref element\n        if (mintQrRef.current) {\n            mintQrRef.current.innerHTML = \"\";\n            mintQr.append(mintQrRef.current);\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"container flex flex-col gap-20 items-center p-4 mx-auto min-h-screen justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl\",\n                    children: \"Scan QR Code\"\n                }, void 0, false, {\n                    fileName: \"/home/sam/Desktop/00-getboarded/01-VideoWiki/13-nftcreate/pages/index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: mintQrRef\n                }, void 0, false, {\n                    fileName: \"/home/sam/Desktop/00-getboarded/01-VideoWiki/13-nftcreate/pages/index.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/sam/Desktop/00-getboarded/01-VideoWiki/13-nftcreate/pages/index.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/sam/Desktop/00-getboarded/01-VideoWiki/13-nftcreate/pages/index.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this));\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE4RTtBQUNyQztBQUUxQixRQUFRLENBQUNJLElBQUksR0FBRyxDQUFDO0lBQzlCLEtBQUssQ0FBQ0MsU0FBUyxHQUFHRiw2Q0FBTTtJQUV4QixFQUFrQztJQUNsQyxFQUFtRTtJQUNuRSxFQUEwRTtJQUMxRUQsZ0RBQVMsS0FBTyxDQUFDO1FBQ2YsS0FBSyxDQUFDLENBQUMsQ0FBQ0ksUUFBUSxFQUFDLENBQUMsR0FBR0MsTUFBTTtRQUMzQixFQUF1QztRQUN2QyxFQUFrQztRQUNsQyxLQUFLLENBQUNDLE1BQU0sTUFBTUYsUUFBUSxDQUFDRyxRQUFRLENBQUMsRUFBRSxFQUFFSCxRQUFRLENBQUNJLElBQUksQ0FBQyxhQUFhO1FBRW5FLEtBQUssQ0FBQ0MsYUFBYSxHQUFnQyxDQUFDO1lBQ2xEQyxJQUFJLEVBQUUsR0FBRyxDQUFDQyxHQUFHLENBQUNMLE1BQU07UUFDdEIsQ0FBQztRQUNELEtBQUssQ0FBQ00sT0FBTyxHQUFHYixzREFBUyxDQUFDVSxhQUFhO1FBQ3ZDLEtBQUssQ0FBQ0ksTUFBTSxHQUFHZixxREFBUSxDQUFDYyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQWEsY0FBRSxDQUFNO1FBRTNELEVBQWtEO1FBQ2xELEVBQUUsRUFBRVQsU0FBUyxDQUFDVyxPQUFPLEVBQUUsQ0FBQztZQUN0QlgsU0FBUyxDQUFDVyxPQUFPLENBQUNDLFNBQVMsR0FBRyxDQUFFO1lBQ2hDRixNQUFNLENBQUNHLE1BQU0sQ0FBQ2IsU0FBUyxDQUFDVyxPQUFPO1FBQ2pDLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSw2RUFDSEcsQ0FBSTtRQUFDQyxTQUFTLEVBQUMsQ0FBcUY7OEZBQ2xHQyxDQUFHO1lBQUNELFNBQVMsRUFBQyxDQUFxQjs7NEZBQ2pDRSxDQUFFO29CQUFDRixTQUFTLEVBQUMsQ0FBVTs4QkFBQyxDQUFZOzs7Ozs7NEZBQ3BDQyxDQUFHO29CQUFDRSxHQUFHLEVBQUVsQixTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXRhaWx3aW5kY3NzLXR5cGVzY3JpcHQtc3RhcnRlci8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVFSLCBlbmNvZGVVUkwsIFRyYW5zYWN0aW9uUmVxdWVzdFVSTEZpZWxkcyB9IGZyb20gXCJAc29sYW5hL3BheVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgbWludFFyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xuXG4gIC8vIEdlbmVyYXRlIHRoZSBTb2xhbmEgUGF5IFFSIGNvZGVcbiAgLy8gVGhpcyBpcyBhIHRyYW5zYWN0aW9uIHJlcXVlc3QsIHdpdGggb3VyIGNoZWNrb3V0IEFQSSBhcyB0aGUgbGlua1xuICAvLyBXZSBjYW4gb25seSBnZW5lcmF0ZSBhIFFSIGNvZGUgb24gdGhlIGNsaWVudCwgc28gZG8gaXQgaW4gdGhlIHVzZUVmZmVjdFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgbG9jYXRpb24gfSA9IHdpbmRvdztcbiAgICAvLyBsb2NhdGlvbi5wcm90b2NvbCBpcyBodHRwOiBvciBodHRwczpcbiAgICAvLyBsb2NhdGlvbi5ob3N0IGlzIGxvY2FsaG9zdDozMDAwXG4gICAgY29uc3QgYXBpVXJsID0gYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke2xvY2F0aW9uLmhvc3R9L2FwaS9jaGVja291dGA7XG5cbiAgICBjb25zdCBtaW50VXJsRmllbGRzOiBUcmFuc2FjdGlvblJlcXVlc3RVUkxGaWVsZHMgPSB7XG4gICAgICBsaW5rOiBuZXcgVVJMKGFwaVVybCksXG4gICAgfTtcbiAgICBjb25zdCBtaW50VXJsID0gZW5jb2RlVVJMKG1pbnRVcmxGaWVsZHMpO1xuICAgIGNvbnN0IG1pbnRRciA9IGNyZWF0ZVFSKG1pbnRVcmwsIDM1MCwgXCJ0cmFuc3BhcmVudFwiLCBcImJsdWVcIik7XG5cbiAgICAvLyBTZXQgdGhlIGdlbmVyYXRlZCBRUiBjb2RlIG9uIHRoZSBRUiByZWYgZWxlbWVudFxuICAgIGlmIChtaW50UXJSZWYuY3VycmVudCkge1xuICAgICAgbWludFFyUmVmLmN1cnJlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIG1pbnRRci5hcHBlbmQobWludFFyUmVmLmN1cnJlbnQpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggZmxleC1jb2wgZ2FwLTIwIGl0ZW1zLWNlbnRlciBwLTQgbXgtYXV0byBtaW4taC1zY3JlZW4ganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtOFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5TY2FuIFFSIENvZGU8L2gxPlxuICAgICAgICA8ZGl2IHJlZj17bWludFFyUmVmfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVFSIiwiZW5jb2RlVVJMIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiSG9tZSIsIm1pbnRRclJlZiIsImxvY2F0aW9uIiwid2luZG93IiwiYXBpVXJsIiwicHJvdG9jb2wiLCJob3N0IiwibWludFVybEZpZWxkcyIsImxpbmsiLCJVUkwiLCJtaW50VXJsIiwibWludFFyIiwiY3VycmVudCIsImlubmVySFRNTCIsImFwcGVuZCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@solana/pay":
/*!******************************!*\
  !*** external "@solana/pay" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("@solana/pay");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();