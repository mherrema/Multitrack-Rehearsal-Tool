import React, { Component } from 'react'
import CSS from 'csstype';

interface Props {

}
interface State {

}

const heroStyles: CSS.Properties = {
    background: "url(/images/hero-bg.jpg)",
    minHeight: "400px",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    marginBottom: "2rem",
    display: "flex",
    alignItems: "center",
    textAlign: "center"
}

const heroHeadingStyles: CSS.Properties = {
    color: "white",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
    margin: "0 auto"
}

export default class hero extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div style={heroStyles}>
                <h1 style={heroHeadingStyles}>Welcome to the Multitrack Rehearsal Tool</h1>
            </div>
        )
    }
}
