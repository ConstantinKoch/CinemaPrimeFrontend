import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export enum STYLES {
	'btn--primary',
	'btn--outline'
}

export enum SIZES {
	'btn--medium',
	'btn--large'
}

interface IProps {
	text: string;
	type: any;
	url: string;
	buttonStyle?: STYLES;
	buttonSize?: SIZES;
}

interface IState {}

export default class Button extends React.Component<IProps, IState> {
	render() {
		return (
			<Link to={this.props.url} className="btn-mobile">
				<button className={`btn ${this.props.buttonStyle} ${this.props.buttonSize}`} type={this.props.type}>
					{this.props.text}
				</button>
			</Link>
		);
	}
}
