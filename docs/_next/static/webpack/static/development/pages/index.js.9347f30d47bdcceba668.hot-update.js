webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/utils/redux/dynamicReducerWrap.tsx":
/*!************************************************!*\
  !*** ./src/utils/redux/dynamicReducerWrap.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/david.chen/Documents/projects/next9/src/utils/redux/dynamicReducerWrap.tsx";




// class SubstitueReducers extends Component<
//   DynamicReducerWrapProps & StoreProps<ReducerEnhancedStore>
// > {
//   public constructor(props: DynamicReducerWrapProps & StoreProps<ReducerEnhancedStore>) {
//     super(props);
//     const { store, reducers } = props;
//     store.substitueReducers(reducers);
//     console.log('injecting reducer: ', reducers);
//   }
//   public componentWillUnmount() {
//     const { store, reducers } = this.props;
//     console.log('remove reducers: ', reducers);
//     store.removeUnusedReducers();
//   }
//   public render() {
//     const { Child } = this.props;
//     // const { showChild } = this.state;
//     return <Child />;
//   }
// }
var SubstitueReducers = function SubstitueReducers(_ref) {
  var store = _ref.store,
      reducers = _ref.reducers,
      Child = _ref.Child;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    store.substitueReducers(reducers); // return () => store.removeUnusedReducers();
  }, []);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Child, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  });
};

function dynamicReducerWrap(_ref2) {
  var reducers = _ref2.reducers,
      Child = _ref2.Child;
  return function () {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_redux__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"].Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, function (_ref3) {
      var store = _ref3.store;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(SubstitueReducers, {
        store: store,
        reducers: reducers,
        Child: Child,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }));
    });
  };
}

/* harmony default export */ __webpack_exports__["default"] = (dynamicReducerWrap);

/***/ })

})
//# sourceMappingURL=index.js.9347f30d47bdcceba668.hot-update.js.map