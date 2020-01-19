import React, { Component } from 'react'
import SongListItem from './SongListItem';
import { Song } from '../../../api/graphql-client';


interface Props {
    songs: Song[]
}
interface State {

}

export default class SongList extends Component<Props, State> {

    render() {
        return (
            <div className="row">
                {this.props.songs.map(song => {
                    let image = song.image ? song.image.publicUrl : null;
                    let artist = song.artist ? song.artist.description : null;
                    return (<div className="col-6" key={song.id}>
                        <SongListItem artist={artist} linkUrl={song.url} title={song.title} imageUrl={image}></SongListItem>
                    </div>)

                    // return (
                    //     <SongLink key={song.id} title={song.title} url={song.url} imageUrl={image} artist={artist} />
                    // )
                })}
            </div>
        );
    }
}