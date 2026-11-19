const Help = require('../../src/public/Help');
const Player = require('../../src/Characters/Player')

test('Command help should return the help text', () => {
    expected = "Help!"

    help = new Help()
    expect(help.getHelpText(['coin', 'dollar'], 'help', new Player()).toString()).toContain(expected);
});

test('Find contains big F', () => {
    const help = new Help()
    const text = help.getHelpText([], 'help', new Player()).join('')

    expect(text).toContain('Find')
})
