let userNum = +prompt(`Enter your num`, 123);
const firstNum = Math.floor(userNum / 100);
const secondNum = Math.floor(userNum / 10) % 10;
const thirdNum = Math.floor(userNum % 10);

console.log(`${firstNum} ${secondNum} ${thirdNum}`);

if (firstNum === secondNum && secondNum === thirdNum) {
  alert(`All digits are equal`);
} else {
  alert(`All digits are not equal`);
}

if (firstNum === secondNum) {
  alert(`Only first digit and second digit are equal `);
} else if (secondNum === thirdNum) {
  alert(`Only second digit and third digit are equal`);
} else if (firstNum === thirdNum) {
  alert(`Only second digit and third digit are equal`);
}
