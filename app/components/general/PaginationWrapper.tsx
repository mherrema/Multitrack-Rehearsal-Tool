import React, { Component } from 'react'
import Pagination from 'react-bootstrap/Pagination'

interface Props {
    pageCount: number;
    onPageChange: Function;
}
interface State {
    currentPage: number;
}

export default class PaginationWrapper extends Component<Props, State> {
    state = { currentPage: 1 };

    setPage(pageNumber: number) {
        this.setState({ currentPage: pageNumber });
        this.props.onPageChange(pageNumber);
    }

    render() {
        let first;
        if (this.state.currentPage > 2) {
            first = (<Pagination.First onClick={this.setPage.bind(this, 1)} />);
        }

        let prev;
        if (this.state.currentPage > 1) {
            prev = (<Pagination.Prev onClick={this.setPage.bind(this, this.state.currentPage - 1)} />);
        }

        let next;
        if (this.state.currentPage < this.props.pageCount) {
            next = (<Pagination.Next onClick={this.setPage.bind(this, this.state.currentPage + 1)} />);
        }

        let last;
        if (this.state.currentPage < this.props.pageCount - 1) {
            last = (<Pagination.Last onClick={this.setPage.bind(this, this.props.pageCount)} />);
        }

        return (
            <div>
                <Pagination>
                    {first}
                    {prev}
                    {[...Array.from(Array(this.props.pageCount + 1).keys())].slice(1).map(page => {
                        return <Pagination.Item
                            key={page}
                            active={page === this.state.currentPage}
                            onClick={this.setPage.bind(this, page)}>
                            {page}
                        </Pagination.Item>
                    })}
                    {next}
                    {last}
                </Pagination>
            </div>
        )
    }
}
