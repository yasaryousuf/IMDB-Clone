import React, { Component } from 'react'

export class Parent extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Parent
