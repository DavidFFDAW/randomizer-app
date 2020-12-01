const { get } = require("http");

const regExps = {
    numbers: /[0-5][0-1]/,
    textOr: /(a|e|i)/,
    numbersInRange: /[0-9]|[0-5][0-1]/,
};
const getRandomNumber = (min,max) => Math.floor(Math.random() * (max - min)) + min;

const testerVariable = getRandomNumber(0,51);

const resultOfTestingRegExp = (_reg) => console.log(_reg.test(testerVariable));

resultOfTestingRegExp(regExps.numbersInRange);