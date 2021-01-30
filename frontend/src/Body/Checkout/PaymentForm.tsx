import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Review from './Review';

export default class PaymentForm extends React.Component {
	render() {
		return (
			<div>
				<Review />
				<Divider />
				<Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>
					Payment method
				</Typography>
				{/*<Elements stripe={stripePromise}>
					<ElementsConsumer>
						{({ elements, stripe }) => (
							<form>
								<CardElement />
								<br /> <br />
								<div style={{ display: 'flex', justifyContent: 'space-between' }}>
									<Button variant="outlined">Back</Button>
									<Button type="submit" variant="contained" disabled={!stripe} color="primary">
										Pay
									</Button>
								</div>
							</form>
						)}
					</ElementsConsumer>
                        </Elements>*/}
			</div>
		);
	}
}
