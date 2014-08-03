module.exports = function(env){

	var auth = {
		consumerKey: '', 
		consumerSecret: '',
		accessToken: '',
		accessTokenSecret: ''
	};

	var defaultUser = {
		username: 'davyengone',
		firstname: 'davy',
		lastname: 'engone',
		email: 'davy@philos.io'
	}

	var development = {
		db : 'mongodb://localhost/philos',
		port: process.env.PORT || 9000,
		username: 'davyengone',
		user: defaultUser,
		defaultDirectory: '../../app',
		auth: auth
	};

	var production = {
		db: '',
		port: process.env.PORT || 9000,
		username: 'davyengone',
		user: defaultUser,
		defaultDirectory: './../../dist',
		auth: auth
	};

	return env === "development"? development : production;
}
