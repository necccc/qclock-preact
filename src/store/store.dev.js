import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import apiMiddleware from '../middleware/api'
import socketMiddleware from '../middleware/socket'
import reducers from '../reducers'

const loggerMiddleware = createLogger()

let store = createStore(
	reducers,
	applyMiddleware(
		thunkMiddleware,
		apiMiddleware,
		socketMiddleware,
		loggerMiddleware
	  )
)
export default store
