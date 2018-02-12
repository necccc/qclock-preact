import { h, Component } from 'preact';
import Dial from '../Dial';
import style from './style';
import { hslToCss } from '../../lib/hsl';
import TimeInput from './TimeInput';

const degreesToMinutes = (deg) => Math.floor( (deg / (360 / 60) ));

const degreesToHours = (deg) => Math.floor( (deg / (360 / 12) ));

const minutesToDegrees = (minutes) => minutes * (360 / 60);

const hoursToDegrees = (hours) => hours * (360 / 12);

export default class TimePicker extends Component {

    componentWillMount () {
        this.setState({
            time: this.props.time
        });
    }

    onMinuteDial(deg){
        const minutes = degreesToMinutes(deg);
        const time = new Date(this.state.time);

        time.setMinutes(minutes);

        this.setState({
            time
        });

        this.props.onChange(time);
    }

    onHourDial(deg) {
        const hours = degreesToHours(deg);
        const time = new Date(this.state.time);

        time.setHours(hours);

        this.setState({
            time
        });

        this.props.onChange(time);
    }

    onTimeChange(time) {
        this.props.onChange(time);
    }

    render({ outerColor, innerColor, time }, { minuteSelecting, hourSelecting }) {
        const minuteColor = `background-image: radial-gradient(${hslToCss(outerColor)} 10%, transparent 70%);`;
        const hourColor = `background-image: radial-gradient(${hslToCss(innerColor)} 10%, transparent 70%);`;
        const minuteDial = minutesToDegrees(time.getMinutes());
        const hourDial = hoursToDegrees(time.getHours());

        return (
            <div class={style['time-selector']}>
                <TimeInput time={time} onChange={e => this.onTimeChange(e)} />
                <Dial
                    className={style['time-selector__minute']}
                    value={minuteDial}
                    onChange={e => this.onMinuteDial(e)}
                >
                    <div style={minuteColor} />
                </Dial>
                <Dial
                    className={style['time-selector__hour']}
                    value={hourDial}
                    onChange={e => this.onHourDial(e)}
                >
                    <div style={hourColor} />
                </Dial>
            </div>
        );
    }
}