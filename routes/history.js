const express = require('express');
const router = express.Router();
const client = require('../dataClient')

/* GET users listing. */
router.get('/', function(req, res, next) {

  client.getHistoricRates('BTC-EUR', (csv) => {
    console.log('BTC ...')
    // fs.writeFileSync('./data/bst.csv', csv)
    res.send(csv)
  })
  
  // res.send('history');


});

module.exports = router;
