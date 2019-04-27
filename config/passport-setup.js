const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const Stylists = require('../data/helpers/stylistsHelper')
const jwt = require('jsonwebtoken')
const { authenticate } = require('../auth/authenticate')

require('dotenv').config()
passport.serializeUser((user, done) => {
  done(null, user.id)
})
passport.deserializeUser(async (id, done) => {
  const user = await Stylists.findById(id)
  done(null, user.id)
})

passport.use(
  new GoogleStrategy(
    {
      // options for google strategy
      callbackURL: '/auth/google/redirect',
      clientID: process.env.CLIENT_ID || '',
      clientSecret: process.env.CLIENT_SECRET || ''
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id, displayName, name, photos } = profile
      // check if user is already in database
      let exists = await Stylists.findStylist(id)
      // add user
      if (!exists) {
        const result = await Stylists.addStylist({
          google_id: id,
          stylist_name: displayName,
          first_name: name.givenName,
          last_name: name.familyName,
          profile_picture: photos[0].value || ''
        })
        exists = await Stylists.findStylist(id)
        console.log('new user created: ' + JSON.stringify(exists))
        done(null, exists)
      } else {
        console.log(`user is ${JSON.stringify(exists)}`)
        done(null, exists)
      }
    }
  )
)
