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
    console.log(totalAmount, tripSchedule.price + passenger.price); // setTotalAmount(totalAmount - (tripSchedule.price + passenger.price))
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
            lineNumber: 54,
            columnNumber: 36
          }, this), " ", `${moment__WEBPACK_IMPORTED_MODULE_5___default()(tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.start_date).format('DD/MM H:m')} - ${moment__WEBPACK_IMPORTED_MODULE_5___default()(tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.end_date).format('DD/MM H:m')}`]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Vacancies, {
          children: [" ", tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.status.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoDetails, {
        justify: 'flex-end',
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoTop, {
          children: "A partir de"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoPriceValue, {
          children: new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(tripSchedule.price + lowestPrice)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.TicketForm, {
      children: [passengerTickets === null || passengerTickets === void 0 ? void 0 : passengerTickets.map((passenger, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Info, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Title, {
            children: passenger.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Description, {
            children: passenger.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Action, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.ActionButton, {
            type: "button",
            onClick: () => addTicket(passenger),
            children: "+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Quantity, _objectSpread(_objectSpread({}, register(passenger.name)), {}, {
            children: passenger.tickets
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.ActionButton, {
            type: "button",
            onClick: () => removeTicket(passenger),
            children: "-"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
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
        lineNumber: 77,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Elements_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
        color: 'primary',
        children: "Fechar Pacote"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJpcC9bdXVpZF0uZjhkYmQyODQyMWE0OGEyZjVmYzYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNLLGVBQVQsQ0FBeUI7QUFBRUMsRUFBQUE7QUFBRixDQUF6QixFQUEyQztBQUFBOztBQUd0RCxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBZUgsd0RBQU8sRUFBNUI7QUFDQSxRQUFNSSxlQUFlLEdBQUdGLFlBQVksQ0FBQ0csVUFBYixDQUF3QkMsR0FBeEIsQ0FBNEJDLFNBQVMsSUFBSUEsU0FBUyxDQUFDQyxLQUFWLENBQWdCQyxNQUF6RCxDQUF4QjtBQUNBLFFBQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsR0FBR1IsZUFBWixDQUFwQjtBQUVBLFFBQU0sQ0FBQ1MsV0FBRCxFQUFjQyxjQUFkLElBQWdDbEIscURBQUEsQ0FBZSxDQUFmLENBQXRDO0FBRUEsTUFBSVMsVUFBVSxHQUFHSCxZQUFZLENBQUNHLFVBQWIsQ0FBd0JDLEdBQXhCLENBQTRCQyxTQUFTLG9DQUMvQ0EsU0FEK0M7QUFFbERTLElBQUFBLE9BQU8sRUFBRSxDQUZ5QztBQUdsREMsSUFBQUEsS0FBSyxFQUFFVixTQUFTLENBQUNDLEtBQVYsQ0FBZ0JDO0FBSDJCLElBQXJDLENBQWpCO0FBS0EsUUFBTSxDQUFDUyxnQkFBRCxFQUFtQkMsbUJBQW5CLElBQTBDdkIscURBQUEsQ0FBZVMsVUFBZixDQUFoRDs7QUFHQSxRQUFNZSxTQUFTLEdBQUliLFNBQUQsSUFBZTtBQUU3QkEsSUFBQUEsU0FBUyxDQUFDUyxPQUFWLEdBQW9CVCxTQUFTLENBQUNTLE9BQVYsR0FBb0IsQ0FBeEM7O0FBQ0EsUUFBSVQsU0FBUyxDQUFDUyxPQUFWLEtBQXNCLENBQTFCLEVBQTRCO0FBQ3hCRixNQUFBQSxjQUFjLENBQUMsQ0FBQ1As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dUJaO1VBR0NEOzs7S0FIREMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3Jlc291cmNlcy9jb21wb25lbnRzL1RyaXBQYXNzYWdlcnMvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9fRWxlbWVudHMvQnV0dG9uJztcclxuaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhc3NlbmdlclRpY2tldCh7IHRyaXBTY2hlZHVsZSB9KSB7XHJcblxyXG5cclxuICAgIGNvbnN0IHsgcmVnaXN0ZXIgfSA9IHVzZUZvcm0oKTtcclxuICAgIGNvbnN0IHBhc3NlbmdlclByaWNlcyA9IHRyaXBTY2hlZHVsZS5wYXNzZW5nZXJzLm1hcChwYXNzZW5nZXIgPT4gcGFzc2VuZ2VyLnBpdm90LmFtb3VudCk7XHJcbiAgICBjb25zdCBsb3dlc3RQcmljZSA9IE1hdGgubWluKC4uLnBhc3NlbmdlclByaWNlcyk7XHJcblxyXG4gICAgY29uc3QgW3RvdGFsQW1vdW50LCBzZXRUb3RhbEFtb3VudF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBsZXQgcGFzc2VuZ2VycyA9IHRyaXBTY2hlZHVsZS5wYXNzZW5nZXJzLm1hcChwYXNzZW5nZXIgPT4gKHtcclxuICAgICAgICAuLi5wYXNzZW5nZXIsXHJcbiAgICAgICAgdGlja2V0czogMCxcclxuICAgICAgICBwcmljZTogcGFzc2VuZ2VyLnBpdm90LmFtb3VudFxyXG4gICAgfSkpXHJcbiAgICBjb25zdCBbcGFzc2VuZ2VyVGlja2V0cywgc2V0UGFzc2VuZ2VyVGlja2V0c10gPSBSZWFjdC51c2VTdGF0ZShwYXNzZW5nZXJzKTtcclxuXHJcblxyXG4gICAgY29uc3QgYWRkVGlja2V0ID0gKHBhc3NlbmdlcikgPT4ge1xyXG5cclxuICAgICAgICBwYXNzZW5nZXIudGlja2V0cyA9IHBhc3Nlbmdlci50aWNrZXRzICsgMTtcclxuICAgICAgICBpZiAocGFzc2VuZ2VyLnRpY2tldHMgPT09IDEpe1xyXG4gICAgICAgICAgICBzZXRUb3RhbEFtb3VudCgocGFzc2VuZ2VyLnByaWNlICArIHRyaXBTY2hlZHVsZS5wcmljZSkgKiBwYXNzZW5nZXIudGlja2V0cylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0UGFzc2VuZ2VyVGlja2V0cyhbLi4ucGFzc2VuZ2VyVGlja2V0c10pO1xyXG4gICAgICAgIHNldFRvdGFsQW1vdW50KChwYXNzZW5nZXIucHJpY2UgICsgdG90YWxBbW91bnQpICogcGFzc2VuZ2VyLnRpY2tldHMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlVGlja2V0ID0gKHBhc3NlbmdlcikgPT4ge1xyXG5cclxuICAgICAgICBpZiAocGFzc2VuZ2VyLnRpY2tldHMgPD0gMCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBwYXNzZW5nZXIudGlja2V0cyA9IHBhc3Nlbmdlci50aWNrZXRzIC0gMTtcclxuICAgICAgICBzZXRQYXNzZW5nZXJUaWNrZXRzKFsuLi5wYXNzZW5nZXJUaWNrZXRzXSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codG90YWxBbW91bnQsIHRyaXBTY2hlZHVsZS5wcmljZSArIHBhc3Nlbmdlci5wcmljZSlcclxuICAgICAgICAvLyBzZXRUb3RhbEFtb3VudCh0b3RhbEFtb3VudCAtICh0cmlwU2NoZWR1bGUucHJpY2UgKyBwYXNzZW5nZXIucHJpY2UpKVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2cocGFzc2VuZ2VyVGlja2V0cywgJ29rJylcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWQuUGFzc2FnZXJMaXN0PlxyXG5cclxuICAgICAgICAgICAgPFN0eWxlZC5JbmZvVHJpcD5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWQuSW5mb0RldGFpbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5QZXJpb2Q+PGkgY2xhc3NOYW1lPXsnbGFzIGxhLWNhbGVuZGFyJ30+PC9pPiB7YCR7bW9tZW50KHRyaXBTY2hlZHVsZT8uc3RhcnRfZGF0ZSkuZm9ybWF0KCdERC9NTSBIOm0nKX0gLSAke21vbWVudCh0cmlwU2NoZWR1bGU/LmVuZF9kYXRlKS5mb3JtYXQoJ0REL01NIEg6bScpfWB9PC9TdHlsZWQuUGVyaW9kPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuVmFjYW5jaWVzPiB7dHJpcFNjaGVkdWxlPy5zdGF0dXMubmFtZX08L1N0eWxlZC5WYWNhbmNpZXM+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZC5JbmZvRGV0YWlscz5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWQuSW5mb0RldGFpbHMganVzdGlmeT17J2ZsZXgtZW5kJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5JbmZvVG9wPkEgcGFydGlyIGRlPC9TdHlsZWQuSW5mb1RvcD5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLkluZm9QcmljZVZhbHVlPntuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJwdC1CUlwiLCB7IHN0eWxlOiBcImN1cnJlbmN5XCIsIGN1cnJlbmN5OiBcIkJSTFwiLCB9KS5mb3JtYXQodHJpcFNjaGVkdWxlLnByaWNlICsgbG93ZXN0UHJpY2UpfTwvU3R5bGVkLkluZm9QcmljZVZhbHVlPlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWQuSW5mb0RldGFpbHM+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkLkluZm9UcmlwPlxyXG5cclxuICAgICAgICAgICAgPFN0eWxlZC5UaWNrZXRGb3JtPlxyXG4gICAgICAgICAgICAgICAge3Bhc3NlbmdlclRpY2tldHM/Lm1hcCgocGFzc2VuZ2VyLCBpbmRleCkgPT4gPFN0eWxlZC5Db250YWluZXIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5JbmZvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLlRpdGxlPntwYXNzZW5nZXIubmFtZX08L1N0eWxlZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5EZXNjcmlwdGlvbj57cGFzc2VuZ2VyLmRlc2NyaXB0aW9ufTwvU3R5bGVkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkLkluZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5BY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuQWN0aW9uQnV0dG9uIHR5cGU9e1wiYnV0dG9uXCJ9IG9uQ2xpY2s9eygpID0+IGFkZFRpY2tldChwYXNzZW5nZXIpfT4rPC9TdHlsZWQuQWN0aW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLlF1YW50aXR5IHsuLi5yZWdpc3RlcihwYXNzZW5nZXIubmFtZSl9PntwYXNzZW5nZXIudGlja2V0c308L1N0eWxlZC5RdWFudGl0eT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5BY3Rpb25CdXR0b24gdHlwZT17XCJidXR0b25cIn0gb25DbGljaz17KCkgPT4gcmVtb3ZlVGlja2V0KHBhc3Nlbmdlcil9Pi08L1N0eWxlZC5BY3Rpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWQuQWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWQuQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAnMjBweCcsIGZvbnRXZWlnaHQ6ICdib2xkJ319PlRvdGFsOiB7bmV3IEludGwuTnVtYmVyRm9ybWF0KFwicHQtQlJcIiwgeyBzdHlsZTogXCJjdXJyZW5jeVwiLCBjdXJyZW5jeTogXCJCUkxcIiwgfSkuZm9ybWF0KHRvdGFsQW1vdW50KX08L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj17J3ByaW1hcnknfT5GZWNoYXIgUGFjb3RlPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkLlRpY2tldEZvcm0+XHJcblxyXG4gICAgICAgIDwvU3R5bGVkLlBhc3NhZ2VyTGlzdD5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIlN0eWxlZCIsIm1vbWVudCIsInVzZUZvcm0iLCJQYXNzZW5nZXJUaWNrZXQiLCJ0cmlwU2NoZWR1bGUiLCJyZWdpc3RlciIsInBhc3NlbmdlclByaWNlcyIsInBhc3NlbmdlcnMiLCJtYXAiLCJwYXNzZW5nZXIiLCJwaXZvdCIsImFtb3VudCIsImxvd2VzdFByaWNlIiwiTWF0aCIsIm1pbiIsInRvdGFsQW1vdW50Iiwic2V0VG90YWxBbW91bnQiLCJ1c2VTdGF0ZSIsInRpY2tldHMiLCJwcmljZSIsInBhc3NlbmdlclRpY2tldHMiLCJzZXRQYXNzZW5nZXJUaWNrZXRzIiwiYWRkVGlja2V0IiwicmVtb3ZlVGlja2V0IiwiY29uc29sZSIsImxvZyIsInN0YXJ0X2RhdGUiLCJmb3JtYXQiLCJlbmRfZGF0ZSIsInN0YXR1cyIsIm5hbWUiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImluZGV4IiwiZGVzY3JpcHRpb24iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9