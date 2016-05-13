import Test from 'ava';
import Client from '../src';

const client = Client('bogus', 'bogus123');

Test('client has bookings.allByHotel(hotelId)', () => expect(client.bookings.allByHotel).to.be.a.function());

Test('username is required', () => expect(() => Client()).to.throw(/username/));

Test('password is required', () => expect(() => Client('bogus')).to.throw(/password/));
