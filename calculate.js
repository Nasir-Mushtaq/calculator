const calculate = (n1, operator, n2) => {
    const firstNum = parseFloat(n1)
    const secondNum = parseFloat(n2)
    if (operator === 'add') return firstNum + secondNum
    if (operator === 'subtract') return firstNum - secondNum
    if (operator === 'multiply') return firstNum * secondNum
    if (operator === 'divide' && secondNum === 0) return "ERROR"
        else {
            return firstNum / secondNum
        }
    // 
  }
  module.exports.calculate = calculate