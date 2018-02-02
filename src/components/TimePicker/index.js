import { h, Component } from 'preact';
import moment from 'moment'
import { connect } from 'preact-redux';
import Dial from '../Dial'
import * as actions from '../../actions'
import reduce from '../../reducers';
import style from './style';



/**
 *
 *
 * @param {Number} angle
 * @returns {Number}
 */
export const getHue = function (angle) {
    let hue = 360 + (angle + 90)

    if (hue > 360) {
        hue = 360 - hue
    }
    if (hue < 0) {
        hue = -1 * hue
    }
    hue = 360 - hue

    return Math.floor(hue)
}


export default class TimePicker extends Component {

    onMinuteDial(e){
        const rotated = getHue(e)
        const minutes = 59 - Math.floor( (rotated /  (360 / 59) ))
        this.props.onChange(this.props.time.setMinutes(minutes))
    }

    onHourDial(e) {
        const rotated = getHue(e)
        const hours = 12 - Math.floor( (rotated /  (360 / 12) ))
        this.props.onChange(this.props.time.setHours(hours-1))
    }

    render({outerColor, time}, state) {

        // outer rim minutes, dial
        // inner rim, hours, dial
        // center: numeric input
        // use colors from clockface
        console.log(time);

        const minuteColor = `background-image: radial-gradient(${outerColor} 10%, transparent 70%);`
        const hourColor = `background-image: radial-gradient(hsl(180, 100%, 50%) 10%, transparent 70%);`

        const hour = moment(time).format('HH')
        const minute = moment(time).format('mm')

        return (
            <div class={style['time-selector']}>
                <div class={style['time-selector__input']}>
                    <input type="text" min="1" max="12" steps="1" value={hour} />
                    <span>:</span>
                    <input type="text" min="0" max="59" steps="1" value={minute} />
                </div>
                <Dial className={style['time-selector__minute']} onChange={e => this.onMinuteDial(e)}>
                    <div style={minuteColor}></div>
                </Dial>
                <Dial className={style['time-selector__hour']} onChange={e => this.onHourDial(e)}>
                    <div style={hourColor}></div>
                </Dial>
            </div>
        );
    }
}