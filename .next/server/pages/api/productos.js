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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mongooseConnect: () => (/* binding */ mongooseConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction mongooseConnect() {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    } else {\n        const uri = process.env.MONGODB_URI;\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLFNBQVNDO0lBQ2QsSUFBSUQsNERBQW1CLENBQUNHLFVBQVUsS0FBSyxHQUFHO1FBQ3hDLE9BQU9ILDBEQUFtQixDQUFDSSxTQUFTO0lBQ3RDLE9BQU87UUFDTCxNQUFNQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7UUFDbkMsT0FBT1IsdURBQWdCLENBQUNLO0lBQzFCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtbmV4dC1hZG1pbi8uL2xpYi9tb25nb29zZS5qcz8xNjNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb25nb29zZUNvbm5lY3QoKSB7XHJcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSA9PT0gMSkge1xyXG4gICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3Rpb24uYXNQcm9taXNlKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG4gICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3QodXJpKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwibW9uZ29vc2VDb25uZWN0IiwiY29ubmVjdGlvbiIsInJlYWR5U3RhdGUiLCJhc1Byb21pc2UiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/Producto.js":
/*!****************************!*\
  !*** ./models/Producto.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Producto: () => (/* binding */ Producto)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst ProductoSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    nombre: {\n        type: String,\n        required: true\n    },\n    categoria: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types).ObjectId,\n        ref: \"Categoria\"\n    },\n    precio: {\n        type: Number\n    },\n    descripcion: String,\n    imagen: [\n        {\n            type: String\n        }\n    ],\n    marca: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types).ObjectId,\n        ref: \"Marca\"\n    }\n});\nconst Producto = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.producto || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"producto\", ProductoSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdG8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBQ2dCO0FBRWhELE1BQU1JLGlCQUFpQixJQUFJSCw0Q0FBTUEsQ0FBQztJQUM5QkksUUFBUTtRQUFDQyxNQUFNQztRQUFRQyxVQUFVO0lBQUk7SUFDckNDLFdBQVk7UUFBQ0gsTUFBS04sdURBQWMsQ0FBQ1csUUFBUTtRQUFDQyxLQUFJO0lBQVc7SUFDekRDLFFBQVE7UUFBQ1AsTUFBTVE7SUFBTTtJQUNyQkMsYUFBYVI7SUFDYlMsUUFBUTtRQUFDO1lBQUNWLE1BQUtDO1FBQU07S0FBRTtJQUN2QlUsT0FBUTtRQUFDWCxNQUFLTix1REFBYyxDQUFDVyxRQUFRO1FBQUNDLEtBQUk7SUFBTztBQUVyRDtBQUVPLE1BQU1NLFdBQVdmLDRDQUFNQSxDQUFDZ0IsUUFBUSxJQUFJakIsK0NBQUtBLENBQUMsWUFBV0UsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLW5leHQtYWRtaW4vLi9tb2RlbHMvUHJvZHVjdG8uanM/NmM4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IFNjaGVtYSxtb2RlbCwgbW9kZWxzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0b1NjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgbm9tYnJlOiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZX0sXHJcbiAgICBjYXRlZ29yaWEgOiB7dHlwZTptb25nb29zZS5UeXBlcy5PYmplY3RJZCxyZWY6J0NhdGVnb3JpYSd9LCBcclxuICAgIHByZWNpbzoge3R5cGU6IE51bWJlcn0sXHJcbiAgICBkZXNjcmlwY2lvbjogU3RyaW5nLFxyXG4gICAgaW1hZ2VuOiBbe3R5cGU6U3RyaW5nfV0sXHJcbiAgICBtYXJjYSA6IHt0eXBlOm1vbmdvb3NlLlR5cGVzLk9iamVjdElkLHJlZjonTWFyY2EnfSwgXHJcblxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0byA9IG1vZGVscy5wcm9kdWN0byB8fCBtb2RlbCgncHJvZHVjdG8nLFByb2R1Y3RvU2NoZW1hICkiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJtb2RlbCIsIm1vZGVscyIsIlByb2R1Y3RvU2NoZW1hIiwibm9tYnJlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiY2F0ZWdvcmlhIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInByZWNpbyIsIk51bWJlciIsImRlc2NyaXBjaW9uIiwiaW1hZ2VuIiwibWFyY2EiLCJQcm9kdWN0byIsInByb2R1Y3RvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Producto.js\n");

