/**
 *
 *
 * @param {DOMEvent} event
 * @returns
 */
export const getVerticalSliderLevel = (event, callback) => {
    const { currentTarget, pageX, pageY } = event
    const { top, left, width, height } = currentTarget.getBoundingClientRect()

    const getValue = ({top, left, width, height, pageX, pageY}) => {
        const value = pageY - top;

        if (value < 0) return 0;

        if (pageY > top + height) return height;
        return value
    }

    if (isTouchEvent(event)) {

        for (let touch of event.changedTouches) {
            const {pageX, pageY} = touch;
            let value = getValue({
                top, left, width, height, pageX, pageY
            })

            callback(value)
        }

    } else {
        const value = getValue({top, left, width, height, pageX, pageY})
        callback(value)
    }
}

const isTouchEvent = function (event) {
    const { type } = event
    return type === 'touchmove' || type === 'touchstart' || type === 'touchend'
}
