import React, { Component } from 'react'
import {Provider} from 'react-redux'
import store from './redux/store/Store'
import Counter from './Counter'
import Controller from './Controller'

class Pro extends Component {
    render() {
        return (
            <Provider store={store}>
                <Counter/>
                <Controller/>
            </Provider>
        )
    }
}

export default Pro
