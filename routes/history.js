const express = require('express');
const router = express.Router();
const client = require('../dataClient')

/* GET users listing. */
router.get('/', function(req, res, next) {

  client.getHistoricRates('BTC-EUR', (csv) => {
    console.log('BTC ...')

    res.setHeader('Content-disposition', 'attachment; filename=btc.csv')
    res.set('Content-Type', 'text/csv')
    res.status(200).send(csv)
  })
  
});

module.exports = router;
