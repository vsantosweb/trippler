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
  display: flex;
  justify-content: ${({
  icon
}) => icon ? 'space-between' : 'center'};
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
  width: ${({
  block
}) => block && '100%'};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJpcC9bdXVpZF0uYTJkYTUxYjcxMmI1YWM0NmEwMTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1DLFNBQVMsR0FBR0QsNkRBQWM7QUFDdkM7QUFDQSxxQkFBcUIsQ0FBQztBQUFFRyxFQUFBQTtBQUFGLENBQUQsS0FBY0EsSUFBSSxHQUFHLGVBQUgsR0FBb0IsUUFBUztBQUNwRTtBQUNBLGFBQWEsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBY0EsSUFBSSxLQUFLLE1BQVQsSUFBbUIsYUFBYztBQUM1RCxtQkFBbUIsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxhQUFjO0FBQ3REO0FBQ0E7QUFDQSxzQkFBc0IsQ0FBQztBQUFFRCxFQUFBQSxLQUFGO0FBQVNFLEVBQUFBO0FBQVQsQ0FBRCxLQUFzQkYsS0FBSyxDQUFDRyxNQUFOLENBQWFELEtBQWIsQ0FBb0I7QUFDaEU7QUFDQSxzQkFBc0IsQ0FBQztBQUFFRixFQUFBQSxLQUFGO0FBQVNFLEVBQUFBO0FBQVQsQ0FBRCxLQUFzQkYsS0FBSyxDQUFDRyxNQUFOLENBQWFELEtBQWIsQ0FBb0I7QUFDaEU7QUFDQSxXQUFXLENBQUM7QUFBRUUsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssSUFBSSxNQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLENBQUM7QUFBRUMsRUFBQUEsT0FBRjtBQUFXTCxFQUFBQSxLQUFYO0FBQWtCRSxFQUFBQTtBQUFsQixDQUFELEtBQStCO0FBQzNCLE1BQUlHLE9BQU8sS0FBSyxVQUFoQixFQUE0QjtBQUN4QixXQUNLO0FBQ2pCLDBCQUEwQkwsS0FBSyxDQUFDRyxNQUFOLENBQWFELEtBQWIsQ0FBb0IsSUFGbEM7QUFJSDtBQUNKLENBQUM7QUFDTjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsQ0FBQztBQUFFSCxFQUFBQTtBQUFGLENBQUQsS0FBY0EsSUFBSSxLQUFLLE1BQVQsSUFBbUIsYUFBYztBQUNsRTtBQUNBO0FBQ0EsQ0FuQ08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3Jlc291cmNlcy9jb21wb25lbnRzL19FbGVtZW50cy9CdXR0b24vc3R5bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmJ1dHRvbmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogJHsoeyBpY29uIH0pID0+IGljb24gPyAnc3BhY2UtYmV0d2Vlbic6ICdjZW50ZXInfTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogJHsoeyB0eXBlIH0pID0+IHR5cGUgIT09ICdsaW5rJyAmJiAnMC44ZW0gMS44ZW0nfTtcclxuICBib3JkZXItcmFkaXVzOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnJhZGl1c0RlZmF1bHR9O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXI6IHNvbGlkIDJweCAkeyh7IHRoZW1lLCBjb2xvciB9KSA9PiB0aGVtZS5jb2xvcnNbY29sb3JdfTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lLCBjb2xvciB9KSA9PiB0aGVtZS5jb2xvcnNbY29sb3JdfTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB3aWR0aDogJHsoeyBibG9jayB9KSA9PiBibG9jayAmJiAnMTAwJSd9O1xyXG5cclxuICAmOmRpc2FibGVke1xyXG4gICAgICBvcGFjaXR5OiAuNCAhaW1wb3J0YW50O1xyXG4gICAgICBjdXJzb3I6IG5vLWRyb3A7XHJcbiAgfVxyXG4gICY6aG92ZXJ7XHJcbiAgICAgIG9wYWNpdHk6IC45O1xyXG4gIH1cclxuICAkeyh7IHZhcmlhbnQsIHRoZW1lLCBjb2xvciB9KSA9PiB7XHJcbiAgICAgICAgaWYgKHZhcmlhbnQgPT09IFwib3V0bGluZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgYGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICAke3RoZW1lLmNvbG9yc1tjb2xvcl19fTtgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfX1cclxuICAgIGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6ICR7KHsgdHlwZSB9KSA9PiB0eXBlID09PSAnbGluaycgJiYgJzAuOGVtIDEuOGVtJ307XHJcblxyXG4gICAgfVxyXG5gO1xyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiQ29udGFpbmVyIiwiYnV0dG9uIiwiaWNvbiIsInR5cGUiLCJ0aGVtZSIsInJhZGl1c0RlZmF1bHQiLCJjb2xvciIsImNvbG9ycyIsImJsb2NrIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=