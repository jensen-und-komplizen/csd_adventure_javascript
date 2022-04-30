const assert = require('assert')
const { When, Then } = require('@cucumber/cucumber')
//const Adventure = require('../../src')

When('the greeter says hello', function () {
    this.whatIHeard = new Greeter().sayHello()
});

Then('I should have heard {string}', function (expectedResponse) {
    assert.equal(this.whatIHeard, expectedResponse)
});