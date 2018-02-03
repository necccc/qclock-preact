import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import moment from 'moment'
import style from './style';

import { connect } from 'preact-redux';
import * as actions from '../../actions'
import reduce from '../../reducers';


const mapStateToProps = (state, ownProps) => {

    const outerColor = state.outerColor;
    const innerColor = state.innerColor;
    const time = state.time

    return {
        outerColor,
        innerColor,
        time
    }
}

class BaseHeader extends Component {
    render() {
        const headerStyle = `
            background-image:
            radial-gradient(ellipse at center bottom, hsla(0,0%,13%,0) 0%, hsla(0,0%,13%,.5) 54%, hsla(0,0%,13%,.9)),
            linear-gradient(to right, ${this.props.outerColor}, ${this.props.innerColor})`

        return (
            <header class={style.header} style={headerStyle}>
                <nav>
                    <Link href="/">Time</Link>
                    <Link href="/design">Design</Link>
                </nav>
            </header>
        );
    }
}

const Header = connect(mapStateToProps)(BaseHeader)

export default Header