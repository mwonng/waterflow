var func = require('../func/index');


const testEqual = (value, expectation, errorMsg="Failed") => {
  return value === expectation ?
    "Passed" :
    errorMsg
}
module.exports = testEqual



console.log(testEqual(func.generateCups(5).length, 5));
