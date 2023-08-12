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
exports.id = "pages/api/productos";
exports.ids = ["pages/api/productos"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mongooseConnect: () => (/* binding */ mongooseConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction mongooseConnect() {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    } else {\n        const uri = process.env.MONGODB_URI;\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLFNBQVNDO0lBQ2QsSUFBSUQsNERBQW1CLENBQUNHLFVBQVUsS0FBSyxHQUFHO1FBQ3hDLE9BQU9ILDBEQUFtQixDQUFDSSxTQUFTO0lBQ3RDLE9BQU87UUFDTCxNQUFNQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7UUFDbkMsT0FBT1IsdURBQWdCLENBQUNLO0lBQzFCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub21icmUtZGVsLXByb3llY3RvLy4vbGliL21vbmdvb3NlLmpzPzE2M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vbmdvb3NlQ29ubmVjdCgpIHtcclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID09PSAxKSB7XHJcbiAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdGlvbi5hc1Byb21pc2UoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcbiAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdCh1cmkpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJtb25nb29zZUNvbm5lY3QiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImFzUHJvbWlzZSIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/Producto.js":
/*!****************************!*\
  !*** ./models/Producto.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Producto: () => (/* binding */ Producto)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst ProductoSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    nombre: {\n        type: String,\n        required: true\n    },\n    categoria: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types).ObjectId,\n        ref: \"Categoria\"\n    },\n    precio: {\n        type: Number\n    },\n    descripcion: String,\n    imagen: [\n        {\n            type: String\n        }\n    ],\n    marca: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types).ObjectId,\n        ref: \"Marca\"\n    }\n});\nconst Producto = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.producto || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"producto\", ProductoSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdG8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBQ2dCO0FBRWhELE1BQU1JLGlCQUFpQixJQUFJSCw0Q0FBTUEsQ0FBQztJQUM5QkksUUFBUTtRQUFDQyxNQUFNQztRQUFRQyxVQUFVO0lBQUk7SUFDckNDLFdBQVk7UUFBQ0gsTUFBS04sdURBQWMsQ0FBQ1csUUFBUTtRQUFDQyxLQUFJO0lBQVc7SUFDekRDLFFBQVE7UUFBQ1AsTUFBTVE7SUFBTTtJQUNyQkMsYUFBYVI7SUFDYlMsUUFBUTtRQUFDO1lBQUNWLE1BQUtDO1FBQU07S0FBRTtJQUN2QlUsT0FBUTtRQUFDWCxNQUFLTix1REFBYyxDQUFDVyxRQUFRO1FBQUNDLEtBQUk7SUFBTztBQUVyRDtBQUVPLE1BQU1NLFdBQVdmLDRDQUFNQSxDQUFDZ0IsUUFBUSxJQUFJakIsK0NBQUtBLENBQUMsWUFBV0UsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9tYnJlLWRlbC1wcm95ZWN0by8uL21vZGVscy9Qcm9kdWN0by5qcz82YzgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgU2NoZW1hLG1vZGVsLCBtb2RlbHMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3RvU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgICBub21icmU6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcclxuICAgIGNhdGVnb3JpYSA6IHt0eXBlOm1vbmdvb3NlLlR5cGVzLk9iamVjdElkLHJlZjonQ2F0ZWdvcmlhJ30sIFxyXG4gICAgcHJlY2lvOiB7dHlwZTogTnVtYmVyfSxcclxuICAgIGRlc2NyaXBjaW9uOiBTdHJpbmcsXHJcbiAgICBpbWFnZW46IFt7dHlwZTpTdHJpbmd9XSxcclxuICAgIG1hcmNhIDoge3R5cGU6bW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQscmVmOidNYXJjYSd9LCBcclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RvID0gbW9kZWxzLnByb2R1Y3RvIHx8IG1vZGVsKCdwcm9kdWN0bycsUHJvZHVjdG9TY2hlbWEgKSJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwiUHJvZHVjdG9TY2hlbWEiLCJub21icmUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJjYXRlZ29yaWEiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicHJlY2lvIiwiTnVtYmVyIiwiZGVzY3JpcGNpb24iLCJpbWFnZW4iLCJtYXJjYSIsIlByb2R1Y3RvIiwicHJvZHVjdG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/Producto.js\n");

