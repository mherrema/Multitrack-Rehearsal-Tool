/**
 * Song File Model
 * ==========
 */

const { File, Relationship } = require('@keystonejs/fields');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');

const fileAdapter = new LocalFileAdapter({
    src: './app/public/media',
    path: '/media'
})

module.exports = {
    fields: {
        file: {
            type: File,
            adapter: fileAdapter,
            hooks: {
                beforeChange: ({ existingItem = {} }) => fileAdapter.delete(existingItem),
            },
        },
        key: {
            type: Relationship,
            ref: 'SongKey'
        },
        instrument: {
            type: Relationship,
            ref: 'Instrument'
        },
        song: {
            type: Relationship,
            ref: "Song.songFiles"
        }
    },
    hooks: {
        afterDelete: ({ existingItem = {} }) => fileAdapter.delete(existingItem),
    },
    labelResolver: item => item.file.originalFilename
};