import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import style from './style'
import * as actions from '../../actions/advanced'
import reduce from '../../reducers'
import Toggle from '../../components/Toggle'

@connect(reduce, actions)
export default class Advanced extends Component {

	onSocket (bool) {
		this.props.setAdvanced({
			useSocket: bool
		})
	}

	render({ advanced }, state) {

		return (
			<div class="page">
				<label class={style['label-advanced']} for="UseSocket">
					<Toggle class={style['toggle-advanced']} value={ advanced.useSocket } onChange={e => this.onSocket(e)} />
					<span>Use realtime socket connection</span>
				</label>
			</div>
		)
	}
}