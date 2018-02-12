import {
    SET_COLORS
} from '../actions/colors';


const initialState = {
    outer: [245, 100, 50],
    inner: [291, 100, 50]
}

function colors (state = initialState, action) {

    switch (action.type) {

        case SET_COLORS:
            return Object.assign({}, state, {
                colors: action.colors
            });

        default:
            return state;
    
    }

}

export default colors;