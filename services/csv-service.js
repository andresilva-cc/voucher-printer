// Modules
const path = require('path')
const fs = require('fs')
const parse = require('csv-parse/lib/sync')

const fileName = 'users.csv'

const getAccess = () => {
  // Get and parse data
  const data = fs.readFileSync(path.join(__dirname, '../assets/') + fileName)
  var rows = parse(data)

  // Remove header (if any)
  removeHeader(rows)

  // Get the first item
  const access = rows[0]

  // Remove the first item from the .csv

  return access
}

const removeHeader = (rows) => {
  if(rows[0][0] === 'Login')
  rows.shift()
}

module.exports = {
  getAccess
}