const TimeService = require('../../src/TimeService')

test('current time looks good', async () => {
    expect(await TimeService.currentTime('Europe/Berlin')).toBeGreaterThan(-1)
})
