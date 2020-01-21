const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./config/keys')
const app = express()
passport.use(new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log('acc ', accessToken)
    console.log('ref ', refreshToken)
    console.log('prof ', profile)
}));
//need client id and client secret for google strategy

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

app.get('/auth/google/callback', passport.authenticate('google'))
const PORT = process.env.PORT || 5000;
app.listen(PORT)