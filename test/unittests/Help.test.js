const Help = require('../../src/public/Help');
const Player = require('../../src/Characters/Player')

test('Command help should return the help text', () => {
    expected = "Help!"

    help = new Help()
    expect(help.getHelpText(['coin', 'dollar'], 'help', new Player()).toString()).toContain(expected);
});
