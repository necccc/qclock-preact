import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import apiMiddleware from '../middleware/api'
import reducers from '../reducers'

const store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware,
        apiMiddleware
      )
);

export default store