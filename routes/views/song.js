var keystone = require('keystone');
var fs = require('fs');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'songs';
	locals.filters = {
		song: req.params.song,
		key: req.query.key,
	};
	locals.data = {
		songs: [],
		key: ""
	};

	console.log(locals.filters);

	// Load the current song
	view.on('init', function(next) {
		var q = keystone.list('Song').model.findOne({
			state: 'published',
			slug: locals.filters.song,
		}).populate('artist keys');

		q.exec(function(err, result) {
			locals.data.song = result;

			if (!locals.filters.key) {
				console.log("not using key filter");
				if (locals.data.song.keys) {
					locals.data.key = locals.data.song.keys[0].name;
				}
				else{
					locals.data.key = "A";
				}
			}
			else{
				console.log("using key filter");
				locals.data.key = locals.filters.key;
			}

			for(var i = 0; i < locals.data.song.keys.length; i++){
				if(locals.data.song.keys[i].name == locals.data.key){
					locals.data.song.keys[i].active = true;
				}
			}

			var path = "public/media/" + locals.data.song.title + " - " + locals.data.key + "/";
			console.log("Media path: " + path);
			fs.readdir(path, function(err, items) {
				var audioFiles = [];
				if(items){
					console.log("found list of items");
				for(var i = 0; i < items.length; i++){
					if(items[i].split('.').pop() == "mp3"){
						console.log("adding audio file: " + items[i]);
						audioFiles.push(items[i]);
					}
				}
			}
			else {
				console.log("could not find list of items");
				console.log(err);
			}

				locals.data.trackList = audioFiles;

				next(err);
			});


		});

	});

	// Load other songs
	view.on('init', function(next) {
		var q = keystone.list('Song').model.find().where('state', 'published').sort('-publishedDate').populate('artist keys').limit('4');

		q.exec(function(err, results) {
			locals.data.songs = results;
			next(err);
		});

	});

	// Render the view
	view.render('song', {
		helpers: {
			json: function(content) {
				return JSON.stringify(content);
			}
		}
	});
};
