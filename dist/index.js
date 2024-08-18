"use strict";
function isDivisibleBy4and8(a) {
    if (a / 4 === 0 && a / 8 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isDivisibleBy4and8(5));
let maxValue = Number.MAX_SAFE_INTEGER;
console.log(maxValue);
var maxNum = BigInt("9007199254740991");
let maxNum1 = BigInt("9007199254740991");
let sum = maxNum + maxNum1;
let diff = maxNum - maxNum1;
let product = maxNum * maxNum1;
let divide = maxNum / maxNum1;
let reminder = maxNum % maxNum1;
console.log(product);
console.log(reminder);
console.log(divide);
console.log(sum);
console.log(diff);
console.log(maxNum);
console.log(maxNum1);
console.log(maxNum + " " + maxNum1);
let num;
num = 10;
num = "prakhar";
console.log(num);
if (typeof num === "boolean") {
    console.log(num);
}
else {
    console.log("hello");
}
function nameUser(name, id) {
    console.log(`welcome my name is ${name} and id is ${id}`);
}
nameUser("Prakhar", 5);
const user = (name, id) => {
    return `welcome my name is ${name} and id is ${id}`;
};
let yellow = user("Prakhar", 78);
console.log(yellow);
const isPalindrom = (palin) => {
    let palindrom = palin.split("").reverse().join("");
    return palindrom === palin;
};
let a = isPalindrom("121");
console.log(a);
//# sourceMappingURL=index.js.map