import { API_PUT, API_GET } from '../middleware/api'

const COLORS_API_URL = '/api/colors'

export const SET_COLORS = 'SET_COLORS';
export const PUT_COLORS_REQUEST = 'PUT_COLORS_REQUEST';
export const PUT_COLORS_SUCCESS = 'PUT_COLORS_SUCCESS';
export const PUT_COLORS_FAILURE = 'PUT_COLORS_FAILURE';
export const GET_COLORS = 'GET_COLORS';
export const GET_COLORS_REQUEST = 'GET_COLORS_REQUEST';
export const GET_COLORS_SUCCESS = 'GET_COLORS_SUCCESS';
export const GET_COLORS_FAILURE = 'GET_COLORS_FAILURE';



export function getColorsRequest () {
    return {
        type: GET_COLORS_REQUEST
    };
}

export function getColorsSuccess(json) {
    return {
        type: GET_COLORS_SUCCESS,
        colors: json.colors,
        receivedAt: Date.now()
    }
}

export function getColorsFailure(error) {
    console.error(error);
    return {
        type: GET_COLORS_FAILURE,
        receivedAt: Date.now()
    }
}

export function getColors () {
    return {
        type: GET_COLORS,
        [API_GET]: {
            actions: [getColorsRequest, getColorsSuccess, getColorsFailure],
            endPoint: COLORS_API_URL
        }
    }
}

export function putColorsRequest() {
    return {
        type: PUT_COLORS_REQUEST
    };
}

export function putColorsSuccess() {
    return {
        type: PUT_COLORS_SUCCESS
    };
}

export function putColorsFailure(error) {
    console.error(error);
    return {
        type: PUT_COLORS_FAILURE
    };
}

export function setColors(colors) {
    return {
            type: SET_COLORS,
            colors,
            [API_PUT]: {
                dataKey: 'colors',
                actions: [putColorsRequest, putColorsSuccess, putColorsFailure],
                endPoint: COLORS_API_URL
            }
    }
}