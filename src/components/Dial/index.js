import { h, Component } from 'preact'
import style from './style'
import { getTouchAngle, rotateAngle90, rotateAngle90Back } from './tools'
import { fail } from 'assert'

export default class Dial extends Component {

    componentWillMount () {
        const { value } = this.props

        let startAngle = 0
        let setAngle = 0
        let angle = 0

        if (typeof value === 'number') {
            angle = rotateAngle90Back(value)
        }

        this.setState({
            startAngle,
            setAngle,
            angle,
            setAngle: -1 * angle,
            debug: this.props.test
        })
    }

    componentDidMount() {
        this.container.style.setProperty(`--dialRotation`, (this.state.angle) + 'deg')
    }

    shouldComponentUpdate({value, preventSelect}, nextState) {
        if (this.state.selecting) return false

        const oldValue = this.props.value

        if (oldValue !== value) {
            this.setAngle(rotateAngle90Back(value))
            return false
        }

        return true;
    }

    getNewAngle(event, callback) {
        getTouchAngle(event, (touchAngle) => {
            const { grabAngle, setAngle } = this.state
            const angleDiff = touchAngle - grabAngle
            const angle = -1 * (setAngle + angleDiff)

            this.props.onChange(rotateAngle90(angle))

            callback(angle)
        })
    }

    setAngle(angle) {
        if (angle === this.state.angle) return

        this.setState({
            angle
        })

        this.container.style.setProperty(`--dialRotation`, (angle) + 'deg')
    }

    selecting (event) {
        event.preventDefault()

        if (!this.state.selecting) return

        this.getNewAngle(event, angle => this.setAngle(angle))
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
        this.getNewAngle(event, (angle) => {
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
            ref={(element) => { this.container = element }}
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
