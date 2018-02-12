import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import actions from '../../actions';
import reduce from '../../reducers';

import { hslToCss } from '../../lib/hsl';

@connect(reduce, actions)
export default class Server extends Component {

}