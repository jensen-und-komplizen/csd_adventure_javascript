function return_roman_numbers (x) {
    return_value = ''
    zero = '0'
    one = 'I'
    five = 'V'
    ten = 'X'
    if (x == 0) {
        return_value = zero
    }
    while (x > 0) {
        if (x >= 10) {
            return_value += ten
            x = x-10
        } else if (x >= 5) {
            return_value += five
            x = x-5
        } else if (x >= 4) {
            return_value +=  one +five
            x = x-4
        } else if (x >= 1) {
            return_value += one
            x=x-1
        } 
    }
    return return_value
}


test('function returns 0 ', () => {
    expect(return_roman_numbers(0)).toBe('0')
})

test('function returns I ', () => {
    expect(return_roman_numbers(1)).toBe('I')
})

test('function returns II ', () => {
    expect(return_roman_numbers(2)).toBe('II')
})

test('function returns V ', () => {
    expect(return_roman_numbers(5)).toBe('V')
})

test('function returns IV ', () => {
    expect(return_roman_numbers(4)).toBe('IV')
})

test('function returns X ', () => {
    expect(return_roman_numbers(10)).toBe('X')
})
