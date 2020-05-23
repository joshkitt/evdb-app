webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _src_Ad__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/Ad */ "./src/Ad.js");
/* harmony import */ var _src_Hint__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/Hint */ "./src/Hint.js");
/* harmony import */ var _src_Service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/Service */ "./src/Service.js");
/* harmony import */ var _src_Service__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_src_Service__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "/Users/josh/sandbox/joshkitt/evdb/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    root: {
      display: "flex",
      flexDirection: "column"
    },
    main: {
      marginTop: theme.spacing(2)
    },
    table: {
      marginTop: theme.spacing(1)
    },
    formField: {
      width: "200px"
    },
    spinner: {
      display: "flex",
      position: "absolute",
      zIndex: 1,
      "& > * + *": {
        marginLeft: theme.spacing(2)
      }
    }
  };
}); // load initial data for static rendering

function App(_ref) {
  var _this = this;

  var initialData = _ref.initialData;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_src_Service__WEBPACK_IMPORTED_MODULE_12___default.a.getVehicleMakes()),
      makes = _useState[0],
      setMakes = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      models = _useState2[0],
      setModels = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      make = _useState3[0],
      setMake = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      model = _useState4[0],
      setModel = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      year = _useState5[0],
      setYear = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialData),
      data = _useState6[0],
      setData = _useState6[1]; // set initial data into state


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      loading = _useState7[0],
      setLoading = _useState7[1];

  var handleMakeChange = function handleMakeChange(event) {
    setMake(event.target.value);
    loadData(event.target.value, null, true);

    if (!event.target.value) {
      // no make selected, clear models
      setModels([]);
    }
  };

  var handleModelChange = function handleModelChange(event) {
    setModel(event.target.value);
    loadData(make, event.target.value, false);
  };

  var loadModels = function loadModels(data) {
    var modelMap = new Map();
    data.forEach(function (element) {
      if (element.Model) {
        // parse model identifier
        var _model = element.Sort.split("-")[0];
        modelMap.set(element.Model, _model);
      }
    }); // create array for data

    var models = [];
    modelMap.forEach(function (value, key) {
      models.push({
        key: value,
        value: key
      });
    });
    setModels(models);
  };

  var loadData = function loadData(make, model, shouldLoadModels) {
    setData([]);

    if (make) {
      setLoading(true);
      var uri = make;

      if (model) {
        uri += "/" + model;
      }

      fetch("http://localhost:8000/vehicles/" + uri) // fetch("https://hofpnvfyu2.execute-api.us-east-1.amazonaws.com/vehicles/" + uri)
      .then(function (res) {
        return res.json();
      }).then(function (data) {
        setData(data);

        if (shouldLoadModels) {
          loadModels(data);
        }

        setLoading(false);
      })["catch"](console.log);
    }
  };

  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    component: "main",
    className: classes.main,
    maxWidth: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h5",
    component: "h1",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, "Electric Vehicle Search")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    htmlFor: "make",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, "Make"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "native": true,
    value: make,
    onChange: handleMakeChange,
    label: "Make",
    inputProps: {
      id: "make"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, __jsx("option", {
    "aria-label": "None",
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }), makes.sort().map(function (x, index) {
    return __jsx("option", {
      key: x,
      value: x,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 21
      }
    }, x);
  }))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "outlined",
    className: classes.formField,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    htmlFor: "model",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, "Model"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "native": true,
    value: model,
    onChange: handleModelChange,
    disabled: models.length === 0,
    label: "Model",
    inputProps: {
      id: "model"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }, __jsx("option", {
    "aria-label": "None",
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }), models.sort().map(function (x) {
    return __jsx("option", {
      key: x.key,
      value: x.key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 21
      }
    }, x.value);
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "subtitle1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }, "Research electric vehicles with the most up-to-date specifications from Tesla, Audi, Rivian, Ford, Volkswagen, Polestar, Volvo, BMW, and other battery electric vehicle (BEV) automakers."))), __jsx("div", {
    className: classes.spinner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, loading && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 54
    }
  })), __jsx("div", {
    className: classes.table,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }, __jsx(material_table__WEBPACK_IMPORTED_MODULE_8___default.a, {
    columns: [{
      title: "Make",
      field: "Make",
      headerStyle: {
        whiteSpace: "nowrap"
      },
      defaultSort: "asc"
    }, {
      title: "Model",
      field: "Model",
      headerStyle: {
        whiteSpace: "nowrap"
      }
    }, {
      title: "Year",
      field: "Year",
      type: "numeric",
      width: 50,
      headerStyle: {
        whiteSpace: "nowrap"
      }
    }, {
      title: "Trim",
      field: "Variant",
      headerStyle: {
        whiteSpace: "nowrap"
      }
    }, {
      title: "Range (mi)",
      field: "Range",
      type: "numeric",
      width: "1%",
      headerStyle: {
        whiteSpace: "nowrap"
      }
    }, {
      title: "Accel (0-60)",
      field: "Accel",
      type: "numeric",
      width: "1%",
      headerStyle: {
        whiteSpace: "nowrap"
      }
    }, {
      title: "Power (hp)",
      field: "PowerHP",
      type: "numeric",
      width: "1%",
      headerStyle: {
        whiteSpace: "nowrap"
      }
    }, {
      title: "Torque",
      field: "Torque",
      type: "numeric",
      headerStyle: {
        whiteSpace: "nowrap"
      },
      width: "1%"
    }],
    data: data,
    options: {
      draggable: false,
      sorting: true,
      search: true,
      padding: "dense",
      showTitle: false,
      toolbar: true,
      paging: false,
      headerStyle: {
        backgroundColor: "#1976d2",
        color: "#FFF"
      },
      searchFieldAlignment: "left",
      rowStyle: function rowStyle(rowData, index) {
        if (index % 2) {
          return {
            backgroundColor: "#f2f2f2"
          };
        }
      }
    },
    localization: {
      body: {
        emptyDataSourceMessage: 'Select a "Make" and "Model" to research electric vehicle data'
      },
      toolbar: {
        searchPlaceholder: "Find within results"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  })), __jsx(_src_Hint__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 9
    }
  })));
}

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.379aae4b8b7609888b10.hot-update.js.map