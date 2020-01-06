// var keystone = require('keystone');
// var Types = keystone.Field.Types;

// /**
//  * Chord Chart Model
//  * ==========
//  */

// var ChordChart = new keystone.List('Chord Chart', {
// 	map: {
// 		name: 'title'
// 	},
// 	autokey: {
// 		path: 'slug',
// 		from: 'title',
// 		unique: true
// 	},
// });

// ChordChart.add({
// 	title: {
// 		type: String,
// 		required: true
// 	},
// 	state: {
// 		type: Types.Select,
// 		options: 'draft, published, archived',
// 		default: 'draft',
// 		index: true
// 	},
// 	song: {
// 		type: Types.Relationship,
// 		ref: 'Song',
// 		index: true,
// 		required: true,
// 		initial: true
// 	},
// 	publishedDate: {
// 		type: Types.Date,
// 		index: true,
// 		dependsOn: {
// 			state: 'published'
// 		}
// 	},
// 	keys: { type: Types.Relationship, ref: 'SongKey', index: true, many: true },
//   image: { type: Types.CloudinaryImage }
// });

// ChordChart.defaultColumns = 'title, song'

// ChordChart.register();
