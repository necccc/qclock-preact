import {
	SET_INNER_COLOR,
	SET_OUTER_COLOR,
	SET_TIME
} from './actions';


const initialState = {
	outerColor: [245, 100, 50],
	innerColor: [291, 100, 50],
	time: new Date()
};

function app (state = initialState, action) {
	switch (action.type) {

		case SET_INNER_COLOR:
			return Object.assign({}, state, {
				innerColor: action.color
			});

		case SET_OUTER_COLOR:
			return Object.assign({}, state, {
				outerColor: action.color
			});

		case SET_TIME:
			return Object.assign({}, state, {
				time: action.time
			});

		default:
			return state;
	}
}

export default app;