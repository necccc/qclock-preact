export const SET_OUTER_COLOR = 'SET_OUTER_COLOR';

export const SET_INNER_COLOR = 'SET_INNER_COLOR';

export const SET_TIME = 'SET_TIME';

export function setInnerColor(color) {
	return {
		type: SET_INNER_COLOR,
		color
	};
}

export function setOuterColor(color) {
	return {
		type: SET_OUTER_COLOR,
		color
	};
}

export function setTime(time) {
	return {
		type: SET_TIME,
		time
	};
}