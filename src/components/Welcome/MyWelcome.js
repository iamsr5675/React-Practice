import React, { Component } from 'react'

export class MyWelcome extends Component {
    render() {
        return (
            <div>
                <h1>Saurabh's Class Component {this.props.name}</h1>
            </div>
        )
    }
}

export default MyWelcome
