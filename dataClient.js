const Gdax = require('gdax')

exports.getHistoricRates = (productId, callback) => {
  
  const today = new Date()
  const yearAgo = new Date()
  yearAgo.setFullYear(today.getFullYear() - 1)

  const publicClient = new Gdax.PublicClient(productId);
  publicClient.getProductHistoricRates({
      'granularity': 86400,
      'start': yearAgo.toString('YYYY-MM-DD'),
      'end': today.toString('YYYY-MM-DD')
    }, (err, res, rates) => {

      if (err) {
        console.log(err)
        return
      }

      let reversedRates = rates.reverse()

      let csv = '"date", "low", "high", "open", "close", "volume", "range"\r\n' 
      reversedRates.map((cols) => {
        const date = new Date(0)
        date.setUTCSeconds(cols[0])

        const low = cols[1]
        const high = cols[2];
        const open = cols[3];
        const close = cols[4];
        const volumn = cols[5].toFixed(2);
        const range = (high - low).toFixed(2)

        csv += `${date.toDateString()},${low},${high},${open},${close},${volumn},${range}\r\n`
      })

      callback(csv)
    })
}

