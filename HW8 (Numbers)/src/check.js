import {
  getFixedValue,
  getFlooroCeil,
  getSquareOfCircle,
  minMaxMultiply,
  randomizer,
} from './index.js';

const minMaxMultiplyResult = minMaxMultiply(2, 3, 4, 5);

console.log(minMaxMultiplyResult); // 10

const square = getSquareOfCircle(4);

console.log(square); // 50.26548245743669

const fixedValue = getFixedValue(3.2345, 3);

console.log(fixedValue); // 2.235

console.log(getFlooroCeil(3.235)); // 4
console.log(getFlooroCeil(4.235)); // 4

console.log(randomizer(2, 5)); // от 2 до 5, не знаю сколько)
