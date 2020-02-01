import React, { Component } from 'react'
import { SongFile } from '../../api/graphql-client'

interface Props {
    files: SongFile[]
}
interface State {

}

export default class Multitrack extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div>
                Multitracks

                {this.props.files.map(file => {
                    return (
                        <div key={file.id}>
                            <p>{file.file.publicUrl}</p>
                            <p>{file.instrument.name}</p>
                            <p>{file.key.name}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
