const { CloudinaryImage, Integer, Select, Relationship, Text, CalendarDay } = require('@keystonejs/fields');
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
        artist: {
            type: Relationship,
            ref: 'Artist.songs'
        },
        keys: {
            type: Relationship,
            ref: 'SongKey',
            many: true
        },
        bpm: {
            type: Integer
        },
        timeSignature: {
            type: Text
        },
        length: {
            type: Text
        },
        publishedDate: {
            type: CalendarDay
        },
        image: {
            type: CloudinaryImage,
            adapter: cloudinaryAdapter
        },
    },
    labelField: "title"
};