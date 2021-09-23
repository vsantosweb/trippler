"use strict";
self["webpackHotUpdate_N_E"]("pages/trip/[uuid]",{

/***/ "./src/resources/components/TripPassagers/styles.js":
/*!**********************************************************!*\
  !*** ./src/resources/components/TripPassagers/styles.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassagerList": function() { return /* binding */ PassagerList; },
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "TicketForm": function() { return /* binding */ TicketForm; },
/* harmony export */   "Info": function() { return /* binding */ Info; },
/* harmony export */   "Title": function() { return /* binding */ Title; },
/* harmony export */   "Price": function() { return /* binding */ Price; },
/* harmony export */   "Description": function() { return /* binding */ Description; },
/* harmony export */   "Action": function() { return /* binding */ Action; },
/* harmony export */   "ActionButton": function() { return /* binding */ ActionButton; },
/* harmony export */   "Quantity": function() { return /* binding */ Quantity; },
/* harmony export */   "InfoTrip": function() { return /* binding */ InfoTrip; },
/* harmony export */   "InfoDetails": function() { return /* binding */ InfoDetails; },
/* harmony export */   "Period": function() { return /* binding */ Period; },
/* harmony export */   "InfoTop": function() { return /* binding */ InfoTop; },
/* harmony export */   "InfoPriceValue": function() { return /* binding */ InfoPriceValue; },
/* harmony export */   "Vacancies": function() { return /* binding */ Vacancies; },
/* harmony export */   "TotalAmountContainer": function() { return /* binding */ TotalAmountContainer; },
/* harmony export */   "TotalAmount": function() { return /* binding */ TotalAmount; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Elements_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_Elements/Button */ "./src/resources/components/_Elements/Button/index.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);


const PassagerList = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  padding: 0.8em;
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  align-items: center;
  padding: 0.8em 0;
  border-bottom: solid 1px #eee;
`;
const TicketForm = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.form``;
const Info = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.h4`
  margin: 0;
`;
const Price = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.span`
  font-weight: bold;
`;
const Description = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.small``;
const Action = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
const ActionButton = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.button`
  border: solid 1px ${({
  theme
}) => theme.colors.primary};
  font-size: 1.4em;
  background-color: transparent !important;
  color: ${({
  theme
}) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 100%;
`;
const Quantity = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  font-weight: bold;
  font-size: 1.3em;
`;
const InfoTrip = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
display: flex;
    justify-content: space-between;
    align-items: center;
`;
const InfoDetails = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.span`
  display: flex;
  flex-direction: column;
  align-items: ${({
  justify
}) => justify};
`;
const Period = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  font-weight: bold;
  color: #555;
`;
const InfoTop = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
font-size: 12px;
`;
const InfoPriceValue = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.span`
  font-weight: bold;
  font-size: 1.6em;
  margin-top: -6px;
`;
const Vacancies = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  color: #333;
`;
const TotalAmountContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  color: #333;
  display: flex;
  justify-content: flex-end;
`;
const TotalAmount = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  font-size: 20px;
  font-weight: bold;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJpcC9bdXVpZF0uYTMzMDU1NzIxNDU5ZWM0NTM3M2YuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUUsWUFBWSxHQUFHRiwwREFBVztBQUN2QztBQUNBLENBRk87QUFJQSxNQUFNSSxTQUFTLEdBQUdKLDBEQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FMTztBQVFBLE1BQU1LLFVBQVUsR0FBR0wsMkRBQVksRUFBL0I7QUFFQSxNQUFNTyxJQUFJLEdBQUdQLDBEQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLENBSk87QUFNQSxNQUFNUSxLQUFLLEdBQUdSLHlEQUFVO0FBQy9CO0FBQ0EsQ0FGTztBQUdBLE1BQU1VLEtBQUssR0FBR1YsMkRBQVk7QUFDakM7QUFDQSxDQUZPO0FBR0EsTUFBTVksV0FBVyxHQUFHWiw0REFBYSxFQUFqQztBQUVBLE1BQU1jLE1BQU0sR0FBR2QsMERBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUxPO0FBT0EsTUFBTWUsWUFBWSxHQUFHZiw2REFBYztBQUMxQyxzQkFBc0IsQ0FBQztBQUFFaUIsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxPQUFRO0FBQzFEO0FBQ0E7QUFDQSxXQUFXLENBQUM7QUFBRUYsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxPQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBWE87QUFhQSxNQUFNQyxRQUFRLEdBQUdwQiwwREFBVztBQUNuQztBQUNBO0FBQ0EsQ0FITztBQUtBLE1BQU1xQixRQUFRLEdBQUdyQiwwREFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQSxDQUpPO0FBTUEsTUFBTXNCLFdBQVcsR0FBR3RCLDJEQUFZO0FBQ3ZDO0FBQ0E7QUFDQSxpQkFBaUIsQ0FBQztBQUFFdUIsRUFBQUE7QUFBRixDQUFELEtBQWlCQSxPQUFRO0FBQzFDLENBSk87QUFNQSxNQUFNQyxNQUFNLEdBQUd4QiwwREFBVztBQUNqQztBQUNBO0FBQ0EsQ0FITztBQUtBLE1BQU15QixPQUFPLEdBQUd6QiwwREFBVztBQUNsQztBQUNBLENBRk87QUFHQSxNQUFNMEIsY0FBYyxHQUFHMUIsMkRBQVk7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsQ0FKTztBQU1BLE1BQU0yQixTQUFTLEdBQUczQiwwREFBVztBQUNwQztBQUNBLENBRk87QUFJQSxNQUFNNEIsb0JBQW9CLEdBQUc1QiwwREFBVztBQUMvQztBQUNBO0FBQ0E7QUFDQSxDQUpPO0FBS0EsTUFBTTZCLFdBQVcsR0FBRzdCLDBEQUFXO0FBQ3RDO0FBQ0E7QUFDQSxDQUhPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZXNvdXJjZXMvY29tcG9uZW50cy9UcmlwUGFzc2FnZXJzL3N0eWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9fRWxlbWVudHMvQnV0dG9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUGFzc2FnZXJMaXN0ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAwLjhlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjhlbSAwO1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZWVlO1xyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBUaWNrZXRGb3JtID0gc3R5bGVkLmZvcm1gYFxyXG5cclxuZXhwb3J0IGNvbnN0IEluZm8gPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmg0YFxyXG4gIG1hcmdpbjogMDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFByaWNlID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5zbWFsbGBgO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDEwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQWN0aW9uQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3JkZXI6IHNvbGlkIDFweCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcclxuICBmb250LXNpemU6IDEuNGVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBRdWFudGl0eSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvVHJpcCA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZm9EZXRhaWxzID0gc3R5bGVkLnNwYW5gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiAkeyh7IGp1c3RpZnkgfSkgPT4ganVzdGlmeX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGVyaW9kID0gc3R5bGVkLmRpdmBcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzU1NTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvVG9wID0gc3R5bGVkLmRpdmBcclxuZm9udC1zaXplOiAxMnB4O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgSW5mb1ByaWNlVmFsdWUgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuNmVtO1xyXG4gIG1hcmdpbi10b3A6IC02cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVmFjYW5jaWVzID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogIzMzMztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUb3RhbEFtb3VudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgVG90YWxBbW91bnQgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuYDtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkJ1dHRvbiIsIlBhc3NhZ2VyTGlzdCIsImRpdiIsIkNvbnRhaW5lciIsIlRpY2tldEZvcm0iLCJmb3JtIiwiSW5mbyIsIlRpdGxlIiwiaDQiLCJQcmljZSIsInNwYW4iLCJEZXNjcmlwdGlvbiIsInNtYWxsIiwiQWN0aW9uIiwiQWN0aW9uQnV0dG9uIiwiYnV0dG9uIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiUXVhbnRpdHkiLCJJbmZvVHJpcCIsIkluZm9EZXRhaWxzIiwianVzdGlmeSIsIlBlcmlvZCIsIkluZm9Ub3AiLCJJbmZvUHJpY2VWYWx1ZSIsIlZhY2FuY2llcyIsIlRvdGFsQW1vdW50Q29udGFpbmVyIiwiVG90YWxBbW91bnQiXSwic291cmNlUm9vdCI6IiJ9