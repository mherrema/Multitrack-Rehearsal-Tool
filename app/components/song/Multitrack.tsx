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
                //@ts-ignore
                document.querySelector(".automatic-scroll").click();
                // $(".playlist__loading").css("display", "none");
                //can do stuff with the playlist.
            });
        }, 2000);

        return (
            <div>
                {/* <div className="button-group playback-controls"> */}
                <div className="playlist-top-bar">
                    <div className="playlist-toolbar">
                        <div className="playback-controls">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button className="btn-pause button"><i className="fa fa-pause"></i></button>
                                <button className="btn-play button"><i className="fa fa-play"></i></button>
                                <button className="btn-stop button"><i className="fa fa-stop"></i></button>
                                <button className="btn-rewind button"><i className="fa fa-fast-backward"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* </div> */}
                <div className="checkbox" style={{ display: "none" }}>
                    <label>
                        <input type="checkbox" className="automatic-scroll" /> Automatic Scroll
			    </label>
                </div>
                <div id="playlist"></div>
                {/* {this.props.files.map(file => {
                    return (
                        <div key={file.id}>
                            <p>{file.file.publicUrl}</p>
                            <p>{file.instrument.name}</p>
                            <p>{file.key.name}</p>
                        </div>
                    )
                })} */}
            </div>
        )
    }
}
