// Modules
const path = require('path')
const printer = require('node-thermal-printer')

// Config
const config = require('../config/config.json')

// Services
const printerService = require('./printer-service')
const csvService = require('./csv-service')
const rbService = require('./rb-service')

const print = () => {
  const printer = printerService.getPrinter()
  
  // const access = csvService.getAccess()
  rbService.createUser()

  // Title
  printer.alignCenter()
  printer.bold(true)
  printer.setTextQuadArea()
  printer.println('ITAJAÍ STOPOVER')
  printer.newLine()

  // Body
  printer.alignLeft()
  printer.bold(false)
  printer.setTextNormal()
  printer.println('Após se conectar ao hotspot, você precisa\ninserir estas informações')
  printer.println('After connecting to the hotspot, you need to\nenter this information')
  printer.newLine()

  // Table
  printLoginInfo(printer, access[0], access[1], access[2])
  printer.newLine()
  printer.newLine()

  // Logo
  printer.alignCenter()
  printer.printImage(path.join(__dirname, '../assets/logos.png'), (done) => {
    console.log('printing image')
    printer.cut()
    printer.execute(e => {
      return e
    })
  })
}

const printLoginInfo = (printer, user, password, time) => {
  printer.tableCustom([
    { text: 'Usuário / User:', width: 0.75 },
    { text: user, bold: true, width: 0.25 }
  ])
  printer.tableCustom([
    { text: 'Senha / Password:', width: 0.75 },
    { text: password, bold: true, width: 0.25 }
  ])
  printer.tableCustom([
    { text: 'Tempo disponível / Available time:', width: 0.75 },
    { text: time, bold: true, width: 0.25 }
  ])
}

module.exports = {
  print
}