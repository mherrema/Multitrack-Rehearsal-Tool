// var keystone = require('keystone');

// /**
//  * SongKey Model
//  * ==================
//  */

// var SongKey = new keystone.List('SongKey', {
// 	autokey: { from: 'name', path: 'key', unique: true },
//   defaultSort: 'name',
// 	// hidden: true,
// });

// SongKey.add({
// 	name: { type: String, required: true },
// });

// SongKey.relationship({ ref: 'Song', path: 'songs', refPath: 'keys' });

// SongKey.register();
