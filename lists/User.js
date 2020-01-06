const { Checkbox, Password, Text } = require('@keystonejs/fields');

module.exports = {
    fields: {
        name: { type: Text },
        email: {
            type: Text,
            isUnique: true,
        },
        isAdmin: { type: Checkbox },
        password: {
            type: Password,
        },
    },
    // access: {
    //   read: access.userIsAdminOrOwner,
    //   update: access.userIsAdminOrOwner,
    //   create: access.userIsAdmin,
    //   delete: access.userIsAdmin,
    //   auth: true,
    // },
};