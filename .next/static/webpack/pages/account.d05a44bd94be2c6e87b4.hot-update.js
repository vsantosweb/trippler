"use strict";
self["webpackHotUpdate_N_E"]("pages/account",{

/***/ "./src/pages/account/styles.js":
/*!*************************************!*\
  !*** ./src/pages/account/styles.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileDisplay": function() { return /* binding */ ProfileDisplay; },
/* harmony export */   "ProfileInfo": function() { return /* binding */ ProfileInfo; },
/* harmony export */   "AccountCard": function() { return /* binding */ AccountCard; },
/* harmony export */   "AccountCardContent": function() { return /* binding */ AccountCardContent; },
/* harmony export */   "AccountCardAction": function() { return /* binding */ AccountCardAction; },
/* harmony export */   "AccountCardIcon": function() { return /* binding */ AccountCardIcon; },
/* harmony export */   "AccountCardTitle": function() { return /* binding */ AccountCardTitle; },
/* harmony export */   "AccountCardDescription": function() { return /* binding */ AccountCardDescription; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

const ProfileDisplay = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`
    display: flex;
    gap: 10px;
    border-bottom: solid 1px #ddd;
    padding: ${({
  theme
}) => theme.defaultContainer.spacing};
    background: ${({
  theme
}) => theme.colors.primary};
    align-items: center;
    a{
        border-radius: 100%;
        font-size: 1.8em;
        padding: 0;
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
`;
const ProfileInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    color: #fff;
`;
const AccountCard = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a`
    display: flex;
    flex: 1;
    align-items: center;
    border-bottom: solid 1px #ddd;
    color: inherit;
    padding: ${({
  theme
}) => theme.defaultContainer.spacing};
`;
const AccountCardContent = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;
const AccountCardAction = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`
font-size: 1.4em;

`;
const AccountCardIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`
font-size: 1.6em;
`;
const AccountCardTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`
font-size: 1em;
font-weight: bold;
`;
const AccountCardDescription = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p`
    margin: 0;
    font-size: 14px;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWNjb3VudC5kMDVhNDRiZDk0YmUyYzZlODdiNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1DLGNBQWMsR0FBR0QsMERBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0EsZUFBZSxDQUFDO0FBQUVHLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLGdCQUFOLENBQXVCQyxPQUFRO0FBQzdELGtCQUFrQixDQUFDO0FBQUVGLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNHLE1BQU4sQ0FBYUMsT0FBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWxCTztBQXFCQSxNQUFNQyxXQUFXLEdBQUdSLDBEQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FMTztBQU9BLE1BQU1TLFdBQVcsR0FBR1Qsd0RBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsQ0FBQztBQUFFRyxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxnQkFBTixDQUF1QkMsT0FBUTtBQUM3RCxDQVBPO0FBUUEsTUFBTU0sa0JBQWtCLEdBQUdYLDBEQUFXO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FMTztBQU9BLE1BQU1ZLGlCQUFpQixHQUFHWiwwREFBVztBQUM1QztBQUNBO0FBQ0EsQ0FITztBQUtBLE1BQU1hLGVBQWUsR0FBR2IsMERBQVc7QUFDMUM7QUFDQSxDQUZPO0FBSUEsTUFBTWMsZ0JBQWdCLEdBQUdkLDBEQUFXO0FBQzNDO0FBQ0E7QUFDQSxDQUhPO0FBS0EsTUFBTWUsc0JBQXNCLEdBQUdmLHdEQUFTO0FBQy9DO0FBQ0E7QUFDQSxDQUhPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hY2NvdW50L3N0eWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlRGlzcGxheSA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkZGQ7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRlZmF1bHRDb250YWluZXIuc3BhY2luZ307XHJcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhe1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVJbmZvID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleDogMTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3VudENhcmQgPSBzdHlsZWQuYWBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZGRkO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRlZmF1bHRDb250YWluZXIuc3BhY2luZ307XHJcbmBcclxuZXhwb3J0IGNvbnN0IEFjY291bnRDYXJkQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3VudENhcmRBY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG5mb250LXNpemU6IDEuNGVtO1xyXG5cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEFjY291bnRDYXJkSWNvbiA9IHN0eWxlZC5kaXZgXHJcbmZvbnQtc2l6ZTogMS42ZW07XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBBY2NvdW50Q2FyZFRpdGxlID0gc3R5bGVkLmRpdmBcclxuZm9udC1zaXplOiAxZW07XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3VudENhcmREZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG5gIl0sIm5hbWVzIjpbInN0eWxlZCIsIlByb2ZpbGVEaXNwbGF5IiwiZGl2IiwidGhlbWUiLCJkZWZhdWx0Q29udGFpbmVyIiwic3BhY2luZyIsImNvbG9ycyIsInByaW1hcnkiLCJQcm9maWxlSW5mbyIsIkFjY291bnRDYXJkIiwiYSIsIkFjY291bnRDYXJkQ29udGVudCIsIkFjY291bnRDYXJkQWN0aW9uIiwiQWNjb3VudENhcmRJY29uIiwiQWNjb3VudENhcmRUaXRsZSIsIkFjY291bnRDYXJkRGVzY3JpcHRpb24iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==