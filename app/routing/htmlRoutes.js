// dependencies
var path = require('path');

// Export
module.exports = function(app) {
	// console.log('___ENTER htmlRoutes.js___');

	// Home
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// Survey
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};