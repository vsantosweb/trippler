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
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {});

  const addTicket = passenger => {
    passenger.tickets = passenger.tickets + 1;
    console.log(passenger.tickets);
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
            lineNumber: 39,
            columnNumber: 36
          }, this), " ", `${moment__WEBPACK_IMPORTED_MODULE_5___default()(tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.start_date).format('DD/MM H:m')} - ${moment__WEBPACK_IMPORTED_MODULE_5___default()(tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.end_date).format('DD/MM H:m')}`]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Vacancies, {
          children: [" ", tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.status.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoDetails, {
        justify: 'flex-end',
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoTop, {
          children: "A partir de"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoPriceValue, {
          children: new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(tripSchedule.price + lowestPrice)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.TicketForm, {
      children: [passengers === null || passengers === void 0 ? void 0 : passengers.map((passenger, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Info, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Title, {
            children: passenger.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Description, {
            children: passenger.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Action, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.ActionButton, {
            type: "button",
            onClick: () => setCount(count++),
            children: "+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Quantity, _objectSpread(_objectSpread({}, register(passenger.name)), {}, {
            children: passenger.tickets
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.ActionButton, {
            type: "button",
            onClick: () => setCount(count--),
            children: "-"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this)]
      }, passenger.id, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 56
      }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Total: 300,000"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Elements_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
        color: 'primary',
        children: "Fechar Pacote"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, this);
}

_s(PassengerTicket, "O+fMFeaSfdlkOWXdG1TOgLnN8uQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJpcC9bdXVpZF0uYzI4NGYyMzliNWQ4ODgzMjYzNTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNLLGVBQVQsQ0FBeUI7QUFBRUMsRUFBQUE7QUFBRixDQUF6QixFQUEyQztBQUFBOztBQUd0RCxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBZUgsd0RBQU8sRUFBNUI7QUFDQSxRQUFNSSxlQUFlLEdBQUdGLFlBQVksQ0FBQ0csVUFBYixDQUF3QkMsR0FBeEIsQ0FBNEJDLFNBQVMsSUFBSUEsU0FBUyxDQUFDQyxLQUFWLENBQWdCQyxNQUF6RCxDQUF4QjtBQUNBLFFBQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsR0FBR1IsZUFBWixDQUFwQjtBQUVBLFFBQU0sQ0FBQ1MsS0FBRCxFQUFTQyxRQUFULElBQXFCbEIscURBQUEsQ0FBZSxDQUFmLENBQTNCO0FBRUEsTUFBSVMsVUFBVSxHQUFHSCxZQUFZLENBQUNHLFVBQWIsQ0FBd0JDLEdBQXhCLENBQTRCQyxTQUFTLG9DQUMvQ0EsU0FEK0M7QUFFbERTLElBQUFBLE9BQU8sRUFBRTtBQUZ5QyxJQUFyQyxDQUFqQjtBQUlBLFFBQU0sQ0FBQ0MsZ0JBQUQsRUFBbUJDLG1CQUFuQixJQUEwQ3RCLHFEQUFBLENBQWVTLFVBQWYsQ0FBaEQ7QUFFQVQsRUFBQUEsc0RBQUEsQ0FBZ0IsTUFBTSxDQUVyQixDQUZEOztBQUdBLFFBQU13QixTQUFTLEdBQUliLFNBQUQsSUFBZTtBQUU3QkEsSUFBQUEsU0FBUyxDQUFDUyxPQUFWLEdBQXFCVCxTQUFTLENBQUNTLE9BQVYsR0FBb0IsQ0FBekM7QUFDQUssSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlmLFNBQVMsQ0FBQ1MsT0FBdEI7QUFDQUUsSUFBQUEsbUJBQW1CLGlDQUFLRCxnQkFBTDtBQUF1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TCxlQWNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEosZUFnQkksOERBQUMscURBQUQ7QUFBUSxhQUFLLEVBQUUsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW1DSDs7R0E5RHVCbEM7VUFHQ0Q7OztLQUhEQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVzb3VyY2VzL2NvbXBvbmVudHMvVHJpcFBhc3NhZ2Vycy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL19FbGVtZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFzc2VuZ2VyVGlja2V0KHsgdHJpcFNjaGVkdWxlIH0pIHtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHsgcmVnaXN0ZXIgfSA9IHVzZUZvcm0oKTtcclxuICAgIGNvbnN0IHBhc3NlbmdlclByaWNlcyA9IHRyaXBTY2hlZHVsZS5wYXNzZW5nZXJzLm1hcChwYXNzZW5nZXIgPT4gcGFzc2VuZ2VyLnBpdm90LmFtb3VudCk7XHJcbiAgICBjb25zdCBsb3dlc3RQcmljZSA9IE1hdGgubWluKC4uLnBhc3NlbmdlclByaWNlcyk7XHJcbiAgICBcclxuICAgIGNvbnN0IFtjb3VudCAsIHNldENvdW50XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgXHJcbiAgICBsZXQgcGFzc2VuZ2VycyA9IHRyaXBTY2hlZHVsZS5wYXNzZW5nZXJzLm1hcChwYXNzZW5nZXIgPT4gKHtcclxuICAgICAgICAuLi5wYXNzZW5nZXIsXHJcbiAgICAgICAgdGlja2V0czogMFxyXG4gICAgfSkpXHJcbiAgICBjb25zdCBbcGFzc2VuZ2VyVGlja2V0cywgc2V0UGFzc2VuZ2VyVGlja2V0c10gPSBSZWFjdC51c2VTdGF0ZShwYXNzZW5nZXJzKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgIGNvbnN0IGFkZFRpY2tldCA9IChwYXNzZW5nZXIpID0+IHtcclxuXHJcbiAgICAgICAgcGFzc2VuZ2VyLnRpY2tldHMgPSAgcGFzc2VuZ2VyLnRpY2tldHMgKyAxO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhc3Nlbmdlci50aWNrZXRzKVxyXG4gICAgICAgIHNldFBhc3NlbmdlclRpY2tldHMoey4uLnBhc3NlbmdlclRpY2tldHMsIHBhc3Nlbmdlcn0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHBhc3NlbmdlclRpY2tldHMsJ2Fzb2tkYXNva2Rvc2EnKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZC5QYXNzYWdlckxpc3Q+XHJcblxyXG4gICAgICAgICAgICA8U3R5bGVkLkluZm9UcmlwPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZC5JbmZvRGV0YWlscz5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLlBlcmlvZD48aSBjbGFzc05hbWU9eydsYXMgbGEtY2FsZW5kYXInfT48L2k+IHtgJHttb21lbnQodHJpcFNjaGVkdWxlPy5zdGFydF9kYXRlKS5mb3JtYXQoJ0REL01NIEg6bScpfSAtICR7bW9tZW50KHRyaXBTY2hlZHVsZT8uZW5kX2RhdGUpLmZvcm1hdCgnREQvTU0gSDptJyl9YH08L1N0eWxlZC5QZXJpb2Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5WYWNhbmNpZXM+IHt0cmlwU2NoZWR1bGU/LnN0YXR1cy5uYW1lfTwvU3R5bGVkLlZhY2FuY2llcz5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkLkluZm9EZXRhaWxzPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZC5JbmZvRGV0YWlscyBqdXN0aWZ5PXsnZmxleC1lbmQnfT5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLkluZm9Ub3A+QSBwYXJ0aXIgZGU8L1N0eWxlZC5JbmZvVG9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuSW5mb1ByaWNlVmFsdWU+e25ldyBJbnRsLk51bWJlckZvcm1hdChcInB0LUJSXCIsIHsgc3R5bGU6IFwiY3VycmVuY3lcIiwgY3VycmVuY3k6IFwiQlJMXCIsIH0pLmZvcm1hdCh0cmlwU2NoZWR1bGUucHJpY2UgKyBsb3dlc3RQcmljZSl9PC9TdHlsZWQuSW5mb1ByaWNlVmFsdWU+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZC5JbmZvRGV0YWlscz5cclxuICAgICAgICAgICAgPC9TdHlsZWQuSW5mb1RyaXA+XHJcblxyXG4gICAgICAgICAgICA8U3R5bGVkLlRpY2tldEZvcm0+XHJcbiAgICAgICAgICAgICAgICB7cGFzc2VuZ2Vycz8ubWFwKChwYXNzZW5nZXIsIGluZGV4KSA9PiA8U3R5bGVkLkNvbnRhaW5lciBrZXk9e3Bhc3Nlbmdlci5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5JbmZvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLlRpdGxlPntwYXNzZW5nZXIubmFtZX08L1N0eWxlZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5EZXNjcmlwdGlvbj57cGFzc2VuZ2VyLmRlc2NyaXB0aW9ufTwvU3R5bGVkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkLkluZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5BY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuQWN0aW9uQnV0dG9uIHR5cGU9e1wiYnV0dG9uXCJ9IG9uQ2xpY2s9eygpID0+IHNldENvdW50KGNvdW50KyspfT4rPC9TdHlsZWQuQWN0aW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLlF1YW50aXR5IHsuLi5yZWdpc3RlcihwYXNzZW5nZXIubmFtZSl9PntwYXNzZW5nZXIudGlja2V0c308L1N0eWxlZC5RdWFudGl0eT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5BY3Rpb25CdXR0b24gdHlwZT17XCJidXR0b25cIn0gb25DbGljaz17KCkgPT4gIHNldENvdW50KGNvdW50LS0pfT4tPC9TdHlsZWQuQWN0aW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkLkFjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkLkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgPHNwYW4+VG90YWw6IDMwMCwwMDA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj17J3ByaW1hcnknfT5GZWNoYXIgUGFjb3RlPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkLlRpY2tldEZvcm0+XHJcblxyXG4gICAgICAgIDwvU3R5bGVkLlBhc3NhZ2VyTGlzdD5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIlN0eWxlZCIsIm1vbWVudCIsInVzZUZvcm0iLCJQYXNzZW5nZXJUaWNrZXQiLCJ0cmlwU2NoZWR1bGUiLCJyZWdpc3RlciIsInBhc3NlbmdlclByaWNlcyIsInBhc3NlbmdlcnMiLCJtYXAiLCJwYXNzZW5nZXIiLCJwaXZvdCIsImFtb3VudCIsImxvd2VzdFByaWNlIiwiTWF0aCIsIm1pbiIsImNvdW50Iiwic2V0Q291bnQiLCJ1c2VTdGF0ZSIsInRpY2tldHMiLCJwYXNzZW5nZXJUaWNrZXRzIiwic2V0UGFzc2VuZ2VyVGlja2V0cyIsInVzZUVmZmVjdCIsImFkZFRpY2tldCIsImNvbnNvbGUiLCJsb2ciLCJzdGFydF9kYXRlIiwiZm9ybWF0IiwiZW5kX2RhdGUiLCJzdGF0dXMiLCJuYW1lIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJwcmljZSIsImluZGV4IiwiZGVzY3JpcHRpb24iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=