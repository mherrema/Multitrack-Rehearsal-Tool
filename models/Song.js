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

var myStorage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./uploads'), // required; path where the files should be stored
  		publicPath: '/public/uploads', // path where files will be served
	}
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
	image: { type: Types.CloudinaryImage },
	audioFiles: { type: Types.File, storage: myStorage, many: true}
});

Song.defaultColumns = 'title, artist, keys'

Song.register();
