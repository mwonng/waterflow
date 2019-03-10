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

  pourWater: function (amount, cupArray, glassCap) {

  }
}

module.exports = func;