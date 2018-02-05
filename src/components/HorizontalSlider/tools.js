/**
 *
 *
 * @param {DOMEvent} event
 * @returns
 */
export const getHorizontalSliderLevel = (event, callback) => {
    const { currentTarget, pageX } = event
    const { left, width } = currentTarget.getBoundingClientRect()

    const offsetLeft = left + window.scrollX

    const getValue = ({offsetLeft, width, pageX}) => {
        const value = pageX - offsetLeft;

        if (value < 0) return 0

        if (pageX > offsetLeft + width) return width

        return value
    }

    if (isTouchEvent(event)) {

        for (let touch of event.changedTouches) {
            const { pageX } = touch;
            const value = getValue({ offsetLeft, width, pageX })

            callback(value)
        }

    } else {
        const value = getValue({ offsetLeft, width, pageX })
        callback(value)
    }
}

const isTouchEvent = function (event) {
    const { type } = event
    return type === 'touchmove' || type === 'touchstart' || type === 'touchend'
}
