import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import * as actions from '../../actions'
import reduce from '../../reducers';
import TimePicker from '../../components/TimePicker';

const mapStateToProps = (state, ownProps) => {
    const outerColor = state.outerColor
    const innerColor = state.innerColor
    const time = state.time

    return {
        outerColor,
        innerColor,
        time
    }
}

@connect(reduce, actions)
class Time extends Component {

    setTime (time) {
        this.props.setTime(new Date(time))
    }

    render({outerColor, innerColor, time}, state) {
        return (
            <div class="page">
                <TimePicker onChange={e => this.setTime(e)} time={time} outerColor={outerColor} innerColor={innerColor} />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Time)