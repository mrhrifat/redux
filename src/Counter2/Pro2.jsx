import React, { Component } from 'react'
import {Provider} from 'react-redux'
import store from './Redux/store/store'
import Counter2 from './Components/Counter2'
import Controller2 from './Components/Controller2'

class Pro2 extends Component {
    render() {
        return (
            <Provider store={store}>
                <Counter2/>
                <Controller2/>
            </Provider>
        )
    }
}

export default Pro2
