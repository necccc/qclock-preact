import { h, Component } from 'preact';
import style from './style';

export default class Toggle extends Component {

    componentWillMount () {

        const id = this.props.id || Math.round(Math.random() * 99999).toString(16)
        this.setState({
            id
        })
    }

    toggle (e) {
        this.props.onChange(e.currentTarget.checked)
    }

    render (props, { id }) {

        const className = [props.class, style['toggle']].join(' ')

        return <div class={className}>
            <input type="checkbox" id={id} onChange={e => this.toggle(e) }/>
            <label for={id}></label>
        </div>
    }
}