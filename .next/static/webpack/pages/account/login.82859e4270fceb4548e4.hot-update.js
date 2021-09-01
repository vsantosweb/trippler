"use strict";
self["webpackHotUpdate_N_E"]("pages/account/login",{

/***/ "./src/pages/account/login/index.jsx":
/*!*******************************************!*\
  !*** ./src/pages/account/login/index.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_lab_trippler_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _providers_auth_AuthProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/auth/AuthProvider */ "./src/providers/auth/AuthProvider.tsx");
/* harmony import */ var _resources_components_Elements_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../resources/components/_Elements/Button */ "./src/resources/components/_Elements/Button/index.jsx");
/* harmony import */ var _resources_components_Elements_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../resources/components/_Elements/Input */ "./src/resources/components/_Elements/Input/index.jsx");
/* harmony import */ var _resources_layouts_AuthLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../resources/layouts/AuthLayout */ "./src/resources/layouts/AuthLayout/index.jsx");
/* harmony import */ var _utils_withAuth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/withAuth */ "./src/utils/withAuth.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\lab\\trippler\\src\\pages\\account\\login\\index.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_lab_trippler_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function Login() {
  _s();

  const {
    handleSubmit,
    register,
    formState: {
      isValid
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    mode: onchange
  });
  const {
    signIn,
    _watch
  } = react__WEBPACK_IMPORTED_MODULE_2___default().useContext(_providers_auth_AuthProvider__WEBPACK_IMPORTED_MODULE_4__.AuthContext);
  const [errorMessage, setErrorMessage] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null);

  const submitCredentials = async credentials => {
    await signIn(credentials).then(response => {
      if (response.error) {
        setErrorMessage(response.message);
      }
    });

    _watch();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_resources_layouts_AuthLayout__WEBPACK_IMPORTED_MODULE_7__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
      onSubmit: handleSubmit(submitCredentials),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_resources_components_Elements_Input__WEBPACK_IMPORTED_MODULE_6__.default, _objectSpread({
        label: 'Email',
        placeholder: 'Email, nome ou telefone celular'
      }, register('email', {
        required: true
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_resources_components_Elements_Input__WEBPACK_IMPORTED_MODULE_6__.default, _objectSpread({
        label: 'Senha',
        placeholder: 'Insira sua senha',
        type: 'password'
      }, register('password', {
        required: true
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: " Lembrar de mim"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: "Esqueci minha senha"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("small", {
          children: ["Ao registrar uma conta na tripler.com.br, confirmo que li e concordei com", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            href: "https://pages.trip.com/service-guideline/terms-pt-br.html",
            target: "_blank",
            children: " Termos e condi\xE7\xF5es"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this), " e", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            href: "https://pages.trip.com/service-guideline/privacy-policy-pt-br.html",
            target: "_blank",
            children: " Declara\xE7\xE3o de Privacidade"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, this), "da tripler.com.br"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_resources_components_Elements_Button__WEBPACK_IMPORTED_MODULE_5__.default, {
        style: {
          width: '100%'
        },
        color: "primary",
        icon: true,
        children: ["Entrar ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
          className: 'las la-arrow-right'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 81
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        style: {
          color: 'red'
        },
        children: errorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        children: "N\xE3o tem uma conta na Tripler?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_resources_components_Elements_Button__WEBPACK_IMPORTED_MODULE_5__.default, {
        style: {
          width: '100%'
        },
        color: "secondary",
        icon: true,
        children: ["Registre-se ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
          className: 'las la-arrow-right'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 88
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

_s(Login, "dw2SzlHh3xXbY2DAOuWi9VTb3II=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = (0,_utils_withAuth__WEBPACK_IMPORTED_MODULE_8__.default)(Login));

var _c, _c2;

$RefreshReg$(_c, "Login");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWNjb3VudC9sb2dpbi44Mjg1OWU0MjcwZmNlYjQ1NDhlNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU08sS0FBVCxHQUFpQjtBQUFBOztBQUViLFFBQU07QUFBRUMsSUFBQUEsWUFBRjtBQUFnQkMsSUFBQUEsUUFBaEI7QUFBMEJDLElBQUFBLFNBQVMsRUFBRTtBQUFFQyxNQUFBQTtBQUFGO0FBQXJDLE1BQXFEVix3REFBTyxDQUFDO0FBQUVXLElBQUFBLElBQUksRUFBRUM7QUFBUixHQUFELENBQWxFO0FBQ0EsUUFBTTtBQUFFQyxJQUFBQSxNQUFGO0FBQVVDLElBQUFBO0FBQVYsTUFBcUJmLHVEQUFBLENBQWlCRSxxRUFBakIsQ0FBM0I7QUFDQSxRQUFNLENBQUNlLFlBQUQsRUFBZUMsZUFBZixJQUFrQ2xCLHFEQUFBLENBQWUsSUFBZixDQUF4Qzs7QUFFQSxRQUFNb0IsaUJBQWlCLEdBQUcsTUFBT0MsV0FBUCxJQUF1QjtBQUU3QyxVQUFNUCxNQUFNLENBQUNPLFdBQUQsQ0FBTixDQUFvQkMsSUFBcEIsQ0FBeUJDLFFBQVEsSUFBSTtBQUN2QyxVQUFJQSxRQUFRLENBQUNDLEtBQWIsRUFBb0I7QUFDaEJOLFFBQUFBLGVBQWUsQ0FBQ0ssUUFBUSxDQUFDRSxPQUFWLENBQWY7QUFDSDtBQUNKLEtBSkssQ0FBTjs7QUFLQVYsSUFBQUEsTUFBTTtBQUVULEdBVEQ7O0FBVUEsc0JBQ0ksOERBQUMsa0VBQUQ7QUFBQSwyQkFDSTtBQUFNLGNBQVEsRUFBRVAsWUFBWSxDQUFDWSxpQkFBRCxDQUE1QjtBQUFBLDhCQUNJLDhEQUFDLHlFQUFEO0FBQU8sYUFBSyxFQUFFLE9BQWQ7QUFBdUIsbUJBQVcsRUFBRTtBQUFwQyxTQUNRWCxRQUFRLENBQUMsT0FBRCxFQUFVO0FBQUVpQixRQUFBQSxRQUFRLEVBQUU7QUFBWixPQUFWLENBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJLDhEQUFDLHlFQUFEO0FBQU8sYUFBSyxFQUFFLE9BQWQ7QUFBdUIsbUJBQVcsRUFBRSxrQkFBcEM7QUFBd0QsWUFBSSxFQUFFO0FBQTlELFNBQStFakIsUUFBUSxDQUFDLFVBQUQsRUFBYTtBQUFFaUIsUUFBQUEsUUFBUSxFQUFFO0FBQVosT0FBYixDQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFLSTtBQUFLLGFBQUssRUFBRTtBQUFFQyxVQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQkMsVUFBQUEsY0FBYyxFQUFFO0FBQW5DLFNBQVo7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLGVBU0k7QUFBQSwrQkFDSTtBQUFBLCtHQUVJO0FBQUcsZ0JBQUksRUFBQywyREFBUjtBQUFvRSxrQkFBTSxFQUFDLFFBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLHFCQUdJO0FBQUcsZ0JBQUksRUFBQyxvRUFBUjtBQUE2RSxrQkFBTSxFQUFDLFFBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUSixlQWlCSSw4REFBQywwRUFBRDtBQUFRLGFBQUssRUFBRTtBQUFFQyxVQUFBQSxLQUFLLEVBQUU7QUFBVCxTQUFmO0FBQWtDLGFBQUssRUFBRSxTQUF6QztBQUFvRCxZQUFJLE1BQXhEO0FBQUEsMkNBQWdFO0FBQUcsbUJBQVMsRUFBRTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCSixlQWtCSTtBQUFHLGFBQUssRUFBRTtBQUFFQyxVQUFBQSxLQUFLLEVBQUU7QUFBVCxTQUFWO0FBQUEsa0JBQTZCYjtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEJKLGVBb0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJKLGVBcUJJLDhEQUFDLDBFQUFEO0FBQVEsYUFBSyxFQUFFO0FBQUVZLFVBQUFBLEtBQUssRUFBRTtBQUFULFNBQWY7QUFBa0MsYUFBSyxFQUFFLFdBQXpDO0FBQXNELFlBQUksTUFBMUQ7QUFBQSxnREFBdUU7QUFBRyxtQkFBUyxFQUFFO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTRCSDs7R0E1Q1F0QjtVQUVzRE47OztLQUZ0RE07QUE4Q1QsK0RBQWUsTUFBQUQsd0RBQVEsQ0FBQ0MsS0FBRCxDQUF2QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYWNjb3VudC9sb2dpbi9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3Byb3ZpZGVycy9hdXRoL0F1dGhQcm92aWRlcidcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi8uLi9yZXNvdXJjZXMvY29tcG9uZW50cy9fRWxlbWVudHMvQnV0dG9uJ1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vLi4vLi4vcmVzb3VyY2VzL2NvbXBvbmVudHMvX0VsZW1lbnRzL0lucHV0J1xyXG5pbXBvcnQgQXV0aExheW91dCBmcm9tICcuLi8uLi8uLi9yZXNvdXJjZXMvbGF5b3V0cy9BdXRoTGF5b3V0J1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vLi4vdXRpbHMvd2l0aEF1dGgnO1xyXG5cclxuZnVuY3Rpb24gTG9naW4oKSB7XHJcblxyXG4gICAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHJlZ2lzdGVyLCBmb3JtU3RhdGU6IHsgaXNWYWxpZCB9IH0gPSB1c2VGb3JtKHsgbW9kZTogb25jaGFuZ2UgfSk7XHJcbiAgICBjb25zdCB7IHNpZ25JbiwgX3dhdGNoIH0gPSBSZWFjdC51c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICAgIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRDcmVkZW50aWFscyA9IGFzeW5jIChjcmVkZW50aWFscykgPT4ge1xyXG5cclxuICAgICAgICBhd2FpdCBzaWduSW4oY3JlZGVudGlhbHMpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShyZXNwb25zZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBfd2F0Y2goKVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEF1dGhMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0Q3JlZGVudGlhbHMpfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBsYWJlbD17J0VtYWlsJ30gcGxhY2Vob2xkZXI9eydFbWFpbCwgbm9tZSBvdSB0ZWxlZm9uZSBjZWx1bGFyJ31cclxuICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2VtYWlsJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9eydTZW5oYSd9IHBsYWNlaG9sZGVyPXsnSW5zaXJhIHN1YSBzZW5oYSd9IHR5cGU9eydwYXNzd29yZCd9ICB7Li4ucmVnaXN0ZXIoJ3Bhc3N3b3JkJywgeyByZXF1aXJlZDogdHJ1ZSB9KX0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IExlbWJyYXIgZGUgbWltPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5Fc3F1ZWNpIG1pbmhhIHNlbmhhPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQW8gcmVnaXN0cmFyIHVtYSBjb250YSBuYSB0cmlwbGVyLmNvbS5iciwgY29uZmlybW8gcXVlIGxpIGUgY29uY29yZGVpIGNvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9wYWdlcy50cmlwLmNvbS9zZXJ2aWNlLWd1aWRlbGluZS90ZXJtcy1wdC1ici5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+IFRlcm1vcyBlIGNvbmRpw6fDtWVzPC9hPiBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3BhZ2VzLnRyaXAuY29tL3NlcnZpY2UtZ3VpZGVsaW5lL3ByaXZhY3ktcG9saWN5LXB0LWJyLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj4gRGVjbGFyYcOnw6NvIGRlIFByaXZhY2lkYWRlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYSB0cmlwbGVyLmNvbS5iclxyXG4gICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gY29sb3I9e1wicHJpbWFyeVwifSBpY29uPkVudHJhciA8aSBjbGFzc05hbWU9eydsYXMgbGEtYXJyb3ctcmlnaHQnfT48L2k+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e2Vycm9yTWVzc2FnZX08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPHA+TsOjbyB0ZW0gdW1hIGNvbnRhIG5hIFRyaXBsZXI/PC9wPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IGNvbG9yPXtcInNlY29uZGFyeVwifSBpY29uPlJlZ2lzdHJlLXNlIDxpIGNsYXNzTmFtZT17J2xhcyBsYS1hcnJvdy1yaWdodCd9PjwvaT48L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0F1dGhMYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKExvZ2luKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUZvcm0iLCJBdXRoQ29udGV4dCIsIkJ1dHRvbiIsIklucHV0IiwiQXV0aExheW91dCIsIndpdGhBdXRoIiwiTG9naW4iLCJoYW5kbGVTdWJtaXQiLCJyZWdpc3RlciIsImZvcm1TdGF0ZSIsImlzVmFsaWQiLCJtb2RlIiwib25jaGFuZ2UiLCJzaWduSW4iLCJfd2F0Y2giLCJ1c2VDb250ZXh0IiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwidXNlU3RhdGUiLCJzdWJtaXRDcmVkZW50aWFscyIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwiZXJyb3IiLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==