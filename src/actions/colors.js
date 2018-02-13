import * as config from '../config';

const COLORS_API_URL = '/api/colors'


export const SET_COLORS = 'SET_COLORS';
export const GET_COLORS_REQUEST = 'GET_COLORS_REQUEST';
export const GET_COLORS_SUCCESS = 'GET_COLORS_SUCCESS';
export const GET_COLORS_FAILURE = 'GET_COLORS_FAILURE';

export function setColors(colors) {
    return {
        type: SET_COLORS,
        colors
    };
}

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
    return function (dispatch) {
        dispatch(getColorsRequest())

        return fetch(config.API_HOST + COLORS_API_URL)
            .then(response => response.json())
            .then(json => dispatch(getColorsSuccess(json)))
            .catch(error => dispatch(getColorsFailure(error)))
    }
}
