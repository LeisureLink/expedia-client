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
 * @param {Object} [options]
 * @param {String} [options.bookingsEndpointUri]
 */
export default (username, password, options = {}) => {
  validateCredentials(username, password);

  if (options.testing) {
    options.bookingsEndpointUri = 'https://simulator.expediaquickconnect.com/connect/br';
  }

  const bookings = Bookings(username, password, { bookingsEndpointUri: options.bookingsEndpointUri });
  return {
    bookings
  };
};
