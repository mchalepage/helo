import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
import promiseMiddleware from 'redux-promise-middleware'
import {devToolsEnhancer} from 'redux-devtools-extension'

const store = createStore(reducer, compose(
    applyMiddleware(promiseMiddleware),
    devToolsEnhancer()
))
export default store