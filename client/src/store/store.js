
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers/reducer';
import reduxThunk from 'redux-thunk'
const initstate= {}
const enhancer=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose 


const store = createStore(reducer, initstate, enhancer(applyMiddleware(reduxThunk)))
export default store