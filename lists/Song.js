const { CloudinaryImage, Integer, Select, Relationship, Text, CalendarDay, Slug } = require('@keystonejs/fields');
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
            type: CalendarDay,
            access: {
                read: true,
                update: false,
                create: false
            },
        },
        image: {
            type: CloudinaryImage,
            adapter: cloudinaryAdapter
        },
        url: {
            access: {
                read: true,
                update: true,
                create: false
            },
            type: Slug,
            regenerateOnUpdate: true
        }
    },
    hooks: {
        resolveInput: async (req) => {
            if (req.resolvedData) {
                if (req.resolvedData.state == 'published' && !req.resolvedData.publishedDate) {
                    req.resolvedData.publishedDate = new Date().
                        toLocaleString('en-us', { year: 'numeric', month: '2-digit', day: '2-digit' }).
                        replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');
                }
            }
            return req.resolvedData;
        }
    },
    labelField: "title"
};