// Function for performing calculations
// here we simply take first number (number1) and second number (number2) 
// and use operator (+,-,*,/) to do the calculations
// We are using parseFloat to convert string to integer
// Display error when divided by '0'

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

  // Here we select DOM elements of calculator, calculator display and calculator keys
  const calculator = document.querySelector('.calculator')
  const display = calculator.querySelector('.calculator__display')
  const keys = calculator.querySelector('.calculator__keys')
  
  // Here we add Event listener for click on all calculator keys
  keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
      const key = e.target
      const action = key.dataset.action
      const keyContent = key.textContent
      const displayedNum = display.textContent
      const previousKeyType = calculator.dataset.previousKeyType
  
       // To release the pressed key state 

      Array.from(key.parentNode.children)
     .forEach(k => k.classList.remove('is-depressed'))
    
      //Here we check if a number key is pressed and display its value 
      //after checking which previous key was pressed
      if (!action) {
        if (
          displayedNum === '0' ||
          previousKeyType === 'operator' ||
          previousKeyType === 'calculate'
        ) {
          display.textContent = keyContent
        } else {
          display.textContent = displayedNum + keyContent
        }
        calculator.dataset.previousKeyType = 'number'
      }
      
      // Decimal key

      if (action === 'decimal') {

        // Here we check if the displayed value already includes a decimal 

        if (!displayedNum.includes('.')) {
          display.textContent = displayedNum + '.'
        } else if (
          previousKeyType === 'operator' ||
          previousKeyType === 'calculate'
        ) {
          display.textContent = '0.'
        }
  
        calculator.dataset.previousKeyType = 'decimal'
      }

      // operator keys

      if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        const firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        const secondValue = displayedNum
  
      // Check if first value and operator already exist

        if (
          firstValue &&
          operator &&
          previousKeyType !== 'operator' &&
          previousKeyType !== 'calculate'
        ) {
          const calcValue = calculate(firstValue, operator, secondValue)
          display.textContent = calcValue

        // Here we make result of first calculation, first value to continue calculation

          calculator.dataset.firstValue = calcValue

        // Here we set displayed value as first value 

        } else {
          calculator.dataset.firstValue = displayedNum
        }
  
         //Check if previous key type is an operator key

        key.classList.add('is-depressed')
        calculator.dataset.previousKeyType = 'operator'
        calculator.dataset.operator = action
      }

      // Clear key
  
      if (action === 'clear') {
        if (key.textContent === 'AC') {
          calculator.dataset.firstValue = ''
          calculator.dataset.modValue = ''
          calculator.dataset.operator = ''
          calculator.dataset.previousKeyType = ''
        } else {
          key.textContent = 'AC'
        }
  
        display.textContent = 0
        calculator.dataset.previousKeyType = 'clear'
      }
  
      if (action !== 'clear') {
        const clearButton = calculator.querySelector('[data-action=clear]')
        clearButton.textContent = 'CE'
      }
  
      // Equal key

      if (action === 'calculate') {
        let firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        let secondValue = displayedNum
  
      // Here we set first value to be the displayed value   

        if (firstValue) {
          if (previousKeyType === 'calculate') {
            firstValue = displayedNum
            secondValue = calculator.dataset.modValue
          }
  
          display.textContent = calculate(firstValue, operator, secondValue)
        }
  
        calculator.dataset.modValue = secondValue

        //To check if previous key type is an operator key

        calculator.dataset.previousKeyType = 'calculate'
      }
    }
  })
  // module.exports.calculate = calculate
  