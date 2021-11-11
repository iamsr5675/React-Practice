import React, { Component } from 'react'
import ChildContainer from './ChildContainer'

export class ParentContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }
    }

    greetParent = (childName) => {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    

    render() {
        return (
            <div>
                <ChildContainer greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentContainer
