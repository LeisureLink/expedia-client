import Test from 'ava';
import Client from '../src';

const client = Client('blah', 'blah');

Test('client has update availabilityAndRates function', () => expect(client.availabilityAndRates.update).to.be.a.function());

Test('client has bookings.confirm()', () => expect(client.bookings.confirm).to.be.a.function());

Test('client has bookings.retrieval()', () => expect(client.bookings.retrieve).to.be.a.function());

Test('client has parr.retrieval()', () => expect(client.parr.retrieve).to.be.a.function());

Test('username is required', () => expect(() => Client()).to.throw(/Username/));

Test('password is required', () => expect(() => Client('bogus')).to.throw(/Password/));
