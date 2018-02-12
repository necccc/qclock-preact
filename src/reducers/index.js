import { combineReducers } from 'redux'

import colors from './colors'
import time from './time'

const rootReducer = combineReducers({
    colors,
    time
  })

export default rootReducer;