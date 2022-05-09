const assertTrue = require('assert')
const { Given, When, Then } = require('@cucumber/cucumber')

const Adventure = require('../../../src/Adventure')

let adventure
let response

Given('I am in the loo and dont know what to do', function () {
    adventure = new Adventure()
    adventure.start()
    assertTrue(adventure.lastResponse.includes('loo'))
})

When('I cry for help', function () {
    response = adventure.tell('help')
})

Then('I get a helpfull information', function(){
    assertTrue(response.toString().includes('Help!'))
})
