const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const config = require('./config')

const app = next({ dev: config.dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  const entries = []
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())

  server.post('/api/guestbook', (req, res, next) => {
    console.log('route hit!')
    console.log(req.body)
    const { guestName, guestMessage } = req.body
    const success = `${guestName} sucessfully posted to the Guestbook!`
    entries.push({ id: entries.length, guestName, guestMessage })
    console.log(entries)
    res.send(success)
  })

  server.get('/api/guestbook', (req, res, next) => {
    res.json({
      entries
    })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(config.port, (err) => {
    if (err) throw err
    console.log(`> Ready on ${config.fqdn}`)
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
