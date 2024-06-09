/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let num1 = "";
let num2 = "";
let operator = "";
let result = 0;

/*------------------------ Cached Element References ------------------------*/

const numberBtnEls = document.querySelectorAll('.number');
const operatorBtnEls = document.querySelectorAll('.operator');
const equalBtnEl = document.querySelector('.equals');
const displayEl = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

// render is updating the textConetnt of display
// i believe this is the iterator to make display work

const render = () => {
  displayEl.textContent = result
};

const updateResult = () => {
  result = num1
  render()
};

const updateNumbers = (event) => {
if(num1 && operator){
  num2 += event.target.textContent;
  result = num2
} else{
  num1 += event.target.textContent;
  result = num1
}
render()
};
//console.log(event.target.textContent)
//console.log(num1, num2)

const updateOperator = (event) => {
  operator = event.target.textContent
  if (operator === 'C'){
    num1 = '';
    num2 = '';
    operator = '';
    result = 0;
    render()
  }
};

const resetCalc = () => {
  num1 = '';
  num2 = '';
  operator = '';
  result = 0;
}


const updateEqual = (event) => {
  if(operator === '+'){
    result = Number(num1) + Number(num2)
  }if (operator === '-'){
    result = Number(num1) - Number(num2)
  }if (operator === '*'){
    result = Number(num1) * Number(num2)
  }if (operator === '/'){
    result = Number(num1) / Number(num2)
  }
  render()
}

numberBtnEls.forEach((numBtnEl) =>{
  numBtnEl.addEventListener('click', updateNumbers)
})

operatorBtnEls.forEach((opBtnEl) => {
  opBtnEl.addEventListener('click', updateOperator)
})

equalBtnEl.addEventListener('click', updateEqual);


render()


 

  // Cited: Collaberated with Anitra Paul, Samantha Beltra, Travis Neto, and assistance from Joshua Miller during Support sessions. 