// const resultEl = document.getElementById('result')
// const lengthEl = document.getElementById('length')
// const uppercaseEl = document.getElementById('uppercase')
// const lowercaseEl = document.getElementById('lowercase')
// const numbersEl = document.getElementById('numbers')
// const symbolsEl = document.getElementById('symbols')
// const generateEl = document.getElementById('generate')
// const clipboardEl = document.getElementById('clipboard')

// const randomFunc = {
//     lower: getRandomLower,
//     upper: getRandomUpper,
//     number: getRandomNumber,
//     symbol: getRandomSymbol
// }

// let passwordArray = "";
// let finalPassword = "";
// let errorTag = document.createElement("h2");

// clipboardEl.addEventListener('click', () => {
//     let copiedData = resultEl.innerText;
//     if(copiedData){
//         navigator.clipboard.writeText(copiedData)
//         .then(alert("Password copied sucessfully..! 😊"));
//     }else{
//         alert("Oops..! 😢 No Password Found.")
//     }
// })

// generateEl.addEventListener('click', () => {
//     if(resultEl.innerText.length !== 0){
//         resultEl.innerText = '';
//         finalPassword = ""
//     }
//     let selectedLength = lengthEl.value;
//     let lower = lowercaseEl.checked;
//     let upper = uppercaseEl.checked;
//     let number = numbersEl.checked;
//     let symbol = symbolsEl.checked;

//     let password = generatePassword(lower,upper,number,symbol,selectedLength)
//     resultEl.innerText = password;
//     passwordArray = ""
// })

// function generatePassword(lower, upper, number, symbol, length) {
//     errorTag.innerText = '';
//     if(lower){
//         getRandomLower()
//     }
//     if(upper){
//         getRandomUpper()
//     }
//     if(number){
//         getRandomNumber()
//     }
//     if(symbol){
//         getRandomSymbol()
//     }
//     if(!lower && !upper && !number && !symbol){
//         console.log("here");
//         errorTag.style.color = "red"
//         errorTag.innerText = "Please Select different Combinations";
//         let settings = document.querySelector(".settings");
//         settings.appendChild(errorTag)
//     }
//     for (let i = 0 ; i < length; i++){
//         // let randomNumber = Math.floor(Math.random() * passwordArray.length);
//         // finalPassword += passwordArray.substring(randomNumber,randomNumber+1);
//         //Another Logic
//         finalPassword += passwordArray[Math.floor(Math.random() * passwordArray.length)]
//     }
//     return finalPassword;
// }

// function getRandomLower() {
//     let lowerChars = "abcdefghijklmnopqrstuvwxyz"
//     passwordArray += lowerChars
// }

// function getRandomUpper() {
//     let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     passwordArray += upperChars
// }

// function getRandomNumber() {
//     let numbers = "0123456789"
//     passwordArray += numbers
// }

// function getRandomSymbol() {
//     let symbols = "!@#$%^&*()"
//     passwordArray += symbols
// }

const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower(),
  upper: getRandomUpper(),
  number: getRandomNumber(),
  symbol: getRandomSymbol(),
};



clipboardEl.addEventListener("click", () => {});

generateEl.addEventListener("click", () => {
    let lower = lowercaseEl.checked;
let upper = uppercaseEl.checked;
let number = numbersEl.checked;
let symbol = symbolsEl.checked;
  let password = generatePassword(lower, upper, number, symbol, lengthEl.value);
  resultEl.innerHTML = password;
});

function generatePassword(lower, upper, number, symbol, length) {
  let result = "";
  let checkboxArray = [lower, upper, number, symbol];
  let characters = "";
  checkboxArray.map((item, index) => {
    if (item) {
        characters += Object.values(randomFunc)[index];
    }
  });

  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    result += characters.substring(randomNumber, randomNumber + 1);
  }

  return result;
}

function getRandomLower() {
  return "abcdefghijklmnopqrstuvwxyz";
}

function getRandomUpper() {
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

function getRandomNumber() {
  return "0123456789";
}

function getRandomSymbol() {
  return "!@#$%^&*";
}