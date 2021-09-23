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
  const [totalAmount, setTotalAmount] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(0);
  let passengers = tripSchedule.passengers.map(passenger => _objectSpread(_objectSpread({}, passenger), {}, {
    tickets: 0,
    price: passenger.pivot.amount + tripSchedule.price,
    total: 0
  }));
  const [passengerTickets, setPassengerTickets] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(passengers);
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {}, [passengerTickets]);

  const addTicket = passenger => {
    passenger.tickets = passenger.tickets + 1;
    passenger.total = passenger.total + passenger.price;
    setPassengerTickets([...passengerTickets]);
    setTotalAmount(passengerTickets.reduce((passenger, current) => passenger.price + current.price));
  };

  const removeTicket = passenger => {
    if (passenger.tickets <= 0) return false;
    passenger.tickets = passenger.tickets - 1;
    passenger.total = passenger.total - passenger.price;
    setPassengerTickets([...passengerTickets]);
    setTotalAmount(passengerTickets.reduce((passenger, current) => passenger.price - current.price));
  };

  console.log(passengerTickets, 'ok');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.PassagerList, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoTrip, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoDetails, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Period, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: 'las la-calendar'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 36
          }, this), " ", `${moment__WEBPACK_IMPORTED_MODULE_5___default()(tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.start_date).format('DD/MM H:m')} - ${moment__WEBPACK_IMPORTED_MODULE_5___default()(tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.end_date).format('DD/MM H:m')}`]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Vacancies, {
          children: [" ", tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.status.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoDetails, {
        justify: 'flex-end',
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoTop, {
          children: "A partir de"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoPriceValue, {
          children: new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(tripSchedule.price + lowestPrice)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.TicketForm, {
      children: [passengerTickets === null || passengerTickets === void 0 ? void 0 : passengerTickets.map((passenger, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Info, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Title, {
            children: passenger.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Description, {
            children: passenger.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Action, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.ActionButton, {
            type: "button",
            onClick: () => addTicket(passenger),
            children: "+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Quantity, _objectSpread(_objectSpread({}, register(passenger.name)), {}, {
            children: passenger.tickets
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.ActionButton, {
            type: "button",
            onClick: () => removeTicket(passenger),
            children: "-"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 62
      }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        style: {
          fontSize: '20px',
          fontWeight: 'bold'
        },
        children: ["Total: ", new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL"
        }).format(totalAmount)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Elements_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
        color: 'primary',
        children: "Fechar Pacote"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, this);
}

_s(PassengerTicket, "8WhrkT6bePSzjHmDBYpL5WmqAcc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJpcC9bdXVpZF0uM2IyNGY3Y2UxNGFkNDQ1ODYyZjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNLLGVBQVQsQ0FBeUI7QUFBRUMsRUFBQUE7QUFBRixDQUF6QixFQUEyQztBQUFBOztBQUd0RCxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBZUgsd0RBQU8sRUFBNUI7QUFDQSxRQUFNSSxlQUFlLEdBQUdGLFlBQVksQ0FBQ0csVUFBYixDQUF3QkMsR0FBeEIsQ0FBNEJDLFNBQVMsSUFBSUEsU0FBUyxDQUFDQyxLQUFWLENBQWdCQyxNQUF6RCxDQUF4QjtBQUNBLFFBQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsR0FBR1IsZUFBWixDQUFwQjtBQUVBLFFBQU0sQ0FBQ1MsV0FBRCxFQUFjQyxjQUFkLElBQWdDbEIscURBQUEsQ0FBZSxDQUFmLENBQXRDO0FBRUEsTUFBSVMsVUFBVSxHQUFHSCxZQUFZLENBQUNHLFVBQWIsQ0FBd0JDLEdBQXhCLENBQTRCQyxTQUFTLG9DQUMvQ0EsU0FEK0M7QUFFbERTLElBQUFBLE9BQU8sRUFBRSxDQUZ5QztBQUdsREMsSUFBQUEsS0FBSyxFQUFFVixTQUFTLENBQUNDLEtBQVYsQ0FBZ0JDLE1BQWhCLEdBQXlCUCxZQUFZLENBQUNlLEtBSEs7QUFJbERDLElBQUFBLEtBQUssRUFBRTtBQUoyQyxJQUFyQyxDQUFqQjtBQU9BLFFBQU0sQ0FBQ0MsZ0JBQUQsRUFBbUJDLG1CQUFuQixJQUEwQ3hCLHFEQUFBLENBQWVTLFVBQWYsQ0FBaEQ7QUFFQVQsRUFBQUEsc0RBQUEsQ0FBZ0IsTUFBTSxDQUNyQixDQURELEVBQ0csQ0FBQ3VCLGdCQUFELENBREg7O0FBR0EsUUFBTUcsU0FBUyxHQUFJZixTQUFELElBQWU7QUFFN0JBLElBQUFBLFNBQVMsQ0FBQ1Ms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QS9FLENBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRKLGVBZ0JJLDhEQUFDLHFEQUFEO0FBQVEsYUFBSyxFQUFFLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQ0g7O0dBL0V1Qlo7VUFHQ0Q7OztLQUhEQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVzb3VyY2VzL2NvbXBvbmVudHMvVHJpcFBhc3NhZ2Vycy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL19FbGVtZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFzc2VuZ2VyVGlja2V0KHsgdHJpcFNjaGVkdWxlIH0pIHtcclxuXHJcblxyXG4gICAgY29uc3QgeyByZWdpc3RlciB9ID0gdXNlRm9ybSgpO1xyXG4gICAgY29uc3QgcGFzc2VuZ2VyUHJpY2VzID0gdHJpcFNjaGVkdWxlLnBhc3NlbmdlcnMubWFwKHBhc3NlbmdlciA9PiBwYXNzZW5nZXIucGl2b3QuYW1vdW50KTtcclxuICAgIGNvbnN0IGxvd2VzdFByaWNlID0gTWF0aC5taW4oLi4ucGFzc2VuZ2VyUHJpY2VzKTtcclxuXHJcbiAgICBjb25zdCBbdG90YWxBbW91bnQsIHNldFRvdGFsQW1vdW50XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICAgIGxldCBwYXNzZW5nZXJzID0gdHJpcFNjaGVkdWxlLnBhc3NlbmdlcnMubWFwKHBhc3NlbmdlciA9PiAoe1xyXG4gICAgICAgIC4uLnBhc3NlbmdlcixcclxuICAgICAgICB0aWNrZXRzOiAwLFxyXG4gICAgICAgIHByaWNlOiBwYXNzZW5nZXIucGl2b3QuYW1vdW50ICsgdHJpcFNjaGVkdWxlLnByaWNlLFxyXG4gICAgICAgIHRvdGFsOiAwXHJcbiAgICB9KSlcclxuXHJcbiAgICBjb25zdCBbcGFzc2VuZ2VyVGlja2V0cywgc2V0UGFzc2VuZ2VyVGlja2V0c10gPSBSZWFjdC51c2VTdGF0ZShwYXNzZW5nZXJzKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgfSwgW3Bhc3NlbmdlclRpY2tldHNdKVxyXG5cclxuICAgIGNvbnN0IGFkZFRpY2tldCA9IChwYXNzZW5nZXIpID0+IHtcclxuXHJcbiAgICAgICAgcGFzc2VuZ2VyLnRpY2tldHMgPSBwYXNzZW5nZXIudGlja2V0cyArIDE7XHJcbiAgICAgICAgcGFzc2VuZ2VyLnRvdGFsID0gcGFzc2VuZ2VyLnRvdGFsICsgcGFzc2VuZ2VyLnByaWNlO1xyXG5cclxuICAgICAgICBzZXRQYXNzZW5nZXJUaWNrZXRzKFsuLi5wYXNzZW5nZXJUaWNrZXRzXSk7XHJcbiAgICAgICAgc2V0VG90YWxBbW91bnQocGFzc2VuZ2VyVGlja2V0cy5yZWR1Y2UoKHBhc3NlbmdlciwgY3VycmVudCkgPT4gcGFzc2VuZ2VyLnByaWNlICsgY3VycmVudC5wcmljZSkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZVRpY2tldCA9IChwYXNzZW5nZXIpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKHBhc3Nlbmdlci50aWNrZXRzIDw9IDApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgcGFzc2VuZ2VyLnRpY2tldHMgPSBwYXNzZW5nZXIudGlja2V0cyAtIDE7XHJcbiAgICAgICAgcGFzc2VuZ2VyLnRvdGFsID0gcGFzc2VuZ2VyLnRvdGFsIC0gcGFzc2VuZ2VyLnByaWNlO1xyXG4gICAgICAgIHNldFBhc3NlbmdlclRpY2tldHMoWy4uLnBhc3NlbmdlclRpY2tldHNdKTtcclxuICAgICAgICBzZXRUb3RhbEFtb3VudChwYXNzZW5nZXJUaWNrZXRzLnJlZHVjZSgocGFzc2VuZ2VyLCBjdXJyZW50KSA9PiBwYXNzZW5nZXIucHJpY2UgLSBjdXJyZW50LnByaWNlKSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2cocGFzc2VuZ2VyVGlja2V0cywgJ29rJylcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWQuUGFzc2FnZXJMaXN0PlxyXG5cclxuICAgICAgICAgICAgPFN0eWxlZC5JbmZvVHJpcD5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWQuSW5mb0RldGFpbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5QZXJpb2Q+PGkgY2xhc3NOYW1lPXsnbGFzIGxhLWNhbGVuZGFyJ30+PC9pPiB7YCR7bW9tZW50KHRyaXBTY2hlZHVsZT8uc3RhcnRfZGF0ZSkuZm9ybWF0KCdERC9NTSBIOm0nKX0gLSAke21vbWVudCh0cmlwU2NoZWR1bGU/LmVuZF9kYXRlKS5mb3JtYXQoJ0REL01NIEg6bScpfWB9PC9TdHlsZWQuUGVyaW9kPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuVmFjYW5jaWVzPiB7dHJpcFNjaGVkdWxlPy5zdGF0dXMubmFtZX08L1N0eWxlZC5WYWNhbmNpZXM+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZC5JbmZvRGV0YWlscz5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWQuSW5mb0RldGFpbHMganVzdGlmeT17J2ZsZXgtZW5kJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5JbmZvVG9wPkEgcGFydGlyIGRlPC9TdHlsZWQuSW5mb1RvcD5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLkluZm9QcmljZVZhbHVlPntuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJwdC1CUlwiLCB7IHN0eWxlOiBcImN1cnJlbmN5XCIsIGN1cnJlbmN5OiBcIkJSTFwiLCB9KS5mb3JtYXQodHJpcFNjaGVkdWxlLnByaWNlICsgbG93ZXN0UHJpY2UpfTwvU3R5bGVkLkluZm9QcmljZVZhbHVlPlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWQuSW5mb0RldGFpbHM+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkLkluZm9UcmlwPlxyXG5cclxuICAgICAgICAgICAgPFN0eWxlZC5UaWNrZXRGb3JtPlxyXG4gICAgICAgICAgICAgICAge3Bhc3NlbmdlclRpY2tldHM/Lm1hcCgocGFzc2VuZ2VyLCBpbmRleCkgPT4gPFN0eWxlZC5Db250YWluZXIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5JbmZvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLlRpdGxlPntwYXNzZW5nZXIubmFtZX08L1N0eWxlZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5EZXNjcmlwdGlvbj57cGFzc2VuZ2VyLmRlc2NyaXB0aW9ufTwvU3R5bGVkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkLkluZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5BY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuQWN0aW9uQnV0dG9uIHR5cGU9e1wiYnV0dG9uXCJ9IG9uQ2xpY2s9eygpID0+IGFkZFRpY2tldChwYXNzZW5nZXIpfT4rPC9TdHlsZWQuQWN0aW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLlF1YW50aXR5IHsuLi5yZWdpc3RlcihwYXNzZW5nZXIubmFtZSl9PntwYXNzZW5nZXIudGlja2V0c308L1N0eWxlZC5RdWFudGl0eT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5BY3Rpb25CdXR0b24gdHlwZT17XCJidXR0b25cIn0gb25DbGljaz17KCkgPT4gcmVtb3ZlVGlja2V0KHBhc3Nlbmdlcil9Pi08L1N0eWxlZC5BY3Rpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWQuQWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWQuQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzIwcHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+VG90YWw6IHtuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJwdC1CUlwiLCB7IHN0eWxlOiBcImN1cnJlbmN5XCIsIGN1cnJlbmN5OiBcIkJSTFwiLCB9KS5mb3JtYXQodG90YWxBbW91bnQpfTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPXsncHJpbWFyeSd9PkZlY2hhciBQYWNvdGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9TdHlsZWQuVGlja2V0Rm9ybT5cclxuXHJcbiAgICAgICAgPC9TdHlsZWQuUGFzc2FnZXJMaXN0PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiU3R5bGVkIiwibW9tZW50IiwidXNlRm9ybSIsIlBhc3NlbmdlclRpY2tldCIsInRyaXBTY2hlZHVsZSIsInJlZ2lzdGVyIiwicGFzc2VuZ2VyUHJpY2VzIiwicGFzc2VuZ2VycyIsIm1hcCIsInBhc3NlbmdlciIsInBpdm90IiwiYW1vdW50IiwibG93ZXN0UHJpY2UiLCJNYXRoIiwibWluIiwidG90YWxBbW91bnQiLCJzZXRUb3RhbEFtb3VudCIsInVzZVN0YXRlIiwidGlja2V0cyIsInByaWNlIiwidG90YWwiLCJwYXNzZW5nZXJUaWNrZXRzIiwic2V0UGFzc2VuZ2VyVGlja2V0cyIsInVzZUVmZmVjdCIsImFkZFRpY2tldCIsInJlZHVjZSIsImN1cnJlbnQiLCJyZW1vdmVUaWNrZXQiLCJjb25zb2xlIiwibG9nIiwic3RhcnRfZGF0ZSIsImZvcm1hdCIsImVuZF9kYXRlIiwic3RhdHVzIiwibmFtZSIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiaW5kZXgiLCJkZXNjcmlwdGlvbiIsImZvbnRTaXplIiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=