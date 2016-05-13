import Test from 'ava';
import Client from '../src';

const client = Client('anyuser', 'ECLPASS');


Test('allByHotel', () => {
  return client.bookings.allByHotel(111)
    .then(response => {
      expect(response.status).to.be.equal(200);
      const bookingRetrieval = response.data.bookingretrievalrs;
      expect(bookingRetrieval.bookings.booking).to.not.be.empty();
    });
});

Test('allByPreviousDays', () => {
  return client.bookings.allByPreviousDays(20)
    .then(response => {
      expect(response.status).to.be.equal(200);
      const bookingRetrieval = response.data.bookingretrievalrs;
      expect(bookingRetrieval.bookings.booking).to.not.be.empty();
    });
});

Test('byBookingId', () => {
  const bookingId = 99;
  return client.bookings.byBookingId(bookingId)
    .then(response => {
      expect(response.status).to.be.equal(200);
      const bookingRetrieval = response.data.bookingretrievalrs;
      expect(bookingRetrieval.bookings.booking.$id).to.be.equal(bookingId);
    });
});

Test('allByStatus(): status is valid', () => {
  const status = 'pending';

  return client.bookings.allByStatus(status)
    .then(response => {
      expect(response.status).to.be.equal(200);
      const booking = response.data.bookingretrievalrs.bookings.booking[0];
      expect(booking.$status).to.be.equal(status);
    });
});

Test('allByStatus(): status is valid', () => {
  const status = 'bogus';

  return client.bookings.allByStatus(status)
    .catch(err => {
      expect(err.message).to.contain('Status');
    });

});

