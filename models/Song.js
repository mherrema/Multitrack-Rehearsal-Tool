var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Song Model
 * ==========
 */

var Song = new keystone.List('Song', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	drilldown: 'artist'
});

Song.add({
  title: { type: String, required: true },
  state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
  artist: { type: Types.Relationship, ref: 'Artist', index: true, required: true, initial: true },
  keys: { type: Types.Relationship, ref: 'SongKey', index: true, many: true },
  bpm: { type: Number },
  timeSignature: { type: String },
	length: { type: String },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage }
});

Song.defaultColumns = 'title, artist, keys'

Song.register();
