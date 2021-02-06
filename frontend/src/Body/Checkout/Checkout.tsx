import React, { Component } from 'react';
import {
	/*Container,
	Button,
	Grid,
	CircularProgress,
	Divider*/
	Typography,
	Paper,
	Stepper,
	Step,
	StepLabel
} from '@material-ui/core';
//import { Link } from 'react-router-dom';
import './Checkout.css';
import PaymentForm from './PaymentForm';

interface IProps {}

interface IState {
	activeStep: number;
}

const steps = [ 'Payment', 'Shipping' ];

export default class Cart extends Component<IProps, IState> {
	state: IState = { activeStep: 0 };

	Confirmation = () => {
		<div>Confirmation</div>;
	};

	render() {
		return (
			<div className={'checkout'}>
				<Paper className="checkout_paper">
					<Typography variant="h4" align="center">
						Checkout
					</Typography>
					<Stepper activeStep={this.state.activeStep} className="checkout_stepper">
						{steps.map((step) => (
							<Step key={step}>
								<StepLabel>{step}</StepLabel>
							</Step>
						))}
					</Stepper>
					{this.state.activeStep === steps.length ? this.Confirmation : <PaymentForm />}
				</Paper>
			</div>
		);
	}
}
