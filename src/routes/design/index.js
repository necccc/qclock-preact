import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import * as actions from '../../actions'
import reduce from '../../reducers';
import ColorPicker from '../../components/ColorPicker';

@connect(reduce, actions)
export default class Design extends Component {

    setOuterColor (color) {
        this.props.setOuterColor(color)
    }

    setInnerColor (color) {
        this.props.setInnerColor(color)
    }

    render({outerColor, innerColor}, state) {
        return (
            <div class="page">
                <ColorPicker text="Outer color" onChange={e => this.setOuterColor(e)} value={outerColor} />
                <ColorPicker text="Inner color" onChange={e => this.setInnerColor(e)} value={innerColor} />
            </div>
        );
    }
}