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

const validateSync = (value, schema, options) => {
  options = options || JOI_OPTIONS;
  schema = Joi.compile(schema);
  return Joi.validate(value, schema, options);
};

export const validateBookingRetrieval = (value, options) => validate(value, Schemas.BookingQuery, options);
export const validator = validateSync;

export { Schemas };
