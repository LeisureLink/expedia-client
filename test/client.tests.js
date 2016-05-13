import Client from '../src';

describe('Client', () => {
  it('requires username', () => expect(() => Client()).to.throw(/username/));

  it('requires password', () => expect(() => Client()).to.throw(/password/));
});
