const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const Stylists = require('../data/helpers/stylistsHelper')
require('dotenv').config()

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
      console.log('passport callback function fired')
      // check if user is already in database
      const exists = await Stylists.findStylist(id)
      // add user
      if (!exists) {
        const newUser = await Stylists.addStylist({
          google_id: id,
          stylist_name: displayName,
          first_name: name.givenName,
          last_name: name.familyName,
          profile_picture: photos[0].value || ''
        })
        console.log('new user created: ' + newUser)
      } else console.log(`user ${displayName}(${id}) already exists`)
    }
  )
)
