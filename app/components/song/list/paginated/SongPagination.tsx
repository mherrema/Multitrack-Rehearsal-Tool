import React, { FunctionComponent, useState } from 'react'
import { gql } from "apollo-boost";
import { useGetAllSongsMetaQuery } from '../../../../api/graphql-client';
import PaginationWrapper from '../../../general/PaginationWrapper';

interface Props {
    songsPerPage: number;
    onPageChange: Function;
}
interface State {

}

const ALL_SONGS_META = gql`
   query getAllSongsMeta{
        _allSongsMeta(where: { state: published }) {
            count
        }
     }
`;


const SongPagination: FunctionComponent<Props> = ({ songsPerPage, onPageChange }) => {
    const { loading, error, data } = useGetAllSongsMetaQuery();

    if (loading) { return <p>Loading...</p> };
    if (error) { return <p>Error Loading Songs</p> };
    if (data) {
        let songCount = (data._allSongsMeta || {}).count;

        let pageCount = songCount ? Math.ceil(songCount / songsPerPage) : 1;

        return (<div>
            <PaginationWrapper pageCount={pageCount} onPageChange={onPageChange}></PaginationWrapper>
        </div>)
    }
}

export default SongPagination;
