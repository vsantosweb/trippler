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
                columnNumber: 87
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 84
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 59
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40NTM2NDkxZTNhZjUxOTU5MTc2NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNTLEdBQVQsQ0FBYTtBQUFFQyxFQUFBQSxPQUFGO0FBQVdDLEVBQUFBO0FBQVgsQ0FBYixFQUFpQztBQUFBOztBQUU1QyxRQUFNLENBQUNDLElBQUQsRUFBT0MsT0FBUCxJQUFrQmIscURBQUEsQ0FBZSxLQUFmLENBQXhCO0FBQ0EsUUFBTTtBQUFFZSxJQUFBQTtBQUFGLE1BQVdmLHVEQUFBLENBQWlCTSxxRUFBakIsQ0FBakI7QUFDQSxzQkFDSSw4REFBQyw4Q0FBRDtBQUFrQixXQUFPLEVBQUVJLE9BQTNCO0FBQUEsMkJBQ0ksOERBQUMsMkNBQUQ7QUFBQSw2QkFDSSw4REFBQyw0Q0FBRDtBQUFBLGdDQUNJLDhEQUFDLHlDQUFEO0FBQUEsaUNBQWEsOERBQUMsNENBQUQ7QUFBUSxnQkFBSSxFQUFFRSxJQUFkO0FBQW9CLG1CQUFPLEVBQUUsTUFBTUMsT0FBTyxDQUFDLENBQUNELElBQUY7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSw4REFBQyx5Q0FBRDtBQUFBLHVDQUFjLDhEQUFDLGtFQUFEO0FBQU0saUJBQUssRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0ksOERBQUMsK0NBQUQ7QUFBQSxpQ0FDSSw4REFBQyx3Q0FBRDtBQUFZLG1CQUFPLEVBQUVBLElBQXJCO0FBQUEsb0NBQ0ksOERBQUMsNENBQUQ7QUFBZ0Isa0JBQUksRUFBRSxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJLDhEQUFDLDRDQUFEO0FBQWdCLGtCQUFJLEVBQUUsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosZUFHSSw4REFBQyw0Q0FBRDtBQUFnQixrQkFBSSxFQUFFLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhKLGVBSUksOERBQUMsNENBQUQ7QUFBZ0Isa0JBQUksRUFBRSxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBV0ksOERBQUMseUNBQUQ7QUFBQSxvQkFDSSxDQUFDRyxJQUFELGdCQUFRLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFSLGdCQUFrQyw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUUsVUFBWjtBQUFBLG1DQUF5QjtBQUFBLHFDQUFHLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBc0JIOztHQTFCdUJOOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVzb3VyY2VzL2NvbXBvbmVudHMvTmF2L2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9fRWxlbWVudHMvQnV0dG9uJztcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vaW1hZ2VzL2xvZ28vdHJpcGxlci1sb2dvLnN2Zyc7XHJcbmltcG9ydCAqIGFzIE5hdmJhciBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCBCdXJnZXIgZnJvbSAnLi4vQnVyZ2VyJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3Byb3ZpZGVycy9hdXRoL0F1dGhQcm92aWRlcic7XHJcbmltcG9ydCBQcm9maWxlQXZhdGFyIGZyb20gJy4uL1Byb2ZpbGVBdmF0YXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KHsgb3ZlcmxheSwgcHJvcHMgfSkge1xyXG5cclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHsgdXNlciB9ID0gUmVhY3QudXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxOYXZiYXIuQ29udGFpbmVyIG92ZXJsYXk9e292ZXJsYXl9PlxyXG4gICAgICAgICAgICA8TmF2YmFyLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIuV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkFyZWE+PEJ1cmdlciBvcGVuPXtvcGVufSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0gLz48L05hdmJhci5BcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQXJlYT4gPExvZ28gd2lkdGg9XCI4MHB4XCIgLz48L05hdmJhci5BcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuTmF2YmFyQXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5OYXYgbmF2T3Blbj17b3Blbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLk5hdkxpbmsgaHJlZj17JyMnfT5EZXN0aW5vczwvTmF2YmFyLk5hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLk5hdkxpbmsgaHJlZj17JyMnfT5CYXRlICYgVm9sdGEgPC9OYXZiYXIuTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuTmF2TGluayBocmVmPXsnIyd9PkbDqXJpYXMgPC9OYXZiYXIuTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuTmF2TGluayBocmVmPXsnIyd9PkZpbmFsIGRlIFNlbWFuYTwvTmF2YmFyLk5hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLk5hdj5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5OYXZiYXJBcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICB7IXVzZXIgPyA8QnV0dG9uPkVudHJhcjwvQnV0dG9uPiA6IDxMaW5rIGhyZWY9eycvYWNjb3VudCd9ID48YT48UHJvZmlsZUF2YXRhci8+PC9hPjwvTGluaz59IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L05hdmJhci5XcmFwcGVyPlxyXG4gICAgICAgICAgICA8L05hdmJhci5IZWFkZXI+XHJcbiAgICAgICAgPC9OYXZiYXIuQ29udGFpbmVyPlxyXG5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIkxvZ28iLCJOYXZiYXIiLCJCdXJnZXIiLCJJbWFnZSIsIkF1dGhDb250ZXh0IiwiUHJvZmlsZUF2YXRhciIsIkxpbmsiLCJOYXYiLCJvdmVybGF5IiwicHJvcHMiLCJvcGVuIiwic2V0T3BlbiIsInVzZVN0YXRlIiwidXNlciIsInVzZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9