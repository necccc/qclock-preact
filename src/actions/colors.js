
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

export function getColorsFailure() {
    return {
        type: GET_COLORS_FAILURE,
        receivedAt: Date.now()
    }
}