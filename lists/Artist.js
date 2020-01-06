// var keystone = require('keystone');

/**
 * Artist Model
 * ==================
 */

// keystone.createList('Artist', {
// 	schemaDoc: 'Artists of songs',
// 	fields: {
// 		name: { type: Text, schemaDoc: 'Name of the artist', isRequired: true },
// 	},
// });

// var Artist = new keystone.List('Artist', {
// 	autokey: { from: 'name', path: 'key', unique: true },
// });

// Artist.add({
// 	name: { type: String, required: true },
// });

// Artist.relationship({ ref: 'Song', path: 'songs', refPath: 'artist' });

// Artist.register();

const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
	fields: {
		description: {
			type: Text,
			isRequired: true,
		},
		songs: {
			type: Relationship,
			ref: "Song.artist",
			many: true
		}
	},
	labelField: "description"
};