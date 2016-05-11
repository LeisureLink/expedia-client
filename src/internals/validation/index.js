import Joi from 'joi';
import * as Schemas from './schemas';

const JOI_OPTIONS = {
  allowUnknown: false,
  stripUnknown: true
};

const validate = (value, schema, options) => {
  options = options || JOI_OPTIONS;
  schema = Joi.compile(schema);
  return new Promise((resolve, reject) => {
    Joi.validate(value, schema, options, (err, value) => {
      if (err) return reject(err);
      return resolve(value);
    });
  });
};

export default {
  availability(value, options) {
    return validate(value, Schemas.Availability, options);
  },

  bookings: {
    confirmation(value, options) {

    },

    retrieval(value, options) {
      return validate(value, Schemas.BookingQuery, options);
    }
  },
  parr: {
    retrieval(value, options) {

    }
  }
}
