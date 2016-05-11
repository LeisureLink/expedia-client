'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jxon = require('jxon');

var _jxon2 = _interopRequireDefault(_jxon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = value => {
  return new Promise(resolve => {
    const xml = _jxon2.default.jsToString(value);
    return resolve(`<?xml version="1.0" encoding="UTF-8"?>${ xml }`);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbnRlcm5hbHMveG1sL2J1aWxkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztrQkFFZ0IsS0FBRCxJQUFXO0FBQ3hCLFNBQU8sSUFBSSxPQUFKLENBQWEsT0FBRCxJQUFhO0FBQzlCLFVBQU0sTUFBTSxlQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsQ0FBWjtBQUNBLFdBQU8sUUFBUSxDQUFDLHNDQUFELEdBQXlDLEdBQXpDLEVBQTZDLEFBQTdDLENBQVIsQ0FBUDtBQUNELEdBSE0sQ0FBUDtBQUlELEMiLCJmaWxlIjoiYnVpbGRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKeG9uIGZyb20gJ2p4b24nO1xuXG5leHBvcnQgZGVmYXVsdCAodmFsdWUpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgeG1sID0gSnhvbi5qc1RvU3RyaW5nKHZhbHVlKTtcbiAgICByZXR1cm4gcmVzb2x2ZShgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+JHt4bWx9YCk7XG4gIH0pO1xufVxuIl19