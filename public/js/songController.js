$(document).ready(function() {
	var playlist = WaveformPlaylist.init({
		samplesPerPixel: 12000,
		waveHeight: 90,
		container: document.getElementById("playlist"),
		timescale: true,
		state: 'cursor',
		colors: {
			waveOutlineColor: '#E0EFF1'
		},
		controls: {
			show: true, //whether or not to include the track controls
			width: 200 //width of controls in pixels
		},
		zoomLevels: [500, 1000, 3000, 12000]
	});

	playlist.load([{
			"src": "/media/Close - E/01 Click.mp3",
			"name": "Click",
			"gain": 0.75,
			"muted": false,
			"soloed": false
		},
		{
			"src": "/media/Close - E/02 Cue.mp3",
			"name": "Cue"
		},
		{
			"src": "/media/Close - E/03 Drums.mp3",
			"name": "Drums"
		},
		{
			"src": "/media/Close - E/06 Rhythm ELEC.mp3",
			"name": "Rhythm"
		},
		{
			"src": "/media/Close - E/07 Lead ELEC.mp3",
			"name": "Lead"
		},
		{
			"src": "/media/Close - E/08 Live Keys.mp3",
			"name": "Keys"
		},
		{
			"src": "/media/Close - E/09 Tracks.mp3",
			"name": "Tracks"
		},
		{
			"src": "/media/Close - E/10 Synth Bass.mp3",
			"name": "Synth Bass"
		},
		{
			"src": "/media/Close - E/11 Bass.mp3",
			"name": "Bass"
		},
		{
			"src": "/media/Close - E/12 BGV.mp3",
			"name": "BGV"
		},
		{
			"src": "/media/Close - E/13 Lead Vocal.mp3",
			"name": "Lead Vocal"
		}
	]).then(function() {
		//can do stuff with the playlist.
	});
});
