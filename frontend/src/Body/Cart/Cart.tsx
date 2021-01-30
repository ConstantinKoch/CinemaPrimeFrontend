import React, { Component } from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import './Cart.css';

interface IProps {}

interface IState {}

export default class Cart extends Component<IProps, IState> {
	render() {
		return (
			<div className={'cart'}>
				<Grid container spacing={3} />
				<Button
					className={'checkoutButton'}
					component={Link}
					to="/checkout"
					size="large"
					type="button"
					variant="contained"
					color="primary"
				>
					Checkout
				</Button>
			</div>
		);
	}
}
