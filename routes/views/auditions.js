var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

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

	// Load all songs
	view.on('init', function (next) {

		// keystone.list('Artist').model.find().sort('name').exec(function (err, results) {
    //
		// 	if (err || !results.length) {
		// 		return next(err);
		// 	}
    //
		// 	locals.data.artists = results;
    //
		// 	// Load the counts for each category
		// 	async.each(locals.data.artists, function (artist, next) {
    //
		// 		keystone.list('Song').model.count().where('artists').in([artist.id]).exec(function (err, count) {
		// 			artist.songCount = count;
		// 			next(err);
		// 		});
    //
		// 	}, function (err) {
		// 		next(err);
		// 	});
		// });
    next();
	});



	// Render the view
	view.render('auditions');
};
