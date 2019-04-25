const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')
const StylistsRouter = require('./data/routers/stylistsRouter')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const corsOptions = {
  origin: 'http://localhost:3000'
}

server.use(helmet())
server.use(cors(corsOptions))
server.use(express.json())
server.use('/api/stylists', StylistsRouter)

server.get('/', (req, res) => res.status(200).json({ api: 'up' }))

server.listen(PORT, _ => console.log('Listening on port ' + PORT))

module.exports = server
