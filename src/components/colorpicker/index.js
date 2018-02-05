import { h, Component } from 'preact';
import style from './style';
import { clearTimeout } from 'timers';

import Spectrum from './Spectrum'
import Saturation from './Saturation'
import Luminosity from './Luminosity'

const colors = (new Array(64)).fill(0)

export default class ColorPicker extends Component {

    componentWillMount() {
        const [ hue, saturation, luminosity ] = this.props.value

        this.setState({
            hue,
            saturation,
            luminosity
        })
    }

    updateColor () {
        const { hue, saturation, luminosity } = this.state
        this.props.onChange([hue, saturation, luminosity])
    }

    onHueChange(hue) {
        this.setState({
            hue
        })
        this.updateColor()
    }

    onSaturationChange(saturation) {
        this.setState({
            saturation
        })
        this.updateColor()
    }

    onLuminosityChange(luminosity) {
        this.setState({
            luminosity
        })
        this.updateColor()
    }

    render(props, {hue}) {
        return (
            <div class={style['colorpicker']}>
                <Spectrum hue={hue} onChange={e => this.onHueChange(e)} />
                <Saturation hue={hue} onChange={e => this.onSaturationChange(e)} />
                <Luminosity hue={hue} onChange={e => this.onLuminosityChange(e)} />
            </div>
        );
    }
}
