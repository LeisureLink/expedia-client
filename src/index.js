import AvailabilityAndRates from './availability';
import BookingConfirmation from './booking/confirmation';
import BookingRetrieval from './booking/retrieval';
import Parr from './parr';


const validateCredentials = (username, password) => {
  if (!username || username.toString().length === 0) throw new Error('Username is required');
  if (!password || password.toString().length === 0) throw new Error('Password is required');
};

/**
 * Expedia QuickConnect Client
 *
 * @public
 *
 * @param {String} username
 * @param {String} password
 * @param {Object} [options]
 *
 * @returns {{
 *  availabilityAndRates: {},
 *  bookings: {},
 *  parr: {}
 * }}
 *
 */
export default (username, password) => {

  validateCredentials(username, password);

  return {
    availabilityAndRates: {
      update(hotelId, rateUpdates) {
        return AvailabilityAndRates(username, password, hotelId, rateUpdates);
      }
    },
    bookings: {
      /**
       * Confirms a booking
       * @param {Number} hotelId
       * @param {Object} booking
       * @returns {Promise<{}>}
       */
      confirm(hotelId, booking){
        return BookingConfirmation(username, password, hotelId, booking);
      },
      /**
       * Retrieve Bookings
       *
       * @public
       *
       * @returns {Promise<{}>}
       */
      retrieve(query) {
        return BookingRetrieval(username, password, query);
      }
    },
    parr: {
      /**
       * Retrieve Product, Availability, Rates, and Restrictions
       *
       * @public
       *
       * @returns {Promise<{}>}
       */
      retrieve() {
        return Parr(username, password);
      }
    }
  };
};
