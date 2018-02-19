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

// var myStorage = new keystone.Storage({
// 	adapter: keystone.Storage.Adapters.FS,
// 	fs: {
// 		path: keystone.expandPath('./uploads'), // required; path where the files should be stored
//   		publicPath: '/public/uploads', // path where files will be served
// 	}
// });


var s3Storage = new keystone.Storage({
  adapter: require('keystone-storage-adapter-s3'),
  s3: {
    s3path: 'uploads',
		key: 'AKIAILMQQ2SFYO6YA72A',
    secret: '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',
    bucket: 'ada-worship-test2',
		region: 'us-east-1',
    headers: {
      'x-amz-acl': 'public-read',
    },
		generateFilename: keystone.Storage.originalFilename
  },
	schema: {
    url: true, // optional; generate & store a public URL
  },
});

Song.add({
  title: { type: String, required: true },
  state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
  artist: { type: Types.Relationship, ref: 'Artist', index: true, required: true, initial: true },
  keys: { type: Types.List,
		fields:{
			key: {type: Types.Relationship, ref: 'SongKey', index: true, many: true},
			tracks: {
				type: Types.List,
				fields:{
					track: { type: Types.File, storage: s3Storage }
				}
			}
		}
	},
  bpm: { type: Number },
  timeSignature: { type: String },
	length: { type: String },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage },
	track1: { type: Types.File, storage: s3Storage }
});

Song.defaultColumns = 'title, artist, keys'

Song.schema.pre('save', function(next) {
  var mySong = this,
      err;

  //debug('saving Song:', mySong);
  if (mySong.state === 'published') {
    if (!mySong.publishedDate) {
      err = new Error('Cannot publish a song without a published date.');
      next(err);
    }
  }
  next();
});

Song.register();
