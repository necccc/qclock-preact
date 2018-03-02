import { API_PUT, API_GET } from '../middleware/api'

const ADVANCED_API_URL = '/api/advanced'

export const SET_ADVANCED = 'SET_ADVANCED';
export const PUT_ADVANCED_REQUEST = 'PUT_ADVANCED_REQUEST';
export const PUT_ADVANCED_SUCCESS = 'PUT_ADVANCED_SUCCESS';
export const PUT_ADVANCED_FAILURE = 'PUT_ADVANCED_FAILURE';
export const GET_ADVANCED = 'GET_ADVANCED';
export const GET_ADVANCED_REQUEST = 'GET_ADVANCED_REQUEST';
export const GET_ADVANCED_SUCCESS = 'GET_ADVANCED_SUCCESS';
export const GET_ADVANCED_FAILURE = 'GET_ADVANCED_FAILURE';


export function getAdvancedSuccess(json) {
	return {
		type: GET_ADVANCED_SUCCESS,
		advanced: json.advanced,
		receivedAt: Date.now()
	}
}

export function getAdvancedFailure(error) {
	console.error(error);
	return {
		type: GET_ADVANCED_FAILURE,
		receivedAt: Date.now()
	}
}

export function getAdvanced () {
	return {
		type: GET_ADVANCED,
		[API_GET]: {
			actions: [null, getAdvancedSuccess, getAdvancedFailure],
			endPoint: ADVANCED_API_URL
		}
	}
}

export function putAdvancedSuccess() {
	return {
		type: PUT_ADVANCED_SUCCESS
	};
}

export function putAdvancedFailure(error) {
	console.error(error);
	return {
		type: PUT_ADVANCED_FAILURE
	};
}

export function setAdvanced(advanced) {
	return {
			type: SET_ADVANCED,
			advanced,
			[API_PUT]: {
				dataKey: 'advanced',
				actions: [null, putAdvancedSuccess, putAdvancedFailure],
				endPoint: ADVANCED_API_URL
			}
	}
}