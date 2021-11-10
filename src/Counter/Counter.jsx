import React, { Component } from 'react'
import {connect} from 'react-redux'


class Counter extends Component {
    render() {
        const {count}=this.props
        return (
            <div className='d-flex align-items-center justify-content-around p-1 w-50 m-auto'>
                <h5>Count</h5>
                <h5>{count}</h5>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        count:state.count
    }
}

export default connect(mapStateToProps)(Counter)
