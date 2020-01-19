import React, { Component } from 'react'
import Link from 'next/link';
import CSS from 'csstype';

interface Props {
    artist: string;
    imageUrl: string;
    linkUrl: string;
    title: string;
}
interface State {

}

const itemStyle: CSS.Properties = {
    marginBottom: "1rem"
}

const artistStyle: CSS.Properties = {
    fontWeight: 700,
    fontSize: "0.8rem",
    color: "#999",
    letterSpacing: "3px",
    textTransform: "uppercase"
};

const titleStyle: CSS.Properties = {
    fontSize: "1.6rem"
}

export default class SongListItem extends Component<Props, State> {
    state = {}

    render() {
        let albumArtUrl = this.props.imageUrl ? this.props.imageUrl : "images/album-placeholder.png";
        let artist = this.props.artist ? (<h4 style={artistStyle}>{this.props.artist}</h4>) : null;

        return (
            <div style={itemStyle}>
                <div className="row">

                    <div className="col-4">

                        <img className="img-fluid" src={albumArtUrl} />
                        {/* {{#if image.url}}
						<img src="{{{cloudinaryUrl image width=160 height=160 crop='fit' }}}" className="img">
                                {{ else}}
                                <img src="/images/album-placeholder.png" className="img" />
                                {{/if}} */}
                    </div>

                    <div className="col-8 song__info-container">

                        {artist}
                        <h2 style={titleStyle}>{this.props.title}</h2>
                        {/* <a href={this.props.linkUrl} className="button hollow">Learn</a> */}
                        <Link href="/songs/[slug]" as={`/songs/${this.props.linkUrl}`}>
                            <a className="btn btn--outline">Learn</a>
                        </Link>
                    </div>

                </div>
            </div>

        )
    }
}
