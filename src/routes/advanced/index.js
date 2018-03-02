import { h, Component } from 'preact'
import { connect } from 'preact-redux'

import * as actions from '../../actions/advanced'
import reduce from '../../reducers'

@connect(reduce, actions)
export default class Advanced extends Component {

	onSocket (event) {
		console.log(event.currentTarget.checked);

		this.props.setAdvanced({
			useSocket: event.currentTarget.checked
		})
	}

	render(props, state) {
		return (
			<div class="page">
				<label for="UseSocket">
					<span>Use realtime socket connection</span>
					<input type="checkbox" id="UseSocket" onChange={e => this.onSocket(e)} />
				</label>
			</div>
		)
	}
}