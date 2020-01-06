const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { Text, Checkbox, Password } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const initialiseData = require('./initial-data');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');

const PROJECT_NAME = "multitrack-rehearsal-tool";

const dotenv = require('dotenv');
dotenv.config();

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
  onConnect: initialiseData,
});

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) => Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }
  return { id: user.id };
};
const userIsAdminOrOwner = auth => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};
const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

keystone.createList('User', {
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
});

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});

const ArtistSchema = require('./lists/Artist.js');
keystone.createList('Artist', ArtistSchema);

const ChordChartSchema = require('./lists/ChordChart.js');
keystone.createList('ChordChart', ChordChartSchema);

const InstrumentSchema = require('./lists/Instrument.js');
keystone.createList('Instrument', InstrumentSchema);

const PageSchema = require('./lists/Page.js');
keystone.createList('Page', PageSchema);

const SongSchema = require('./lists/Song.js');
keystone.createList('Song', SongSchema);

const SongKeySchema = require('./lists/SongKey.js');
keystone.createList('SongKey', SongKeySchema);

const TutorialVideoSchema = require('./lists/TutorialVideo.js');
keystone.createList('TutorialVideo', TutorialVideoSchema);

const UserSchema = require('./lists/User.js');
keystone.createList('User', UserSchema);

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      enableDefaultRoute: true,
      // authStrategy,
    }),
  ],
};
