import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter2 extends Component {
    render() {
        const { count } = this.props
        return (
            <div>
                <h6>Count: {count}</h6>
            </div>
        )
    }
}

const myStateToProps = state => {
    return {
        count: state.count
    }
}

export default connect(myStateToProps)(Counter2)
