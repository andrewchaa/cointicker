const fs = require('fs')
const Gdax = require('gdax')
const client = require('./dataClient')

client.getHistoricRates('BTC-EUR', (csv) => {
  console.log('BTC ...')
  fs.writeFileSync('./data/bst.csv', csv)
})

client.getHistoricRates('ETH-EUR', (csv) => {
  console.log('ETH ...')
  fs.writeFileSync('./data/eth.csv', csv)
})

client.getHistoricRates('LTC-EUR', (csv) => {
  console.log('LTC ...')
  fs.writeFileSync('./data/ltc.csv', csv)
})
