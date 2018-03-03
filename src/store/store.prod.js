import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import apiMiddleware from '../middleware/api'
import socketMiddleware from '../middleware/socket'
import reducers from '../reducers'

const store = createStore(
	reducers,
	applyMiddleware(
		thunkMiddleware,
		socketMiddleware,
		apiMiddleware
	  )
);

export default store