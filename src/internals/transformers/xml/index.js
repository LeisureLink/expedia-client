import R from 'ramda';
import Xml from '../../xml';

const FIELDS = {
  HOTEL_ID: 'hotelId',
  PREVIOUS_DAYS: 'previousDays',
  BOOKING_ID: 'bookingId',
  STATUS: 'status'
};

const appendHotel = R.when(R.hasIn(FIELDS.HOTEL_ID), R.pipe(
  R.prop(FIELDS.HOTEL_ID),
  (value) => {
    return {
      Hotel: {
        $id: value
      }
    };
  },
  R.omit(FIELDS.HOTEL_ID)
));

const appendPreviousDays = R.when(R.hasIn(FIELDS.PREVIOUS_DAYS), R.pipe(
  R.prop(FIELDS.PREVIOUS_DAYS),
  (value) => {
    return {
      NbDaysInPast: value
    };
  }
));

const appendBookingId = R.when(R.hasIn(FIELDS.BOOKING_ID), R.pipe(
  R.prop('bookingId'),
  (value) => {
    return {
      Booking: {
        $id: value
      }
    };
  }
));

const appendStatus = R.when(R.hasIn(FIELDS.STATUS), R.pipe(
  R.prop(FIELDS.STATUS),
  (value) => {
    return {
      Status: {
        $value: value
      }
    };
  }
));


export const bookingRetrieval = (username, password, result, options = {}) => {
  const namespace = options.namespace || 'http://www.expediaconnect.com/EQC/BR/2014/01';
  const fields = [FIELDS.HOTEL_ID, FIELDS.PREVIOUS_DAYS, FIELDS.BOOKING_ID, FIELDS.STATUS];
  const query = {
    BookingRetrievalRQ: R.omit(fields, R.mergeAll([
      {
        $xmlns: namespace,
        Authentication: { $username: username, $password: password }
      },
      appendHotel(result),
      {
        ParamSet: R.omit(fields, R.mergeAll([
          appendStatus(result),
          appendPreviousDays(result),
          appendBookingId(result)
        ]))
      }
    ]))
  };
  return Xml.builder(query);
};
