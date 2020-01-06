var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'songs';
	locals.filters = {
		artist: req.params.artist,
	};
	locals.data = {
		songs: [],
		artists: [],
	};

	// Load all songs
	view.on('init', function (next) {

		keystone.list('Artist').model.find().sort('name').exec(function (err, results) {

			if (err || !results.length) {
				return next(err);
			}

			locals.data.artists = results;

			// Load the counts for each category
			async.each(locals.data.artists, function (artist, next) {

				keystone.list('Song').model.count().where('artists').in([artist.id]).exec(function (err, count) {
					artist.songCount = count;
					next(err);
				});

			}, function (err) {
				next(err);
			});
		});
	});

	// Load the current category filter
	view.on('init', function (next) {

		if (req.params.artist) {
			keystone.list('Artist').model.findOne({ key: locals.filters.artist }).exec(function (err, result) {
				locals.data.artist = result;
				next(err);
			});
		} else {
			next();
		}
	});

	// Load the posts
	view.on('init', function (next) {

		var q = keystone.list('Song').paginate({
			page: req.query.page || 1,
			perPage: 30,
			maxPages: 10,
			filters: {
				state: 'published',
			},
		})
			.sort('title')
			.populate('artist keys');

		if (locals.data.artist) {
			q.where('artist').in([locals.data.artist]);
		}

		q.exec(function (err, results) {
			locals.data.songs = results;
			next(err);
		});
	});

	// Render the view
	view.render('songs');
};
