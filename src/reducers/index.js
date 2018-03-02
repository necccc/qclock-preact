import { combineReducers } from 'redux'

import colors from './colors'
import time from './time'
import dim from './dim'
import advanced from './advanced'

const rootReducer = combineReducers({
	colors,
	time,
	dim,
	advanced
})

export default rootReducer