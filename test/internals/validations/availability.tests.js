// Todo: Keeping the Test for schema purposes

// import Test from 'ava';
//
// Test.skip('valid availability', () => {
//   const availabilityAndRates = [{
//     from: '2014-12-15',
//     to: '2015-01-20',
//     roomId: 40000,
//     isRoomClosed: false,
//
//     inventory: {
//       totalInventoryAvailable: 10,
//     },
//
//     ratesPlan: {
//       id: "40000",
//       isRateClosed: false,
//       currency: 'USD',
//
//       rates: [
//         { rate: 60.00, occupancy: 1, kind: 'PerOccupancy' },
//         { rate: 100.00, occupancy: 2, kind: 'PerOccupancy' },
//         { rate: 135.00, occupancy: 3, kind: 'PerOccupancy' },
//         { rate: 160.00, occupancy: 4, kind: 'PerOccupancy' }
//       ],
//
//       restrictions: {
//         isClosedToArrival: false,
//         isClosedToDeparture: false
//       }
//     }
//   }];
//
//
//   return Validator.availability(availabilityAndRates)
//     .then(result => {
//       expect(result[0].ratesPlan.rates).to.have.length(4);
//       expect(result[0].ratesPlan.restrictions.lengthOfStay).to.be.ok;
//     });
// });
