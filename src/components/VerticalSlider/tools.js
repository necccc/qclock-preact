/**
 *
 *
 * @param {DOMEvent} event
 * @returns
 */
export const getVerticalSliderLevel = (event, callback) => {
    const { currentTarget, pageY } = event
    const { top, height } = currentTarget.getBoundingClientRect()

    const offsetTop = top + window.scrollY

    const getValue = ({offsetTop, height, pageY}) => {
        const value = pageY - offsetTop;

        if (value < 0) return 0

        if (pageY > offsetTop + height) return height

        return value
    }

    if (isTouchEvent(event)) {

        for (let touch of event.changedTouches) {
            const { pageY } = touch;
            const value = getValue({
                offsetTop, height, pageY
            })

            callback(value)
        }

    } else {
        const value = getValue({offsetTop, height, pageY})
        callback(value)
    }
}

const isTouchEvent = function (event) {
    const { type } = event
    return type === 'touchmove' || type === 'touchstart' || type === 'touchend'
}
