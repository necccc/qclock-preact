import {
    SET_TIME,
    GET_TIME_REQUEST,
    GET_TIME_SUCCESS,
    GET_TIME_FAILURE
} from '../actions/time';

const initialState = {
    value: +new Date()
}

function time (state = initialState, action) {

    switch (action.type) {

        case SET_TIME:
            return Object.assign({}, state, {value: action.time })

        case GET_TIME_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });

        case GET_TIME_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                lastUpdated: action.receivedAt
            }, { value: action.time });

        case GET_TIME_FAILURE:
            return Object.assign({}, state, {
                isFetching: false
            });

        default:
            return state;
    }

}

export default time;