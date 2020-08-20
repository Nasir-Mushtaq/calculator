const calculate = require('./calculate')

//Add
test('Add two numbers', function () { 
    let num1 = 25 
    let num2 = 25
    let oprtr = "add"
    expect(calculate.calculate(num1, oprtr, num2)).toBe(num1 + num2)
    expect(calculate.calculate(num1, oprtr, num2)).not.toBe((num1 - num2))
})

test('Add two decimal numbers', function () { 
    let num1 = 20.5 
    let num2 = 30.6
    let oprtr = "add"
    expect(calculate.calculate(num1, oprtr, num2)).toBe(num1 + num2)
    expect(calculate.calculate(num1, oprtr, num2)).not.toBe((num1 * num2))
})

//Subtract
test('Subtract two numbers', function() {
    let num1 = 151 
    let num2 = 256
    let oprtr = "subtract"
    expect(calculate.calculate(num1, oprtr, num2)).toBe(num1 - num2)
    expect(calculate.calculate(num1, oprtr, num2)).not.toBe((num1 + num2))
})

test('Subtract two negative numbers', function() {
    let num1 = -150
    let num2 = 256
    let oprtr = "subtract"
    expect(calculate.calculate(num1, oprtr, num2)).toBe(num1 - num2)
    expect(calculate.calculate(num1, oprtr, num2)).not.toBe((num1 / num2))
})

//Multiply
test('Multiply two decimal numbers', function() {
    let num1 = 2550.5
    let num2 = 25666.3
    let oprtr = "multiply"
    expect(calculate.calculate(num1, oprtr, num2)).toBe(num1 * num2)
    expect(calculate.calculate(num1, oprtr, num2)).not.toBe((num1 / num2))
})
test('Multiply two negative numbers', function() {
    let num1 = -169999
    let num2 = -35256
    let oprtr = "multiply"
    expect(calculate.calculate(num1, oprtr, num2)).toBe(num1 * num2)
    expect(calculate.calculate(num1, oprtr, num2)).not.toBe((num1 + num2))
})
//Divide 
test('Divide two numbers', function() {
    let num1 = 999
    let num2 = 356
    let oprtr = "divide"
    expect(calculate.calculate(num1, oprtr, num2)).toBe(num1 / num2)
    expect(calculate.calculate(num1, oprtr, num2)).not.toBe((num1 + num2))
})
test('Divide a number by 0', function() {
    let num1 = 9
    let num2 = 0
    let oprtr = "divide"
    expect(calculate.calculate(num1, oprtr, num2)).toBe("ERROR")
    expect(calculate.calculate(num1, oprtr, num2)).not.toBe((num1 + num2))
})



