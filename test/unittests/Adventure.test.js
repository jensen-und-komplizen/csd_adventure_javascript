const Adventure = require('../../src/Adventure');

test('tell with upper case should work', () => {
    adventure = new Adventure()
    adventure.start();
    expect(adventure.tell("LOOK AROUND")).toContain('You see a pretty');
});

test('tell with lower case should work', () => {
    adventure = new Adventure()
    adventure.start();
    expect(adventure.tell("look around")).toContain('You see a pretty');
});

test('tell with mixed case should work', () => {
    adventure = new Adventure()
    adventure.start();
    expect(adventure.tell("look Around")).toContain('You see a pretty');
});

test('tell with mixed case should work', () => {
    adventure = new Adventure()
    adventure.start();
    expect(adventure.tell("look at PlayBoy")).toContain('rather not');
});
