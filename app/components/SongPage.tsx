import React, { FunctionComponent } from 'react'
import { gql } from "apollo-boost";
import { useGetSongQuery, Song } from '../api/graphql-client';

interface Props {
    slug: string
}
interface State {

}

const GET_SONG = gql`
   query getSong($url: String!){
    allSongs(where: {url: $url}, first: 1){
        id,
        title,
        artist{
            description
        },
        image{
            publicUrl
        }
    }
}
`;

const SongPage: FunctionComponent<Props> = ({ slug }) => {
    const { loading, error, data } = useGetSongQuery({
        variables: {
            url: slug
        }
    });
    if (loading || error) {
        return <div>Loading...</div>
    }

    let songPage;
    if (data) {
        if (data.allSongs.length) {
            let song = data.allSongs[0];

            let artist = song.artist ? song.artist.description : null;
            let image = song.image ? <img src={song.image.publicUrl} /> : null;

            songPage = (<div>
                <h1>{song.title}</h1>
                <h2>{artist}</h2>
                {image}
            </div>
            )
        }
    }
    return (
        <div>
            {songPage}
        </div>
    )
}

export default SongPage;
