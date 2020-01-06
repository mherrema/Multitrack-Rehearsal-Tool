const { Text, Select, Relationship, CalendarDay } = require('@keystonejs/fields');

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
        song: {
            type: Relationship,
            ref: 'Song'
        },
        instrument: {
            type: Relationship,
            ref: 'Instrument'
        },
        videoUrl: {
            type: Text,
            isRequired: true,
        },
        publishedDate: {
            type: CalendarDay
        },
        keys: {
            type: Relationship,
            ref: 'SongKey',
            many: true
        },
    },
};