import React, { Component } from 'react'

export class Parent extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Parent
