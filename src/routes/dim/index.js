import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import style from './style'
import * as actions from '../../actions/dim';
import reducers from '../../reducers';
import VerticalSlider from '../../components/VerticalSlider';
import HorizontalSlider from '../../components/HorizontalSlider';
import Toggle from '../../components/Toggle';

@connect(reducers, actions)
export default class Dim extends Component {

    componentWillMount () {
        let { from, to, level, active } = this.props.dim

        from = Math.floor((100 / 24) * from);
        to = Math.floor((100 / 24) * to);

        this.setState({
            from, to, level, active
        })
    }

    componentDidMount () {
        const { width, height } = this.dimLevelElement.getBoundingClientRect();
        const angle = deg(Math.atan(height / width))
        this.dimLevelElement.style.setProperty(`--dimLevelGradientAngle`, `${angle}deg`);
    }

    update () {
        let { from, to, level, active } = this.state

        from = Math.floor((24 / 100) * from);
        to = Math.floor((24 / 100) * to);

        this.props.setDim({
            from, to, level, active
        });
    }

    fromChange (from) {
        this.setState({
            from
        })
        this.update()
    }

    toChange (to) {
        this.setState({
            to
        })
        this.update()
    }

    dimChange (level) {
        this.setState({
            level
        })
        this.update()
    }

    toggle (active) {
        this.setState({
            active
        })
        this.update()
    }

    render(props, {from, to, level, active}) {

        const { to: toHours, from: fromHours } = props.dim

        return (
            <div class="page">
                <div class={style['dim']}>
                    <Toggle class={style['dim-toggle']} value={active} onChange={e => this.toggle(e)} />
                    <DimFrom from={from} disabled={!active} onChange={e => this.fromChange(e)} />
                    <DimTo to={to} disabled={!active} onChange={e => this.toChange(e)} />

                    <div class={style['dim-numeric']} disabled={!active}>
                        <input
                            type="text" min="1" max="12" steps="1" value={fromHours}
                            onChange={e => this.fromChange(e)}
                            onKeyDown={e => this.fromChange(e)}
                            disabled={!active}
                        />
                        <span>to</span>
                        <input
                            type="text" min="0" max="59" steps="1" value={toHours}
                            onChange={e => this.toChange(e)}
                            onKeyDown={e => this.toChange(e)}
                            disabled={!active}
                        />
                    </div>
                    <div
                        class={style['dim-level']}
                        disabled={!active}
                        ref={(e) => { this.dimLevelElement = e }}
                        >
                        <HorizontalSlider
                            className={style['dim-level__slider']}
                            onChange={e => this.dimChange(e)}
                            value={level}
                            disabled={!active}
                        >
                        </HorizontalSlider>
                    </div>
                </div>
            </div>
        );
    }
}



function DimTimeDecoration(props) {
    const decoration = (new Array(9)).fill(0)

    return <div class={[style['dim-time__decoration'], props.class].join(' ')}>
        {decoration.map((z, i) => {
            return <div class={style['dim-time__decoration-point']}></div>
        })}
    </div>
}

function DimFrom({from, disabled, onChange}) {
    return <div class={style['dim-from']} disabled={disabled}>
        <VerticalSlider
            className={style['dim-from__slider']}
            onChange={e => onChange(e)}
            value={from}
            disabled={disabled}
        >
            <DimTimeDecoration class={style['dim-from__decoration']} />
        </VerticalSlider>
    </div>
}


function DimTo({to, disabled, onChange}) {
    return <div class={style['dim-to']} disabled={disabled}>
        <VerticalSlider
            className={style['dim-to__slider']}
            onChange={e => onChange(e)}
            value={to}
            disabled={disabled}
        >
            <DimTimeDecoration class={style['dim-to__decoration']} />
        </VerticalSlider>
    </div>
}

function deg (radians) {
    return radians * 180 / Math.PI;
}
