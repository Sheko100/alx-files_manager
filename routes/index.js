const express = require('express')
const app = express()

app.get('/status', (req, res) => {
  res.send('GET request to status')
})

app.get('/stats', (req, res) => {
  res.send('GET request to stats')
})

