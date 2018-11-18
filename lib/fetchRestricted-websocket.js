'use strict'

const Mam = require('./mam.node.js')
const IOTA = require('iota.lib.js')
const iota = new IOTA({ 'provider': 'https://pow1.iota.community:443' })
const WebSocket = require('ws')

let mamState = Mam.init(iota)

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', ws => {

    ws.on('message', data => {
        //callback for each fetch
        let message = JSON.parse(data)

        let root = message.root
        let sidekey = message.sidekey

        const logData = data => {
            let toSend = JSON.parse(iota.utils.fromTrytes(data))
            ws.send(JSON.stringify(toSend))
            console.log(toSend)
            console.log('-------------------------------------------------')
        }

        //Fetching async
        const execute = async () => {
            let resp = await Mam.fetch(root, 'restricted', sidekey,logData)
        }

        console.log('\n\nFETCHING DATA!!\n\n', root, sidekey)
        execute()  
    })

})
  
