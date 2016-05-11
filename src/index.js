import AvailabilityAndRates from './rates';

export default (username, password) => {

  return {
    availabilityAndRates: {
      update(hotelId, rateUpdates) {
        return AvailabilityAndRates(username, password, hotelId, rateUpdates);
      }
    }
  };
};
