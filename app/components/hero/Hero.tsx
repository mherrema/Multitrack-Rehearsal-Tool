import React, { Component } from 'react'
import CSS from 'csstype';

interface Props {
    text: string,
    imageUrl: string
}
interface State {

}



const heroHeadingStyles: CSS.Properties = {
    color: "white",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
    margin: "0 auto"
}

export default class hero extends Component<Props, State> {
    state = {}

    render() {
        let imageUrl = "url(" + this.props.imageUrl + ") center center / cover";
        const heroStyles: CSS.Properties = {
            background: imageUrl,
            minHeight: "400px",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            marginBottom: "2rem",
            display: "flex",
            alignItems: "center",
            textAlign: "center"
        }

        return (
            <div style={heroStyles}>
                <h1 style={heroHeadingStyles}>{this.props.text}</h1>
            </div>
        )
    }
}
