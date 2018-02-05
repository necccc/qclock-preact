import { h, Component } from 'preact'
import style from './style'
import VerticalSlider from '../../components/VerticalSlider'

export default class Saturation extends Component {

    updateSaturation (saturation) {
        this.props.onChange(saturation)
    }

    render({hue, value}, state) {
        const gradient = `background-image: linear-gradient(hsl(${hue}, 100%, 50%), hsl(${hue}, 0%, 50%));`

        return <div class={style['colorpicker__saturation']} style={gradient}>
            <VerticalSlider
                onChange={e => this.updateSaturation(e)}
                value={value}
                customLevel={style['colorpicker__saturation-level']}
            >
                <div class={style['colorpicker__saturation-level']}></div>
            </VerticalSlider>
        </div>
    }
}
