import { combineReducers } from 'redux'

import colors from './colors'
import time from './time'
import dim from './dim'
import timezone from './timezone'
import advanced from './advanced'

const rootReducer = combineReducers({
	colors,
	time,
	dim,
	timezone,
	advanced
})

export default rootReducer