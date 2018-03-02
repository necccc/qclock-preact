import {
	SET_ADVANCED,
	GET_ADVANCED,
	GET_ADVANCED_REQUEST,
	GET_ADVANCED_SUCCESS,
	GET_ADVANCED_FAILURE
} from '../actions/advanced'

const initialState = {
	isFetching: false,
	useSocket: false
}

function advanced (state = initialState, action) {

	switch (action.type) {

		case SET_ADVANCED:
			return Object.assign({}, state, action.advanced)

		case GET_ADVANCED_REQUEST:
			return Object.assign({}, state, {
				isFetching: true
			})

		case GET_ADVANCED_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				lastUpdated: action.receivedAt
			},  action.advanced)

		case GET_ADVANCED_FAILURE:
			return Object.assign({}, state, {
				isFetching: false
			})

		default:
			return state
	}

}

export default advanced