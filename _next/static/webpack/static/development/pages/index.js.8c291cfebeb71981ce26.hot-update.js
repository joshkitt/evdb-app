webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Service.js":
/*!************************!*\
  !*** ./src/Service.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var getVehicleMakes = function getVehicleMakes() {
  return ["Audi", "Ford", "Hyundai", "Jaguar", "Kia", "Nissan", "Porsche", "Polestar", "Rivian", "Tesla"];
};

var getAllVehicles = function getAllVehicles() {
  return axios.get( // "http://localhost:8000/vehicles/all/models"
  "https://hofpnvfyu2.execute-api.us-east-1.amazonaws.com/vehicles/all/models").then(function (response) {
    // console.log(response.data)
    console.log('getAllVehicles');
    return response.data;
  })["catch"](function (error) {
    console.log(error);
  });
};

module.exports = {
  getVehicleMakes: getVehicleMakes,
  getAllVehicles: getAllVehicles
};

/***/ })

})
//# sourceMappingURL=index.js.8c291cfebeb71981ce26.hot-update.js.map