/***/ }),

/***/ "(api)/./pages/api/productos.js":
/*!********************************!*\
  !*** ./pages/api/productos.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _models_Producto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Producto */ \"(api)/./models/Producto.js\");\n\n\nasync function handle(req, res) {\n    const { method } = req;\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__.mongooseConnect)();\n    //GET\n    if (method === \"GET\") {\n        if (req.query?.id) {\n            res.json(await _models_Producto__WEBPACK_IMPORTED_MODULE_1__.Producto.findOne({\n                _id: req.query.id\n            }));\n        } else {\n            res.json(await _models_Producto__WEBPACK_IMPORTED_MODULE_1__.Producto.find());\n        }\n    }\n    //POST\n    if (method === \"POST\") {\n        const { nombre, categoria, precio, descripcion, imagen, marca } = req.body;\n        const productoDoc = await _models_Producto__WEBPACK_IMPORTED_MODULE_1__.Producto.create({\n            nombre,\n            categoria,\n            precio,\n            descripcion,\n            imagen,\n            marca\n        });\n        res.json(productoDoc);\n    }\n    //PUT\n    if (method === \"PUT\") {\n        const { nombre, categoria, descripcion, precio, imagen, marca, _id } = req.body;\n        //console.log({marca})\n        await _models_Producto__WEBPACK_IMPORTED_MODULE_1__.Producto.updateOne({\n            _id\n        }, {\n            nombre,\n            categoria,\n            descripcion,\n            precio,\n            imagen,\n            marca\n        });\n        res.json(true);\n    }\n    //DELETE\n    if (method === \"DELETE\") {\n        if (req.query?.id) {\n            await _models_Producto__WEBPACK_IMPORTED_MODULE_1__.Producto.deleteOne({\n                _id: req.query?.id\n            });\n            res.json(true);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdG9zLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNpRDtBQUNBO0FBRWxDLGVBQWVFLE9BQU9DLEdBQUcsRUFBRUMsR0FBRztJQUN6QyxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHRjtJQUNuQixNQUFNSCw4REFBZUE7SUFFckIsS0FBSztJQUNMLElBQUlLLFdBQVcsT0FBTztRQUNsQixJQUFJRixJQUFJRyxLQUFLLEVBQUVDLElBQUk7WUFDZkgsSUFBSUksSUFBSSxDQUFDLE1BQU1QLHNEQUFRQSxDQUFDUSxPQUFPLENBQUM7Z0JBQUVDLEtBQUtQLElBQUlHLEtBQUssQ0FBQ0MsRUFBRTtZQUFDO1FBQ3hELE9BQU87WUFDSEgsSUFBSUksSUFBSSxDQUFDLE1BQU1QLHNEQUFRQSxDQUFDVSxJQUFJO1FBQ2hDO0lBQ0o7SUFFQSxNQUFNO0lBQ04sSUFBSU4sV0FBVyxRQUFRO1FBQ25CLE1BQU0sRUFBRU8sTUFBTSxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBQyxHQUFHZCxJQUFJZSxJQUFJO1FBQ3pFLE1BQU1DLGNBQWMsTUFBTWxCLHNEQUFRQSxDQUFDbUIsTUFBTSxDQUFDO1lBQ3RDUjtZQUFRQztZQUFXQztZQUFRQztZQUFhQztZQUFRQztRQUNwRDtRQUNBYixJQUFJSSxJQUFJLENBQUNXO0lBQ2I7SUFFQSxLQUFLO0lBQ0wsSUFBSWQsV0FBVyxPQUFPO1FBQ2xCLE1BQU0sRUFBRU8sTUFBTSxFQUFFQyxTQUFTLEVBQUNFLFdBQVcsRUFBRUQsTUFBTSxFQUFFRSxNQUFNLEVBQUVDLEtBQUssRUFBRVAsR0FBRyxFQUFFLEdBQUdQLElBQUllLElBQUk7UUFDOUUsc0JBQXNCO1FBQ3RCLE1BQU1qQixzREFBUUEsQ0FBQ29CLFNBQVMsQ0FBQztZQUFFWDtRQUFJLEdBQUc7WUFBRUU7WUFBUUM7WUFBVUU7WUFBYUQ7WUFBUUU7WUFBUUM7UUFBTTtRQUN6RmIsSUFBSUksSUFBSSxDQUFDO0lBQ2I7SUFFQSxRQUFRO0lBQ1IsSUFBSUgsV0FBVyxVQUFVO1FBQ3JCLElBQUlGLElBQUlHLEtBQUssRUFBRUMsSUFBSTtZQUNmLE1BQU1OLHNEQUFRQSxDQUFDcUIsU0FBUyxDQUFDO2dCQUFFWixLQUFLUCxJQUFJRyxLQUFLLEVBQUVDO1lBQUc7WUFDOUNILElBQUlJLElBQUksQ0FBQztRQUNiO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL25vbWJyZS1kZWwtcHJveWVjdG8vLi9wYWdlcy9hcGkvcHJvZHVjdG9zLmpzP2IyMDkiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IG1vbmdvb3NlQ29ubmVjdCB9IGZyb20gXCJAL2xpYi9tb25nb29zZVwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0byB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUHJvZHVjdG9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcclxuICAgIGF3YWl0IG1vbmdvb3NlQ29ubmVjdCgpO1xyXG5cclxuICAgIC8vR0VUXHJcbiAgICBpZiAobWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgIGlmIChyZXEucXVlcnk/LmlkKSB7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKGF3YWl0IFByb2R1Y3RvLmZpbmRPbmUoeyBfaWQ6IHJlcS5xdWVyeS5pZCB9KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzLmpzb24oYXdhaXQgUHJvZHVjdG8uZmluZCgpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL1BPU1RcclxuICAgIGlmIChtZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICAgIGNvbnN0IHsgbm9tYnJlLCBjYXRlZ29yaWEsIHByZWNpbywgZGVzY3JpcGNpb24sIGltYWdlbiwgbWFyY2F9ID0gcmVxLmJvZHk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdG9Eb2MgPSBhd2FpdCBQcm9kdWN0by5jcmVhdGUoe1xyXG4gICAgICAgICAgICBub21icmUsIGNhdGVnb3JpYSwgcHJlY2lvLCBkZXNjcmlwY2lvbiwgaW1hZ2VuLCBtYXJjYVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmVzLmpzb24ocHJvZHVjdG9Eb2MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vUFVUXHJcbiAgICBpZiAobWV0aG9kID09PSAnUFVUJykge1xyXG4gICAgICAgIGNvbnN0IHsgbm9tYnJlLCBjYXRlZ29yaWEsZGVzY3JpcGNpb24sIHByZWNpbywgaW1hZ2VuICxtYXJjYSwgX2lkIH0gPSByZXEuYm9keTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHttYXJjYX0pXHJcbiAgICAgICAgYXdhaXQgUHJvZHVjdG8udXBkYXRlT25lKHsgX2lkIH0sIHsgbm9tYnJlLCBjYXRlZ29yaWEsZGVzY3JpcGNpb24sIHByZWNpbywgaW1hZ2VuLCBtYXJjYSB9KTtcclxuICAgICAgICByZXMuanNvbih0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIC8vREVMRVRFXHJcbiAgICBpZiAobWV0aG9kID09PSAnREVMRVRFJykge1xyXG4gICAgICAgIGlmIChyZXEucXVlcnk/LmlkKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IFByb2R1Y3RvLmRlbGV0ZU9uZSh7IF9pZDogcmVxLnF1ZXJ5Py5pZCB9KTtcclxuICAgICAgICAgICAgcmVzLmpzb24odHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsibW9uZ29vc2VDb25uZWN0IiwiUHJvZHVjdG8iLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJxdWVyeSIsImlkIiwianNvbiIsImZpbmRPbmUiLCJfaWQiLCJmaW5kIiwibm9tYnJlIiwiY2F0ZWdvcmlhIiwicHJlY2lvIiwiZGVzY3JpcGNpb24iLCJpbWFnZW4iLCJtYXJjYSIsImJvZHkiLCJwcm9kdWN0b0RvYyIsImNyZWF0ZSIsInVwZGF0ZU9uZSIsImRlbGV0ZU9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/productos.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/productos.js"));
module.exports = __webpack_exports__;

})();