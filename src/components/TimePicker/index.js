import { h, Component } from 'preact';
import moment from 'moment'
import { connect } from 'preact-redux';
import Dial from '../Dial'

import * as actions from '../../actions'
import reduce from '../../reducers';
import style from './style';
import TimeInput from './TimeInput'

const degreesToMinutes = (deg) => {
    return Math.floor( (deg / (360 / 60) ))
}

const degreesToHours = (deg) => {
    return Math.floor( (deg / (360 / 12) ))
}

const minutesToDegrees = (minutes) => {
    return minutes * (360 / 60)
}

const hoursToDegrees = (hours) => {
    return hours * (360 / 12)
}

export default class TimePicker extends Component {

    componentWillMount () {
        this.setState({
            time: this.props.time
        })
    }

    onMinuteDial(deg){
        const minutes = degreesToMinutes(deg)
        const time = new Date(this.state.time)

        time.setMinutes(minutes)

        this.setState({
            time
        })

        this.props.onChange(time)
    }

    onHourDial(deg) {
        const hours = degreesToHours(deg)
        const time = new Date(this.state.time)

        time.setHours(hours)

        this.setState({
            time
        })

        this.props.onChange(time)
    }

    onTimeChange(time) {
        this.props.onChange(time)
    }

    render({outerColor, time}, {minuteSelecting, hourSelecting}) {
        const minuteColor = `background-image: radial-gradient(${outerColor} 10%, transparent 70%);`
        const hourColor = `background-image: radial-gradient(hsl(180, 100%, 50%) 10%, transparent 70%);`

        const minuteDial = minutesToDegrees(time.getMinutes())
        const hourDial = hoursToDegrees(time.getHours())

        return (
            <div class={style['time-selector']}>
                <TimeInput time={time} onChange={ e => this.onTimeChange(e) } />
                <Dial
                    className={style['time-selector__minute']}
                    value={minuteDial}
                    onChange={ e => this.onMinuteDial(e) }
                >
                    <div style={minuteColor}></div>
                </Dial>
                <Dial
                    className={style['time-selector__hour']}
                    value={hourDial}
                    onChange={ e => this.onHourDial(e) }
                >
                    <div style={hourColor}></div>
                </Dial>
            </div>
        );
    }
}