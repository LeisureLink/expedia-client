'use strict';

import { validator, Schemas } from './internals/validation';
import Bookings from './booking';

/**
 * Validates the credentials
 * @private
 * @throws ValidationError
 * @param {String} username
 * @param {String} password
 */
const validateCredentials = (username, password) => {
  const result = validator({ username, password }, Schemas.Authentication);
  if (result.error) throw result.error;
};

/**
 * Expedia QuickConnect Client
 *
 * @public
 *
 * @param {String} username
 * @param {String} password
 *
 */
export default (username, password) => {
  validateCredentials(username, password);

  const bookings = Bookings(username, password);

  return {
    bookings
  };
};
