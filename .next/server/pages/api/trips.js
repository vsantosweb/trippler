"use strict";
(() => {
var exports = {};
exports.id = "pages/api/trips";
exports.ids = ["pages/api/trips"];
exports.modules = {

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const baseURL = 'http://tripler/api/v1';
const api = axios__WEBPACK_IMPORTED_MODULE_1___default().create({
  baseURL: baseURL
});

if (js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get('token')) {
  console.log('caralho!!!!!!', js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get('token'));
  api.defaults.headers['Authorization'] = `Bearer ${js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get('token')}`;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);

/***/ }),

/***/ "./src/pages/api/trips/index.js":
/*!**************************************!*\
  !*** ./src/pages/api/trips/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Trips)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api */ "./src/api/index.js");


async function Trips(request, response) {
  const {
    data
  } = await _api__WEBPACK_IMPORTED_MODULE_1__.default.get('/client/public/trip/schedule/categories');
  response.json(data);
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/trips/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3RyaXBzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQSxNQUFNRSxPQUFPLEdBQUcsdUJBQWhCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRixtREFBQSxDQUFhO0FBQ3JCQyxFQUFBQSxPQUFPLEVBQUVBO0FBRFksQ0FBYixDQUFaOztBQUlBLElBQUlGLG9EQUFBLENBQVcsT0FBWCxDQUFKLEVBQXlCO0FBQ3JCTSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCUCxvREFBQSxDQUFXLE9BQVgsQ0FBN0I7QUFDQUcsRUFBQUEsR0FBRyxDQUFDSyxRQUFKLENBQWFDLE9BQWIsQ0FBcUIsZUFBckIsSUFBeUMsVUFBU1Qsb0RBQUEsQ0FBVyxPQUFYLENBQW9CLEVBQXRFO0FBQ0g7O0FBRUQsaUVBQWVHLEdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUVnQixlQUFlUSxLQUFmLENBQXFCQyxPQUFyQixFQUE4QkMsUUFBOUIsRUFBd0M7QUFDcEQsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQVcsTUFBTVgsNkNBQUEsQ0FBUSx5Q0FBUixDQUF2QjtBQUNBVSxFQUFBQSxRQUFRLENBQUNFLElBQVQsQ0FBY0QsSUFBZDtBQUNIOzs7Ozs7Ozs7O0FDTkQ7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jldmlnc2l0ZS8uL3NyYy9hcGkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmV2aWdzaXRlLy4vc3JjL3BhZ2VzL2FwaS90cmlwcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXZpZ3NpdGUvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3Jldmlnc2l0ZS9leHRlcm5hbCBcImpzLWNvb2tpZVwiIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgQ29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBiYXNlVVJMID0gJ2h0dHA6Ly90cmlwbGVyL2FwaS92MSc7XHJcbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBiYXNlVVJMLFxyXG59KTtcclxuXHJcbmlmIChDb29raWUuZ2V0KCd0b2tlbicpKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2FyYWxobyEhISEhIScsIENvb2tpZS5nZXQoJ3Rva2VuJykpXHJcbiAgICBhcGkuZGVmYXVsdHMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke0Nvb2tpZS5nZXQoJ3Rva2VuJyl9YFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7IiwiaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uLy4uL2FwaVwiO1xyXG5cclxuZXhwb3J0ICBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIFRyaXBzKHJlcXVlc3QsIHJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5nZXQoJy9jbGllbnQvcHVibGljL3RyaXAvc2NoZWR1bGUvY2F0ZWdvcmllcycpO1xyXG4gICAgcmVzcG9uc2UuanNvbihkYXRhKTtcclxufVxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyJdLCJuYW1lcyI6WyJDb29raWUiLCJheGlvcyIsImJhc2VVUkwiLCJhcGkiLCJjcmVhdGUiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiQXhpb3MiLCJUcmlwcyIsInJlcXVlc3QiLCJyZXNwb25zZSIsImRhdGEiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==