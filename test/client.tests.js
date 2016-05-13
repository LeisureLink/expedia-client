import Client from '../src';

describe('Client', () => {
  it('requires username', () => expect(() => Client()).to.throw(/username/));

  it('requires password', () => expect(() => Client('bogus123')).to.throw(/password/));
});
