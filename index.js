const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')
const AuthRouter = require('./data/routes/auth-router')
const StylistsRouter = require('./data/routes/stylists-router')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const corsOptions = {
  origin: 'http://localhost:3000'
}

server.use(helmet())
server.use(cors(corsOptions))
server.use(express.json())
server.use('/auth', AuthRouter)
server.use('/api/stylists', StylistsRouter)

server.get('/', (req, res) => res.status(200).json({ api: 'up' }))

server.listen(PORT, _ => console.log('Listening on port ' + PORT))

module.exports = server
