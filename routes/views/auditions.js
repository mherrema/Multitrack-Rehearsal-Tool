var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'auditions';
	locals.filters = {
		// artist: req.params.artist,
	};
	locals.data = {
		// 	songs: [],
		// 	artists: [],
		//
	};

	// Load all pages
	view.on('init', function(next) {
		var q = keystone
			.list('Page')
			.model.find()
			.where('state', 'published')
			.limit(1);

		q.exec(function(err, results) {
			if (results) {
				locals.data.auditionPage = results[0];
			}
			next(err);
		});
	});

	// Render the view
	view.render('auditions');
};
