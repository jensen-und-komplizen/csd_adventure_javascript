const Help = require('../../src/public/Help');

test('Command help should return the help text', () => {
    expected = "Help! <br>,You can use the following commands. <br>,Commands: <br>,- look around <br>,Extended commands:,Replace [item] with an item you see or possess: <br>,- read [item]<br>,- look at [item]<br>,- pick up [item]<br>,- go to [room]<br>,- count<br>"

    help = new Help()
    expect(help.getHelpText().toString()).toContain(expected);
});
