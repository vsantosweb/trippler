"use strict";
self["webpackHotUpdate_N_E"]("pages/trip/[uuid]",{

/***/ "./src/resources/components/TripPassagers/index.jsx":
/*!**********************************************************!*\
  !*** ./src/resources/components/TripPassagers/index.jsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PassengerTicket; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_lab_trippler_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Elements_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_Elements/Button */ "./src/resources/components/_Elements/Button/index.jsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/resources/components/TripPassagers/styles.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\lab\\trippler\\src\\resources\\components\\TripPassagers\\index.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_lab_trippler_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function PassengerTicket({
  tripSchedule
}) {
  _s();

  const {
    register
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)();
  const passengerPrices = tripSchedule.passengers.map(passenger => passenger.pivot.amount);
  const lowestPrice = Math.min(...passengerPrices);
  const [count, setCount] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(0);
  let passengers = tripSchedule.passengers.map(passenger => _objectSpread(_objectSpread({}, passenger), {}, {
    tickets: 0
  }));
  const [passengerTickets, setPassengerTickets] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(passengers);

  const addTicket = passenger => {
    let count = passenger.tickets + 1;
    console.log(count);
    setPassengerTickets(_objectSpread(_objectSpread({}, passengerTickets), {}, {
      passenger
    }));
  };

  console.log(passengerTickets, 'asokdasokdosa');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.PassagerList, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoTrip, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoDetails, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Period, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: 'las la-calendar'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 36
          }, this), " ", `${moment__WEBPACK_IMPORTED_MODULE_5___default()(tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.start_date).format('DD/MM H:m')} - ${moment__WEBPACK_IMPORTED_MODULE_5___default()(tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.end_date).format('DD/MM H:m')}`]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Vacancies, {
          children: [" ", tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.status.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoDetails, {
        justify: 'flex-end',
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoTop, {
          children: "A partir de"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoPriceValue, {
          children: new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(tripSchedule.price + lowestPrice)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.TicketForm, {
      children: [passengerTickets === null || passengerTickets === void 0 ? void 0 : passengerTickets.map((passenger, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Info, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Title, {
            children: passenger.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Description, {
            children: passenger.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Action, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.ActionButton, {
            type: "button",
            onClick: () => addTicket(passenger),
            children: "+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Quantity, _objectSpread(_objectSpread({}, register(passenger.name)), {}, {
            children: count
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.ActionButton, {
            type: "button",
            onClick: () => setCount(count - 1),
            children: "-"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this)]
      }, passenger.id, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 62
      }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Total: 300,000"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Elements_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
        color: 'primary',
        children: "Fechar Pacote"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, this);
}

_s(PassengerTicket, "x0r53PT9Qx6tjSQVb1GH9XIj24Q=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm];
});

_c = PassengerTicket;

var _c;

$RefreshReg$(_c, "PassengerTicket");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJpcC9bdXVpZF0uOGRmMjU5NjU3NDMxNWNmNGUyMDYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNLLGVBQVQsQ0FBeUI7QUFBRUMsRUFBQUE7QUFBRixDQUF6QixFQUEyQztBQUFBOztBQUd0RCxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBZUgsd0RBQU8sRUFBNUI7QUFDQSxRQUFNSSxlQUFlLEdBQUdGLFlBQVksQ0FBQ0csVUFBYixDQUF3QkMsR0FBeEIsQ0FBNEJDLFNBQVMsSUFBSUEsU0FBUyxDQUFDQyxLQUFWLENBQWdCQyxNQUF6RCxDQUF4QjtBQUNBLFFBQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsR0FBR1IsZUFBWixDQUFwQjtBQUVBLFFBQU0sQ0FBQ1MsS0FBRCxFQUFTQyxRQUFULElBQXFCbEIscURBQUEsQ0FBZSxDQUFmLENBQTNCO0FBRUEsTUFBSVMsVUFBVSxHQUFHSCxZQUFZLENBQUNHLFVBQWIsQ0FBd0JDLEdBQXhCLENBQTRCQyxTQUFTLG9DQUMvQ0EsU0FEK0M7QUFFbERTLElBQUFBLE9BQU8sRUFBRTtBQUZ5QyxJQUFyQyxDQUFqQjtBQUlBLFFBQU0sQ0FBQ0MsZ0JBQUQsRUFBbUJDLG1CQUFuQixJQUEwQ3RCLHFEQUFBLENBQWVTLFVBQWYsQ0FBaEQ7O0FBR0EsUUFBTWMsU0FBUyxHQUFJWixTQUFELElBQWU7QUFFN0IsUUFBSU0sS0FBSyxHQUFJTixTQUFTLENBQUNTLE9BQVYsR0FBb0IsQ0FBakM7QUFDQUksSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlSLEtBQVo7QUFDQUssSUFBQUEsbUJBQW1CLGlDQUFLRCxnQkFBTDtBQUF1QlYsTUFBQUE7QUFBdkIsT0FBbkI7QUFFSCxHQU5EOztBQVFBYSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUos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LFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQ0g7O0dBN0R1QmpDO1VBR0NEOzs7S0FIREMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3Jlc291cmNlcy9jb21wb25lbnRzL1RyaXBQYXNzYWdlcnMvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9fRWxlbWVudHMvQnV0dG9uJztcclxuaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhc3NlbmdlclRpY2tldCh7IHRyaXBTY2hlZHVsZSB9KSB7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCB7IHJlZ2lzdGVyIH0gPSB1c2VGb3JtKCk7XHJcbiAgICBjb25zdCBwYXNzZW5nZXJQcmljZXMgPSB0cmlwU2NoZWR1bGUucGFzc2VuZ2Vycy5tYXAocGFzc2VuZ2VyID0+IHBhc3Nlbmdlci5waXZvdC5hbW91bnQpO1xyXG4gICAgY29uc3QgbG93ZXN0UHJpY2UgPSBNYXRoLm1pbiguLi5wYXNzZW5nZXJQcmljZXMpO1xyXG4gICAgXHJcbiAgICBjb25zdCBbY291bnQgLCBzZXRDb3VudF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIFxyXG4gICAgbGV0IHBhc3NlbmdlcnMgPSB0cmlwU2NoZWR1bGUucGFzc2VuZ2Vycy5tYXAocGFzc2VuZ2VyID0+ICh7XHJcbiAgICAgICAgLi4ucGFzc2VuZ2VyLFxyXG4gICAgICAgIHRpY2tldHM6IDBcclxuICAgIH0pKVxyXG4gICAgY29uc3QgW3Bhc3NlbmdlclRpY2tldHMsIHNldFBhc3NlbmdlclRpY2tldHNdID0gUmVhY3QudXNlU3RhdGUocGFzc2VuZ2Vycyk7XHJcblxyXG4gIFxyXG4gICAgY29uc3QgYWRkVGlja2V0ID0gKHBhc3NlbmdlcikgPT4ge1xyXG5cclxuICAgICAgICBsZXQgY291bnQgPSAgcGFzc2VuZ2VyLnRpY2tldHMgKyAxO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvdW50KVxyXG4gICAgICAgIHNldFBhc3NlbmdlclRpY2tldHMoey4uLnBhc3NlbmdlclRpY2tldHMsIHBhc3Nlbmdlcn0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhwYXNzZW5nZXJUaWNrZXRzLCdhc29rZGFzb2tkb3NhJylcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWQuUGFzc2FnZXJMaXN0PlxyXG5cclxuICAgICAgICAgICAgPFN0eWxlZC5JbmZvVHJpcD5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWQuSW5mb0RldGFpbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5QZXJpb2Q+PGkgY2xhc3NOYW1lPXsnbGFzIGxhLWNhbGVuZGFyJ30+PC9pPiB7YCR7bW9tZW50KHRyaXBTY2hlZHVsZT8uc3RhcnRfZGF0ZSkuZm9ybWF0KCdERC9NTSBIOm0nKX0gLSAke21vbWVudCh0cmlwU2NoZWR1bGU/LmVuZF9kYXRlKS5mb3JtYXQoJ0REL01NIEg6bScpfWB9PC9TdHlsZWQuUGVyaW9kPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuVmFjYW5jaWVzPiB7dHJpcFNjaGVkdWxlPy5zdGF0dXMubmFtZX08L1N0eWxlZC5WYWNhbmNpZXM+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZC5JbmZvRGV0YWlscz5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWQuSW5mb0RldGFpbHMganVzdGlmeT17J2ZsZXgtZW5kJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5JbmZvVG9wPkEgcGFydGlyIGRlPC9TdHlsZWQuSW5mb1RvcD5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLkluZm9QcmljZVZhbHVlPntuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJwdC1CUlwiLCB7IHN0eWxlOiBcImN1cnJlbmN5XCIsIGN1cnJlbmN5OiBcIkJSTFwiLCB9KS5mb3JtYXQodHJpcFNjaGVkdWxlLnByaWNlICsgbG93ZXN0UHJpY2UpfTwvU3R5bGVkLkluZm9QcmljZVZhbHVlPlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWQuSW5mb0RldGFpbHM+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkLkluZm9UcmlwPlxyXG5cclxuICAgICAgICAgICAgPFN0eWxlZC5UaWNrZXRGb3JtPlxyXG4gICAgICAgICAgICAgICAge3Bhc3NlbmdlclRpY2tldHM/Lm1hcCgocGFzc2VuZ2VyLCBpbmRleCkgPT4gPFN0eWxlZC5Db250YWluZXIga2V5PXtwYXNzZW5nZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuSW5mbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5UaXRsZT57cGFzc2VuZ2VyLm5hbWV9PC9TdHlsZWQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuRGVzY3JpcHRpb24+e3Bhc3Nlbmdlci5kZXNjcmlwdGlvbn08L1N0eWxlZC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZC5JbmZvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuQWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLkFjdGlvbkJ1dHRvbiB0eXBlPXtcImJ1dHRvblwifSBvbkNsaWNrPXsoKSA9PiBhZGRUaWNrZXQocGFzc2VuZ2VyKX0+KzwvU3R5bGVkLkFjdGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5RdWFudGl0eSB7Li4ucmVnaXN0ZXIocGFzc2VuZ2VyLm5hbWUpfT57Y291bnR9PC9TdHlsZWQuUXVhbnRpdHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuQWN0aW9uQnV0dG9uIHR5cGU9e1wiYnV0dG9uXCJ9IG9uQ2xpY2s9eygpID0+ICBzZXRDb3VudChjb3VudC0gMSl9Pi08L1N0eWxlZC5BY3Rpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWQuQWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWQuQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Ub3RhbDogMzAwLDAwMDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPXsncHJpbWFyeSd9PkZlY2hhciBQYWNvdGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9TdHlsZWQuVGlja2V0Rm9ybT5cclxuXHJcbiAgICAgICAgPC9TdHlsZWQuUGFzc2FnZXJMaXN0PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiU3R5bGVkIiwibW9tZW50IiwidXNlRm9ybSIsIlBhc3NlbmdlclRpY2tldCIsInRyaXBTY2hlZHVsZSIsInJlZ2lzdGVyIiwicGFzc2VuZ2VyUHJpY2VzIiwicGFzc2VuZ2VycyIsIm1hcCIsInBhc3NlbmdlciIsInBpdm90IiwiYW1vdW50IiwibG93ZXN0UHJpY2UiLCJNYXRoIiwibWluIiwiY291bnQiLCJzZXRDb3VudCIsInVzZVN0YXRlIiwidGlja2V0cyIsInBhc3NlbmdlclRpY2tldHMiLCJzZXRQYXNzZW5nZXJUaWNrZXRzIiwiYWRkVGlja2V0IiwiY29uc29sZSIsImxvZyIsInN0YXJ0X2RhdGUiLCJmb3JtYXQiLCJlbmRfZGF0ZSIsInN0YXR1cyIsIm5hbWUiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsInByaWNlIiwiaW5kZXgiLCJkZXNjcmlwdGlvbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==