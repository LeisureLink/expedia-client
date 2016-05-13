import Joi from 'joi';

export const Availability = Joi.array().items(Joi.object({
  from: Joi.date().format('YYYY-MM-DD').required(),
  to: Joi.date().format('YYYY-MM-DD').required(),
  roomId: Joi.number().positive().required(),
  isRoomClosed: Joi.boolean().required(),

  days: Joi.object().keys({
    sunday: Joi.boolean(),
    monday: Joi.boolean(),
    tuesday: Joi.boolean(),
    wednesday: Joi.boolean(),
    thursday: Joi.boolean(),
    friday: Joi.boolean(),
    saturday: Joi.boolean()
  }).optional(),

  inventory: Joi.object({
    totalInventoryAvailable: Joi.number().positive().max(4999).required(),
    flexibleAllocation: Joi.number().positive().max(4999).optional()
  }),

  ratesPlan: Joi.object({
    id: Joi.string().max(50).required(),
    isRateClosed: Joi.boolean().required(),
    currency: Joi.string().min(3).required().default('USD'),
    rateChangeIndicator: Joi.boolean().optional(),
    lengthOfStay: Joi.number().positive().min(1).max(28).default(1),

    rates: Joi.array().items(Joi.object({
      rate: Joi.number().positive().precision(4).required(),
      kind: Joi.string().required().valid('PerDay', 'PerOccupancy', 'PerPerson'),
      // kind: Joi.string().required().valid('PerDay', 'PerOccupancy', 'PerPerson'),
      occupancy: Joi.number().positive().optional()
    })).min(1),

    restrictions: Joi.object().keys({
      isClosedToArrival: Joi.boolean().required(),
      isClosedToDeparture: Joi.boolean().required(),
      lengthOfStay: Joi.object({
        minDays: Joi.number().positive().required().default(1).min(1).max(28),
        maxDays: Joi.number().positive().required().default(28).min(2).max(28)
      })
    }).required()

  }).required()
}).required()).min(1);

export const BookingQuery = Joi.object().keys({
  hotelId: Joi.number().positive().optional(),
  bookingId: Joi.number().positive().optional(),
  status: Joi.string().optional(),
  previousDays: Joi.number().min(1).max(30).optional()
});

export const Authentication = Joi.object({
  username: Joi.string().required().min(4).max(30).trim(),
  password: Joi.string().required().min(6).max(30).trim()
});

