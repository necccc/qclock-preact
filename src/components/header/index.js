import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import moment from 'moment'
import style from './style';

import { connect } from 'preact-redux';
import * as actions from '../../actions'
import reduce from '../../reducers';

import { hslToCss } from '../../lib/hsl'

@connect(reduce, actions)
export default class Header extends Component {
    render(props) {
        const headerStyle = `
            background-image:
            radial-gradient(ellipse at center bottom, hsla(0,0%,13%,0) 0%, hsla(0,0%,13%,.5) 54%, hsla(0,0%,13%,.9)),
            linear-gradient(to right, ${hslToCss(this.props.outerColor)}, ${hslToCss(this.props.innerColor)})`

        return (
            <header class={style.header} style={headerStyle}>
                <nav>
                    <Link href="/">time</Link>
                    <Link href="/design">design</Link>
                </nav>
            </header>
        );
    }
}