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
  let passengers = tripSchedule.passengers.map(passenger => _objectSpread(_objectSpread({}, passenger), {}, {
    tickets: 0
  }));
  const [passengerTickets, setPassengerTickets] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(passengers);
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {});

  const addTicket = passenger => {
    setPassengerTickets(passenger.ticket + 1);
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
            lineNumber: 34,
            columnNumber: 36
          }, this), " ", `${moment__WEBPACK_IMPORTED_MODULE_5___default()(tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.start_date).format('DD/MM H:m')} - ${moment__WEBPACK_IMPORTED_MODULE_5___default()(tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.end_date).format('DD/MM H:m')}`]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Vacancies, {
          children: [" ", tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.status.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoDetails, {
        justify: 'flex-end',
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoTop, {
          children: "A partir de"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoPriceValue, {
          children: new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(tripSchedule.price + lowestPrice)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.TicketForm, {
      children: [passengerTickets === null || passengerTickets === void 0 ? void 0 : passengerTickets.map((passenger, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Info, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Title, {
            children: passenger.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Description, {
            children: passenger.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Action, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.ActionButton, {
            type: "button",
            onClick: () => setPassengerTickets(_objectSpread({}, passengerTickets[index])),
            children: "+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Quantity, _objectSpread(_objectSpread({}, register(passenger.name)), {}, {
            children: passenger.tickets
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.ActionButton, {
            type: "button",
            onClick: () => passenger.tickets + 1,
            children: "-"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this)]
      }, passenger.id, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 62
      }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Total: 300,000"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Elements_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
        color: 'primary',
        children: "Fechar Pacote"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, this);
}

_s(PassengerTicket, "rrMMhkZs+7Q0YMds5ytk7fmH2AM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJpcC9bdXVpZF0uZTRlMDU2YmFjODQ5NDRhZDkzMGEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNLLGVBQVQsQ0FBeUI7QUFBRUMsRUFBQUE7QUFBRixDQUF6QixFQUEyQztBQUFBOztBQUd0RCxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBZUgsd0RBQU8sRUFBNUI7QUFDQSxRQUFNSSxlQUFlLEdBQUdGLFlBQVksQ0FBQ0csVUFBYixDQUF3QkMsR0FBeEIsQ0FBNEJDLFNBQVMsSUFBSUEsU0FBUyxDQUFDQyxLQUFWLENBQWdCQyxNQUF6RCxDQUF4QjtBQUNBLFFBQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsR0FBR1IsZUFBWixDQUFwQjtBQUVBLE1BQUlDLFVBQVUsR0FBR0gsWUFBWSxDQUFDRyxVQUFiLENBQXdCQyxHQUF4QixDQUE0QkMsU0FBUyxvQ0FDL0NBLFNBRCtDO0FBRWxETSxJQUFBQSxPQUFPLEVBQUU7QUFGeUMsSUFBckMsQ0FBakI7QUFJQSxRQUFNLENBQUNDLGdCQUFELEVBQW1CQyxtQkFBbkIsSUFBMENuQixxREFBQSxDQUFlUyxVQUFmLENBQWhEO0FBRUFULEVBQUFBLHNEQUFBLENBQWdCLE1BQU0sQ0FFckIsQ0FGRDs7QUFHQSxRQUFNc0IsU0FBUyxHQUFJWCxTQUFELElBQWU7QUFDN0JRLElBQUFBLG1CQUFtQixDQUFDUixTQUFTLENBQUNZLE1BQVYsR0FBbUIsQ0FBcEIsQ0FBbkI7QUFDSCxHQUZEOztBQUlBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsZ0JBQVosRUFBNkIsZUFBN0I7QUFFQSxzQkFDSSw4REFBQyxpREFBRDtBQUFBLDRCQUVJLDhEQUFDLDZDQUFEO0FBQUEsOEJBQ0ksOERBQUMsZ0RBQUQ7QUFBQSxnQ0FDSSw4REFBQywyQ0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW1DSDs7R0F6RHVCakM7VUFHQ0Q7OztLQUhEQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVzb3VyY2VzL2NvbXBvbmVudHMvVHJpcFBhc3NhZ2Vycy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL19FbGVtZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFzc2VuZ2VyVGlja2V0KHsgdHJpcFNjaGVkdWxlIH0pIHtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHsgcmVnaXN0ZXIgfSA9IHVzZUZvcm0oKTtcclxuICAgIGNvbnN0IHBhc3NlbmdlclByaWNlcyA9IHRyaXBTY2hlZHVsZS5wYXNzZW5nZXJzLm1hcChwYXNzZW5nZXIgPT4gcGFzc2VuZ2VyLnBpdm90LmFtb3VudCk7XHJcbiAgICBjb25zdCBsb3dlc3RQcmljZSA9IE1hdGgubWluKC4uLnBhc3NlbmdlclByaWNlcyk7XHJcbiAgICBcclxuICAgIGxldCBwYXNzZW5nZXJzID0gdHJpcFNjaGVkdWxlLnBhc3NlbmdlcnMubWFwKHBhc3NlbmdlciA9PiAoe1xyXG4gICAgICAgIC4uLnBhc3NlbmdlcixcclxuICAgICAgICB0aWNrZXRzOiAwXHJcbiAgICB9KSlcclxuICAgIGNvbnN0IFtwYXNzZW5nZXJUaWNrZXRzLCBzZXRQYXNzZW5nZXJUaWNrZXRzXSA9IFJlYWN0LnVzZVN0YXRlKHBhc3NlbmdlcnMpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgY29uc3QgYWRkVGlja2V0ID0gKHBhc3NlbmdlcikgPT4ge1xyXG4gICAgICAgIHNldFBhc3NlbmdlclRpY2tldHMocGFzc2VuZ2VyLnRpY2tldCArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHBhc3NlbmdlclRpY2tldHMsJ2Fzb2tkYXNva2Rvc2EnKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZC5QYXNzYWdlckxpc3Q+XHJcblxyXG4gICAgICAgICAgICA8U3R5bGVkLkluZm9UcmlwPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZC5JbmZvRGV0YWlscz5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLlBlcmlvZD48aSBjbGFzc05hbWU9eydsYXMgbGEtY2FsZW5kYXInfT48L2k+IHtgJHttb21lbnQodHJpcFNjaGVkdWxlPy5zdGFydF9kYXRlKS5mb3JtYXQoJ0REL01NIEg6bScpfSAtICR7bW9tZW50KHRyaXBTY2hlZHVsZT8uZW5kX2RhdGUpLmZvcm1hdCgnREQvTU0gSDptJyl9YH08L1N0eWxlZC5QZXJpb2Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5WYWNhbmNpZXM+IHt0cmlwU2NoZWR1bGU/LnN0YXR1cy5uYW1lfTwvU3R5bGVkLlZhY2FuY2llcz5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkLkluZm9EZXRhaWxzPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZC5JbmZvRGV0YWlscyBqdXN0aWZ5PXsnZmxleC1lbmQnfT5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLkluZm9Ub3A+QSBwYXJ0aXIgZGU8L1N0eWxlZC5JbmZvVG9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuSW5mb1ByaWNlVmFsdWU+e25ldyBJbnRsLk51bWJlckZvcm1hdChcInB0LUJSXCIsIHsgc3R5bGU6IFwiY3VycmVuY3lcIiwgY3VycmVuY3k6IFwiQlJMXCIsIH0pLmZvcm1hdCh0cmlwU2NoZWR1bGUucHJpY2UgKyBsb3dlc3RQcmljZSl9PC9TdHlsZWQuSW5mb1ByaWNlVmFsdWU+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZC5JbmZvRGV0YWlscz5cclxuICAgICAgICAgICAgPC9TdHlsZWQuSW5mb1RyaXA+XHJcblxyXG4gICAgICAgICAgICA8U3R5bGVkLlRpY2tldEZvcm0+XHJcbiAgICAgICAgICAgICAgICB7cGFzc2VuZ2VyVGlja2V0cz8ubWFwKChwYXNzZW5nZXIsIGluZGV4KSA9PiA8U3R5bGVkLkNvbnRhaW5lciBrZXk9e3Bhc3Nlbmdlci5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5JbmZvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLlRpdGxlPntwYXNzZW5nZXIubmFtZX08L1N0eWxlZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5EZXNjcmlwdGlvbj57cGFzc2VuZ2VyLmRlc2NyaXB0aW9ufTwvU3R5bGVkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkLkluZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5BY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuQWN0aW9uQnV0dG9uIHR5cGU9e1wiYnV0dG9uXCJ9IG9uQ2xpY2s9eygpID0+IHNldFBhc3NlbmdlclRpY2tldHMoey4uLnBhc3NlbmdlclRpY2tldHNbaW5kZXhdfSl9Pis8L1N0eWxlZC5BY3Rpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuUXVhbnRpdHkgey4uLnJlZ2lzdGVyKHBhc3Nlbmdlci5uYW1lKX0+e3Bhc3Nlbmdlci50aWNrZXRzfTwvU3R5bGVkLlF1YW50aXR5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLkFjdGlvbkJ1dHRvbiB0eXBlPXtcImJ1dHRvblwifSBvbkNsaWNrPXsoKSA9PiBwYXNzZW5nZXIudGlja2V0cyArMX0+LTwvU3R5bGVkLkFjdGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZC5BY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZC5Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlRvdGFsOiAzMDAsMDAwPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9eydwcmltYXJ5J30+RmVjaGFyIFBhY290ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1N0eWxlZC5UaWNrZXRGb3JtPlxyXG5cclxuICAgICAgICA8L1N0eWxlZC5QYXNzYWdlckxpc3Q+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJTdHlsZWQiLCJtb21lbnQiLCJ1c2VGb3JtIiwiUGFzc2VuZ2VyVGlja2V0IiwidHJpcFNjaGVkdWxlIiwicmVnaXN0ZXIiLCJwYXNzZW5nZXJQcmljZXMiLCJwYXNzZW5nZXJzIiwibWFwIiwicGFzc2VuZ2VyIiwicGl2b3QiLCJhbW91bnQiLCJsb3dlc3RQcmljZSIsIk1hdGgiLCJtaW4iLCJ0aWNrZXRzIiwicGFzc2VuZ2VyVGlja2V0cyIsInNldFBhc3NlbmdlclRpY2tldHMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImFkZFRpY2tldCIsInRpY2tldCIsImNvbnNvbGUiLCJsb2ciLCJzdGFydF9kYXRlIiwiZm9ybWF0IiwiZW5kX2RhdGUiLCJzdGF0dXMiLCJuYW1lIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJwcmljZSIsImluZGV4IiwiZGVzY3JpcHRpb24iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=