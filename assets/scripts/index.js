'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)

  const ws = new WebSocket('ws://10.1.7.118:8080')

  ws.onopen = () => {
    console.log('Were connected')
  }

  $('#send').on('click', () => {
    ws.send($('#message').val())
  })

  ws.onmessage = message => {
    console.log(message)
    $('#chat').append('<p>' + message.data + '</p>')
  }
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
