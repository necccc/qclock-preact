import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

import { connect } from 'preact-redux';
import actions from '../../actions';
import reduce from '../../reducers';

import { hslToCss } from '../../lib/hsl';

@connect(reduce, actions)
export default class Header extends Component {
    render(props) {
        const headerStyle = `
            background-image:
            radial-gradient(ellipse at center bottom, hsla(0,0%,13%,0) 0%, hsla(0,0%,13%,.5) 54%, hsla(0,0%,13%,.9)),
            linear-gradient(to right, ${hslToCss(props.colors.outer)}, ${hslToCss(props.colors.inner)})`;

        return (
            <header class={style.header} style={headerStyle}>
                <nav>
                    <Link href="/">time</Link>
                    <Link href="/dim">dim</Link>
                    <Link href="/design">design</Link>
                </nav>
            </header>
        );
    }
}