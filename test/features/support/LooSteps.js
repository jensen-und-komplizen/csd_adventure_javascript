const assertTrue = require('assert')
const { Given, When, Then } = require('@cucumber/cucumber')

const Adventure = require('../../../src/Adventure')

let adventure
let response

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
    assertTrue(response.includes('What did the toaster say to the sliced bread?'));
})
