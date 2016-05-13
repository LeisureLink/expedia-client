'use strict';

import Test from 'ava';
import Xml from '../../../src/internals/xml';

Test('builds the appropriate structure', (t) => {
  const availability = {
    AvailRateUpdateRQ: {
      $xmlns: 'http://www.expediaconnect.com/EQC/AR/2011/06',
      Authentication: {
        $username: 'testuser'
      },
      AvailRateUpdate: {
        Rate: [
          { PerOccupancy: 1 },
          { PerOccupancy: 2 }
        ]
      }
    }
  };

  const Result = `<?xml version="1.0" encoding="UTF-8"?><AvailRateUpdateRQ xmlns="http://www.expediaconnect.com/EQC/AR/2011/06"><Authentication username="testuser"/><AvailRateUpdate><Rate><PerOccupancy>1</PerOccupancy></Rate><Rate><PerOccupancy>2</PerOccupancy></Rate></AvailRateUpdate></AvailRateUpdateRQ>`;
  return Xml.builder(availability).then(result => t.is(result, Result));
});
