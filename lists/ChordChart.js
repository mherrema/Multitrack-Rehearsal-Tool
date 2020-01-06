/**
 * Chord Chart Model
 * ==========
 */

const { CalendarDay, CloudinaryImage, Text, Select } = require('@keystonejs/fields');
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');

const cloudinaryAdapter = new CloudinaryAdapter({
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
    folder: 'album-art',
});

module.exports = {
    fields: {
        title: {
            type: Text,
            isRequired: true,
        },
        state: {
            type: Select,
            options: 'draft, published, archived',
            isRequired: true
        },
        publishedDate: {
            type: CalendarDay
        },
        image: {
            type: CloudinaryImage,
            adapter: cloudinaryAdapter
        },
    },
};

// var ChordChart = new keystone.List('Chord Chart', {
//     map: {
//         name: 'title'
//     },
//     autokey: {
//         path: 'slug',
//         from: 'title',
//         unique: true
//     },
// });

// ChordChart.add({
//     title: {
//         type: String,
//         required: true
//     },
//     state: {
//         type: Types.Select,
//         options: 'draft, published, archived',
//         default: 'draft',
//         index: true
//     },
//     song: {
//         type: Types.Relationship,
//         ref: 'Song',
//         index: true,
//         required: true,
//         initial: true
//     },
//     publishedDate: {
//         type: Types.Date,
//         index: true,
//         dependsOn: {
//             state: 'published'
//         }
//     },
//     keys: { type: Types.Relationship, ref: 'SongKey', index: true, many: true },
//     image: { type: Types.CloudinaryImage }
// });

// ChordChart.defaultColumns = 'title, song'

// ChordChart.register();
