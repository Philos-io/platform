var  TwitterStrategy = require('passport-twitter').Strategy,
      User          = require('../../models/user');

module.exports = function(passport) {
  // load up the user model

  // passport.use('twitter', new TwitterStrategy({
  //     consumerKey: 'yFDw1dYkawNsCBvC1CJzOFeTZ',
  //     consumerSecret: 'DOfQ6AMQquiTAPCyCquRmMNXyug2eQ83SFWzh1uOxbt63M0il4',
  //     callbackURL: "/auth/twitter/callback"
  //   },
  //   function(token, tokenSecret, profile, done) {

  //     process.nextTick(function () {
        
  //       console.log("inside twitter auth");
  //       // User.findOrCreate(..., function(err, user) {
  //       //   if (err) { return done(err); }
  //       //   done(null, user);
  //       // });

  //       // To keep the example simple, the user's Twitter profile is returned to
  //       // represent the logged-in user.  In a typical application, you would want
  //       // to associate the Twitter account with a user record in your database,
  //       // and return that user instead.
  //       return done(null, profile);
  //     });
  //   }
  // ));
  
  var options = {
    consumerKey: 'yFDw1dYkawNsCBvC1CJzOFeTZ',
    consumerSecret: 'DOfQ6AMQquiTAPCyCquRmMNXyug2eQ83SFWzh1uOxbt63M0il4',
    callbackURL: "/auth/twitter/callback"
  };

  function verify(token, tokenSecret, profile, done) {
    User.findOne({ 'twitter.displayName' : profile.displayName }, function(err, user) {
        // if there are any errors, return the error
        if (err){
            return done(err);
        }

        // check to see if theres already a user with that email
        if (user) {
            return done(null, false, user);
        } else {

          console.log(profile._json);
          // if there is no user with that email
          // create the user
          var newUser            = new User();

          // set the user's local credentials
          newUser.local.email    = "";                    
          newUser.fullName = profile._json.name;
          console.log(profile._json.name);
          newUser.twitter.displayName = profile._json.displayName;
          newUser.twitter.id = profile.id;
          console.log(profile._json.id);
          newUser.twitter.image = profile._json.profile_image_url;
          console.log(profile._json.profile_image_url);
          newUser.twitter.location = profile._json.location;
          console.log(profile._json.location);
          newUser.twitter.language = profile._json.lang;


          // save the user
          newUser.save(function(err) {
            if (err)
                throw err;
            return done(null, newUser);
          });
        }

    });
  }


  passport.use(new TwitterStrategy(options,verify));

}


