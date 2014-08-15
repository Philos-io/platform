var  TwitterStrategy = require('passport-twitter').Strategy,
      User          = require('../../models/user');

module.exports = function(passport) {
  // load up the user model

  passport.use('twitter', new TwitterStrategy({
      consumerKey: 'yFDw1dYkawNsCBvC1CJzOFeTZ',
      consumerSecret: 'DOfQ6AMQquiTAPCyCquRmMNXyug2eQ83SFWzh1uOxbt63M0il4',
      callbackURL: "/auth/twitter/callback"
    },
    function(token, tokenSecret, profile, done) {

      process.nextTick(function () {
        
        console.log("inside twitter auth");
        // User.findOrCreate(..., function(err, user) {
        //   if (err) { return done(err); }
        //   done(null, user);
        // });

        // To keep the example simple, the user's Twitter profile is returned to
        // represent the logged-in user.  In a typical application, you would want
        // to associate the Twitter account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
      });
    }
  ));
}