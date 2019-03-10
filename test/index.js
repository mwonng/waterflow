var func = require('../func/index');


const testEqual = (value, expectation, errorMsg="Failed") => {
  return value === expectation ?
    "Passed" :
    errorMsg
}
module.exports = testEqual





console.log(testEqual(func.generateCups(5).length, 5));

// show all cups
console.log(func.pourWater(1000, func.generateCups(5), 250, 0, 0));

// console.log(testEqual(func.pourWater(1000, func.generateCups(5), 250, 0, 0), 250));

// console.log(testEqual(func.pourWater(1000, func.generateCups(5), 250, 1, 1), 250));

// console.log(testEqual(func.pourWater(1000, func.generateCups(5), 250, 3, 0), 0));

// console.log(testEqual(func.pourWater(1200, func.generateCups(5), 250, 0, 0), 250));
