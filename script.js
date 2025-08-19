function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);//ASCII中a的编码是从97开始
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65); //ASCII中A的编码是从65开始
}

function getRandomNumbers() {
    return Math.floor(Math.random() * 10); //ASCII 0-9
}

function getRandomSymbols() {
    const symbols = '!@#$%^&*()_+?/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomFunc = {
    hasLower: getRandomLower,
    hasUpper: getRandomUpper,
    hasNumber: getRandomNumbers,
    hasSymbol: getRandomSymbols
}

function generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length) {
    let generatePassword = '';
    const typesCount = hasLower + hasUpper + hasNumber + hasSymbol;
    const typesArr = [{hasLower}, {hasUpper}, {hasNumber}, {hasSymbol}].filter(item => Object.values(item)[0]);
    if (typesCount === 0) {
        return '';
    }

    for (let index = 0; index < length; index += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatePassword += randomFunc[funcName]();
        })
    }

    const finalPassword = generatePassword.slice(0, length);
    return finalPassword;
}

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

generateEl.addEventListener('click', () => {
    const length = Number(lengthEl.value);
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

})

clipboardEl.addEventListener('click', () => {
    const password = resultEl.innerText;
    if (!password) return;
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
})