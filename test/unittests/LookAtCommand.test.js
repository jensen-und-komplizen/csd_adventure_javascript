const LookAtCommand = require('../../src/Commands/LookAtCommand')

test('lookAtCommand should be resposible for looking at Playboy', () => {
  lookAtCommand = new LookAtCommand()
  expect(lookAtCommand.isResponsible('look at playboy')).toBe(true)
})

test('lookAtCommand should not be resposible for picking up Playboy', () => {
  lookAtCommand = new LookAtCommand()
  expect(lookAtCommand.isResponsible('pick up playboy')).toBe(false)
})

test('lookAtCommand should be resposible for reading Playboy', () => {
  lookAtCommand = new LookAtCommand()
  expect(lookAtCommand.isResponsible('read playboy')).toBe(true)
})

test('lookAtCommand should be resposible for reading Playboy', () => {
  lookAtCommand = new LookAtCommand()
  expect(lookAtCommand.isResponsible('read playboy')).toBe(true)
})

