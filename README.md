# Expedia QuickConnect Client
> Node.js client to interact with Expedia's QuickConnect Client.
  
## Installation

**Using NPM**

```bash
 $ npm i @leisurelink/expedia-client -S
```

### Usage

```js
import Expedia from 'expedia';

const client = Expedia('username', 'password');
```


## API 

### Availability and Rates

>  Send Expedia updates on availability and rates

#### _.update(hotelId, updates = []) : <Promise<{}>_

* **hotelId <Integer>**: Positive integer representing the Hotel's Id
* **updates <Array<{}>>**: The availability and rates updates

#### Usage

```js
import Expedia from 'expedia';

const client = Expedia('username', 'password');

const hotelId = 1234;

const updates = [
  {
    from: '2014-12-15',
    to: '2015-01-20',
    roomId: 40000,
    isRoomClosed: false,
    
    // Optional - Assigns only days within the range when day is set to true
    days: { 
      sunday: false,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false
    },
    
    inventory: {
      totalInventoryAvailable: 10,
      
      // Optional
      flexibleAllocation: 0
    },
    
    ratesPlan: {
      id: 40000,
      isRateClosed: false,
      currency: 'USD',
      
      //Optional
      rateChangeIndicator: false,
      
      rates: [
        // Enum Types: ['PerDay', 'PerOccupancy', 'PerPerson']
        // When 'PerOccupancy', the occupancy attribute is required, else it's optional
        
        { rate:  60.00, occupancy: 1, kind: 'PerOccupancy' },
        { rate:  100.00, occupancy: 2, kind: 'PerOccupancy' },
        { rate:  135.00, occupancy: 3, kind: 'PerOccupancy' },
        { rate:  160.00, occupancy: 4, kind: 'PerOccupancy' }
      ],
      
      restrictions: {
        closedToArrival: false,
        closedToDeparture: false,
        lengthOfStay: { minDays: 1, maxDays: 7}
      }
    }
  }
];

client.availabilityAndRates.update(hotelId, updates)
  .then(result => {
    // Do something with the result
  })
  .catch(err => {
    // Handle error or let it bubble up
  });
```

