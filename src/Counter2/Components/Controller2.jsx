import React, { Component } from 'react'
import { connect } from 'react-redux'

class Controller2 extends Component {
    render() {
        const { add, sub } = this.props
        return (
            <div>
                <button className="btn btn-sm mx-1" onClick={() => sub()}>Decrement</button>
                <button className="btn btn-sm mx-1" onClick={() => add()}>Increment</button>
            </div>
        )
    }
}

const dispatchToProps = dispatch => {
    return {
        add: () => {
            dispatch({
                type: 'Increment'
            })
        },
        sub: () => {
            dispatch({
                type: 'Decrement'
            })
        }
    }
}

export default connect(null, dispatchToProps)(Controller2)
