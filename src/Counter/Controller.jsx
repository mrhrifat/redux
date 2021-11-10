import React, { Component } from 'react'
import { connect } from 'react-redux'

class Controller extends Component {
    render() {
        const { add, sub } = this.props
        return (
            <div className='d-flex align-items-center justify-content-center p-1'>
                <button className="btn btn-sm btn-danger mx-1" onClick={() => sub()}>Decrement</button>
                <button className="btn btn-sm btn-success mx-1" onClick={() => add()}>Increment</button>
            </div>
        )
    }
}

const dispatchToProps = dispatch => {
    return {
        add: () => {
            dispatch({ type: 'Increment' })
        },
        sub: () => {
            dispatch({ type: 'Decrement' })
        }
    }
}



export default connect(null, dispatchToProps)(Controller)
