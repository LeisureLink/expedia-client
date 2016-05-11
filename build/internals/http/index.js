'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  let options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  options.responseType = options.responseType || 'document';
  return _axios2.default.create(options);
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbnRlcm5hbHMvaHR0cC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O2tCQUVlLFlBQWtCO0FBQUEsTUFBakIsT0FBaUIseURBQVAsRUFBTzs7QUFDL0IsVUFBUSxZQUFSLEdBQXVCLFFBQVEsWUFBUixJQUF3QixVQUEvQztBQUNBLFNBQU8sZ0JBQU0sTUFBTixDQUFhLE9BQWIsQ0FBUDtBQUNELEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCAob3B0aW9ucyA9IHt9KSA9PiB7XG4gIG9wdGlvbnMucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGUgfHwgJ2RvY3VtZW50JztcbiAgcmV0dXJuIEF4aW9zLmNyZWF0ZShvcHRpb25zKTtcbn1cbiJdfQ==