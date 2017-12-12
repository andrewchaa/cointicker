const Gdax = require('gdax')

exports.getHistoricRates = (productId, callback) => {
  
  const publicClient = new Gdax.PublicClient(productId);
  publicClient.getProductHistoricRates({
      'granularity': 86400,
      'start': '2017-12-01',
      'end': '2017-12-12'
    }, (err, res, rates) => {

      if (err) {
        console.log(err)
        return
      }

      var csv = '"date", "low", "high", "open", "close", "volume"\r\n' 
      rates.map((cols) => {
        var date = new Date(0)
        date.setUTCSeconds(cols[0])

        csv += date.toDateString() + ',' + 
          cols[1] + ',' + 
          cols[2] + ',' + 
          cols[3] + ',' + 
          cols[4] + ',' + 
          cols[5] + '\r\n'
      })

      callback(csv)
    })
}

