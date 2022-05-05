const Adventure = require('../../src/Adventure')

test('tell with upper case should work', () => {
    adventure = new Adventure()
    adventure.start()
    expect(adventure.tell('LOOK AROUND')).toContain('You see a pretty')
})

test('tell with lower case should work', () => {
    adventure = new Adventure()
    adventure.start()
    expect(adventure.tell('look around')).toContain('You see a pretty')
})

test('tell with mixed case should work', () => {
    adventure = new Adventure()
    adventure.start()
    expect(adventure.tell('look Around')).toContain('You see a pretty')
})

test('tell with mixed case should work', () => {
    adventure = new Adventure()
    adventure.start()
    expect(adventure.tell('look at PlayBoy')).toContain('rather not')
})

test('when in washroom, can go to loo', () => {
    const adventure = new Adventure()
    adventure.start()
    adventure.tell('go to washroom')
    expect(adventure.tell('go to loo')).toContain('You enter the loo.')
})

test('when already in look, you cant go to loo', () => {
    const adventure = new Adventure()
    adventure.start()
    adventure.tell('go to washroom')
    adventure.tell('go to loo')
    expect(adventure.tell('go to loo')).toContain('You are already in the loo.')
})
