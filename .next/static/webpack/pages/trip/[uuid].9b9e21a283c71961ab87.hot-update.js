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
    price: passenger.pivot.amount
  }));
  const [passengerTickets, setPassengerTickets] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(passengers);

  const addTicket = passenger => {
    passenger.tickets = passenger.tickets + 1;

    if (passenger.tickets === 1) {
      setTotalAmount((passenger.price + tripSchedule.price) * passenger.tickets);
      return;
    }

    ;
    setPassengerTickets([...passengerTickets]);
    setTotalAmount((passenger.price + totalAmount) * passenger.tickets);
  };

  const removeTicket = passenger => {
    if (passenger.tickets <= 0) return false;
    passenger.tickets = passenger.tickets - 1;
    setPassengerTickets([...passengerTickets]);
    setTotalAmount((totalAmount - passenger.price) * passenger.tickets);
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
            lineNumber: 52,
            columnNumber: 36
          }, this), " ", `${moment__WEBPACK_IMPORTED_MODULE_5___default()(tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.start_date).format('DD/MM H:m')} - ${moment__WEBPACK_IMPORTED_MODULE_5___default()(tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.end_date).format('DD/MM H:m')}`]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Vacancies, {
          children: [" ", tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.status.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoDetails, {
        justify: 'flex-end',
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoTop, {
          children: "A partir de"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoPriceValue, {
          children: new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(tripSchedule.price + lowestPrice)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.TicketForm, {
      children: [passengerTickets === null || passengerTickets === void 0 ? void 0 : passengerTickets.map((passenger, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Info, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Title, {
            children: passenger.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Description, {
            children: passenger.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Action, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.ActionButton, {
            type: "button",
            onClick: () => addTicket(passenger),
            children: "+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Quantity, _objectSpread(_objectSpread({}, register(passenger.name)), {}, {
            children: passenger.tickets
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.ActionButton, {
            type: "button",
            onClick: () => removeTicket(passenger),
            children: "-"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
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
        lineNumber: 75,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Elements_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
        color: 'primary',
        children: "Fechar Pacote"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, this);
}

_s(PassengerTicket, "/NMoa5qjIKSR4BMffmtvl0KLCc0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJpcC9bdXVpZF0uOWI5ZTIxYTI4M2M3MTk2MWFiODcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNLLGVBQVQsQ0FBeUI7QUFBRUMsRUFBQUE7QUFBRixDQUF6QixFQUEyQztBQUFBOztBQUd0RCxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBZUgsd0RBQU8sRUFBNUI7QUFDQSxRQUFNSSxlQUFlLEdBQUdGLFlBQVksQ0FBQ0csVUFBYixDQUF3QkMsR0FBeEIsQ0FBNEJDLFNBQVMsSUFBSUEsU0FBUyxDQUFDQyxLQUFWLENBQWdCQyxNQUF6RCxDQUF4QjtBQUNBLFFBQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsR0FBR1IsZUFBWixDQUFwQjtBQUVBLFFBQU0sQ0FBQ1MsV0FBRCxFQUFjQyxjQUFkLElBQWdDbEIscURBQUEsQ0FBZSxDQUFmLENBQXRDO0FBRUEsTUFBSVMsVUFBVSxHQUFHSCxZQUFZLENBQUNHLFVBQWIsQ0FBd0JDLEdBQXhCLENBQTRCQyxTQUFTLG9DQUMvQ0EsU0FEK0M7QUFFbERTLElBQUFBLE9BQU8sRUFBRSxDQUZ5QztBQUdsREMsSUFBQUEsS0FBSyxFQUFFVixTQUFTLENBQUNDLEtBQVYsQ0FBZ0JDO0FBSDJCLElBQXJDLENBQWpCO0FBS0EsUUFBTSxDQUFDUyxnQkFBRCxFQUFtQkMsbUJBQW5CLElBQTBDdkIscURBQUEsQ0FBZVMsVUFBZixDQUFoRDs7QUFHQSxRQUFNZSxTQUFTLEdBQUliLFNBQUQsSUFBZTtBQUU3QkEsSUFBQUEsU0FBUyxDQUFDUyxPQUFWLEdBQW9CVCxTQUFTLENBQUNTLE9BQVYsR0FBb0IsQ0FBeEM7O0FBQ0EsUUFBSVQsU0FBUyxDQUFDUyxPQUFWLEtBQXNCLENBQTFCLEVBQTRCO0FBQ3hCRixNQUFBQSxjQUFjLENBQUMsQ0FBQ1As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QUhEQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVzb3VyY2VzL2NvbXBvbmVudHMvVHJpcFBhc3NhZ2Vycy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL19FbGVtZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFzc2VuZ2VyVGlja2V0KHsgdHJpcFNjaGVkdWxlIH0pIHtcclxuXHJcblxyXG4gICAgY29uc3QgeyByZWdpc3RlciB9ID0gdXNlRm9ybSgpO1xyXG4gICAgY29uc3QgcGFzc2VuZ2VyUHJpY2VzID0gdHJpcFNjaGVkdWxlLnBhc3NlbmdlcnMubWFwKHBhc3NlbmdlciA9PiBwYXNzZW5nZXIucGl2b3QuYW1vdW50KTtcclxuICAgIGNvbnN0IGxvd2VzdFByaWNlID0gTWF0aC5taW4oLi4ucGFzc2VuZ2VyUHJpY2VzKTtcclxuXHJcbiAgICBjb25zdCBbdG90YWxBbW91bnQsIHNldFRvdGFsQW1vdW50XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICAgIGxldCBwYXNzZW5nZXJzID0gdHJpcFNjaGVkdWxlLnBhc3NlbmdlcnMubWFwKHBhc3NlbmdlciA9PiAoe1xyXG4gICAgICAgIC4uLnBhc3NlbmdlcixcclxuICAgICAgICB0aWNrZXRzOiAwLFxyXG4gICAgICAgIHByaWNlOiBwYXNzZW5nZXIucGl2b3QuYW1vdW50XHJcbiAgICB9KSlcclxuICAgIGNvbnN0IFtwYXNzZW5nZXJUaWNrZXRzLCBzZXRQYXNzZW5nZXJUaWNrZXRzXSA9IFJlYWN0LnVzZVN0YXRlKHBhc3NlbmdlcnMpO1xyXG5cclxuXHJcbiAgICBjb25zdCBhZGRUaWNrZXQgPSAocGFzc2VuZ2VyKSA9PiB7XHJcblxyXG4gICAgICAgIHBhc3Nlbmdlci50aWNrZXRzID0gcGFzc2VuZ2VyLnRpY2tldHMgKyAxO1xyXG4gICAgICAgIGlmIChwYXNzZW5nZXIudGlja2V0cyA9PT0gMSl7XHJcbiAgICAgICAgICAgIHNldFRvdGFsQW1vdW50KChwYXNzZW5nZXIucHJpY2UgICsgdHJpcFNjaGVkdWxlLnByaWNlKSAqIHBhc3Nlbmdlci50aWNrZXRzKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRQYXNzZW5nZXJUaWNrZXRzKFsuLi5wYXNzZW5nZXJUaWNrZXRzXSk7XHJcbiAgICAgICAgc2V0VG90YWxBbW91bnQoKHBhc3Nlbmdlci5wcmljZSAgKyB0b3RhbEFtb3VudCkgKiBwYXNzZW5nZXIudGlja2V0cylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVUaWNrZXQgPSAocGFzc2VuZ2VyKSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChwYXNzZW5nZXIudGlja2V0cyA8PSAwKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHBhc3Nlbmdlci50aWNrZXRzID0gcGFzc2VuZ2VyLnRpY2tldHMgLSAxO1xyXG4gICAgICAgIHNldFBhc3NlbmdlclRpY2tldHMoWy4uLnBhc3NlbmdlclRpY2tldHNdKTtcclxuICAgICAgICBzZXRUb3RhbEFtb3VudCgodG90YWxBbW91bnQgLSBwYXNzZW5nZXIucHJpY2UpICogcGFzc2VuZ2VyLnRpY2tldHMpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHBhc3NlbmdlclRpY2tldHMsICdvaycpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3R5bGVkLlBhc3NhZ2VyTGlzdD5cclxuXHJcbiAgICAgICAgICAgIDxTdHlsZWQuSW5mb1RyaXA+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkLkluZm9EZXRhaWxzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuUGVyaW9kPjxpIGNsYXNzTmFtZT17J2xhcyBsYS1jYWxlbmRhcid9PjwvaT4ge2Ake21vbWVudCh0cmlwU2NoZWR1bGU/LnN0YXJ0X2RhdGUpLmZvcm1hdCgnREQvTU0gSDptJyl9IC0gJHttb21lbnQodHJpcFNjaGVkdWxlPy5lbmRfZGF0ZSkuZm9ybWF0KCdERC9NTSBIOm0nKX1gfTwvU3R5bGVkLlBlcmlvZD5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLlZhY2FuY2llcz4ge3RyaXBTY2hlZHVsZT8uc3RhdHVzLm5hbWV9PC9TdHlsZWQuVmFjYW5jaWVzPlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWQuSW5mb0RldGFpbHM+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkLkluZm9EZXRhaWxzIGp1c3RpZnk9eydmbGV4LWVuZCd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuSW5mb1RvcD5BIHBhcnRpciBkZTwvU3R5bGVkLkluZm9Ub3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5JbmZvUHJpY2VWYWx1ZT57bmV3IEludGwuTnVtYmVyRm9ybWF0KFwicHQtQlJcIiwgeyBzdHlsZTogXCJjdXJyZW5jeVwiLCBjdXJyZW5jeTogXCJCUkxcIiwgfSkuZm9ybWF0KHRyaXBTY2hlZHVsZS5wcmljZSArIGxvd2VzdFByaWNlKX08L1N0eWxlZC5JbmZvUHJpY2VWYWx1ZT5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkLkluZm9EZXRhaWxzPlxyXG4gICAgICAgICAgICA8L1N0eWxlZC5JbmZvVHJpcD5cclxuXHJcbiAgICAgICAgICAgIDxTdHlsZWQuVGlja2V0Rm9ybT5cclxuICAgICAgICAgICAgICAgIHtwYXNzZW5nZXJUaWNrZXRzPy5tYXAoKHBhc3NlbmdlciwgaW5kZXgpID0+IDxTdHlsZWQuQ29udGFpbmVyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuSW5mbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5UaXRsZT57cGFzc2VuZ2VyLm5hbWV9PC9TdHlsZWQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuRGVzY3JpcHRpb24+e3Bhc3Nlbmdlci5kZXNjcmlwdGlvbn08L1N0eWxlZC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZC5JbmZvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuQWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLkFjdGlvbkJ1dHRvbiB0eXBlPXtcImJ1dHRvblwifSBvbkNsaWNrPXsoKSA9PiBhZGRUaWNrZXQocGFzc2VuZ2VyKX0+KzwvU3R5bGVkLkFjdGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5RdWFudGl0eSB7Li4ucmVnaXN0ZXIocGFzc2VuZ2VyLm5hbWUpfT57cGFzc2VuZ2VyLnRpY2tldHN9PC9TdHlsZWQuUXVhbnRpdHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuQWN0aW9uQnV0dG9uIHR5cGU9e1wiYnV0dG9uXCJ9IG9uQ2xpY2s9eygpID0+IHJlbW92ZVRpY2tldChwYXNzZW5nZXIpfT4tPC9TdHlsZWQuQWN0aW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkLkFjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkLkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTogJzIwcHgnLCBmb250V2VpZ2h0OiAnYm9sZCd9fT5Ub3RhbDoge25ldyBJbnRsLk51bWJlckZvcm1hdChcInB0LUJSXCIsIHsgc3R5bGU6IFwiY3VycmVuY3lcIiwgY3VycmVuY3k6IFwiQlJMXCIsIH0pLmZvcm1hdCh0b3RhbEFtb3VudCl9PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9eydwcmltYXJ5J30+RmVjaGFyIFBhY290ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1N0eWxlZC5UaWNrZXRGb3JtPlxyXG5cclxuICAgICAgICA8L1N0eWxlZC5QYXNzYWdlckxpc3Q+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJTdHlsZWQiLCJtb21lbnQiLCJ1c2VGb3JtIiwiUGFzc2VuZ2VyVGlja2V0IiwidHJpcFNjaGVkdWxlIiwicmVnaXN0ZXIiLCJwYXNzZW5nZXJQcmljZXMiLCJwYXNzZW5nZXJzIiwibWFwIiwicGFzc2VuZ2VyIiwicGl2b3QiLCJhbW91bnQiLCJsb3dlc3RQcmljZSIsIk1hdGgiLCJtaW4iLCJ0b3RhbEFtb3VudCIsInNldFRvdGFsQW1vdW50IiwidXNlU3RhdGUiLCJ0aWNrZXRzIiwicHJpY2UiLCJwYXNzZW5nZXJUaWNrZXRzIiwic2V0UGFzc2VuZ2VyVGlja2V0cyIsImFkZFRpY2tldCIsInJlbW92ZVRpY2tldCIsImNvbnNvbGUiLCJsb2ciLCJzdGFydF9kYXRlIiwiZm9ybWF0IiwiZW5kX2RhdGUiLCJzdGF0dXMiLCJuYW1lIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJpbmRleCIsImRlc2NyaXB0aW9uIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==