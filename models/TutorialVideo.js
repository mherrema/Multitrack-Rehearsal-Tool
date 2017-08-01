var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * TutorialVideo Model
 * ==========
 */

var TutorialVideo = new keystone.List('TutorialVideo', {
	map: {
		name: 'title'
	},
	autokey: {
		path: 'slug',
		from: 'title',
		unique: true
	},
});

TutorialVideo.add({
	heading: 'Activities'
}, {
	title: {
		type: String,
		required: true
	}
},
{ heading: 'Activities' },{
	state: {
		type: Types.Select,
		options: 'draft, published, archived',
		default: 'draft',
		index: true
	},
	song: {
		type: Types.Relationship,
		ref: 'Song',
		index: true,
		required: true,
		initial: true
	},
	instrument: {
		type: Types.Relationship,
		ref: 'Instrument',
		index: true,
		required: true,
		initial: true
	},
	videoUrl: {
		type: String,
		required: true,
		initial: true
	},
	publishedDate: {
		type: Types.Date,
		index: true,
		dependsOn: {
			state: 'published'
		}
	},
});

// TutorialVideo.schema.pre('save', function (next) {
//     if (this.song && this.instrument) {
//       var tmpSong = keystone.list('Song').model.findOne(
//       {
//   			id: this.song.id,
//   		})
//     .exec(function(err, res) {
//         this.title = res.title;
//     });
//
//         // this.title = this.song.title + "-" + this.instrument.name;
//
//     }
//     else{
//     next();
//   }
// });

TutorialVideo.defaultColumns = 'title, song, instrument'

TutorialVideo.register();
