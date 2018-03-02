import { h, Component } from 'preact'
import { connect } from 'preact-redux'

import * as actions from '../../actions/time'
import reducers from '../../reducers'
import TimePicker from '../../components/TimePicker'

@connect(reducers, actions)
export default class Time extends Component {

	onChange (time) {
		this.props.setTime(+new Date(time))
	}

	render({ colors, time }, state) {
		const dateTime = new Date(time.value)
		return (
			<div class="page">
				<TimePicker onChange={e => this.onChange(e)} time={dateTime} outerColor={colors.outer} innerColor={colors.inner} />
			</div>
		)
	}
}