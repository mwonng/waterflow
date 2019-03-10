var func = {
  generateCups: function (rows) {
    let cupArray = [];
    for (i = 0; i < rows ; i++) {
      cupArray[i]=[]

      for ( j = 0; j <= i ; j ++) {
        cupArray[i].push(0);
      }

    }
    return cupArray;
  },

  pourWater: function (amount, cupArray, glassCap, row, col) {
    let rows = cupArray.length;
    cupArray[0][0] = amount;

    for (i = 0; i < rows ; i++) {
      for (j = 0; j <= i ; j++) {

        if (cupArray[i][j] > glassCap) {
          cupArray[i+1][j] += (cupArray[i][j] - glassCap ) / 2;
          cupArray[i+1][j+1] += (cupArray[i][j] - glassCap ) / 2;
          cupArray[i][j] = glassCap;
        }
      }
    }

    return cupArray;
  }
}

module.exports = func;