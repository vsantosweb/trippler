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


const baseURL = 'http://tripler.ws/api/v1';
const api = axios__WEBPACK_IMPORTED_MODULE_1___default().create({
  baseURL: baseURL
});

if (js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get('token')) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3RyaXBzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQSxNQUFNRSxPQUFPLEdBQUcsMEJBQWhCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRixtREFBQSxDQUFhO0FBQ3JCQyxFQUFBQSxPQUFPLEVBQUVBO0FBRFksQ0FBYixDQUFaOztBQUlBLElBQUlGLG9EQUFBLENBQVcsT0FBWCxDQUFKLEVBQXlCO0FBQ3JCRyxFQUFBQSxHQUFHLENBQUNHLFFBQUosQ0FBYUMsT0FBYixDQUFxQixlQUFyQixJQUF5QyxVQUFTUCxvREFBQSxDQUFXLE9BQVgsQ0FBb0IsRUFBdEU7QUFDSDs7QUFFRCxpRUFBZUcsR0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBRWdCLGVBQWVNLEtBQWYsQ0FBcUJDLE9BQXJCLEVBQThCQyxRQUE5QixFQUF3QztBQUNwRCxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBVyxNQUFNVCw2Q0FBQSxDQUFRLHlDQUFSLENBQXZCO0FBQ0FRLEVBQUFBLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjRCxJQUFkO0FBQ0g7Ozs7Ozs7Ozs7QUNORDs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmV2aWdzaXRlLy4vc3JjL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXZpZ3NpdGUvLi9zcmMvcGFnZXMvYXBpL3RyaXBzL2luZGV4LmpzIiwid2VicGFjazovL3Jldmlnc2l0ZS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vcmV2aWdzaXRlL2V4dGVybmFsIFwianMtY29va2llXCIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBDb29raWUgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IGJhc2VVUkwgPSAnaHR0cDovL3RyaXBsZXIud3MvYXBpL3YxJztcclxuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IGJhc2VVUkwsXHJcbn0pO1xyXG5cclxuaWYgKENvb2tpZS5nZXQoJ3Rva2VuJykpIHtcclxuICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7Q29va2llLmdldCgndG9rZW4nKX1gXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaTsiLCJpbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vLi4vYXBpXCI7XHJcblxyXG5leHBvcnQgIGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gVHJpcHMocmVxdWVzdCwgcmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldCgnL2NsaWVudC9wdWJsaWMvdHJpcC9zY2hlZHVsZS9jYXRlZ29yaWVzJyk7XHJcbiAgICByZXNwb25zZS5qc29uKGRhdGEpO1xyXG59XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7Il0sIm5hbWVzIjpbIkNvb2tpZSIsImF4aW9zIiwiYmFzZVVSTCIsImFwaSIsImNyZWF0ZSIsImdldCIsImRlZmF1bHRzIiwiaGVhZGVycyIsIkF4aW9zIiwiVHJpcHMiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJkYXRhIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=