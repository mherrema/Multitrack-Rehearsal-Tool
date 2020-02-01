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
        return (
            <div>
                <PaginatedSongList page={this.state.currentPage} pageLength={2}></PaginatedSongList>
                <SongPagination songsPerPage={2} onPageChange={this.onPageChange}></SongPagination>
            </div>
        )
    }
}
