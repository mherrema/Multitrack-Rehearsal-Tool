import React, { FunctionComponent } from 'react'
import { gql } from "apollo-boost";
import { useGetSongQuery } from '../../api/graphql-client';
import CSS from 'csstype';

interface Props {
    slug: string
}
interface State {

}

const songContainerStyle: CSS.Properties = {
    marginTop: "2rem"
}

const songInfoContainerStyle: CSS.Properties = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
}

const artistStyle: CSS.Properties = {
    fontWeight: 700,
    fontSize: "1rem",
    color: "#999",
    letterSpacing: "3px",
    textTransform: "uppercase"
};

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
            let imageUrl = song.image ? song.image.publicUrl : "images/album-placeholder.png";

            songPage = (


                < div className="row" >
                    <div className="col-2 song__album-art">
                        {/* {{#if data.song.image.url}} */}
                        {/* <img src="{{{cloudinaryUrl data.song.image width=750 height=450 crop='fit' }}}" className="img-responsive">
                                    {{ else}}
                                    <img src="/images/album-placeholder.png" className="img" />
                                    {{/if}} */}
                        {/* {{{data.song.content.extended}}} */}
                        <img src={imageUrl} className="img-fluid" />

                    </div>
                    <div className="col-10" style={songInfoContainerStyle}>
                        <h5 style={artistStyle}>
                            {artist}
                        </h5>
                        <h1 className="song__title">{song.title}</h1>

                    </div>
                </div >
                //         </div>
                // </div>
            )
        }
    }
    return (
        <div className="container" style={songContainerStyle}>
            {songPage}
        </div>
    )
}

export default SongPage;
