import {
	API_HOST,
	WS_PORT
} from '../config'
import * as advanced from '../actions/advanced'

export const API_PUT = 'API_PUT'

let SOCKET_OPEN = false
let SOCKET = null

export default store => next => action => {

	const createSocket = () => {

		const socket = new WebSocket(`ws://${API_HOST}:${WS_PORT}`)
		socket.addEventListener('open', function (event) {
			console.log('socket opened')
		});
		socket.addEventListener('close', function (event) {
			SOCKET_OPEN = false
			next(advanced.setAdvanced({
				useSocket: false
			}))
		});
		return socket
	}

	const closeSocket = (socket) => {
		socket.close()
	}

	if (
		(action.type === advanced.SET_ADVANCED && action.advanced.useSocket && !SOCKET_OPEN)
		|| (action.type === advanced.GET_ADVANCED_SUCCESS && action.advanced.useSocket && !SOCKET_OPEN)
	) {
		console.log('TURN ON SOCKET');
		SOCKET_OPEN = true
		SOCKET = createSocket()
	}

	if (action.type === advanced.SET_ADVANCED && !action.advanced.useSocket && SOCKET_OPEN) {
		console.log('TURN OFF SOCKET');
		closeSocket(SOCKET)
		SOCKET_OPEN = false
		next(action)
		return store.dispatch(action)
	}

	const put = action[API_PUT]

	if (SOCKET_OPEN && put) {
		const { endPoint, actions, dataKey } = put
		const [ startRequest, success, failure ] = actions

		const data = {
			[dataKey]: action[dataKey]
		}

		if (SOCKET.readyState === 1) {
			console.log('WS SEND', data);
			SOCKET.send(JSON.stringify(data))
		}
	}

	return next(action)
}