const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')
const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')(session)
const passport = require('passport')
require('./config/passport-setup')
require('dotenv').config()

const AuthRouter = require('./data/routes/auth-router')
const StylistsRouter = require('./data/routes/stylists-router')
const PostsRouter = require('./data/routes/posts-router')
const TagsRouter = require('./data/routes/tags-router')
const LikesRouter = require('./data/routes/likes-router')

const PORT = process.env.PORT || 5000

const whitelist = [
  'http://localhost:3000',
  'https://elastic-jackson-088903.netlify.com/'
]
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

const sessionOptions = {
  name: 'hair-care',
  secret: process.env.COOKIE_KEY,
  cookie: {
    maxAge: 1000 * 60 * 60, // hour
    secure: false
  },
  httpOnly: true,
  resave: false,
  saveUninitialized: false,
  store: new KnexSessionStore({
    knex: require('./dbConfig'),
    tablename: 'sessions',
    sidfieldname: 'sid',
    createtable: true,
    clearInterval: 1000 * 60 * 60 //hour
  })
}

server.use(session(sessionOptions))
server.use(passport.initialize())
server.use(passport.session())
server.use(helmet())
server.use(cors(corsOptions))
server.use(express.json())
server.use('/auth', AuthRouter)
server.use('/api/stylists', StylistsRouter)
server.use('/api/posts', PostsRouter)
server.use('/api/tags', TagsRouter)
server.use('/api/likes', LikesRouter)

server.get('/', (req, res) => res.status(200).json({ api: 'up' }))

server.listen(PORT, _ => console.log('Listening on port ' + PORT))

module.exports = server
