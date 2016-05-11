import AvailabilityAndRates from './availability';
import BookingConfirmation from './booking/confirmation';
import BookingRetrieval from './booking/retrieval';
import Parr from './parr';

export default (username, password) => {

  return {
    availabilityAndRates: {
      update(hotelId, rateUpdates) {
        return AvailabilityAndRates(username, password, hotelId, rateUpdates);
      }
    },

    bookings: {
      confirm(hotelId, booking){
        return BookingConfirmation(username, password, hotelId, booking);
      },

      retrieve() {
        return BookingRetrieval(username, password);
      }
    },

    parr: {
      retrieve() {
        return Parr(username, password);
      }
    }
  };
};