/***/ }),

/***/ "(api)/./pages/api/productos.js":
/*!********************************!*\
  !*** ./pages/api/productos.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _models_Producto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Producto */ \"(api)/./models/Producto.js\");\n\n\nasync function handle(req, res) {\n    const { method } = req;\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__.mongooseConnect)();\n    //GET\n    if (method === \"GET\") {\n        if (req.query?.id) {\n            res.json(await _models_Producto__WEBPACK_IMPORTED_MODULE_1__.Producto.findOne({\n                _id: req.query.id\n            }));\n        } else {\n            res.json(await _models_Producto__WEBPACK_IMPORTED_MODULE_1__.Producto.find());\n        }\n    }\n    //POST\n    if (method === \"POST\") {\n        const { nombre, categoria, precio, descripcion, imagen, marca } = req.body;\n        const productoDoc = await _models_Producto__WEBPACK_IMPORTED_MODULE_1__.Producto.create({\n            nombre,\n            categoria,\n            precio,\n            descripcion,\n            imagen,\n            marca\n        });\n        res.json(productoDoc);\n    }\n    //PUT\n    if (method === \"PUT\") {\n        const { nombre, categoria, descripcion, precio, imagen, marca, _id } = req.body;\n        //console.log({marca})\n        await _models_Producto__WEBPACK_IMPORTED_MODULE_1__.Producto.updateOne({\n            _id\n        }, {\n            nombre,\n            categoria,\n            descripcion,\n            precio,\n            imagen,\n            marca\n        });\n        res.json(true);\n    }\n    //DELETE\n    if (method === \"DELETE\") {\n        if (req.query?.id) {\n            await _models_Producto__WEBPACK_IMPORTED_MODULE_1__.Producto.deleteOne({\n                _id: req.query?.id\n            });\n            res.json(true);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdG9zLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNpRDtBQUNBO0FBRWxDLGVBQWVFLE9BQU9DLEdBQUcsRUFBRUMsR0FBRztJQUN6QyxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHRjtJQUNuQixNQUFNSCw4REFBZUE7SUFFckIsS0FBSztJQUNMLElBQUlLLFdBQVcsT0FBTztRQUNsQixJQUFJRixJQUFJRyxLQUFLLEVBQUVDLElBQUk7WUFDZkgsSUFBSUksSUFBSSxDQUFDLE1BQU1QLHNEQUFRQSxDQUFDUSxPQUFPLENBQUM7Z0JBQUVDLEtBQUtQLElBQUlHLEtBQUssQ0FBQ0MsRUFBRTtZQUFDO1FBQ3hELE9BQU87WUFDSEgsSUFBSUksSUFBSSxDQUFDLE1BQU1QLHNEQUFRQSxDQUFDVSxJQUFJO1FBQ2hDO0lBQ0o7SUFFQSxNQUFNO0lBQ04sSUFBSU4sV0FBVyxRQUFRO1FBQ25CLE1BQU0sRUFBRU8sTUFBTSxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBQyxHQUFHZCxJQUFJZSxJQUFJO1FBQ3pFLE1BQU1DLGNBQWMsTUFBTWxCLHNEQUFRQSxDQUFDbUIsTUFBTSxDQUFDO1lBQ3RDUjtZQUFRQztZQUFXQztZQUFRQztZQUFhQztZQUFRQztRQUNwRDtRQUNBYixJQUFJSSxJQUFJLENBQUNXO0lBQ2I7SUFFQSxLQUFLO0lBQ0wsSUFBSWQsV0FBVyxPQUFPO1FBQ2xCLE1BQU0sRUFBRU8sTUFBTSxFQUFFQyxTQUFTLEVBQUNFLFdBQVcsRUFBRUQsTUFBTSxFQUFFRSxNQUFNLEVBQUVDLEtBQUssRUFBRVAsR0FBRyxFQUFFLEdBQUdQLElBQUllLElBQUk7UUFDOUUsc0JBQXNCO1FBQ3RCLE1BQU1qQixzREFBUUEsQ0FBQ29CLFNBQVMsQ0FBQztZQUFFWDtRQUFJLEdBQUc7WUFBRUU7WUFBUUM7WUFBVUU7WUFBYUQ7WUFBUUU7WUFBUUM7UUFBTTtRQUN6RmIsSUFBSUksSUFBSSxDQUFDO0lBQ2I7SUFFQSxRQUFRO0lBQ1IsSUFBSUgsV0FBVyxVQUFVO1FBQ3JCLElBQUlGLElBQUlHLEtBQUssRUFBRUMsSUFBSTtZQUNmLE1BQU1OLHNEQUFRQSxDQUFDcUIsU0FBUyxDQUFDO2dCQUFFWixLQUFLUCxJQUFJRyxLQUFLLEVBQUVDO1lBQUc7WUFDOUNILElBQUlJLElBQUksQ0FBQztRQUNiO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1uZXh0LWFkbWluLy4vcGFnZXMvYXBpL3Byb2R1Y3Rvcy5qcz9iMjA5Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBtb25nb29zZUNvbm5lY3QgfSBmcm9tIFwiQC9saWIvbW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgUHJvZHVjdG8gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1Byb2R1Y3RvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XHJcbiAgICBhd2FpdCBtb25nb29zZUNvbm5lY3QoKTtcclxuXHJcbiAgICAvL0dFVFxyXG4gICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICBpZiAocmVxLnF1ZXJ5Py5pZCkge1xyXG4gICAgICAgICAgICByZXMuanNvbihhd2FpdCBQcm9kdWN0by5maW5kT25lKHsgX2lkOiByZXEucXVlcnkuaWQgfSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKGF3YWl0IFByb2R1Y3RvLmZpbmQoKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9QT1NUXHJcbiAgICBpZiAobWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICBjb25zdCB7IG5vbWJyZSwgY2F0ZWdvcmlhLCBwcmVjaW8sIGRlc2NyaXBjaW9uLCBpbWFnZW4sIG1hcmNhfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RvRG9jID0gYXdhaXQgUHJvZHVjdG8uY3JlYXRlKHtcclxuICAgICAgICAgICAgbm9tYnJlLCBjYXRlZ29yaWEsIHByZWNpbywgZGVzY3JpcGNpb24sIGltYWdlbiwgbWFyY2FcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJlcy5qc29uKHByb2R1Y3RvRG9jKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1BVVFxyXG4gICAgaWYgKG1ldGhvZCA9PT0gJ1BVVCcpIHtcclxuICAgICAgICBjb25zdCB7IG5vbWJyZSwgY2F0ZWdvcmlhLGRlc2NyaXBjaW9uLCBwcmVjaW8sIGltYWdlbiAsbWFyY2EsIF9pZCB9ID0gcmVxLmJvZHk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh7bWFyY2F9KVxyXG4gICAgICAgIGF3YWl0IFByb2R1Y3RvLnVwZGF0ZU9uZSh7IF9pZCB9LCB7IG5vbWJyZSwgY2F0ZWdvcmlhLGRlc2NyaXBjaW9uLCBwcmVjaW8sIGltYWdlbiwgbWFyY2EgfSk7XHJcbiAgICAgICAgcmVzLmpzb24odHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICAvL0RFTEVURVxyXG4gICAgaWYgKG1ldGhvZCA9PT0gJ0RFTEVURScpIHtcclxuICAgICAgICBpZiAocmVxLnF1ZXJ5Py5pZCkge1xyXG4gICAgICAgICAgICBhd2FpdCBQcm9kdWN0by5kZWxldGVPbmUoeyBfaWQ6IHJlcS5xdWVyeT8uaWQgfSk7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIm1vbmdvb3NlQ29ubmVjdCIsIlByb2R1Y3RvIiwiaGFuZGxlIiwicmVxIiwicmVzIiwibWV0aG9kIiwicXVlcnkiLCJpZCIsImpzb24iLCJmaW5kT25lIiwiX2lkIiwiZmluZCIsIm5vbWJyZSIsImNhdGVnb3JpYSIsInByZWNpbyIsImRlc2NyaXBjaW9uIiwiaW1hZ2VuIiwibWFyY2EiLCJib2R5IiwicHJvZHVjdG9Eb2MiLCJjcmVhdGUiLCJ1cGRhdGVPbmUiLCJkZWxldGVPbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/productos.js\n");

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