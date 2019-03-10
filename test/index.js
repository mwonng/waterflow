var func = require('../func/index');


const testEqual = (value, expectation, errorMsg="Failed") => {
  return value === expectation ?
    "Passed" :
    errorMsg
}
module.exports = testEqual





// show all cups
console.log("show all cups", func.pourWater(1000, func.generateCups(5), 250, 0, 0));

console.log("Pour water opion 1 ->", testEqual(func.pourWater(1000, func.generateCups(5), 250, 0, 0), 250));

console.log("Pour water opion 2 ->", testEqual(func.pourWater(1000, func.generateCups(5), 250, 1, 1), 250));

console.log("Pour water opion 3 ->", testEqual(func.pourWater(1000, func.generateCups(5), 250, 3, 0), 0));

console.log("Pour water opion 4 ->", testEqual(func.pourWater(2200, func.generateCups(5), 250, 2, 0), 250));
