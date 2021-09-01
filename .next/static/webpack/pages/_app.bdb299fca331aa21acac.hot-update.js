"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/resources/components/Nav/index.jsx":
/*!************************************************!*\
  !*** ./src/resources/components/Nav/index.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Nav; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Elements_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_Elements/Button */ "./src/resources/components/_Elements/Button/index.jsx");
/* harmony import */ var _images_logo_tripler_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/logo/tripler-logo.svg */ "./src/resources/images/logo/tripler-logo.svg");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/resources/components/Nav/styles.js");
/* harmony import */ var _Burger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Burger */ "./src/resources/components/Burger/index.jsx");
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next */ "next");
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _providers_auth_AuthProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/auth/AuthProvider */ "./src/providers/auth/AuthProvider.tsx");
/* harmony import */ var _ProfileAvatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ProfileAvatar */ "./src/resources/components/ProfileAvatar/index.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\lab\\trippler\\src\\resources\\components\\Nav\\index.jsx",
    _s = $RefreshSig$();










function Nav({
  overlay,
  props
}) {
  _s();

  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const {
    user
  } = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_providers_auth_AuthProvider__WEBPACK_IMPORTED_MODULE_7__.AuthContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {
    overlay: overlay,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Header, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Wrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Area, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Burger__WEBPACK_IMPORTED_MODULE_5__.default, {
            open: open,
            onClick: () => setOpen(!open)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 34
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Area, {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_images_logo_tripler_logo_svg__WEBPACK_IMPORTED_MODULE_3__.default, {
            width: "80px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 35
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.NavbarArea, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Nav, {
            navOpen: open,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
              href: '#',
              children: "Destinos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
              href: '#',
              children: "Bate & Volta "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
              href: '#',
              children: "F\xE9rias "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
              href: '#',
              children: "Final de Semana"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Area, {
          children: !user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Elements_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
            color: 'primary',
            children: "Entrar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 33
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
            href: '/account',
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProfileAvatar__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 106
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 103
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 78
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

_s(Nav, "a2aiKrkwNso9COIzmXjeU/wc0Js=");

_c = Nav;

var _c;

$RefreshReg$(_c, "Nav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iZGIyOTlmY2EzMzFhYTIxYWNhYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNTLEdBQVQsQ0FBYTtBQUFFQyxFQUFBQSxPQUFGO0FBQVdDLEVBQUFBO0FBQVgsQ0FBYixFQUFpQztBQUFBOztBQUU1QyxRQUFNLENBQUNDLElBQUQsRUFBT0MsT0FBUCxJQUFrQmIscURBQUEsQ0FBZSxLQUFmLENBQXhCO0FBQ0EsUUFBTTtBQUFFZSxJQUFBQTtBQUFGLE1BQVdmLHVEQUFBLENBQWlCTSxxRUFBakIsQ0FBakI7QUFDQSxzQkFDSSw4REFBQyw4Q0FBRDtBQUFrQixXQUFPLEVBQUVJLE9BQTNCO0FBQUEsMkJBQ0ksOERBQUMsMkNBQUQ7QUFBQSw2QkFDSSw4REFBQyw0Q0FBRDtBQUFBLGdDQUNJLDhEQUFDLHlDQUFEO0FBQUEsaUNBQWEsOERBQUMsNENBQUQ7QUFBUSxnQkFBSSxFQUFFRSxJQUFkO0FBQW9CLG1CQUFPLEVBQUUsTUFBTUMsT0FBTyxDQUFDLENBQUNELElBQUY7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSw4REFBQyx5Q0FBRDtBQUFBLHVDQUFjLDhEQUFDLGtFQUFEO0FBQU0saUJBQUssRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0ksOERBQUMsK0NBQUQ7QUFBQSxpQ0FDSSw4REFBQyx3Q0FBRDtBQUFZLG1CQUFPLEVBQUVBLElBQXJCO0FBQUEsb0NBQ0ksOERBQUMsNENBQUQ7QUFBZ0Isa0JBQUksRUFBRSxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJLDhEQUFDLDRDQUFEO0FBQWdCLGtCQUFJLEVBQUUsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosZUFHSSw4REFBQyw0Q0FBRDtBQUFnQixrQkFBSSxFQUFFLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhKLGVBSUksOERBQUMsNENBQUQ7QUFBZ0Isa0JBQUksRUFBRSxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBV0ksOERBQUMseUNBQUQ7QUFBQSxvQkFDSSxDQUFDRyxJQUFELGdCQUFRLDhEQUFDLG9EQUFEO0FBQVMsaUJBQUssRUFBRSxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBUixnQkFBcUQsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFFLFVBQVo7QUFBQSxtQ0FBeUI7QUFBQSxxQ0FBRyw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRHpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXNCSDs7R0ExQnVCTjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3Jlc291cmNlcy9jb21wb25lbnRzL05hdi9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vX0VsZW1lbnRzL0J1dHRvbic7XHJcbmltcG9ydCBMb2dvIGZyb20gJy4uLy4uL2ltYWdlcy9sb2dvL3RyaXBsZXItbG9nby5zdmcnO1xyXG5pbXBvcnQgKiBhcyBOYXZiYXIgZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgQnVyZ2VyIGZyb20gJy4uL0J1cmdlcic7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9wcm92aWRlcnMvYXV0aC9BdXRoUHJvdmlkZXInO1xyXG5pbXBvcnQgUHJvZmlsZUF2YXRhciBmcm9tICcuLi9Qcm9maWxlQXZhdGFyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdih7IG92ZXJsYXksIHByb3BzIH0pIHtcclxuXHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7IHVzZXIgfSA9IFJlYWN0LnVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TmF2YmFyLkNvbnRhaW5lciBvdmVybGF5PXtvdmVybGF5fT5cclxuICAgICAgICAgICAgPE5hdmJhci5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyLldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5BcmVhPjxCdXJnZXIgb3Blbj17b3Blbn0gb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9IC8+PC9OYXZiYXIuQXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkFyZWE+IDxMb2dvIHdpZHRoPVwiODBweFwiIC8+PC9OYXZiYXIuQXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLk5hdmJhckFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuTmF2IG5hdk9wZW49e29wZW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5OYXZMaW5rIGhyZWY9eycjJ30+RGVzdGlub3M8L05hdmJhci5OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5OYXZMaW5rIGhyZWY9eycjJ30+QmF0ZSAmIFZvbHRhIDwvTmF2YmFyLk5hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLk5hdkxpbmsgaHJlZj17JyMnfT5Gw6lyaWFzIDwvTmF2YmFyLk5hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLk5hdkxpbmsgaHJlZj17JyMnfT5GaW5hbCBkZSBTZW1hbmE8L05hdmJhci5OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5OYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuTmF2YmFyQXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgeyF1c2VyID8gPEJ1dHRvbiAgY29sb3I9eydwcmltYXJ5J30+RW50cmFyPC9CdXR0b24+IDogPExpbmsgaHJlZj17Jy9hY2NvdW50J30gPjxhPjxQcm9maWxlQXZhdGFyLz48L2E+PC9MaW5rPn0gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuQXJlYT5cclxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLldyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvTmF2YmFyLkhlYWRlcj5cclxuICAgICAgICA8L05hdmJhci5Db250YWluZXI+XHJcblxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiTG9nbyIsIk5hdmJhciIsIkJ1cmdlciIsIkltYWdlIiwiQXV0aENvbnRleHQiLCJQcm9maWxlQXZhdGFyIiwiTGluayIsIk5hdiIsIm92ZXJsYXkiLCJwcm9wcyIsIm9wZW4iLCJzZXRPcGVuIiwidXNlU3RhdGUiLCJ1c2VyIiwidXNlQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=