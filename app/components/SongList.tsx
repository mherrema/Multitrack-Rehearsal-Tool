import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import { Query, Song } from '../api/graphql-client';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import slugify from 'slugify';

const ALL_SONGS = gql`
  {
        allSongs(where: { state: published }) {
            id,
            title
        }
     }
`;

type SongLinkProps = {
    title: string,
}

const SongLink: FunctionComponent<SongLinkProps> = ({ title }) => (
    <li>
        <Link href="/songs/[title]" as={`/songs/${slugify(title, { lower: true })}`}>
            <a>{title}</a>
        </Link>
    </li>
);

const SongList = () => {
    const { loading, error, data } = useQuery<Query>(ALL_SONGS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <div>
            {data.allSongs.map(song => (
                <SongLink title={song.title} />
            ))}
        </div>
    );
}

export default SongList;