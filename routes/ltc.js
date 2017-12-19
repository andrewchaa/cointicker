const express = require('express');
const router = express.Router();
const client = require('../dataClient')

/* GET users listing. */
router.get('/', function(req, res, next) {

  client.getHistoricRates('LTC-EUR', (csv) => {
    console.log('LTC ...')

    res.setHeader(
      'Content-disposition', 
      `attachment; filename=ltc-${new Date().toISOString().split('T')[0]}.csv`
    )
    res.set('Content-Type', 'text/csv')
    res.status(200).send(csv)
  })
    

});

module.exports = router;
