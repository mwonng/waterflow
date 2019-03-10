#!/usr/bin/env node

var func = require('./func');
var rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise(resolve => rl.question(query, (answer) => resolve(answer)));

(async () => {
  let row = await question("which row are you looking for?: ");
  let col = await question("which col are you looking for?: ");
  let k  = await question("how much water  are you going tou pour?: ");

  main(row,col,k);

  rl.close();
})();

const main = (i, j, k) => {
  let glassCapacity = 250;    // preset glass capacity

  // conver input to int
  i = parseInt(i, 10);
  j = parseInt(j, 10);
  k = parseInt(k, 10);

  try {
    if (j > i) {
      throw new Error('j should alwaya smaller than i');
    }

    let cups = func.generateCups(i+2); // add 2 row in case error
    let result = func.pourWater(k, cups, glassCapacity, i, j)

    console.log("the anser answer is -> %s", result);
    return result;

  } catch (e) {
    console.log(e);
    return e;
  }
}
