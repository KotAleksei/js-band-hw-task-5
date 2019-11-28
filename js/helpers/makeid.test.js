import makeID from './makeid';

describe('makeID', () => {
  it('generation results checked', () => {
    expect(makeID().length).toBe(17);
    expect(typeof makeID() === 'string').toBe(true);
  });
});
