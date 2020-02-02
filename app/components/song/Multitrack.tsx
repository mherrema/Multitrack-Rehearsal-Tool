import React, { Component } from 'react'
import { SongFile } from '../../api/graphql-client'
import setupEmitter from "../../js/emitter";
import WaveformPlaylist from "../../js/waveform-playlist.var";

interface Props {
    files: SongFile[]
}
interface State {

}

export default class Multitrack extends Component<Props, State> {
    state = {}

    render() {
        var playlist = {};
        const title = "king of my heart";
        const key = "a"
        console.log("loading track " + title + " " + key);
        // console.log(trackList);
        // this.trackList = trackList;

        window.setTimeout(() => {
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
                zoomLevels: [12000],
            });

            //@ts-ignore
            var trackArray = [];
            trackArray.push({ "src": this.props.files[0].file.publicUrl, "name": "test" })
            // for (var i = 0; i < trackList.length; i++) {
            //     console.log(trackList[i]);
            //     trackArray.push({ "src": locationPrefix + title + " - " + key + "/" + trackList[i], "name": trackList[i].replace(/^\d+\s*-*\s*/, '').replace(/\.[^/.]+$/, "") });
            // }

            //@ts-ignore
            playlist.load(trackArray).then(() => {
                setupEmitter(playlist);
                // $(".automatic-scroll").click();
                // $(".playlist__loading").css("display", "none");
                //can do stuff with the playlist.
            });
        }, 2000);

        return (
            <div>
                Multitracks
                {/* <div className="button-group playback-controls"> */}
                <button className="btn-pause button btn-warning"><i className="fa fa-pause"></i>Pause</button>
                <button className="btn-play button btn-success"><i className="fa fa-play"></i>Play</button>
                <button className="btn-stop button btn-danger"><i className="fa fa-stop"></i>Stop</button>
                {/* </div> */}
                <div className="checkbox">
                    <label>
                        <input type="checkbox" className="automatic-scroll" /> Automatic Scroll
			    </label>
                </div>

                <div id="playlist"></div>
                {this.props.files.map(file => {
                    return (
                        <div key={file.id}>
                            <p>{file.file.publicUrl}</p>
                            <p>{file.instrument.name}</p>
                            <p>{file.key.name}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
