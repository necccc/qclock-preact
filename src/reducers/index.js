import { combineReducers } from 'redux'

import colors from './colors'
import time from './time'
import dim from './dim'

const rootReducer = combineReducers({
    colors,
    time,
    dim
  })

export default rootReducer;