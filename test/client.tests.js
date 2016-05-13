import Test from 'ava';
import Client from '../src';

Test('username is required', (t) => t.throws(() => Client()));

Test('password is required', (t) => t.throws(() => Client()));

