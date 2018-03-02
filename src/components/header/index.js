import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

import { connect } from 'preact-redux';
import actions from '../../actions';
import reduce from '../../reducers';

import { hslToCss } from '../../lib/hsl';

@connect(reduce, actions)
export default class Header extends Component {

	menuToggle(e) {
		if (e.currentTarget.checked) {
			document.querySelector('body').className += ' menu-open'
		} else {
			const cl = document.querySelector('body').className;
			document.querySelector('body').className = cl.replace(' menu-open', '')
		}
	}

	onMenuClick(e) {
		document.querySelector('#menu-open').checked = false;
		const cl = document.querySelector('body').className;
			document.querySelector('body').className = cl.replace(' menu-open', '')
	}

	render(props) {
		const headerStyle = `
			background-image:
			radial-gradient(ellipse at center bottom, hsla(0,0%,13%,0) 0%, hsla(0,0%,13%,.5) 54%, hsla(0,0%,13%,.9)),
			linear-gradient(to right, ${hslToCss(props.colors.outer)}, ${hslToCss(props.colors.inner)})`;

		return (
			<header class={style.header} style={headerStyle}>
				<nav>
					<input type="checkbox" id="menu-open" onChange={e => this.menuToggle(e) } />
					<label for="menu-open"><span>menu</span></label>
					<ul>
						<li ><Link href="/" onClick={e => this.onMenuClick(e)}>time</Link></li>
						<li><Link href="/dim" onClick={e => this.onMenuClick(e)}>dim</Link></li>
						<li><Link href="/design" onClick={e => this.onMenuClick(e)}>design</Link></li>
					</ul>
				</nav>
			</header>
		);
	}
}