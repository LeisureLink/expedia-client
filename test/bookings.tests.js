import Client from '../src';

const client = Client('anyuser', 'ECLPASS');

const validateResponse = (response) => {
  expect(response.status).to.be.equal(200);
  expect(response.error).to.not.be.ok;
};

describe('Bookings', () => {

  describe('allByHotel', () => {

    it('retrieves bookings by hotel', () => {
      const hotelId = 111;
      return client.bookings.allByHotel(hotelId)
        .then(response => {
          validateResponse(response);
          const bookingRetrieval = response.data.bookingretrievalrs;
          expect(bookingRetrieval.bookings.booking[0].hotel.$id).to.be.equal(hotelId);
        });
    });
  });

  describe('allByPreviousDays', () => {

    it('retrieves bookings for last 20 days', () => {
      return client.bookings.allByPreviousDays(20)
        .then(response => {
          validateResponse(response);
          const bookingRetrieval = response.data.bookingretrievalrs;
          expect(bookingRetrieval.bookings.booking).to.be.ok;
        });
    });
  });

  describe('byBookingId', () => {

    it('finds a booking by id', () => {
      const bookingId = 99;
      return client.bookings.byBookingId(bookingId)
        .then(response => {
          validateResponse(response);
          const bookingRetrieval = response.data.bookingretrievalrs;
          expect(bookingRetrieval.bookings.booking.$id).to.be.equal(bookingId);
        });
    });
  });

  describe('allByStatus(): status is valid', () => {

    it('has a valid status', () => {
      const status = 'pending';

      return client.bookings.allByStatus(status)
        .then(response => {
          validateResponse(response);
          const booking = response.data.bookingretrievalrs.bookings.booking[0];
          expect(booking.$status).to.be.equal(status);
        });
    });

    it('has an invalid status', () => {
      const status = 'bogus';
      return client.bookings.allByStatus(status).catch(err => expect(err).to.be.ok);
    });

  });
});
