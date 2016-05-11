import Test from 'ava';
import Client from '../src';

const client = Client('anyuser', 'ECLPASS');

Test('query validates with a bookingId', () => {
  return client.bookings.retrieve({ hotelId: 111 })
    .then(response => {
      expect(response.status).to.be.equal(200);

      const bookingRetrieval = response.data.bookingretrievalrs;
      expect(bookingRetrieval.bookings.booking).to.not.be.empty();
    });
});

Test('query can be empty', () => {
  return client.bookings.retrieve()
    .then(response => {
      expect(response.status).to.be.equal(200);
    });
});

Test('query by status', () => {
  return client.bookings.retrieve({ status: 'pending' })
    .then(response => {
      expect(response.status).to.be.equal(200);
    });
});

Test('query by status and previousDays', () => {
  return client.bookings.retrieve({ status: 'pending', previousDays: 20 })
    .then(response => {
      expect(response.status).to.be.equal(200);
    });
});

Test('when bookingId is set the previousDays should not be', () => {
  return client.bookings.retrieve({ bookingId: 1, previousDays: 1 }).catch(err => {
    expect(err.message).to.match(/previousDays/);
  });
});


