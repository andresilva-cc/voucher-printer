# Voucher-Printer
Hotspot voucher printer via MikroTik RouterBoard API

## Description

This project provides an Express application which can be used to generate hotspot vouchers via MikroTik API. It serves a page where the user can click a button to generate the voucher and print it in a thermal printer.

## Requirements

- Node.js
- node-gyp (check [node-gyp](https://github.com/nodejs/node-gyp) for info on how to install)
- Thermal Printer (tested with **EPSON TM-T20**)
- MikroTik RouterBoard
- Touchscreen compatible device (**recommended**)

## Setup

1. Install [node-gyp](https://github.com/nodejs/node-gyp)
2. Install the dependencies with ```npm install``` (or another compatible package manager)
3. Edit ```config/config.json``` to your taste. For settings related to the printer, check [node-thermal-printer](https://github.com/Klemen1337/node-thermal-printer)
4. Inside ```services/rb-service.js``` you'll find a function named createUser where you should implement a user generation strategy and return its data. You can generate random usernames, sequential usernames, any way you choose. In the future, I'll implement some strategies myself and make it available here, but for now, the function just make a connection with the RouterBoard and opens a channel for communication
5. Run with ```npm run start```

## Using

Access ```/voucher``` in a touchscreen compatible device (**recommended**), which renders a page with some info and a button to generate the voucher. Alternatively, you can access ```/api/voucher``` directly to generate the voucher.

## Notes

This project has been developed and tested in **Windows 10 Pro** with the **EPSON TM-T20** thermal printer.
