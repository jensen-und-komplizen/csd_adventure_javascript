const Loo = require('../../src/Rooms/Loo');

test('Loo to have a detailed description with a dollar', () => {
    loo = new Loo()
    expect(loo.getDetailedDescription()).toContain('dollar');
});

test('Look at playboy should work', () => {
    loo = new Loo();
    const response = loo.tell("look at playboy")
    expect(response).toContain('rather not.');
});

test('Look at nasty jokes should work', () => {
    loo = new Loo();
    const response = loo.tell("read nasty joke")
    expect(response).toContain('the toaster say');
});

test('command "joke" should work', () => {
    loo = new Loo();
    const response = loo.tell("joke")
    expect(response).toContain('the toaster say');
});

test('building test', () => {
    expect(true).toBe(false);
})