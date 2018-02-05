import { h, Component } from 'preact';
import style from './style';
import Dial from '../Dial'
import Color from './Color'
import SpectrumDecoration from './SpectrumDecoration'

const colors = (new Array(64)).fill(0)

export default class Spectrum extends Component {

    componentWillMount () {
        const angles = colors.map((a, index) => {
            return index * (360 / colors.length)
        })

        this.setState({
            angles
        })
    }

    onHue (deg) {
        let hue = 360 - deg
        this.props.onChange(hue)
    }

    render({ hue }, {angles}) {
        const dialValue = 360 - hue

        return <div
            ref={(element) => { this.container = element; }}
            class={style['spectrum']}
        >
            <div class={style['spectrum__selector']}></div>
            <Dial
                className={style['spectrum-circle']}
                value={dialValue}
                onChange={ e => this.onHue(e) }
            >
                <div class={style['spectrum-circle__inner']}>
                {angles.map((angle, index, angles) =>
                    <Color angle={angle} index={index} size={angles.length} />
                )}
                </div>
                <SpectrumDecoration />

            </Dial>

        </div>
    }
}
