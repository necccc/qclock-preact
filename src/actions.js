
export const SET_TIME = 'SET_TIME';

export const SET_COLORS = 'SET_COLORS';


export function setColors(colors) {
    return {
        type: SET_COLORS,
        colors
    };
}

export function setTime(time) {
    return {
        type: SET_TIME,
        time
    };
}