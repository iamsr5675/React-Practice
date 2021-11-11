import React, { Component } from 'react'

export class MyMessage extends Component {
    constructor() {
        super()
    
        this.state = {
             name: "Saurabh"
        }
    }

    clickHandler = () =>{
        this.setState({
            name: "Swati"
        })
    }

    clickHandler() {
        
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default MyMessage
