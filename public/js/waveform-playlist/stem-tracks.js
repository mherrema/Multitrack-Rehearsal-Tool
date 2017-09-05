var playlist = {};
var trackList = [];
var locationPrefix = "/media/"

function loadTracks(title, key, trackList) {
	console.log("loading track " + title + " " + key);
	console.log(trackList);
	this.trackList = trackList;

	playlist = WaveformPlaylist.init({
		samplesPerPixel: 12000,
		waveHeight: 90,
		container: document.getElementById("playlist"),
		timescale: true,
		state: 'cursor',
		colors: {
			waveOutlineColor: '#efefef'
		},
		controls: {
			show: true, //whether or not to include the track controls
			width: 200 //width of controls in pixels
		},
		zoomLevels: [500, 1000, 3000, 12000],
	});

	var trackArray = [];
	for (var i = 0; i < trackList.length; i++) {
		console.log(trackList[i]);
    trackArray.push({ "src": locationPrefix + title + " - " + key + "/" + trackList[i], "name": trackList[i].replace(/^\d+\s*-*\s*/, '').replace(/\.[^/.]+$/, "")});
	}

	playlist.load(trackArray).then(function() {
		setupEmitter();
		$(".automatic-scroll").click();
		//can do stuff with the playlist.
	});
};
