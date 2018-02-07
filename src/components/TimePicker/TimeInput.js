import { h, Component } from 'preact';
import moment from 'moment';
import style from './style';

const isArrowDown = (e) => {
	const { type, key } = e;
	return type === 'keydown' && key === 'ArrowDown';
};

const isArrowUp = (e) => {
	const { type, key } = e;
	return type === 'keydown' && key === 'ArrowUp';
};

const isChange = (e) => {
	const { type } = e;
	return type === 'change';
};

export default class TimeInput extends Component {

	updateTime (time) {
		this.props.onChange(time);
	}

	onMinuteUpdate(e){

		const value = parseInt(e.target.value, 10);

		if (isArrowUp(e) && (value + 1 < 60)) {
			this.updateTime(this.props.time.setMinutes(value + 1));
		}
		else if (isArrowUp(e)) {
			this.updateTime(this.props.time.setMinutes(0));
		}

		if (isArrowDown(e) && (value - 1 >= 0)) {
			this.updateTime(this.props.time.setMinutes(value - 1));
		}
		else if (isArrowDown(e)) {
			this.updateTime(this.props.time.setMinutes(59));
		}

		if (isChange(e) && (value < 60 || value > 0)) {
			this.updateTime(this.props.time.setMinutes(value));
		}
	}

	onHourUpdate(e) {

		const value = parseInt(e.target.value, 10);

		if (isArrowUp(e) && (value + 1 < 12)) {
			this.updateTime(this.props.time.setHours(value + 1));
		}
		else if (isArrowUp(e)) {
			this.updateTime(this.props.time.setHours(0));
		}

		if (isArrowDown(e) && (value - 1 >= 0)) {
			this.updateTime(this.props.time.setHours(value - 1));
		}
		else if (isArrowDown(e)) {
			this.updateTime(this.props.time.setHours(11));
		}

		if (isChange(e) && (value < 12 || value > 0)) {
			this.updateTime(this.props.time.setHours(value));
		}
	}

	render({ time }, state) {

		const hour = moment(time).format('HH');
		const minute = moment(time).format('mm');

		return (
			<div class={style['time-selector__input']}>
				<input
					type="text" min="1" max="12" steps="1" value={hour}
					onChange={e => this.onHourUpdate(e)}
					onKeyDown={e => this.onHourUpdate(e)}
				/>
				<span>:</span>
				<input
					type="text" min="0" max="59" steps="1" value={minute}
					onChange={e => this.onMinuteUpdate(e)}
					onKeyDown={e => this.onMinuteUpdate(e)}
				/>
			</div>
		);
	}
}