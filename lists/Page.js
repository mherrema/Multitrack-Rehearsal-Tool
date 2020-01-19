const { Text, CloudinaryImage, Select, Slug } = require('@keystonejs/fields');
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

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
            isRequired: true
        },
        state: {
            type: Select,
            options: 'draft, published, archived',
            isRequired: true
        },
        image: {
            type: CloudinaryImage,
            adapter: cloudinaryAdapter
        },
        content: {
            type: Wysiwyg
        },
        contactEmail: {
            type: Text
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
    labelField: "title"
};