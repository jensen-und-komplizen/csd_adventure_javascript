const assertTrue = require('assert')
const { Given, When, Then } = require('@cucumber/cucumber')

const Adventure = require('../../../src/Adventure')

let adventure
let response
jokes = [
	'What did the toaster say to the sliced bread? I want you inside me!',
	'Give it to me! Give it to me!" she yelled. I am so wet, give it to me now! She could scream all she wanted, but I was keeping the umbrella.',
	'They say that during sex you burn off as many calories as running eight miles. Who the hell runs eight miles in 30 seconds?',
	'I will admit it, I have a tremendous sex drive. My girlfriend lives forty miles away.',
	'What is the difference between kinky and perverted? Kinky is when you tickle your girlfriend with a feather, perverted is when you use the whole bird.',
	'I bet you can not tell me something that will make me both happy and sad at the same time, a husband says to his wife. She thinks about it for a moment and then responds, Your penis is bigger than your brothers.',
	'How do you make a pool table laugh? Tickle its balls.'
]

Given('I started the game', function () {
    adventure = new Adventure()
    adventure.start()
})

When('I look around', function () {
    response = adventure.lastResponse
})

Then('I should find myself on the loo', function () {
    assertTrue(response.includes('loo'));
})

When('I read a nasty joke', function() {
    adventure.tell('read nasty joke')
    response = adventure.lastResponse
})

Then('I should get a nasty joke about a toaster and sliced bread', function () {
    assertTrue(jokes.includes(response));
})
