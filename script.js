const NumberButtons = document.querySelectorAll('.number');
const ClearButton = document.querySelector('.clear');
const DeleteButton = document.querySelector('.delete');
const Equals = document.querySelector('.equals');
const CurrentOperationText = document.querySelector('.current-operation');
const ResultText = document.querySelector('.result');

var number
var result
// Functions for different buttons

//function to clear screen
function clear(){
 number = '';
 result = '';
 updateDisplay();
}

//function to delete the last character of string
function deleteLast(){
    number = CurrentOperationText.innerText.slice(0 ,-1)
}

//function to append all characters entered into a string
function append(num){
    number = CurrentOperationText.innerText + num; 
}


//function to perform computation 
    function compute(number){
    return new Function('return ' + number)();
    }




//function to update the display of the screen
function updateDisplay(answer){
    CurrentOperationText.innerText = number
    answer==undefined?ResultText.innerText='':ResultText.innerText = answer;
}

//Adding event listeners for all buttons
NumberButtons.forEach(button => {
    button.addEventListener('click', () => {
        append(button.innerText);
        updateDisplay();
    })
})

ClearButton.addEventListener('click',() =>{
    clear();
    updateDisplay();
})

DeleteButton.addEventListener('click',() =>{
    deleteLast();
    updateDisplay();
})

try{
    Equals.addEventListener('click',() =>{
    result = compute(number);
    updateDisplay(result);
    })
}catch( error){
     throw(error);
}


