const fs = require('fs')
const Gdax = require('gdax')
const client = require('./client')

client.getHistoricRates('BTC-USD', (csv) => {
  console.log('BTC ...')
  fs.writeFileSync('./data/bst.csv', csv)
})

client.getHistoricRates('ETH-USD', (csv) => {
  console.log('ETH ...')
  fs.writeFileSync('./data/eth.csv', csv)
})

client.getHistoricRates('LTC-USD', (csv) => {
  console.log('LTC ...')
  fs.writeFileSync('./data/ltc.csv', csv)
})
