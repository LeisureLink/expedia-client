'use strict';

import Test from 'ava';
import Http from '../../../src/internals/http';

const uri = 'https://simulator.expediaquickconnect.com/connect/ar';

Test('performs valid xml request', (t) => {
  const raw =
    `<?xml version="1.0" encoding="UTF-8"?> 
      <AvailRateUpdateRQ xmlns="http://www.expediaconnect.com/EQC/AR/2011/06">
          <Authentication username="testuser" password="ECLPASS"/>
          <Hotel id="311"/>
          <AvailRateUpdate>
              <DateRange from="2017-01-01" to="2017-12-31"/>
              <RoomType id="30000">
                  <Inventory flexibleAllocation="10"/>
              </RoomType>
          </AvailRateUpdate>
      </AvailRateUpdateRQ>`;

  return Http.post(uri, raw)
    .then(response => {
      t.is(response.status, 200);
      t.truthy(response.data.availrateupdaters.success);
    });
});
