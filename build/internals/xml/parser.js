'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xml2js = require('xml2js');

var _jxon = require('jxon');

var _jxon2 = _interopRequireDefault(_jxon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OPTIONS = {
  lowerCaseTags: true,
  parseValues: true
};

/**
 * Parse xml string to JSON
 *
 * @public
 *
 * @param {String} xml
 * @param {Object} [options]
 * @param {Boolean} [options.lowerCaseTags] - defaults to true
 * @param {Boolean} [options.parseValues] - defaults to false
 *
 * @returns {Promise<Object>}
 */

exports.default = function (xml) {
  let options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];


  options.lowerCaseTags = options.lowerCaseTags || OPTIONS.lowerCaseTags;
  options.parseValues = options.parseValues || OPTIONS.parseValues;
  _jxon2.default.config(options);

  if (!xml || xml.toString().length === 0) throw new Error('Xml is required');

  return new Promise(resolve => {
    const result = _jxon2.default.stringToJs(xml);
    return resolve(result);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbnRlcm5hbHMveG1sL3BhcnNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsTUFBTSxVQUFVO0FBQ2QsaUJBQWUsSUFERDtBQUVkLGVBQWE7QUFGQyxDQUFoQjs7Ozs7Ozs7Ozs7Ozs7O2tCQWlCZSxVQUFDLEdBQUQsRUFBdUI7QUFBQSxNQUFqQixPQUFpQix5REFBUCxFQUFPOzs7QUFFcEMsVUFBUSxhQUFSLEdBQXdCLFFBQVEsYUFBUixJQUF5QixRQUFRLGFBQXpEO0FBQ0EsVUFBUSxXQUFSLEdBQXNCLFFBQVEsV0FBUixJQUF1QixRQUFRLFdBQXJEO0FBQ0EsaUJBQUssTUFBTCxDQUFZLE9BQVo7O0FBRUEsTUFBSSxDQUFDLEdBQUQsSUFBUSxJQUFJLFFBQUosR0FBZSxNQUFmLEtBQTBCLENBQXRDLEVBQXlDLE1BQU0sSUFBSSxLQUFKLENBQVUsaUJBQVYsQ0FBTjs7QUFFekMsU0FBTyxJQUFJLE9BQUosQ0FBYSxPQUFELElBQWE7QUFDOUIsVUFBTSxTQUFTLGVBQUssVUFBTCxDQUFnQixHQUFoQixDQUFmO0FBQ0EsV0FBTyxRQUFRLE1BQVIsQ0FBUDtBQUNELEdBSE0sQ0FBUDtBQUlELEMiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyc2VTdHJpbmcgfSBmcm9tICd4bWwyanMnO1xuaW1wb3J0IEp4b24gZnJvbSAnanhvbic7XG5cbmNvbnN0IE9QVElPTlMgPSB7XG4gIGxvd2VyQ2FzZVRhZ3M6IHRydWUsXG4gIHBhcnNlVmFsdWVzOiB0cnVlXG59O1xuXG4vKipcbiAqIFBhcnNlIHhtbCBzdHJpbmcgdG8gSlNPTlxuICpcbiAqIEBwdWJsaWNcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30geG1sXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxvd2VyQ2FzZVRhZ3NdIC0gZGVmYXVsdHMgdG8gdHJ1ZVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5wYXJzZVZhbHVlc10gLSBkZWZhdWx0cyB0byBmYWxzZVxuICpcbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59XG4gKi9cbmV4cG9ydCBkZWZhdWx0ICh4bWwsIG9wdGlvbnMgPSB7fSkgPT4ge1xuXG4gIG9wdGlvbnMubG93ZXJDYXNlVGFncyA9IG9wdGlvbnMubG93ZXJDYXNlVGFncyB8fCBPUFRJT05TLmxvd2VyQ2FzZVRhZ3M7XG4gIG9wdGlvbnMucGFyc2VWYWx1ZXMgPSBvcHRpb25zLnBhcnNlVmFsdWVzIHx8IE9QVElPTlMucGFyc2VWYWx1ZXM7XG4gIEp4b24uY29uZmlnKG9wdGlvbnMpO1xuXG4gIGlmICgheG1sIHx8IHhtbC50b1N0cmluZygpLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKCdYbWwgaXMgcmVxdWlyZWQnKTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBKeG9uLnN0cmluZ1RvSnMoeG1sKTtcbiAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpO1xuICB9KTtcbn07XG4iXX0=