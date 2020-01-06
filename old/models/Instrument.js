var keystone = require('keystone');

/**
 * Instrument Model
 * ==================
 */

var Instrument = new keystone.List('Instrument', {
	autokey: { from: 'name', path: 'key', unique: true },
  defaultSort: 'name'
});

Instrument.add({
	name: { type: String, required: true },
});

// Instrument.relationship({ ref: 'TutorialVideo', path: 'tutorialvideos', refPath: 'instrument' });

Instrument.register();
