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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_resources_components_Elements_Button__WEBPACK_IMPORTED_MODULE_5__.default, {
        style: {
          width: '100%'
        },
        variant: 'outlined',
        color: "secondary",
        icon: true,
        children: ["Registre-se ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
          className: 'las la-arrow-right'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 109
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        style: {
          color: 'red'
        },
        children: errorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWNjb3VudC9sb2dpbi4wYmIzNjFhMjcwYTA3OGUxY2YwOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU08sS0FBVCxHQUFpQjtBQUFBOztBQUViLFFBQU07QUFBRUMsSUFBQUEsWUFBRjtBQUFnQkMsSUFBQUEsUUFBaEI7QUFBMEJDLElBQUFBLFNBQVMsRUFBRTtBQUFFQyxNQUFBQTtBQUFGO0FBQXJDLE1BQXFEVix3REFBTyxDQUFDO0FBQUVXLElBQUFBLElBQUksRUFBRUM7QUFBUixHQUFELENBQWxFO0FBQ0EsUUFBTTtBQUFFQyxJQUFBQSxNQUFGO0FBQVVDLElBQUFBO0FBQVYsTUFBcUJmLHVEQUFBLENBQWlCRSxxRUFBakIsQ0FBM0I7QUFDQSxRQUFNLENBQUNlLFlBQUQsRUFBZUMsZUFBZixJQUFrQ2xCLHFEQUFBLENBQWUsSUFBZixDQUF4Qzs7QUFFQSxRQUFNb0IsaUJBQWlCLEdBQUcsTUFBT0MsV0FBUCxJQUF1QjtBQUU3QyxVQUFNUCxNQUFNLENBQUNPLFdBQUQsQ0FBTixDQUFvQkMsSUFBcEIsQ0FBeUJDLFFBQVEsSUFBSTtBQUN2QyxVQUFHQSxRQUFRLENBQUNDLEtBQVosRUFBa0I7QUFDZE4sUUFBQUEsZUFBZSxDQUFDSyxRQUFRLENBQUNFLE9BQVYsQ0FBZjtBQUNIO0FBQ0osS0FKSyxDQUFOOztBQUtBVixJQUFBQSxNQUFNO0FBRVQsR0FURDs7QUFVQSxzQkFDSSw4REFBQyxrRUFBRDtBQUFBLDJCQUNJO0FBQU0sY0FBUSxFQUFFUCxZQUFZLENBQUNZLGlCQUFELENBQTVCO0FBQUEsOEJBQ0ksOERBQUMseUVBQUQ7QUFBTyxhQUFLLEVBQUUsT0FBZDtBQUF1QixtQkFBVyxFQUFFO0FBQXBDLFNBQ1FYLFFBQVEsQ0FBQyxPQUFELEVBQVU7QUFBRWlCLFFBQUFBLFFBQVEsRUFBRTtBQUFaLE9BQVYsQ0FEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUksOERBQUMseUVBQUQ7QUFBTyxhQUFLLEVBQUUsT0FBZDtBQUF1QixtQkFBVyxFQUFFLGtCQUFwQztBQUF3RCxZQUFJLEVBQUU7QUFBOUQsU0FBK0VqQixRQUFRLENBQUMsVUFBRCxFQUFhO0FBQUVpQixRQUFBQSxRQUFRLEVBQUU7QUFBWixPQUFiLENBQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQUtJO0FBQUssYUFBSyxFQUFFO0FBQUVDLFVBQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CQyxVQUFBQSxjQUFjLEVBQUU7QUFBbkMsU0FBWjtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosZUFTSTtBQUFBLCtCQUNJO0FBQUEsK0dBRUk7QUFBRyxnQkFBSSxFQUFDLDJEQUFSO0FBQW9FLGtCQUFNLEVBQUMsUUFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkoscUJBR0k7QUFBRyxnQkFBSSxFQUFDLG9FQUFSO0FBQTZFLGtCQUFNLEVBQUMsUUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRKLGVBaUJJLDhEQUFDLDBFQUFEO0FBQVEsYUFBSyxFQUFFO0FBQUVDLFVBQUFBLEtBQUssRUFBRTtBQUFULFNBQWY7QUFBa0MsYUFBSyxFQUFFLFNBQXpDO0FBQW9ELFlBQUksTUFBeEQ7QUFBQSwyQ0FBZ0U7QUFBRyxtQkFBUyxFQUFFO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJKLGVBa0JJLDhEQUFDLDBFQUFEO0FBQVEsYUFBSyxFQUFFO0FBQUVBLFVBQUFBLEtBQUssRUFBRTtBQUFULFNBQWY7QUFBa0MsZUFBTyxFQUFFLFVBQTNDO0FBQXVELGFBQUssRUFBRSxXQUE5RDtBQUEyRSxZQUFJLE1BQS9FO0FBQUEsZ0RBQTRGO0FBQUcsbUJBQVMsRUFBRTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQTVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCSixlQW9CSTtBQUFHLGFBQUssRUFBRTtBQUFDQyxVQUFBQSxLQUFLLEVBQUU7QUFBUixTQUFWO0FBQUEsa0JBQTJCYjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTBCSDs7R0ExQ1FWO1VBRXNETjs7O0tBRnRETTtBQTRDVCwrREFBZSxNQUFBRCx3REFBUSxDQUFDQyxLQUFELENBQXZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hY2NvdW50L2xvZ2luL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcHJvdmlkZXJzL2F1dGgvQXV0aFByb3ZpZGVyJ1xyXG5pbXBvcnQgQnV0dG9uICBmcm9tICcuLi8uLi8uLi9yZXNvdXJjZXMvY29tcG9uZW50cy9fRWxlbWVudHMvQnV0dG9uJ1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vLi4vLi4vcmVzb3VyY2VzL2NvbXBvbmVudHMvX0VsZW1lbnRzL0lucHV0J1xyXG5pbXBvcnQgQXV0aExheW91dCBmcm9tICcuLi8uLi8uLi9yZXNvdXJjZXMvbGF5b3V0cy9BdXRoTGF5b3V0J1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vLi4vdXRpbHMvd2l0aEF1dGgnO1xyXG5cclxuZnVuY3Rpb24gTG9naW4oKSB7XHJcblxyXG4gICAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHJlZ2lzdGVyLCBmb3JtU3RhdGU6IHsgaXNWYWxpZCB9IH0gPSB1c2VGb3JtKHsgbW9kZTogb25jaGFuZ2UgfSk7XHJcbiAgICBjb25zdCB7IHNpZ25JbiwgX3dhdGNoIH0gPSBSZWFjdC51c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICAgIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRDcmVkZW50aWFscyA9IGFzeW5jIChjcmVkZW50aWFscykgPT4ge1xyXG5cclxuICAgICAgICBhd2FpdCBzaWduSW4oY3JlZGVudGlhbHMpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5lcnJvcil7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UocmVzcG9uc2UubWVzc2FnZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgX3dhdGNoKClcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBdXRoTGF5b3V0PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdENyZWRlbnRpYWxzKX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9eydFbWFpbCd9IHBsYWNlaG9sZGVyPXsnRW1haWwsIG5vbWUgb3UgdGVsZWZvbmUgY2VsdWxhcid9XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdlbWFpbCcsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGxhYmVsPXsnU2VuaGEnfSBwbGFjZWhvbGRlcj17J0luc2lyYSBzdWEgc2VuaGEnfSB0eXBlPXsncGFzc3dvcmQnfSAgey4uLnJlZ2lzdGVyKCdwYXNzd29yZCcsIHsgcmVxdWlyZWQ6IHRydWUgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiBMZW1icmFyIGRlIG1pbTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+RXNxdWVjaSBtaW5oYSBzZW5oYTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFvIHJlZ2lzdHJhciB1bWEgY29udGEgbmEgdHJpcGxlci5jb20uYnIsIGNvbmZpcm1vIHF1ZSBsaSBlIGNvbmNvcmRlaSBjb21cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcGFnZXMudHJpcC5jb20vc2VydmljZS1ndWlkZWxpbmUvdGVybXMtcHQtYnIuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPiBUZXJtb3MgZSBjb25kacOnw7VlczwvYT4gZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9wYWdlcy50cmlwLmNvbS9zZXJ2aWNlLWd1aWRlbGluZS9wcml2YWN5LXBvbGljeS1wdC1ici5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+IERlY2xhcmHDp8OjbyBkZSBQcml2YWNpZGFkZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGEgdHJpcGxlci5jb20uYnJcclxuICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IGNvbG9yPXtcInByaW1hcnlcIn0gaWNvbj5FbnRyYXIgPGkgY2xhc3NOYW1lPXsnbGFzIGxhLWFycm93LXJpZ2h0J30+PC9pPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IHZhcmlhbnQ9eydvdXRsaW5lZCd9IGNvbG9yPXtcInNlY29uZGFyeVwifSBpY29uPlJlZ2lzdHJlLXNlIDxpIGNsYXNzTmFtZT17J2xhcyBsYS1hcnJvdy1yaWdodCd9PjwvaT48L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAncmVkJ319PntlcnJvck1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9BdXRoTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChMb2dpbikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VGb3JtIiwiQXV0aENvbnRleHQiLCJCdXR0b24iLCJJbnB1dCIsIkF1dGhMYXlvdXQiLCJ3aXRoQXV0aCIsIkxvZ2luIiwiaGFuZGxlU3VibWl0IiwicmVnaXN0ZXIiLCJmb3JtU3RhdGUiLCJpc1ZhbGlkIiwibW9kZSIsIm9uY2hhbmdlIiwic2lnbkluIiwiX3dhdGNoIiwidXNlQ29udGV4dCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInVzZVN0YXRlIiwic3VibWl0Q3JlZGVudGlhbHMiLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsImVycm9yIiwibWVzc2FnZSIsInJlcXVpcmVkIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=