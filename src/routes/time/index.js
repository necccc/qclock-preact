import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import * as actions from '../../actions/time';
import reduce from '../../reducers';
import TimePicker from '../../components/TimePicker';

@connect(reduce, actions)
export default class Time extends Component {

    setTime (time) {
        this.props.setTime(new Date(time));
    }

    render({ colors, time }, state) {
        return (
            <div class="page">
                <TimePicker onChange={e => this.setTime(e)} time={time} outerColor={colors.outer} innerColor={colors.inner} />
            </div>
        );
    }
}