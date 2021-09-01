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
const AccountCard = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(a)`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWNjb3VudC5mNWMwNmRiYjgwNjcxMWZlMjJhNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1DLGNBQWMsR0FBR0QsMERBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0EsZUFBZSxDQUFDO0FBQUVHLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLGdCQUFOLENBQXVCQyxPQUFRO0FBQzdELGtCQUFrQixDQUFDO0FBQUVGLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNHLE1BQU4sQ0FBYUMsT0FBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWxCTztBQXFCQSxNQUFNQyxXQUFXLEdBQUdSLDBEQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FMTztBQU9BLE1BQU1TLFdBQVcsR0FBR1QsMERBQU0sQ0FBQ1UsQ0FBRCxDQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLENBQUM7QUFBRVAsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsZ0JBQU4sQ0FBdUJDLE9BQVE7QUFDN0QsQ0FQTztBQVFBLE1BQU1NLGtCQUFrQixHQUFHWCwwREFBVztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTE87QUFPQSxNQUFNWSxpQkFBaUIsR0FBR1osMERBQVc7QUFDNUM7QUFDQTtBQUNBLENBSE87QUFLQSxNQUFNYSxlQUFlLEdBQUdiLDBEQUFXO0FBQzFDO0FBQ0EsQ0FGTztBQUlBLE1BQU1jLGdCQUFnQixHQUFHZCwwREFBVztBQUMzQztBQUNBO0FBQ0EsQ0FITztBQUtBLE1BQU1lLHNCQUFzQixHQUFHZix3REFBUztBQUMvQztBQUNBO0FBQ0EsQ0FITyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYWNjb3VudC9zdHlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsZURpc3BsYXkgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZGRkO1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kZWZhdWx0Q29udGFpbmVyLnNwYWNpbmd9O1xyXG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlSW5mbyA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEFjY291bnRDYXJkID0gc3R5bGVkKGEpYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkZGQ7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGVmYXVsdENvbnRhaW5lci5zcGFjaW5nfTtcclxuYFxyXG5leHBvcnQgY29uc3QgQWNjb3VudENhcmRDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBBY2NvdW50Q2FyZEFjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbmZvbnQtc2l6ZTogMS40ZW07XHJcblxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3VudENhcmRJY29uID0gc3R5bGVkLmRpdmBcclxuZm9udC1zaXplOiAxLjZlbTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEFjY291bnRDYXJkVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG5mb250LXNpemU6IDFlbTtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBBY2NvdW50Q2FyZERlc2NyaXB0aW9uID0gc3R5bGVkLnBgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbmAiXSwibmFtZXMiOlsic3R5bGVkIiwiUHJvZmlsZURpc3BsYXkiLCJkaXYiLCJ0aGVtZSIsImRlZmF1bHRDb250YWluZXIiLCJzcGFjaW5nIiwiY29sb3JzIiwicHJpbWFyeSIsIlByb2ZpbGVJbmZvIiwiQWNjb3VudENhcmQiLCJhIiwiQWNjb3VudENhcmRDb250ZW50IiwiQWNjb3VudENhcmRBY3Rpb24iLCJBY2NvdW50Q2FyZEljb24iLCJBY2NvdW50Q2FyZFRpdGxlIiwiQWNjb3VudENhcmREZXNjcmlwdGlvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9