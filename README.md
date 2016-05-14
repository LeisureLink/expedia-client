# Expedia QuickConnect Client 
> Client to work with [Expedia's QuickConnect](https://developer.expediapartnercentral.com/apis/availability-rates-restrictions-booking-and-reservations/eqc-api/reference.html) API 

[![CircleCI](https://circleci.com/gh/LeisureLink/expedia-client.svg?style=svg)](https://circleci.com/gh/LeisureLink/expedia-client)

## Installation

**Using NPM**

```bash
 $ npm i expedia-quickconnect -S
```

## API

The client requires a username, a password, and the different endpoints by default. 

```js
import ExpediaClient from 'expedia-quickconnect';

const client = ExpediaClient('username', 'password', { bookingsEndpointUri: 'SOME_URL'});
```

To ease development there is a 'testing' mode.

```js
import ExpediaClient from 'expedia-quickconnect';

const client = ExpediaClient('username', 'password', { testing: true });
```




### Booking Retrievals

Interact with bookings from Expedia.  The testing endpoint is: https://simulator.expediaquickconnect.com/connect/br

---

#####  _bookings.all()_ : Promise
> Retrieves the last 250 max listings

##### Example

```js
import ExpediaClient from 'expedia-quickconnect';

const client = ExpediaClient('username', 'password', { testing: true });
client.bookings.all()
  .then(response => {
    // Do something with response
  });
```

---

##### _bookings.allByHotel(hotelId)_ : Promise
> Retrieves the bookings filtered by the booking Id

| Parameter  | Type | Description   |
|---|---|---|
| hotelId   | Number | Hotel's Id   |

##### Example

```js
import ExpediaClient from 'expedia-quickconnect';

const client = ExpediaClient('username', 'password', { testing: true });
client.bookings.allByHotel(111)
  .then(response => {
    // Do something with response
  });
```

---

##### _bookings.allByPreviousDays(previousDays)_ : Promise

| Parameter  | Type | Description   |
|---|---|---|
| previousDays   | Number | The number of days in the past. Must be between 1 and 30    |

```js
import ExpediaClient from 'expedia-quickconnect';

const client = ExpediaClient('username', 'password', { testing: true });
client.bookings.allByPreviousDays(5)
  .then(response => {
    // Do something with response
  });
```

---

##### _bookings.allByStatus(status)_ : Promise

| Parameter  | Type | Description   |
|---|---|---|
| status   | Enum(String) | Booking status. Must be: _pending, retrieved, comfirmed_

```js
import ExpediaClient from 'expedia-quickconnect';

const client = allByStatus('username', 'password', { testing: true });
const status = client.booking.Status;

client.bookings.allByStatus(status.confirmed)
  .then(response => {
    // Do something with response
  });
```

## Roadmap

* Booking Confirmations
* Availability and Rates
* Product Availability and Rates
