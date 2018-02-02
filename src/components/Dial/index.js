import { h, Component } from 'preact';
import style from './style';
import { getTouchAngle, rotateAngle90 } from './tools'

export default class Dial extends Component {

    componentWillMount () {
        this.setState({
            startAngle: 0,
            setAngle: 0
        })
    }
    componentDidMount() {
        this.container.style.setProperty(`--dialRotation`, '0deg')
    }

    updateAngle(event, callback) {
        getTouchAngle(event, (touchAngle) => {
            const { grabAngle, setAngle } = this.state
            const angleDiff = touchAngle - grabAngle
            const angle = -1 * (setAngle + angleDiff)

            this.props.onChange(rotateAngle90(angle))

            callback(angle)
        })
    }

    selecting (event) {
        event.preventDefault()

        if (!this.state.selecting) return

        this.updateAngle(event, (angle) => {
            this.setState({
                angle: angle
            })
            this.container.style.setProperty(`--dialRotation`, (angle) + 'deg')
        })
    }

    selectStart (e) {
        e.preventDefault()
        getTouchAngle(e, (grabAngle) => {
            this.setState({
                grabAngle,
                selecting: true
            })
        })
    }

    selectEnd (e) {
        e.preventDefault()
        this.updateAngle(event, (angle) => {
            const setAngle = -1 * angle
            this.setState({
                setAngle,
                selecting: false
            })
        })
    }

    render (props) {
        const className = [props.className, style['dial']].join(' ')

        return <div
            ref={(element) => { this.container = element; }}
            class={className}
            onMouseDown={e => this.selectStart(e)}
            onTouchStart={e => this.selectStart(e)}
            onMouseMove={e => this.selecting(e)}
            onTouchMove={e => this.selecting(e)}
            onMouseUp={e => this.selectEnd(e)}
            onTouchEnd={e => this.selectEnd(e)}
        >
            {props.children}
        </div>

    }
}
