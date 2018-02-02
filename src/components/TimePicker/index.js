import { h, Component } from 'preact';
import moment from 'moment'
import { connect } from 'preact-redux';
import Dial from '../Dial'

import * as actions from '../../actions'
import reduce from '../../reducers';
import style from './style';
import TimeInput from './TimeInput'

const degreesToMinutes = (deg) => {
    return (60 - Math.floor( (deg / (360 / 60) ))) - 1
}

const degreesToHours = (deg) => {
    return (12 - Math.floor( (deg / (360 / 12) ))) - 1
}

const minutesToDegrees = (minutes) => {
    return minutes * (360 / 60)
}

const hoursToDegrees = (hours) => {
    return hours * (360 / 12)
}

export default class TimePicker extends Component {

    onMinuteDial(deg){
        const minutes = degreesToMinutes(deg)
        this.props.onChange(this.props.time.setMinutes(minutes))
    }

    onHourDial(deg) {
        const hours = degreesToHours(deg)
        this.props.onChange(this.props.time.setHours(hours))
    }

    onTimeChange(time) {
        this.props.onChange(time)
    }

    render({outerColor, time}, state) {
        const minuteColor = `background-image: radial-gradient(${outerColor} 10%, transparent 70%);`
        const hourColor = `background-image: radial-gradient(hsl(180, 100%, 50%) 10%, transparent 70%);`

        const minuteDial = minutesToDegrees(time.getMinutes())
        const hourDial = hoursToDegrees(time.getHours())

        return (
            <div class={style['time-selector']}>
                <TimeInput time={time} onChange={ e => this.onTimeChange(e) } />
                <Dial className={style['time-selector__minute']} value={minuteDial} onChange={ e => this.onMinuteDial(e) }>
                    <div style={minuteColor}></div>
                </Dial>
                <Dial className={style['time-selector__hour']} value={hourDial} onChange={ e => this.onHourDial(e) }>
                    <div style={hourColor}></div>
                </Dial>
            </div>
        );
    }
}