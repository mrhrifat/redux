import React, { Component } from 'react'
import Pro from './Counter/Pro'
import Pro2 from './Counter2/Pro2'
import Lesson1 from './Lesson1/Lesson1'

class Redux extends Component {
    render() {
        return (
            <div className='container'>
                <h4 className='text-center'>Bismillahir Rahmanir Rahim</h4>
                <Lesson1/>
                <Pro/>
                <div className="my-2"></div>
                <Pro2/>
            </div>
        )
    }
}

export default Redux
