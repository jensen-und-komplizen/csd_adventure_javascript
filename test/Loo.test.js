const Loo = require('../src/Rooms/Loo');

test('Loo to have a detailed description with a coin', () => {
    loo = new Loo()
    expect(loo.getDetailedDescription()).toContain('coin');
});