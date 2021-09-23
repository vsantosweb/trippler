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
    passenger.tickets = passenger.tickets + 1;
    console.log(passenger.tickets);
    setPassengerTickets(_objectSpread(_objectSpread({}, passengerTickets), {}, {
      passenger
    }));
  }; // console.log(passengerTickets,'asokdasokdosa')


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJpcC9bdXVpZF0uYWJlYTkwYjZhZGE3OTNlYWRmNTAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNLLGVBQVQsQ0FBeUI7QUFBRUMsRUFBQUE7QUFBRixDQUF6QixFQUEyQztBQUFBOztBQUd0RCxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBZUgsd0RBQU8sRUFBNUI7QUFDQSxRQUFNSSxlQUFlLEdBQUdGLFlBQVksQ0FBQ0csVUFBYixDQUF3QkMsR0FBeEIsQ0FBNEJDLFNBQVMsSUFBSUEsU0FBUyxDQUFDQyxLQUFWLENBQWdCQyxNQUF6RCxDQUF4QjtBQUNBLFFBQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsR0FBR1IsZUFBWixDQUFwQjtBQUVBLE1BQUlDLFVBQVUsR0FBR0gsWUFBWSxDQUFDRyxVQUFiLENBQXdCQyxHQUF4QixDQUE0QkMsU0FBUyxvQ0FDL0NBLFNBRCtDO0FBRWxETSxJQUFBQSxPQUFPLEVBQUU7QUFGeUMsSUFBckMsQ0FBakI7QUFJQSxRQUFNLENBQUNDLGdCQUFELEVBQW1CQyxtQkFBbkIsSUFBMENuQixxREFBQSxDQUFlUyxVQUFmLENBQWhEO0FBRUFULEVBQUFBLHNEQUFBLENBQWdCLE1BQU0sQ0FFckIsQ0FGRDs7QUFHQSxRQUFNc0IsU0FBUyxHQUFJWCxTQUFELElBQWU7QUFFN0JBLElBQUFBLFNBQVMsQ0FBQ00sT0FBVixHQUFxQk4sU0FBUyxDQUFDTSxPQUFWLEdBQW9CLENBQXpDO0FBQ0FNLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYixTQUFTLENBQUNNLE9BQXRCO0FBQ0FFLElBQUFBLG1CQUFtQixpQ0FBS0QsZ0JBQUw7QUFBdUJQLE1BQUFBO0FBQXZCLE9BQW5CO0FBQ0gsR0FMRCxDQWhCc0QsQ0F1QnREOzs7QUFFQSxzQkFDSSw4REFB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QUFBQSxjQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW1DSDs7R0E1RHVCaEM7VUFHQ0Q7OztLQUhEQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVzb3VyY2VzL2NvbXBvbmVudHMvVHJpcFBhc3NhZ2Vycy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL19FbGVtZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFzc2VuZ2VyVGlja2V0KHsgdHJpcFNjaGVkdWxlIH0pIHtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHsgcmVnaXN0ZXIgfSA9IHVzZUZvcm0oKTtcclxuICAgIGNvbnN0IHBhc3NlbmdlclByaWNlcyA9IHRyaXBTY2hlZHVsZS5wYXNzZW5nZXJzLm1hcChwYXNzZW5nZXIgPT4gcGFzc2VuZ2VyLnBpdm90LmFtb3VudCk7XHJcbiAgICBjb25zdCBsb3dlc3RQcmljZSA9IE1hdGgubWluKC4uLnBhc3NlbmdlclByaWNlcyk7XHJcbiAgICBcclxuICAgIGxldCBwYXNzZW5nZXJzID0gdHJpcFNjaGVkdWxlLnBhc3NlbmdlcnMubWFwKHBhc3NlbmdlciA9PiAoe1xyXG4gICAgICAgIC4uLnBhc3NlbmdlcixcclxuICAgICAgICB0aWNrZXRzOiAwXHJcbiAgICB9KSlcclxuICAgIGNvbnN0IFtwYXNzZW5nZXJUaWNrZXRzLCBzZXRQYXNzZW5nZXJUaWNrZXRzXSA9IFJlYWN0LnVzZVN0YXRlKHBhc3NlbmdlcnMpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgY29uc3QgYWRkVGlja2V0ID0gKHBhc3NlbmdlcikgPT4ge1xyXG5cclxuICAgICAgICBwYXNzZW5nZXIudGlja2V0cyA9ICBwYXNzZW5nZXIudGlja2V0cyArIDE7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGFzc2VuZ2VyLnRpY2tldHMpXHJcbiAgICAgICAgc2V0UGFzc2VuZ2VyVGlja2V0cyh7Li4ucGFzc2VuZ2VyVGlja2V0cywgcGFzc2VuZ2VyfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cocGFzc2VuZ2VyVGlja2V0cywnYXNva2Rhc29rZG9zYScpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3R5bGVkLlBhc3NhZ2VyTGlzdD5cclxuXHJcbiAgICAgICAgICAgIDxTdHlsZWQuSW5mb1RyaXA+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkLkluZm9EZXRhaWxzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuUGVyaW9kPjxpIGNsYXNzTmFtZT17J2xhcyBsYS1jYWxlbmRhcid9PjwvaT4ge2Ake21vbWVudCh0cmlwU2NoZWR1bGU/LnN0YXJ0X2RhdGUpLmZvcm1hdCgnREQvTU0gSDptJyl9IC0gJHttb21lbnQodHJpcFNjaGVkdWxlPy5lbmRfZGF0ZSkuZm9ybWF0KCdERC9NTSBIOm0nKX1gfTwvU3R5bGVkLlBlcmlvZD5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLlZhY2FuY2llcz4ge3RyaXBTY2hlZHVsZT8uc3RhdHVzLm5hbWV9PC9TdHlsZWQuVmFjYW5jaWVzPlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWQuSW5mb0RldGFpbHM+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkLkluZm9EZXRhaWxzIGp1c3RpZnk9eydmbGV4LWVuZCd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuSW5mb1RvcD5BIHBhcnRpciBkZTwvU3R5bGVkLkluZm9Ub3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5JbmZvUHJpY2VWYWx1ZT57bmV3IEludGwuTnVtYmVyRm9ybWF0KFwicHQtQlJcIiwgeyBzdHlsZTogXCJjdXJyZW5jeVwiLCBjdXJyZW5jeTogXCJCUkxcIiwgfSkuZm9ybWF0KHRyaXBTY2hlZHVsZS5wcmljZSArIGxvd2VzdFByaWNlKX08L1N0eWxlZC5JbmZvUHJpY2VWYWx1ZT5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkLkluZm9EZXRhaWxzPlxyXG4gICAgICAgICAgICA8L1N0eWxlZC5JbmZvVHJpcD5cclxuXHJcbiAgICAgICAgICAgIDxTdHlsZWQuVGlja2V0Rm9ybT5cclxuICAgICAgICAgICAgICAgIHtwYXNzZW5nZXJzPy5tYXAoKHBhc3NlbmdlciwgaW5kZXgpID0+IDxTdHlsZWQuQ29udGFpbmVyIGtleT17cGFzc2VuZ2VyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLkluZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuVGl0bGU+e3Bhc3Nlbmdlci5uYW1lfTwvU3R5bGVkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLkRlc2NyaXB0aW9uPntwYXNzZW5nZXIuZGVzY3JpcHRpb259PC9TdHlsZWQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWQuSW5mbz5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLkFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5BY3Rpb25CdXR0b24gdHlwZT17XCJidXR0b25cIn0gb25DbGljaz17KCkgPT4gYWRkVGlja2V0KHBhc3Nlbmdlcil9Pis8L1N0eWxlZC5BY3Rpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuUXVhbnRpdHkgey4uLnJlZ2lzdGVyKHBhc3Nlbmdlci5uYW1lKX0+e3Bhc3Nlbmdlci50aWNrZXRzfTwvU3R5bGVkLlF1YW50aXR5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLkFjdGlvbkJ1dHRvbiB0eXBlPXtcImJ1dHRvblwifSBvbkNsaWNrPXsoKSA9PiBwYXNzZW5nZXIudGlja2V0cyArMX0+LTwvU3R5bGVkLkFjdGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZC5BY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZC5Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlRvdGFsOiAzMDAsMDAwPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9eydwcmltYXJ5J30+RmVjaGFyIFBhY290ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1N0eWxlZC5UaWNrZXRGb3JtPlxyXG5cclxuICAgICAgICA8L1N0eWxlZC5QYXNzYWdlckxpc3Q+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJTdHlsZWQiLCJtb21lbnQiLCJ1c2VGb3JtIiwiUGFzc2VuZ2VyVGlja2V0IiwidHJpcFNjaGVkdWxlIiwicmVnaXN0ZXIiLCJwYXNzZW5nZXJQcmljZXMiLCJwYXNzZW5nZXJzIiwibWFwIiwicGFzc2VuZ2VyIiwicGl2b3QiLCJhbW91bnQiLCJsb3dlc3RQcmljZSIsIk1hdGgiLCJtaW4iLCJ0aWNrZXRzIiwicGFzc2VuZ2VyVGlja2V0cyIsInNldFBhc3NlbmdlclRpY2tldHMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImFkZFRpY2tldCIsImNvbnNvbGUiLCJsb2ciLCJzdGFydF9kYXRlIiwiZm9ybWF0IiwiZW5kX2RhdGUiLCJzdGF0dXMiLCJuYW1lIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJwcmljZSIsImluZGV4IiwiZGVzY3JpcHRpb24iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=