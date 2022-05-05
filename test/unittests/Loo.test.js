const Loo = require('../../src/Rooms/Loo');
const Player = require('../../src/Characters/Player');
const Adventure = require("../../src/Adventure");

const jokes = [
	'What did the toaster say to the sliced bread? I want you inside me!',
	'Give it to me! Give it to me!" she yelled. I am so wet, give it to me now! She could scream all she wanted, but I was keeping the umbrella.',
	'They say that during sex you burn off as many calories as running eight miles. Who the hell runs eight miles in 30 seconds?',
	'I will admit it, I have a tremendous sex drive. My girlfriend lives forty miles away.',
	'What is the difference between kinky and perverted? Kinky is when you tickle your girlfriend with a feather, perverted is when you use the whole bird.',
	'I bet you can not tell me something that will make me both happy and sad at the same time, a husband says to his wife. She thinks about it for a moment and then responds, Your penis is bigger than your brothers.',
	'How do you make a pool table laugh? Tickle its balls.'
]

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
    expect(jokes.includes(response)).toBe(true);
});

test('command "joke" should work', () => {
    loo = new Loo();
    const response = loo.tell("joke")
	expect(jokes.includes(response)).toBe(true);

});

test("go to washroom", () => {
    adventure = new Adventure()
    adventure.start();
    expect(adventure.tell("go to washroom")).toContain('You enter the washroom.');
});

test("go to washroom sets current room to washroom", () => {
    let adventure = new Adventure()
    adventure.start();
    adventure.tell("go to washroom");
    expect(adventure.getCurrentRoom().constructor.name).toBe('WashRoom');
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
