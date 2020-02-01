import React, { Component } from 'react'
import SongPagination from './paginated/SongPagination'
import PaginatedSongList from './paginated/PaginatedSongList'

interface Props {

}
interface State {
    currentPage: number;
}

export default class AllSongs extends Component<Props, State> {
    state = { currentPage: 1 }

    onPageChange = (page: number) => {
        this.setState({ currentPage: page });
    }

    render() {
        const pageLength = 24;

        return (
            <div>
                <PaginatedSongList page={this.state.currentPage} pageLength={pageLength}></PaginatedSongList>
                <SongPagination songsPerPage={pageLength} onPageChange={this.onPageChange}></SongPagination>
            </div>
        )
    }
}
