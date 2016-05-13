'use strict';

import R from 'ramda';
import Http from '../internals/http';
import * as Validation from '../internals/validation';
import * as TransformToXml from '../internals/transformers/xml';

export const Status = {
  pending: 'pending',
  retrieved: 'retrieved',
  confirmed: 'confirmed'
};

const hasStatus = R.has(R.__, Status);
const validateStatus = (status) => new Promise((resolve, reject) => !hasStatus(status) ? reject(new Error(`Status '${status}' is not valid`)) : resolve());

export default (username, password) => {

  const getBookings = (predicate = {}) => {
    return Validation.validateBookingRetrieval(predicate)
      .then(result => TransformToXml.bookingRetrieval(username, password, result))
      .then(xml => Http.post('https://simulator.expediaquickconnect.com/connect/br', xml));
  };

  return {
    allByHotel(hotelId) {
      return getBookings({ hotelId });
    },
    allByPreviousDays(previousDays) {
      return getBookings({ previousDays });
    },
    allByStatus(status) {
      return validateStatus(status)
        .then(() => getBookings({ status }));
    },
    byBookingId(bookingId) {
      return getBookings({ bookingId });
    }
  };
};


