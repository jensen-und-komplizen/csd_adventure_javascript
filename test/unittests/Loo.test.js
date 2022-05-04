const Loo = require('../../src/Rooms/Loo');
const Player = require('../../src/Characters/Player');

test('Loo to have a detailed description with a dollar', () => {
    loo = new Loo(new Player());
    expect(loo.getDetailedDescription()).toContain('dollar');
});

test('Look at playboy should work', () => {
    loo = new Loo(new Player());
    const response = loo.tell("look at playboy")
    expect(response).toContain('rather not.');
});

test('Look at nasty jokes should work', () => {
    loo = new Loo(new Player());
    const response = loo.tell("read nasty joke")
    expect(response).toContain('the toaster say');
});

test('command "joke" should work', () => {
    loo = new Loo();
    const response = loo.tell("joke")
    expect(response).toContain('the toaster say');
    });
test('Dollar can be picked up', () => {
    loo = new Loo(new Player());
    const response = loo.tell("pick up dollar")
    expect(response).toContain('You picked up the dollar.');
});

test('Dollar cant be picked up twice', () => {
    loo = new Loo(new Player());
    loo.tell("pick up dollar")
    const response = loo.tell("pick up dollar")
    expect(response).toContain('There is nothing to pick up.');
});
