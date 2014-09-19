var  TwitterStrategy = require('passport-twitter').Strategy,
     User          = require('../../models/user');

module.exports = function(passport, Parse) {
  
  passport.use(new TwitterStrategy({
    consumerKey: 'yFDw1dYkawNsCBvC1CJzOFeTZ',
    consumerSecret: 'DOfQ6AMQquiTAPCyCquRmMNXyug2eQ83SFWzh1uOxbt63M0il4',
    callbackURL: '/auth/twitter/callback'
    },
    function(accessToken, refreshToken, profile, done) {
       process.nextTick(function () {
          addTwitterAccount(null, profile, done)
       });
    }
  ));

  function addTwitterAccount(id, profile, done){
    if (!id) {
      var query = new Parse.Query(Parse.User);

      query.get((id || 'QxakRiCe23'),{
        success: function(user){
            var twitter = {
                username : profile._json.name,
                displayName : profile._json.displayName,
                id : profile.id,
                picture : profile._json.profile_image_url,
                location : profile._json.location,
                language : profile._json.lang
            };

            Parse.User.logIn('davy@philos.io', 'getbetter2', {
              success: function(user) {
                  user.set('twitter', JSON.stringify(twitter));
                  user.set('picture', twitter.picture);
                  user.save();
              },
              error: function(user, error) {
                console.log(error);
              }
            });

            return done(null, profile);
        },
        error: function(res, err){
          console.log(err);
        }
      });
    }
  }

};


