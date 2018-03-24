import { h, Component } from 'preact'
import { connect } from 'preact-redux'

import style from './style'
import * as actions from '../../actions/timezone'
import reducers from '../../reducers'

import tzdata from 'tzdata'

const iana = Object.keys(tzdata.zones)
const ianaRegions = Array.from(new Set(iana.filter(string => string.indexOf('/') > -1).map((string) => string.split('/')[0]))).sort()

const getCitiesOfRegion = function(region) {
	return Array.from(new Set(iana.filter(string => string.indexOf(`${region}/`) > -1).map((string) => string.split('/')[1]))).sort()
}


@connect(reducers, actions)
export default class Timezone extends Component {

	componentWillMount () {
		const timezone = this.props.timezone.value
		const [region, city] = timezone.split('/')
		this.setState({
			region,
			city
		})
	}

	selectRegion(e) {
		this.setState({
			region: e.target.value
		})

		const {region} = this.state;
		const city = getCitiesOfRegion(region)[0]

		this.props.setTimezone(`${region}/${city}`)
	}

	selectCity(e) {
		this.setState({
			city: e.target.value
		})

		const {region, city} = this.state;

		this.props.setTimezone(`${region}/${city}`)
	}

	render(props, {region, city}) {

		return (
			<div class="page">
				<div class={style['timezone']}>

					<select onChange={e => this.selectRegion(e)}>
						{ianaRegions.map(r => {
							const selected = region === r ? {'selected':'selected'}: {}
							return <option value={r} {...selected}>{r}</option>
						})}
					</select>

					<select onChange={e => this.selectCity(e)}>
						{getCitiesOfRegion(region).map(c => {
							const selected = city === c ? {'selected':'selected'}: {}
							return <option value={c} {...selected}>{c}</option>
						})}
					</select>

				</div>
			</div>
		)
	}
}
