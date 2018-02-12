import {
    SET_TIME
} from '../actions/time';


const initialState = new Date()

function time (state = initialState, action) {

    switch (action.type) {

        case SET_TIME:
            return Object.assign({}, state, {
                time: action.time
            });

        default:
            return state;
    
    }

}

export default time;