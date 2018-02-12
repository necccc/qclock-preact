import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import * as actions from '../../actions/colors';
import reduce from '../../reducers';
import ColorPicker from '../../components/ColorPicker';

@connect(reduce, actions)
export default class Design extends Component {

    setOuterColor (outer) {
        const inner = this.props.colors.inner
        this.props.setColors({
            inner,
            outer
        });
    }

    setInnerColor (inner) {
        const outer = this.props.colors.outer
        this.props.setColors({
            inner,
            outer
        });
    }

    render({ colors }, state) {
        return (
            <div class="page">
                <ColorPicker text="Outer color" onChange={e => this.setOuterColor(e)} value={colors.outer} />
                <ColorPicker text="Inner color" onChange={e => this.setInnerColor(e)} value={colors.inner} />
            </div>
        );
    }
}