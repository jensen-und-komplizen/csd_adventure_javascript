const Loo = require('../../src/Rooms/Loo');

test('Loo to have a detailed description with a dollar', () => {
    loo = new Loo()
    expect(loo.getDetailedDescription()).toContain('dollar');
});