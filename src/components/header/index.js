import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import moment from 'moment'
import style from './style';

import { connect } from 'preact-redux';
import * as actions from '../../actions'
import reduce from '../../reducers';


const mapStateToProps = (state, ownProps) => {

    const bgColor = state.outerColor || ownProps.bgColor;
    const time = state.time

    return {
        bgColor,
        time
    }
}

class BaseHeader extends Component {
    render() {
        const headerStyle = `background-color: ${this.props.bgColor}`
        const time = moment(this.props.time).format('HH:mm')

        return (
            <header class={style.header} style={headerStyle}>
                <h1>colorpicker {time}</h1>
                <nav>
                </nav>
            </header>
        );
    }
}

const Header = connect(mapStateToProps)(BaseHeader)

export default Header