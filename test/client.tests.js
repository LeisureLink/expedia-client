import Test from 'ava';
import Client from '../src';

const client = Client('blah', 'blah');

Test('client has update availabilityAndRates function', () => {
  expect(client.availabilityAndRates.update).to.be.a.function();
});
