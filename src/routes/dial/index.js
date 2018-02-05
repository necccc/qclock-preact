import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import * as actions from '../../actions'
import reduce from '../../reducers';

import  style from './style'
import Dial from '../../components/Dial';

export default class DialPage extends Component {

    setDial(e) {
        //console.log(e);

    }

    render({outerColor, innerColor, time}, state) {

        const test = 'foo'
        return (
            <div class="page">
                <div class={style['dial_test']} >
                    <Dial onChange={e => this.setDial(e)} value={0} >
                        <div class={style['dial_test-in']} ></div>
                    </Dial>
                </div>
                <div class={style['dial_test']} >
                    <Dial onChange={e => this.setDial(e)} value={0} test={test} >
                        <div class={style['dial_test-in']} ></div>
                    </Dial>
                </div>
            </div>
        );
    }
}