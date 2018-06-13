// Services
const voucherService = require('../services/voucher-service')

const print = (req, res) => {
  try {
    voucherService.print()
    res.redirect('/voucher')
  } catch (e) {
    res.status(500).send(e)
    console.log(e)
  }
}

module.exports = {
  print
}