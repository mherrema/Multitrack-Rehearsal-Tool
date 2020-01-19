const { Text, Slug } = require('@keystonejs/fields');

module.exports = {
    fields: {
        name: {
            type: Text,
            isRequired: true,
        },
        value: {
            type: Text,
            isRequired: true
        },
        slug: {
            access: {
                read: true,
                update: true,
                create: false
            },
            type: Slug,
            regenerateOnUpdate: true
        }
    },
};