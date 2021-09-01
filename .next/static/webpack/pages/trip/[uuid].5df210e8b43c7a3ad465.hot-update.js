"use strict";
self["webpackHotUpdate_N_E"]("pages/trip/[uuid]",{

/***/ "./src/resources/components/_Elements/Button/styles.js":
/*!*************************************************************!*\
  !*** ./src/resources/components/_Elements/Button/styles.js ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button`
  display: inline-block;
  text-align: center;
  padding: ${({
  type
}) => type !== 'link' && '0.8em 1.8em'};
  border-radius: ${({
  theme
}) => theme.radiusDefault};
  outline: none;
  box-shadow: none;
  border: solid 2px ${({
  theme,
  color
}) => theme.colors[color]};
  font-weight: bold;
  background-color: ${({
  theme,
  color
}) => theme.colors[color]};
  color: #fff;
  &:disabled{
      opacity: .4 !important;
      cursor: no-drop;
  }
  &:hover{
      opacity: .9;
  }
  ${({
  variant,
  theme,
  color
}) => {
  if (variant === "outlined") {
    return `background: transparent;
                color:  ${theme.colors[color]}};`;
  }
}}
    a{
        text-decoration: none;
        display: block;
        padding: ${({
  type
}) => type === 'link' && '0.8em 1.8em'};

    }
`;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJpcC9bdXVpZF0uNWRmMjEwZThiNDNjN2EzYWQ0NjUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1DLFNBQVMsR0FBR0QsNkRBQWM7QUFDdkM7QUFDQTtBQUNBLGFBQWEsQ0FBQztBQUFFRyxFQUFBQTtBQUFGLENBQUQsS0FBY0EsSUFBSSxLQUFLLE1BQVQsSUFBbUIsYUFBYztBQUM1RCxtQkFBbUIsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxhQUFjO0FBQ3REO0FBQ0E7QUFDQSxzQkFBc0IsQ0FBQztBQUFFRCxFQUFBQSxLQUFGO0FBQVNFLEVBQUFBO0FBQVQsQ0FBRCxLQUFzQkYsS0FBSyxDQUFDRyxNQUFOLENBQWFELEtBQWIsQ0FBb0I7QUFDaEU7QUFDQSxzQkFBc0IsQ0FBQztBQUFFRixFQUFBQSxLQUFGO0FBQVNFLEVBQUFBO0FBQVQsQ0FBRCxLQUFzQkYsS0FBSyxDQUFDRyxNQUFOLENBQWFELEtBQWIsQ0FBb0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksQ0FBQztBQUFFRSxFQUFBQSxPQUFGO0FBQVdKLEVBQUFBLEtBQVg7QUFBa0JFLEVBQUFBO0FBQWxCLENBQUQsS0FBK0I7QUFDM0IsTUFBSUUsT0FBTyxLQUFLLFVBQWhCLEVBQTRCO0FBQ3hCLFdBQ0s7QUFDakIsMEJBQTBCSixLQUFLLENBQUNHLE1BQU4sQ0FBYUQsS0FBYixDQUFvQixJQUZsQztBQUlIO0FBQ0osQ0FBQztBQUNOO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixDQUFDO0FBQUVILEVBQUFBO0FBQUYsQ0FBRCxLQUFjQSxJQUFJLEtBQUssTUFBVCxJQUFtQixhQUFjO0FBQ2xFO0FBQ0E7QUFDQSxDQWhDTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVzb3VyY2VzL2NvbXBvbmVudHMvX0VsZW1lbnRzL0J1dHRvbi9zdHlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogJHsoeyB0eXBlIH0pID0+IHR5cGUgIT09ICdsaW5rJyAmJiAnMC44ZW0gMS44ZW0nfTtcclxuICBib3JkZXItcmFkaXVzOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnJhZGl1c0RlZmF1bHR9O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXI6IHNvbGlkIDJweCAkeyh7IHRoZW1lLCBjb2xvciB9KSA9PiB0aGVtZS5jb2xvcnNbY29sb3JdfTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lLCBjb2xvciB9KSA9PiB0aGVtZS5jb2xvcnNbY29sb3JdfTtcclxuICBjb2xvcjogI2ZmZjtcclxuICAmOmRpc2FibGVke1xyXG4gICAgICBvcGFjaXR5OiAuNCAhaW1wb3J0YW50O1xyXG4gICAgICBjdXJzb3I6IG5vLWRyb3A7XHJcbiAgfVxyXG4gICY6aG92ZXJ7XHJcbiAgICAgIG9wYWNpdHk6IC45O1xyXG4gIH1cclxuICAkeyh7IHZhcmlhbnQsIHRoZW1lLCBjb2xvciB9KSA9PiB7XHJcbiAgICAgICAgaWYgKHZhcmlhbnQgPT09IFwib3V0bGluZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgYGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICAke3RoZW1lLmNvbG9yc1tjb2xvcl19fTtgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfX1cclxuICAgIGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6ICR7KHsgdHlwZSB9KSA9PiB0eXBlID09PSAnbGluaycgJiYgJzAuOGVtIDEuOGVtJ307XHJcblxyXG4gICAgfVxyXG5gO1xyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiQ29udGFpbmVyIiwiYnV0dG9uIiwidHlwZSIsInRoZW1lIiwicmFkaXVzRGVmYXVsdCIsImNvbG9yIiwiY29sb3JzIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=