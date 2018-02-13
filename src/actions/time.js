import { API_PUT, API_GET } from '../middleware/api'

const TIME_API_URL = '/api/datetime'

export const SET_TIME = 'SET_TIME';
export const PUT_TIME_REQUEST = 'PUT_TIME_REQUEST';
export const PUT_TIME_SUCCESS = 'PUT_TIME_SUCCESS';
export const PUT_TIME_FAILURE = 'PUT_TIME_FAILURE';
export const GET_TIME = 'GET_TIME';
export const GET_TIME_REQUEST = 'GET_TIME_REQUEST';
export const GET_TIME_SUCCESS = 'GET_TIME_SUCCESS';
export const GET_TIME_FAILURE = 'GET_TIME_FAILURE';

export function getTimeRequest () {
    return {
        type: GET_TIME_REQUEST
    };
}

export function getTimeSuccess(json) {
    return {
        type: GET_TIME_SUCCESS,
        time: json.time,
        receivedAt: Date.now()
    }
}

export function getTimeFailure() {
    return {
        type: GET_TIME_FAILURE,
        receivedAt: Date.now()
    }
}

export function getTime () {
    return {
        type: GET_TIME,
        [API_GET]: {
            actions: [getTimeRequest, getTimeSuccess, getTimeFailure],
            endPoint: TIME_API_URL
        }
    }
}

export function putTimeRequest () {
    return {
        type: PUT_TIME_REQUEST
    };
}

export function putTimeSuccess(json) {
    return {
        type: PUT_TIME_SUCCESS
    }
}

export function putTimeFailure() {
    return {
        type: PUT_TIME_FAILURE
    }
}
export function setTime(time) {
    return {
        type: SET_TIME,
        time,
        [API_PUT]: {
            dataKey: 'time',
            actions: [putTimeRequest, putTimeSuccess, putTimeFailure],
            endPoint: TIME_API_URL
        }
    };
}
