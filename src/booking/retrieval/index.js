import R from 'ramda';
import * as Validation from '../../internals/validation';
import Xml from '../../internals/xml';
import Http from '../../internals/http';

const buildQuery = (username, password, result) => {
  const query = {
    BookingRetrievalRQ: {
      $xmlns: 'http://www.expediaconnect.com/EQC/BR/2014/01',
      Authentication: { $username: username, $password: password }
    }
  };

  if (result.bookingId && result.previousDays) {
    result = R.omit(['bookingId']);
  }

  if (result.hotelId) {
    query.BookingRetrievalRQ.Hotel = { $id: result.hotelId };
  }

  if (result.previousDays) {
    query.BookingRetrievalRQ.ParamSet = { NbDaysInPast: result.previousDays };
  }

  if (result.bookingId) {
    query.BookingRetrievalRQ.ParamSet = { Booking: { $id: result.bookingId } };
  }

  if (result.status) {
    query.BookingRetrievalRQ.ParamSet = { Status: { $value: result.status } };
  }

  return query;
};

/**
 * Retrieves Bookings
 *
 * @public
 *
 * @param {String} username
 * @param {String} password
 * @param {Object} [predicate]
 * @param {Number} [predicate.hotelId]
 * @param {Number} [predicate.bookingId]
 * @param {Number} [predicate.hotelId]
 * @param {Number} [predicate.status]
 * @param {Number} [predicate.previousDays]
 *
 * @returns {Promise<{}>}
 */
export default (username, password, predicate = {}) => {
  return Validation.bookings.retrieval(predicate)
    .then(validationResult => {
      const query = buildQuery(username, password, validationResult);
      return Xml.builder(query)
        .then(xml => {
          return Http.post('https://simulator.expediaquickconnect.com/connect/br', xml);
        });
    });
};
