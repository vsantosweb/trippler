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
  padding: .8em;
`;
const TotalAmount = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  font-size: 1.4em;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJpcC9bdXVpZF0uNTFiYWRjNjk4YzZlNWU3NTcxYzYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUUsWUFBWSxHQUFHRiwwREFBVztBQUN2QztBQUNBLENBRk87QUFJQSxNQUFNSSxTQUFTLEdBQUdKLDBEQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FMTztBQVFBLE1BQU1LLFVBQVUsR0FBR0wsMkRBQVksRUFBL0I7QUFFQSxNQUFNTyxJQUFJLEdBQUdQLDBEQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLENBSk87QUFNQSxNQUFNUSxLQUFLLEdBQUdSLHlEQUFVO0FBQy9CO0FBQ0EsQ0FGTztBQUdBLE1BQU1VLEtBQUssR0FBR1YsMkRBQVk7QUFDakM7QUFDQSxDQUZPO0FBR0EsTUFBTVksV0FBVyxHQUFHWiw0REFBYSxFQUFqQztBQUVBLE1BQU1jLE1BQU0sR0FBR2QsMERBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUxPO0FBT0EsTUFBTWUsWUFBWSxHQUFHZiw2REFBYztBQUMxQyxzQkFBc0IsQ0FBQztBQUFFaUIsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxPQUFRO0FBQzFEO0FBQ0E7QUFDQSxXQUFXLENBQUM7QUFBRUYsRUFBQUE7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxPQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBWE87QUFhQSxNQUFNQyxRQUFRLEdBQUdwQiwwREFBVztBQUNuQztBQUNBO0FBQ0EsQ0FITztBQUtBLE1BQU1xQixRQUFRLEdBQUdyQiwwREFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQSxDQUpPO0FBTUEsTUFBTXNCLFdBQVcsR0FBR3RCLDJEQUFZO0FBQ3ZDO0FBQ0E7QUFDQSxpQkFBaUIsQ0FBQztBQUFFdUIsRUFBQUE7QUFBRixDQUFELEtBQWlCQSxPQUFRO0FBQzFDLENBSk87QUFNQSxNQUFNQyxNQUFNLEdBQUd4QiwwREFBVztBQUNqQztBQUNBO0FBQ0EsQ0FITztBQUtBLE1BQU15QixPQUFPLEdBQUd6QiwwREFBVztBQUNsQztBQUNBLENBRk87QUFHQSxNQUFNMEIsY0FBYyxHQUFHMUIsMkRBQVk7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsQ0FKTztBQU1BLE1BQU0yQixTQUFTLEdBQUczQiwwREFBVztBQUNwQztBQUNBLENBRk87QUFJQSxNQUFNNEIsb0JBQW9CLEdBQUc1QiwwREFBVztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTE87QUFNQSxNQUFNNkIsV0FBVyxHQUFHN0IsMERBQVc7QUFDdEM7QUFDQTtBQUNBLENBSE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3Jlc291cmNlcy9jb21wb25lbnRzL1RyaXBQYXNzYWdlcnMvc3R5bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL19FbGVtZW50cy9CdXR0b25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQYXNzYWdlckxpc3QgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDAuOGVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuOGVtIDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNlZWU7XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFRpY2tldEZvcm0gPSBzdHlsZWQuZm9ybWBgXHJcblxyXG5leHBvcnQgY29uc3QgSW5mbyA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDRgXHJcbiAgbWFyZ2luOiAwO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgUHJpY2UgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLnNtYWxsYGA7XHJcblxyXG5leHBvcnQgY29uc3QgQWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMTBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBBY3Rpb25CdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJvcmRlcjogc29saWQgMXB4ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFF1YW50aXR5ID0gc3R5bGVkLmRpdmBcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZm9UcmlwID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5mb0RldGFpbHMgPSBzdHlsZWQuc3BhbmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6ICR7KHsganVzdGlmeSB9KSA9PiBqdXN0aWZ5fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQZXJpb2QgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNTU1O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZm9Ub3AgPSBzdHlsZWQuZGl2YFxyXG5mb250LXNpemU6IDEycHg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBJbmZvUHJpY2VWYWx1ZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgbWFyZ2luLXRvcDogLTZweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBWYWNhbmNpZXMgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAjMzMzO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvdGFsQW1vdW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogIzMzMztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogLjhlbTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFRvdGFsQW1vdW50ID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDEuNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5gO1xyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiQnV0dG9uIiwiUGFzc2FnZXJMaXN0IiwiZGl2IiwiQ29udGFpbmVyIiwiVGlja2V0Rm9ybSIsImZvcm0iLCJJbmZvIiwiVGl0bGUiLCJoNCIsIlByaWNlIiwic3BhbiIsIkRlc2NyaXB0aW9uIiwic21hbGwiLCJBY3Rpb24iLCJBY3Rpb25CdXR0b24iLCJidXR0b24iLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJRdWFudGl0eSIsIkluZm9UcmlwIiwiSW5mb0RldGFpbHMiLCJqdXN0aWZ5IiwiUGVyaW9kIiwiSW5mb1RvcCIsIkluZm9QcmljZVZhbHVlIiwiVmFjYW5jaWVzIiwiVG90YWxBbW91bnRDb250YWluZXIiLCJUb3RhbEFtb3VudCJdLCJzb3VyY2VSb290IjoiIn0=