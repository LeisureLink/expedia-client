'use strict';

import Jxon from 'jxon';

const OPTIONS = {
  lowerCaseTags: true,
  parseValues: true,
  trueIsEmpty: true
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
 * @param {Boolean} [options.trueIsEmpty] - defaults to true
 *
 * @returns {Promise<Object>}
 */
export default (xml, options = {}) => {

  options.lowerCaseTags = options.lowerCaseTags || OPTIONS.lowerCaseTags;
  options.parseValues = options.parseValues || OPTIONS.parseValues;
  options.trueIsEmpty = options.trueIsEmpty || OPTIONS.trueIsEmpty;
  Jxon.config(options);

  if (!xml || xml.toString().length === 0) throw new Error('Xml is required');

  return Jxon.stringToJs(xml);
};
