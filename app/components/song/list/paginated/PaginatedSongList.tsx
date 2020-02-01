import React, { Component, FunctionComponent } from 'react'
// import SongPagination from './paginated/SongPagination'
import { gql } from "apollo-boost";
import { useGetAllSongsQuery } from '../../../../api/graphql-client';
import SongList from '../SongList';

interface Props {
    page: number;
    pageLength: number;
}

const ALL_SONGS = gql`
   query getAllSongs($offset: Int, $pageLength: Int){
        allSongs(where: { state: published }, orderBy: "title", first: $pageLength, skip: $offset ) {
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

const PaginatedSongList: FunctionComponent<Props> = ({ page, pageLength }) => {
    const skip = (page - 1) * pageLength;
    let { loading, error, data, fetchMore } = useGetAllSongsQuery({ variables: { pageLength: pageLength, offset: skip }, fetchPolicy: "cache-and-network" });

    if (loading) { console.log("loading " + page + " " + pageLength + " " + skip); return <p>Loading...</p> };
    if (error) { return <p>Error Loading Songs</p> };

    return (<div>
        <SongList songs={data.allSongs}></SongList>
    </div>)

}

export default PaginatedSongList;
