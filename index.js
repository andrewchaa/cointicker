const fs = require('fs')
const Gdax = require('gdax')
const publicClient = new Gdax.PublicClient();

// publicClient
//   .getProducts((err, response, data) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(data)
//     }
//   })

publicClient
  .getProductHistoricRates({
      'granularity': 86400,
      'start': '2017-12-01',
      'end': '2017-12-12'
    }, (err, res, rates) => {
    // console.log(rates)

    var csv = ''
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

    console.log(csv)
    fs.writeFileSync('bitcoin.csv', csv)
  })
