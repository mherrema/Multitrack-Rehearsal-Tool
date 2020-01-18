import { gql } from "apollo-boost";
import { useGetAllSongsQuery } from '../api/graphql-client';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

const ALL_SONGS = gql`
   query getAllSongs{
        allSongs(where: { state: published }) {
            id,
            title,
            url,
            artist{
                description
            },
            image{
                publicUrl
            }
        }
     }
`;

type SongLinkProps = {
    title: string,
    url: string,
    imageUrl: string,
    artist: string
}

const SongLink: FunctionComponent<SongLinkProps> = ({ url, title, imageUrl, artist }) => {


    return (
        <li>
            <Link href="/songs/[title]" as={`/songs/${url}`}>
                <a>{title}</a>
            </Link>
            <span>{artist}</span>

            <img src={imageUrl} />

        </li>
    )
};

const SongList = () => {
    const { loading, error, data } = useGetAllSongsQuery();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <div>
            {data.allSongs.map(song => {
                let image = song.image ? song.image.publicUrl : null;
                let artist = song.artist ? song.artist.description : null;
                return (
                    <SongLink key={song.id} title={song.title} url={song.url} imageUrl={image} artist={artist} />
                )
            })}
        </div>
    );
}

export default SongList;