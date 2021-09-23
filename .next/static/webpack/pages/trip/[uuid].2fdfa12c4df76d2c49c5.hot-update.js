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
    passenger.tickets = passenger.tickets + 1;
    console.log(passenger.tickets + 1); // setPassengerTickets([{...passenger, tickets: passenger.tickets + 1 }]);

    setPassengerTickets([...passengerTickets, ...passenger]);
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
            lineNumber: 40,
            columnNumber: 36
          }, this), " ", `${moment__WEBPACK_IMPORTED_MODULE_5___default()(tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.start_date).format('DD/MM H:m')} - ${moment__WEBPACK_IMPORTED_MODULE_5___default()(tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.end_date).format('DD/MM H:m')}`]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Vacancies, {
          children: [" ", tripSchedule === null || tripSchedule === void 0 ? void 0 : tripSchedule.status.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoDetails, {
        justify: 'flex-end',
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoTop, {
          children: "A partir de"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.InfoPriceValue, {
          children: new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(tripSchedule.price + lowestPrice)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.TicketForm, {
      children: [passengerTickets === null || passengerTickets === void 0 ? void 0 : passengerTickets.map((passenger, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Info, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Title, {
            children: passenger.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Description, {
            children: passenger.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Action, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.ActionButton, {
            type: "button",
            onClick: () => addTicket(passenger),
            children: "+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Quantity, _objectSpread(_objectSpread({}, register(passenger.name)), {}, {
            children: passenger.tickets
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.ActionButton, {
            type: "button",
            onClick: () => setCount(count - 1),
            children: "-"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 62
      }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Total: 300,000"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Elements_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
        color: 'primary',
        children: "Fechar Pacote"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJpcC9bdXVpZF0uMmZkZmExMmM0ZGY3NmQyYzQ5YzUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNLLGVBQVQsQ0FBeUI7QUFBRUMsRUFBQUE7QUFBRixDQUF6QixFQUEyQztBQUFBOztBQUd0RCxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBZUgsd0RBQU8sRUFBNUI7QUFDQSxRQUFNSSxlQUFlLEdBQUdGLFlBQVksQ0FBQ0csVUFBYixDQUF3QkMsR0FBeEIsQ0FBNEJDLFNBQVMsSUFBSUEsU0FBUyxDQUFDQyxLQUFWLENBQWdCQyxNQUF6RCxDQUF4QjtBQUNBLFFBQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsR0FBR1IsZUFBWixDQUFwQjtBQUVBLFFBQU0sQ0FBQ1MsS0FBRCxFQUFTQyxRQUFULElBQXFCbEIscURBQUEsQ0FBZSxDQUFmLENBQTNCO0FBRUEsTUFBSVMsVUFBVSxHQUFHSCxZQUFZLENBQUNHLFVBQWIsQ0FBd0JDLEdBQXhCLENBQTRCQyxTQUFTLG9DQUMvQ0EsU0FEK0M7QUFFbERTLElBQUFBLE9BQU8sRUFBRTtBQUZ5QyxJQUFyQyxDQUFqQjtBQUlBLFFBQU0sQ0FBQ0MsZ0JBQUQsRUFBbUJDLG1CQUFuQixJQUEwQ3RCLHFEQUFBLENBQWVTLFVBQWYsQ0FBaEQ7O0FBR0EsUUFBTWMsU0FBUyxHQUFJWixTQUFELElBQWU7QUFFN0JBLElBQUFBLFNBQVMsQ0FBQ1MsT0FBVixHQUFvQlQsU0FBUyxDQUFDUyxPQUFWLEdBQW9CLENBQXhDO0FBRUFJLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZCxTQUFTLENBQUNTLE9BQVYsR0FBb0IsQ0FBaEMsRUFKNkIsQ0FLN0I7O0FBQ0FFLElBQUFBLG1CQUFtQixDQUFDLENBQUcsR0FBR0QsZ0JBQU4sRUFBd0IsR0FBR1YsU0FBM0IsQ0FBRCxDQUFuQjtBQUVILEdBUkQ7O0FBVUFhLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixnQkFBWixFQUE2QixlQUE3QjtBQUVBLHNCQUNJLDhEQUFDLGlEQUFEO0FBQUEsNEJBRUksOERBQUMsNkNBQUQ7QUFBQSw4QkFDSSw4REFBQyxnREFBRDtBQUFBLGdDQUNJLDhEQUFDLDJDQUFEO0FBQUEsa0NBQWU7QUFBRyxxQkFBUyxFQUFFO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBZixPQUF1RCxHQUFFbEIsNkNBQU0sQ0FBQ0csWUFBRCxhQUFDQSxZQUFELHVCQUFDQSxZQUFZLENBQUVvQixVQUFmLENBQU4sQ0FBaUNDLE1BQWpDLENBQXdDLFdBQXhDLENBQXFELE1BQUt4Qiw2Q0FBTSxDQUFDRyxZQUFELGFBQUNBLFlBQUQsdUJBQUNBLFlBQVksQ0FBRXNCLFFBQWYsQ0FBTixDQUErQkQsTUFBL0IsQ0FBc0MsV0FBdEMsQ0FBbUQsRUFBdEs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUksOERBQUMsOENBQUQ7QUFBQSwwQkFBb0JyQixZQUFwQixhQUFvQkEsWUFBcEIsdUJBQW9CQSxZQUFZLENBQUV1QixNQUFkLENBQXFCQyxJQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFLSSw4REFBQyxnREFBRDtBQUFvQixlQUFPLEVBQUUsVUFBN0I7QUFBQSxnQ0FDSSw4REFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJLDhEQUFDLG1EQUFEO0FBQUEsb0JBQXdCLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUFFQyxZQUFBQSxLQUFLLEVBQUUsVUFBVDtBQUFxQkMsWUFBQUEsUUFBUSxFQUFFO0FBQS9CLFdBQS9CLEVBQXdFUCxNQUF4RSxDQUErRXJCLFlBQVksQ0FBQzZCLEtBQWIsR0FBcUJyQixXQUFwRztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBYUksOERBQUMsK0NBQUQ7QUFBQSxpQkFDS08sZ0JBREwsYUFDS0EsZ0JBREwsdUJBQ0tBLGdCQUFnQixDQUFFWCxHQUFsQixDQUFzQixDQUFDQyxTQUFELEVBQVl5QixLQUFaLGtCQUFzQiw4REFBQyw4Q0FBRDtBQUFBLGdDQUN6Qyw4REFBQyx5Q0FBRDtBQUFBLGtDQUNJLDhEQUFDLDBDQUFEO0FBQUEsc0JBQWV6QixTQUFTLENBQUNtQjtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUksOERBQUMsZ0RBQUQ7QUFBQSxzQkFBcUJuQixTQUFTLENBQUMwQjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEeUMsZUFLekMsOERBQUMsMkNBQUQ7QUFBQSxrQ0FDSSw4REFBQyxpREFBRDtBQUFxQixnQkFBSSxFQUFFLFFBQTNCO0FBQXFDLG1CQUFPLEVBQUUsTUFBTWQsU0FBUyxDQUFDWixTQUFELENBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUksOERBQUMsNkNBQUQsa0NBQXFCSixRQUFRLENBQUNJLFNBQVMsQ0FBQ21CLElBQVgsQ0FBN0I7QUFBQSxzQkFBZ0RuQixTQUFTLENBQUNTO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFHSSw4REFBQyxpREFBRDtBQUFxQixnQkFBSSxFQUFFLFFBQTNCO0FBQXFDLG1CQUFPLEVBQUUsTUFBT0YsUUFBUSxDQUFDRCxLQUFLLEdBQUUsQ0FBUixDQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTHlDO0FBQUEsU0FBdUJtQixLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQTVDLENBREwsZUFjSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRKLGVBZ0JJLDhEQUFDLHFEQUFEO0FBQVEsYUFBSyxFQUFFLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQ0g7O0dBL0R1Qi9CO1VBR0NEOzs7S0FIREMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3Jlc291cmNlcy9jb21wb25lbnRzL1RyaXBQYXNzYWdlcnMvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9fRWxlbWVudHMvQnV0dG9uJztcclxuaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhc3NlbmdlclRpY2tldCh7IHRyaXBTY2hlZHVsZSB9KSB7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCB7IHJlZ2lzdGVyIH0gPSB1c2VGb3JtKCk7XHJcbiAgICBjb25zdCBwYXNzZW5nZXJQcmljZXMgPSB0cmlwU2NoZWR1bGUucGFzc2VuZ2Vycy5tYXAocGFzc2VuZ2VyID0+IHBhc3Nlbmdlci5waXZvdC5hbW91bnQpO1xyXG4gICAgY29uc3QgbG93ZXN0UHJpY2UgPSBNYXRoLm1pbiguLi5wYXNzZW5nZXJQcmljZXMpO1xyXG4gICAgXHJcbiAgICBjb25zdCBbY291bnQgLCBzZXRDb3VudF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIFxyXG4gICAgbGV0IHBhc3NlbmdlcnMgPSB0cmlwU2NoZWR1bGUucGFzc2VuZ2Vycy5tYXAocGFzc2VuZ2VyID0+ICh7XHJcbiAgICAgICAgLi4ucGFzc2VuZ2VyLFxyXG4gICAgICAgIHRpY2tldHM6IDBcclxuICAgIH0pKVxyXG4gICAgY29uc3QgW3Bhc3NlbmdlclRpY2tldHMsIHNldFBhc3NlbmdlclRpY2tldHNdID0gUmVhY3QudXNlU3RhdGUocGFzc2VuZ2Vycyk7XHJcblxyXG4gIFxyXG4gICAgY29uc3QgYWRkVGlja2V0ID0gKHBhc3NlbmdlcikgPT4ge1xyXG5cclxuICAgICAgICBwYXNzZW5nZXIudGlja2V0cyA9IHBhc3Nlbmdlci50aWNrZXRzICsgMTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhwYXNzZW5nZXIudGlja2V0cyArIDEpXHJcbiAgICAgICAgLy8gc2V0UGFzc2VuZ2VyVGlja2V0cyhbey4uLnBhc3NlbmdlciwgdGlja2V0czogcGFzc2VuZ2VyLnRpY2tldHMgKyAxIH1dKTtcclxuICAgICAgICBzZXRQYXNzZW5nZXJUaWNrZXRzKFsgIC4uLnBhc3NlbmdlclRpY2tldHMsIC4uLnBhc3NlbmdlciAgXSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHBhc3NlbmdlclRpY2tldHMsJ2Fzb2tkYXNva2Rvc2EnKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZC5QYXNzYWdlckxpc3Q+XHJcblxyXG4gICAgICAgICAgICA8U3R5bGVkLkluZm9UcmlwPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZC5JbmZvRGV0YWlscz5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLlBlcmlvZD48aSBjbGFzc05hbWU9eydsYXMgbGEtY2FsZW5kYXInfT48L2k+IHtgJHttb21lbnQodHJpcFNjaGVkdWxlPy5zdGFydF9kYXRlKS5mb3JtYXQoJ0REL01NIEg6bScpfSAtICR7bW9tZW50KHRyaXBTY2hlZHVsZT8uZW5kX2RhdGUpLmZvcm1hdCgnREQvTU0gSDptJyl9YH08L1N0eWxlZC5QZXJpb2Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5WYWNhbmNpZXM+IHt0cmlwU2NoZWR1bGU/LnN0YXR1cy5uYW1lfTwvU3R5bGVkLlZhY2FuY2llcz5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkLkluZm9EZXRhaWxzPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZC5JbmZvRGV0YWlscyBqdXN0aWZ5PXsnZmxleC1lbmQnfT5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLkluZm9Ub3A+QSBwYXJ0aXIgZGU8L1N0eWxlZC5JbmZvVG9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuSW5mb1ByaWNlVmFsdWU+e25ldyBJbnRsLk51bWJlckZvcm1hdChcInB0LUJSXCIsIHsgc3R5bGU6IFwiY3VycmVuY3lcIiwgY3VycmVuY3k6IFwiQlJMXCIsIH0pLmZvcm1hdCh0cmlwU2NoZWR1bGUucHJpY2UgKyBsb3dlc3RQcmljZSl9PC9TdHlsZWQuSW5mb1ByaWNlVmFsdWU+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZC5JbmZvRGV0YWlscz5cclxuICAgICAgICAgICAgPC9TdHlsZWQuSW5mb1RyaXA+XHJcblxyXG4gICAgICAgICAgICA8U3R5bGVkLlRpY2tldEZvcm0+XHJcbiAgICAgICAgICAgICAgICB7cGFzc2VuZ2VyVGlja2V0cz8ubWFwKChwYXNzZW5nZXIsIGluZGV4KSA9PiA8U3R5bGVkLkNvbnRhaW5lciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLkluZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuVGl0bGU+e3Bhc3Nlbmdlci5uYW1lfTwvU3R5bGVkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLkRlc2NyaXB0aW9uPntwYXNzZW5nZXIuZGVzY3JpcHRpb259PC9TdHlsZWQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWQuSW5mbz5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLkFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZC5BY3Rpb25CdXR0b24gdHlwZT17XCJidXR0b25cIn0gb25DbGljaz17KCkgPT4gYWRkVGlja2V0KHBhc3Nlbmdlcil9Pis8L1N0eWxlZC5BY3Rpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWQuUXVhbnRpdHkgey4uLnJlZ2lzdGVyKHBhc3Nlbmdlci5uYW1lKX0+e3Bhc3Nlbmdlci50aWNrZXRzfTwvU3R5bGVkLlF1YW50aXR5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkLkFjdGlvbkJ1dHRvbiB0eXBlPXtcImJ1dHRvblwifSBvbkNsaWNrPXsoKSA9PiAgc2V0Q291bnQoY291bnQtIDEpfT4tPC9TdHlsZWQuQWN0aW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkLkFjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkLkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgPHNwYW4+VG90YWw6IDMwMCwwMDA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj17J3ByaW1hcnknfT5GZWNoYXIgUGFjb3RlPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkLlRpY2tldEZvcm0+XHJcblxyXG4gICAgICAgIDwvU3R5bGVkLlBhc3NhZ2VyTGlzdD5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIlN0eWxlZCIsIm1vbWVudCIsInVzZUZvcm0iLCJQYXNzZW5nZXJUaWNrZXQiLCJ0cmlwU2NoZWR1bGUiLCJyZWdpc3RlciIsInBhc3NlbmdlclByaWNlcyIsInBhc3NlbmdlcnMiLCJtYXAiLCJwYXNzZW5nZXIiLCJwaXZvdCIsImFtb3VudCIsImxvd2VzdFByaWNlIiwiTWF0aCIsIm1pbiIsImNvdW50Iiwic2V0Q291bnQiLCJ1c2VTdGF0ZSIsInRpY2tldHMiLCJwYXNzZW5nZXJUaWNrZXRzIiwic2V0UGFzc2VuZ2VyVGlja2V0cyIsImFkZFRpY2tldCIsImNvbnNvbGUiLCJsb2ciLCJzdGFydF9kYXRlIiwiZm9ybWF0IiwiZW5kX2RhdGUiLCJzdGF0dXMiLCJuYW1lIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJwcmljZSIsImluZGV4IiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9