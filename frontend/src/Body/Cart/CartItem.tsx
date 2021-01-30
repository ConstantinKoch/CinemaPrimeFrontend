import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import './CartItem.css';

export default class CartItem extends React.Component {
	render() {
		return (
			<Card className="cart-item">
				<CardActions className={'cardActions'}>
					<div className={'buttons'}>
						<Button type="button" size="small">
							-
						</Button>
						<Typography>&nbsp;{}&nbsp;</Typography>
						<Button type="button" size="small">
							+
						</Button>
					</div>
					<Button variant="contained" type="button" color="secondary">
						Remove
					</Button>
				</CardActions>
			</Card>
		);
	}
}
