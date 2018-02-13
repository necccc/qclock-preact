import * as config from '../config';

const TIME_API_URL = '/api/datetime'

export const SET_TIME = 'SET_TIME';
export const GET_TIME_REQUEST = 'GET_TIME_REQUEST';
export const GET_TIME_SUCCESS = 'GET_TIME_SUCCESS';
export const GET_TIME_FAILURE = 'GET_TIME_FAILURE';

export function setTime(time) {
    return {
        type: SET_TIME,
        time
    };
}

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
    return function (dispatch) {
        dispatch(getTimeRequest())

        return fetch(config.API_HOST + TIME_API_URL)
            .then(response => response.json())
            .then(json => dispatch(getTimeSuccess(json)))
            .catch(error => dispatch(getTimeFailure(error)))
    }
}
