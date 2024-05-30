/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let num1 = 0;
let num2 = 0;
let operator;
let result = 0;

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

const numberBtnEls = document.querySelectorAll('.number');
const operatorBtnEls = document.querySelectorAll('.operator');
const equalBtnEl = document.querySelectorAll('.equals');
const displayEl = document.querySelector('.display');

const render = () => {
// render is updating the textConetnt of display
  displayEl.textContent = result
}

const updateResult = () => {
  result = num1
  render()
}

const updateNumbers = (event) => {
  console.log(event.target.textContent)
if(!operator){
  if(!num1){
    num1 = event.target.textContent
  } else{
    num1 += event.target.textContent
  }
}else {
  if (!num2){
    num2 = event.target.textContent
  }else {
    num2 += event.target.textContent
  }
}  
updateResult()
}

// console.log(`num1: ${num1}`, `num2: ${num2}`)
const updateOperator = (event) => {
  console.log(event.target.textContent)
  operator = event.target.textContent
  event.target.style.border = 'solid white'
} 


const updateEqual = (event) => {
  console.log(event.target.textContent)
  // if(!equal)

}


  // if I have the number (text content) -> how do I update state?
  // check what the status of operator is if it is undefined -> update num1 otherwise update num2
  // num1 = the current?


  // if(operator = '+'){
  //   num1 + num2 
  // } else if (operator = '-'){ 
  //   num1 - num2
  // } else if (operator = '*'){
  //   num1 * num2
  // } else if (operator = '/'){
  //   num1 / num2
  // }

  // to take the cirrent number(num1) -> update result



numberBtnEls.forEach((numBtnEl) =>{
  numBtnEl.addEventListener('click', updateNumbers)
})

operatorBtnEls.forEach((opBtnEl) => {
  opBtnEl.addEventListener('click', updateOperator)
})

equalBtnEl.forEach((eqBtnEl) => {
  eqBtnEl.addEventListener('click', updateEqual)
})


render()


  
  