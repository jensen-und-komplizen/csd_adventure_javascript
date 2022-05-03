const assertTrue = require('assert')
const { Given, When, Then, And } = require('@cucumber/cucumber')

const Adventure = require('../../../src/Adventure')

let adventure
let response
let player

Given('I am in the loo', function () {
    adventure = new Adventure()
    adventure.start()
    assertTrue(adventure.lastResponse.includes('loo'))
})

Given('I see a dollar', function(){
    response = adventure.tell('look around')
    assertTrue(response.includes('dollar'))
})

When('I pick up the dollar', function () {
    adventure.tell('pick up dollar')
})

Then('I should find it in my pockets', function () {
    assertTrue(adventure.player.has('dollar'))
})

Then('I should not be able to see it when I look around', function(){
    response = adventure.tell('look around')
    assertTrue(!response.includes('dollar'))
})