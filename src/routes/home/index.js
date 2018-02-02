import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style';
import * as actions from '../../actions'
import reduce from '../../reducers';

import ColorPicker from '../../components/ColorPicker';
import TimePicker from '../../components/TimePicker';

const mapStateToProps = (state, ownProps) => {
    const outerColor = state.outerColor
    const time = state.time

    return {
        outerColor,
        time
    }
}

@connect(reduce, actions)
class H extends Component {

    setOuterColor (color) {
        this.props.setOuterColor(color)
    }

    setTime (time) {
        console.log('time', time);
        this.props.setTime(new Date(time))
    }

    render({outerColor, time}, state) {
        console.log(outerColor);
        return (
            <div class={style.home}>
                <TimePicker onChange={e => this.setTime(e)} time={time} outerColor={outerColor} />
                <ColorPicker text="Outer color" onChange={e => this.setOuterColor(e)} />
            </div>
        );
    }
}

const Home = connect(mapStateToProps)(H)
export default Home