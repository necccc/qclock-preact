import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style';
import * as actions from '../../actions'
import reduce from '../../reducers';

import ColorPicker from '../../components/ColorPicker';
import TimePicker from '../../components/TimePicker';

@connect(reduce, actions)
export default class Home extends Component {

    setOuterColor (color) {
        this.props.setOuterColor(color)
    }

    setTime (date) {

    }

    render() {
        return (
            <div class={style.home}>

                <TimePicker onChange={e => this.setTime(e)} />

                <ColorPicker text="Outer color" onChange={e => this.setOuterColor(e)} />

            </div>
        );
    }
}
