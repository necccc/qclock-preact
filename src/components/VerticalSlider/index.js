import { h, Component } from 'preact';
import style from './style';

import { getVerticalSliderLevel } from './tools'


export default class VerticalSlider extends Component {

    componentDidMount() {
        this.setLevel(this.percentToLevel(this.props.value))
    }

    shouldComponentUpdate({value}, nextState) {
        if (this.state.selecting) return false

        const oldValue = this.props.value

        if (oldValue !== value) {
            this.setLevel(this.percentToLevel(value))
            return false
        }

        return true
    }

    percentToLevel (percent) {
        const { height } = this.container.getBoundingClientRect()

        return height - ((percent / 100) * height)
    }

    updateValue (value, height) {
        const percentage = 100 - Math.floor((value / height) * 100)
        this.props.onChange(percentage)
    }

    updateLevel (event, callback) {
        const { height } = event.currentTarget.getBoundingClientRect()

        getVerticalSliderLevel(event, (value) => {
            this.updateValue(value, height)
            callback(value)
        })
    }

    setLevel (level) {
        if (level === this.state.level) return;

        if (this.props.customLevel) {
            this.container.querySelector(`.${this.props.customLevel}`).style.setProperty(`--slideLevel`, level + 'px')
        } else {
            this.container.style.setProperty(`--slideLevel`, level + 'px')
        }

        // TODO onresize

        this.setState({
            level
        })
    }

    selectStart (e) {
        e.preventDefault()
        this.setState({
            selecting: true
        })
        this.updateLevel(event, level => this.setLevel(level))
    }

    selecting(event) {
        event.preventDefault()

        if (!this.state.selecting) return;

        this.updateLevel(event, level => this.setLevel(level))
    }

    clicked(event) {
        event.preventDefault()
        this.updateLevel(event, level => this.setLevel(level))
    }

    selectEnd(e) {
        e.preventDefault()
        this.setState({
            selecting: false
        })
    }

    render(props, state) {

        const className = [props.className, style['vertical-slider']]

        if (props.customLevel) className.push(style['vertical-slider--custom-level'])

        return <div
                    ref={(element) => { this.container = element }}
                    class={className.join(' ')}
                    style={props.style}
                    onClick={e => this.clicked(e)}
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
