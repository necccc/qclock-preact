import { h, Component } from 'preact';
import moment from 'moment'
import { connect } from 'preact-redux';
import * as actions from '../../actions'
import reduce from '../../reducers';
import style from './style';

const mapStateToProps = (state, ownProps) => {

    const minuteColor = state.outerColor || 'hsl(289, 100%, 50%)';
    const time = state.time

    return {
        minuteColor,
        time
    }
}

class TimePickerBase extends Component {

    componentWillMount() {
        this.setState({
        })
    }

    render({minuteColor, time}, state) {

// outer rim minutes, dial
// inner rim, hours, dial
// center: numeric input
// use colors from clockface
console.log(time);

        const minuteBg = `background-image: radial-gradient(${minuteColor} 10%, transparent 70%);`
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
                <div class={style['time-selector__minute']}>
                    <div style={minuteBg}></div>
                </div>
                <div class={style['time-selector__hour']}>
                    <div style={hourColor}></div>
                </div>
            </div>
        );
    }
}



const TimePicker = connect(mapStateToProps)(TimePickerBase)

export default TimePicker