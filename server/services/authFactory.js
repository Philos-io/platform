//var User = require('../models/User');


var login = function(req, res){
	res.json({email: 'davy@philos.io', token: 'philosiscomingsoon'});
};

module.exports = {
	login : login
}

