import {
    SET_TIME
} from '../actions/time';

const initialState = new Date()

function time (state = initialState, action) {

    switch (action.type) {

        case SET_TIME:
            return action.time

        default:
            return state;
    }

}

export default time;