import { API_PUT, API_GET } from '../middleware/api'

const DIM_API_URL = '/api/dim'

export const SET_DIM = 'SET_DIM';
export const PUT_DIM_SUCCESS = 'PUT_DIM_SUCCESS';
export const PUT_DIM_FAILURE = 'PUT_CDIM_FAILURE';
export const GET_DIM = 'GET_DIM';
export const GET_DIM_SUCCESS = 'GET_DIM_SUCCESS';
export const GET_DIM_FAILURE = 'GET_DIM_FAILURE';


export function getDimSuccess(json) {
    return {
        type: GET_DIM_SUCCESS,
        dim: json.dim,
        receivedAt: Date.now()
    }
}

export function getDimFailure(error) {
    console.error(error);
    return {
        type: GET_DIM_FAILURE,
        receivedAt: Date.now()
    }
}

export function getDim () {
    return {
        type: GET_DIM,
        [API_GET]: {
            actions: [null, getDimSuccess, getDimFailure],
            endPoint: DIM_API_URL
        }
    }
}

export function putDimSuccess() {
    return {
        type: PUT_DIM_SUCCESS
    };
}

export function putDimFailure(error) {
    console.error(error);
    return {
        type: PUT_DIM_FAILURE
    };
}

export function setDim(dim) {
    return {
            type: SET_DIM,
            dim,
            [API_PUT]: {
                dataKey: 'dim',
                actions: [null, putDimSuccess, putDimFailure],
                endPoint: DIM_API_URL
            }
    }
}