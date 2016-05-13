'use strict';

import Test from 'ava';
import Client from '../src';

const client = Client('anyuser', 'ECLPASS');


Test('allByHotel', (t) => {
  const hotelId = 111;
  return client.bookings.allByHotel(hotelId)
    .then(response => {
      const bookingRetrieval = response.data.bookingretrievalrs;
      t.is(response.status, 200);
      t.is(bookingRetrieval.bookings.booking[0].hotel.$id, hotelId);
    });
});

Test('allByPreviousDays', (t) => {
  return client.bookings.allByPreviousDays(20)
    .then(response => {
      t.is(response.status, 200);
      t.falsy(response.error);
      const bookingRetrieval = response.data.bookingretrievalrs;
      t.truthy(bookingRetrieval.bookings.booking);
    });
});

Test('byBookingId', (t) => {
  const bookingId = 99;
  return client.bookings.byBookingId(bookingId)
    .then(response => {
      t.is(response.status, 200);
      t.falsy(response.error);
      const bookingRetrieval = response.data.bookingretrievalrs;
      t.is(bookingRetrieval.bookings.booking.$id, bookingId);
    });
});

Test('allByStatus(): status is valid', (t) => {
  const status = 'pending';

  return client.bookings.allByStatus(status)
    .then(response => {
      t.is(response.status, 200);
      t.falsy(response.error);
      const booking = response.data.bookingretrievalrs.bookings.booking[0];
      t.is(booking.$status, status);
    });
});

Test('allByStatus(): status is valid', (t) => {
  const status = 'bogus';
  t.throws(client.bookings.allByStatus(status));
});

