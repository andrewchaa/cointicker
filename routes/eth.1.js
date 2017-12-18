const express = require('express');
const router = express.Router();
const client = require('../dataClient')

/* GET users listing. */
router.get('/', function(req, res, next) {

  client.getHistoricRates('ETH-EUR', (csv) => {
    console.log('ETH ...')
    
    res.setHeader('Content-disposition', 'attachment; filename=eth.csv')
    res.set('Content-Type', 'text/csv')
    res.status(200).send(csv)
  })  

});

module.exports = router;
