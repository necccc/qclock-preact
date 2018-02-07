import { h, Component } from 'preact';
import style from './style';
import VerticalSlider from '../../components/VerticalSlider';

export default class Luminosity extends Component {

	updateLuminosity (luminosity) {
		this.props.onChange(luminosity);
	}

	render({ hue, value }, state) {
		const gradient = `background-image: linear-gradient(hsl(${hue}, 100%, 100%), hsl(${hue}, 100%, 0%));`;

		return (<div class={style.colorpicker__luminosity} style={gradient}>
			<VerticalSlider
				onChange={e => this.updateLuminosity(e)}
				value={value}
				customLevel={style['colorpicker__luminosity-level']}
			>
				<div class={style['colorpicker__luminosity-level']} />
			</VerticalSlider>
		</div>);
	}
}
