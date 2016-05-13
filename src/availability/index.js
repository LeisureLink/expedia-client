'use strict';

// TODO: Implement

import * as Validation from '../internals/validation';
import Http from '../internals/http';

export default (username, password, hotelId, rateUpdates = []) => {

  return Validation.availability(rateUpdates)
    .then(validationResult => {
      return Http.post('', validationResult);
    });

};
