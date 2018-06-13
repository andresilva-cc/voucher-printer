// Modules
var express = require('express');
var router = express.Router();

// Controllers
const voucherController = require('../controllers/voucher-controller')

// Index - redirects to /voucher
router.get('/', (req, res) => res.redirect('/voucher'))

router.get('/voucher', (req, res) => {
  res.render('voucher', {
    title: 'Voucher'
  })
})

router.get('/api/voucher', voucherController.print )

module.exports = router;
