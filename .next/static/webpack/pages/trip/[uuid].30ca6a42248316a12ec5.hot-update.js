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
    passenger.tickets + 1;
    console.log(passenger);
    setPassengerTickets(_objectSpread({}, passengerTickets));
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
            lineNumber: 37,
            columnNumber: 36
          }, this), " ", `${moment__WEBPACK_IMPORTED_MODULE_5___default()(tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.start_date).format('DD/MM H:m')} - ${moment__WEBPACK_IMPORTED_MODULE_5___default()(tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.end_date).format('DD/MM H:m')}`]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Vacancies, {
          children: [" ", tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.status.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoDetails, {
        justify: 'flex-end',
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoTop, {
          children: "A partir de"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoPriceValue, {
          children: new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(tripSchedule.price + lowestPrice)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.TicketForm, {
      children: [passengers === null || passengers === void 0 ? void 0 : passengers.map((passenger, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Info, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Title, {
            children: passenger.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Description, {
            children: passenger.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Action, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.ActionButton, {
            type: "button",
            onClick: () => addTicket(passenger),
            children: "+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Quantity, _objectSpread(_objectSpread({}, register(passenger.name)), {}, {
            children: passenger.tickets
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.ActionButton, {
            type: "button",
            onClick: () => passenger.tickets + 1,
            children: "-"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this)]
      }, passenger.id, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 56
      }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Total: 300,000"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Elements_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
        color: 'primary',
        children: "Fechar Pacote"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJpcC9bdXVpZF0uMzBjYTZhNDIyNDgzMTZhMTJlYzUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNLLGVBQVQsQ0FBeUI7QUFBRUMsRUFBQUE7QUFBRixDQUF6QixFQUEyQztBQUFBOztBQUd0RCxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBZUgsd0RBQU8sRUFBNUI7QUFDQSxRQUFNSSxlQUFlLEdBQUdGLFlBQVksQ0FBQ0csVUFBYixDQUF3QkMsR0FBeEIsQ0FBNEJDLFNBQVMsSUFBSUEsU0FBUyxDQUFDQyxLQUFWLENBQWdCQyxNQUF6RCxDQUF4QjtBQUNBLFFBQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsR0FBR1IsZUFBWixDQUFwQjtBQUVBLE1BQUlDLFVBQVUsR0FBR0gsWUFBWSxDQUFDRyxVQUFiLENBQXdCQyxHQUF4QixDQUE0QkMsU0FBUyxvQ0FDL0NBLFNBRCtDO0FBRWxETSxJQUFBQSxPQUFPLEVBQUU7QUFGeUMsSUFBckMsQ0FBakI7QUFJQSxRQUFNLENBQUNDLGdCQUFELEVBQW1CQyxtQkFBbkIsSUFBMENuQixxREFBQSxDQUFlUyxVQUFmLENBQWhEO0FBRUFULEVBQUFBLHNEQUFBLENBQWdCLE1BQU0sQ0FFckIsQ0FGRDs7QUFHQSxRQUFNc0IsU0FBUyxHQUFJWCxTQUFELElBQWU7QUFFN0JBLElBQUFBLFNBQVMsQ0FBQ00sT0FBVixHQUFvQixDQUFwQjtBQUNBTSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWIsU0FBWjtBQUNBUSxJQUFBQSxtQkFBbUIsbUJBQUtELGdCQUFMLEVBQW5CO0FBQ0gsR0FMRDs7QUFPQUssRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlOLGdCQUFaLEVBQTZCLGVBQTdCO0FBRUEsc0JBQ0ksOERBQUMsaURBQUQ7QUFBQSw0QkFF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QUFBO0FBQUE7QUFBQTtBQUFBLFlBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQ0g7O0dBNUR1QmhDO1VBR0NEOzs7S0FIREMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3Jlc291cmNlcy9jb21wb25lbnRzL1RyaXBQYXNzYWdlcnMvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9fRWxlbWVudHMvQnV0dG9uJztcclxuaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhc3NlbmdlclRpY2tldCh7IHRyaXBTY2hlZHVsZSB9KSB7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCB7IHJlZ2lzdGVyIH0gPSB1c2VGb3JtKCk7XHJcbiAgICBjb25zdCBwYXNzZW5nZXJQcmljZXMgPSB0cmlwU2NoZWR1bGUucGFzc2VuZ2Vycy5tYXAocGFzc2VuZ2VyID0+IHBhc3Nlbmdlci5waXZvdC5hbW91bnQpO1xyXG4gICAgY29uc3QgbG93ZXN0UHJpY2UgPSBNYXRoLm1pbiguLi5wYXNzZW5nZXJQcmljZXMpO1xyXG4gICAgXHJcbiAgICBsZXQgcGFzc2VuZ2VycyA9IHRyaXBTY2hlZHVsZS5wYXNzZW5nZXJzLm1hcChwYXNzZW5nZXIgPT4gKHtcclxuICAgICAgICAuLi5wYXNzZW5nZXIsXHJcbiAgICAgICAgdGlja2V0czogMFxyXG4gICAgfSkpXHJcbiAgICBjb25zdCBbcGFzc2VuZ2VyVGlja2V0cywgc2V0UGFzc2VuZ2VyVGlja2V0c10gPSBSZWFjdC51c2VTdGF0ZShwYXNzZW5nZXJzKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgIGNvbnN0IGFkZFRpY2tldCA9IChwYXNzZW5nZXIpID0+IHtcclxuXHJcbiAgICAgICAgcGFzc2VuZ2VyLnRpY2tldHMgKyAxO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhc3NlbmdlcilcclxuICAgICAgICBzZXRQYXNzZW5nZXJUaWNrZXRzKHsuLi5wYXNzZW5nZXJUaWNrZXRzfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2cocGFzc2VuZ2VyVGlja2V0cywnYXNva2Rhc29rZG9zYScpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3R5bGVkLlBhc3NhZ2VyTGlzdD5cclxuXHJcbiAgICAgICAgICAgIDxTdHlsZWQuSW5mb1RyaXA+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkLkluZm9EZXRhaWxzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuUGVyaW9kPjxpIGNsYXNzTmFtZT17J2xhcyBsYS1jYWxlbmRhcid9PjwvaT4ge2Ake21vbWVudCh0cmlwU2NoZWR1bGU/LnN0YXJ0X2RhdGUpLmZvcm1hdCgnREQvTU0gSDptJyl9IC0gJHttb21lbnQodHJpcFNjaGVkdWxlPy5lbmRfZGF0ZSkuZm9ybWF0KCdERC9NTSBIOm0nKX1gfTwvU3R5bGVkLlBlcmlvZD5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLlZhY2FuY2llcz4ge3RyaXBTY2hlZHVsZT8uc3RhdHVzLm5hbWV9PC9TdHlsZWQuVmFjYW5jaWVzPlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWQuSW5mb0RldGFpbHM+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkLkluZm9EZXRhaWxzIGp1c3RpZnk9eydmbGV4LWVuZCd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuSW5mb1RvcD5BIHBhcnRpciBkZTwvU3R5bGVkLkluZm9Ub3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5JbmZvUHJpY2VWYWx1ZT57bmV3IEludGwuTnVtYmVyRm9ybWF0KFwicHQtQlJcIiwgeyBzdHlsZTogXCJjdXJyZW5jeVwiLCBjdXJyZW5jeTogXCJCUkxcIiwgfSkuZm9ybWF0KHRyaXBTY2hlZHVsZS5wcmljZSArIGxvd2VzdFByaWNlKX08L1N0eWxlZC5JbmZvUHJpY2VWYWx1ZT5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkLkluZm9EZXRhaWxzPlxyXG4gICAgICAgICAgICA8L1N0eWxlZC5JbmZvVHJpcD5cclxuXHJcbiAgICAgICAgICAgIDxTdHlsZWQuVGlja2V0Rm9ybT5cclxuICAgICAgICAgICAgICAgIHtwYXNzZW5nZXJzPy5tYXAoKHBhc3NlbmdlciwgaW5kZXgpID0+IDxTdHlsZWQuQ29udGFpbmVyIGtleT17cGFzc2VuZ2VyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLkluZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuVGl0bGU+e3Bhc3Nlbmdlci5uYW1lfTwvU3R5bGVkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLkRlc2NyaXB0aW9uPntwYXNzZW5nZXIuZGVzY3JpcHRpb259PC9TdHlsZWQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWQuSW5mbz5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLkFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5BY3Rpb25CdXR0b24gdHlwZT17XCJidXR0b25cIn0gb25DbGljaz17KCkgPT4gYWRkVGlja2V0KHBhc3Nlbmdlcil9Pis8L1N0eWxlZC5BY3Rpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuUXVhbnRpdHkgey4uLnJlZ2lzdGVyKHBhc3Nlbmdlci5uYW1lKX0+e3Bhc3Nlbmdlci50aWNrZXRzfTwvU3R5bGVkLlF1YW50aXR5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLkFjdGlvbkJ1dHRvbiB0eXBlPXtcImJ1dHRvblwifSBvbkNsaWNrPXsoKSA9PiBwYXNzZW5nZXIudGlja2V0cyArMX0+LTwvU3R5bGVkLkFjdGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZC5BY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZC5Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlRvdGFsOiAzMDAsMDAwPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9eydwcmltYXJ5J30+RmVjaGFyIFBhY290ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1N0eWxlZC5UaWNrZXRGb3JtPlxyXG5cclxuICAgICAgICA8L1N0eWxlZC5QYXNzYWdlckxpc3Q+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJTdHlsZWQiLCJtb21lbnQiLCJ1c2VGb3JtIiwiUGFzc2VuZ2VyVGlja2V0IiwidHJpcFNjaGVkdWxlIiwicmVnaXN0ZXIiLCJwYXNzZW5nZXJQcmljZXMiLCJwYXNzZW5nZXJzIiwibWFwIiwicGFzc2VuZ2VyIiwicGl2b3QiLCJhbW91bnQiLCJsb3dlc3RQcmljZSIsIk1hdGgiLCJtaW4iLCJ0aWNrZXRzIiwicGFzc2VuZ2VyVGlja2V0cyIsInNldFBhc3NlbmdlclRpY2tldHMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImFkZFRpY2tldCIsImNvbnNvbGUiLCJsb2ciLCJzdGFydF9kYXRlIiwiZm9ybWF0IiwiZW5kX2RhdGUiLCJzdGF0dXMiLCJuYW1lIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJwcmljZSIsImluZGV4IiwiZGVzY3JpcHRpb24iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=