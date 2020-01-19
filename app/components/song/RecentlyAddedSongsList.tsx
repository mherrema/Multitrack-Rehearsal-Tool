import React, { FunctionComponent } from 'react'
import { gql } from "apollo-boost";
import SongList from './SongList';
import { useGetRecentSongsQuery } from '../../api/graphql-client';

interface Props {

}
interface State {

}

const RECENT_SONGS = gql`
   query getRecentSongs{
        allSongs(where: { state: published, orderBy: "publishedDate_DESC", first: 6 }) {
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

const RecentlyAddedSongsList: FunctionComponent<Props> = () => {
    const { loading, error, data } = useGetRecentSongsQuery();

    if (loading) { return <p>Loading...</p> };
    if (error) { return <p>Error Loading Songs</p> };
    if (data) { return <SongList songs={data.allSongs}></SongList> }
}

export default RecentlyAddedSongsList;
