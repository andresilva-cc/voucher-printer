// Modules
const printer = require('node-thermal-printer')

// Config
const config = require('../config/config.json')

const getPrinter = () => {
  printer.init({
    type: config.printer.type,
    interface: `printer:${config.printer.name}`,
    characterSet: config.printer.characterSet,
    removeSpecialCharacters: config.printer.removeSpecialCharacters,
  })
  return printer
}

const isPrinterConnected = () => {
  const printer = getPrinter()

  printer.isPrinterConnected((isConnected) => {
    return isConnected
  })
}

module.exports = {
  getPrinter,
  isPrinterConnected
}