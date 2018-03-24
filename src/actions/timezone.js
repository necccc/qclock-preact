import { API_PUT, API_GET } from '../middleware/api'

const TIMEZONE_API_URL = '/api/timezone'

export const SET_TIMEZONE = 'SET_TIMEZONE';
export const PUT_TIMEZONE_SUCCESS = 'PUT_TIMEZONE_SUCCESS';
export const PUT_TIMEZONE_FAILURE = 'PUT_CTIMEZONE_FAILURE';
export const GET_TIMEZONE = 'GET_TIMEZONE';
export const GET_TIMEZONE_SUCCESS = 'GET_TIMEZONE_SUCCESS';
export const GET_TIMEZONE_FAILURE = 'GET_TIMEZONE_FAILURE';

export function getTimezoneSuccess(json) {
    return {
        type: GET_TIMEZONE_SUCCESS,
        timezone: json.timezone,
        receivedAt: Date.now()
    }
}

export function getTimezoneFailure(error) {
    console.error(error);
    return {
        type: GET_TIMEZONE_FAILURE,
        receivedAt: Date.now()
    }
}

export function getTimezone () {
    return {
        type: GET_TIMEZONE,
        [API_GET]: {
            actions: [null, getTimezoneSuccess, getTimezoneFailure],
            endPoint: TIMEZONE_API_URL
        }
    }
}

export function putTimezoneSuccess() {
    return {
        type: PUT_TIMEZONE_SUCCESS
    };
}

export function putTimezoneFailure(error) {
    console.error(error);
    return {
        type: PUT_TIMEZONE_FAILURE
    };
}

export function setTimezone(timezone) {
    return {
            type: SET_TIMEZONE,
            timezone,
            [API_PUT]: {
                dataKey: 'timezone',
                actions: [null, putTimezoneSuccess, putTimezoneFailure],
                endPoint: TIMEZONE_API_URL
            }
    }
}