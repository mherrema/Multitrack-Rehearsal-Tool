var keystone = require('keystone');

/**
 * Artist Model
 * ==================
 */

var Artist = new keystone.List('Artist', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Artist.add({
	name: { type: String, required: true },
});

Artist.relationship({ ref: 'Song', path: 'songs', refPath: 'artist' });

Artist.register();
