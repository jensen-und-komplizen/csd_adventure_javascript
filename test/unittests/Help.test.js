const Help = require('../../src/public/Help');

test('Command help should return the help text', () => {
    expected = "Help!"

    help = new Help()
    expect(help.getHelpText(['coin', 'dollar']).toString()).toContain(expected);
});
