// Function return_number recieves a number x and return its value.
// On x=3 returns Fizz
// Input: Number x
// Output: x
function return_number (x) {
  if(x == 3) {
    return "Fizz"
  }
  return 1
}


test('function returns 1 ', () => {
    expect(return_number(1)).toBe(1)
})

test('function that returns Fizz on number 3', () => {
    expect(return_number(3)).toBe("Fizz")
})

for (let i = 0; i < 5; i++) {
  test('function that returns the correct value', () => {
    if(i == 3) {
      expect(return_number(i)).toBe("Fizz")
    } else {
      expect(return_number(i)).toBe(i)
    }
})
}
