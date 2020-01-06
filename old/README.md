# Multitrack-Rehearsal-Tool #
Multitrack rehearsal tool built for churches by [Ada Bible Church](http://adabible.org/) on the [Keystone.js](keystonejs.com) CMS Platform. [KeystoneJS](http://keystonejs.com) is a powerful Node.js content management system and web app framework built on [express](http://expressjs.com) and [mongoose](http://mongoosejs.com). Keystone makes it easy to create sophisticated web sites and apps, and comes with a beautiful auto-generated Admin UI.

## Use Case ##
This app provides a method for churches to publish their tracks online to give their musicians an easy way to log on and rehearse. Only desktop browsers are supported, as mobile browsers cannot reliably process the song data. Users can control volume, mute, or solo individual tracks, as well as play, pause, stop, and scrub through the songs by clicking in the timeline.

## Setup ##
Follow the steps in the Keystone documentation to get the CMS up and running, including connecting to the database and setting up an admin user. Replace the header logo at /public/images/logo.svg.

### Managing Song Files ##
Unfortunately Keystone does not reliably support a situation where you can add a key to a song and add tracks beneath that item. This is something that I am working on resolving, but don't have an ETA. 

Navigate to the /public/media folder. Create a folder for each song and key. The format for a folder name is “Song Name - Key”. An example folder name is “What A Beautiful Name - D”. Files will not be found if the song name does not match exactly. For example if the song name is “In Christ Alone” and the files are located in a folder “In Christ Alone (2017)”, they will not match. Likewise, capitalization must match.

Tracks in the folder should be in mp3 format, named “TrackNumber Instrument.mp3”.

## Screenshots

![Song List](http://165.227.213.127/media/song-list.png)

![Song Page](http://165.227.213.127/media/song-page.png)
