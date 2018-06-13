// Modules
const api = require('mikronode')

// Config
const config = require('../config/config.json')

const createUser = () => {
  const connection = new api(config.rb.address)

  connection.connect()
  .then(([login]) => {
    return login(config.rb.username, config.rb.password)
  }).then(conn => {
    console.log('teste')
    conn.closeOnDone(true)

    const chan = conn.openChannel('user')

    // channel.write('/ip/address/print')

    // channel.on('done', data => {
    //   console.log(data)
    // })
    // system script run number=1

    // chan.write('/ip/firewall/print');

    chan.write('/ip/hotspot/user', { 'number': 4 })

    // chan.on('done', function (data) {

    //   console.log(data.data[1][1])
    //   // data is all of the sentences in an array.
    //   // data.forEach(function (item) {
    //   //   console.log('Interface/IP: ' + item.data.interface + "/" + item.data.address);
    //   // });

    //   chan.close(); // close the channel. It is not autoclosed by default.
    //   conn.close(); // when closing connection, the socket is closed and program ends.

    // });

    // channel.write('/system/script/run', '=number=1')

    // channel.on('done', data => {
    //   console.log(data)
    // })

    // // channel.write('/tool/user-manager/user/add', '=username=andre', '=password=123456', '=customer=admin')
    // // channel.write('/tool/user-manager/user/create-and-activate-profile', '=customer=admin', '=numbers=andre', '=profile=1Mbps')
    // channel.close()
  })
}

module.exports = {
  createUser
}