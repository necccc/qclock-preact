import {
	API_HOST
} from '../config'
import * as advanced from '../actions/advanced'

export const API_PUT = 'API_PUT'

let SOCKET_OPEN = false


export default store => next => action => {

	if (action.type === advanced.SET_ADVANCED && action.advanced.useSocket && !SOCKET_OPEN) {
		console.log('TURN ON SOCKET');
		SOCKET_OPEN = true
	}

	if (action.type === advanced.SET_ADVANCED && !action.advanced.useSocket && SOCKET_OPEN) {
		console.log('TURN OFF SOCKET');
		SOCKET_OPEN = false
	}

	const put = action[API_PUT]

	if (SOCKET_OPEN && put) {
		const { endPoint, actions, dataKey } = put
		const [ startRequest, success, failure ] = actions

		const data = {
			[dataKey]: action[dataKey]
		}

		const sendRequest = () => {
			console.log('WS SEND', data);

		}

		sendRequest()

	}

	return next(action)
}