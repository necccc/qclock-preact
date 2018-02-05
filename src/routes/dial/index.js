import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import * as actions from '../../actions'
import reduce from '../../reducers';

import  style from './style'
import Dial from '../../components/Dial';
import VerticalSlider from '../../components/VerticalSlider';
import HorizontalSlider from '../../components/HorizontalSlider';

export default class DialPage extends Component {

    componentWillMount () {
        this.setState({
            val: 25
        })
    }
    setVertical(e) {
        this.setState({
            val: e,
            vertical: e
        })
    }

    setHorizontal(e) {
        this.setState({
            val: e,
            horizontal: e
        })
    }

    render(props, {vertical, horizontal, val}) {
        const test = 'foo'
        return (
            <div class="page">

                <div class={style['vertical-slider-test']} >
                    {vertical}
                    <VerticalSlider onChange={e => this.setVertical(e)} value={val} >
                        <div class={style['vertical-slider-test__in']} ></div>
                    </VerticalSlider>
                </div>

                <div class={style['horizontal-slider-test']} >
                    { horizontal}
                    <HorizontalSlider onChange={e => this.setHorizontal(e)} value={val} >
                        <div class={style['horizontal-slider-test__in']} ></div>
                    </HorizontalSlider>
                </div>
            </div>
        );
    }
}