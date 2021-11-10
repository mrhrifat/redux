import {createStore} from 'redux'
import reducer from './reducer/Reducer'

const store=createStore(reducer)

export default store