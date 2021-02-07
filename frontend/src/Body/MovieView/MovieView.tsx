import React from 'react';
import Movie from '../../Models/Movie';
import axios from 'axios';
import MovieField from '../MovieField/MovieField';
import './MovieView.css';
import { Grid } from '@material-ui/core';
import ReactLoading from 'react-loading';
import ApiService from '../../Services/ApiService';

interface IProps {}

interface IState {
	runningMovies?: Movie[];
	isLoading: boolean;
}

export default class MovieView extends React.Component<IProps, IState> {
	state: IState = {isLoading: true};

	componentDidMount() {
		setTimeout(() => {
			
			ApiService.getInstance().getRunningMovies().then((result) => {
			this.setState({
				runningMovies: result,
				isLoading : false
			})
		});}, 1000);
	}

	render() {
		return (
			<div className="App">
			{this.state.isLoading ? (
				<div>
				<ReactLoading className="react_loading" type={"bubbles"} height={'20%'} width={'20%'} color={"black"} />
				</div>
			) : (
			<Grid
				container
				direction="row"
				className="gridView"
				spacing={2}
				style={{
					margin: 0,
					width: '100%'
				}}
			>
				{this.state.runningMovies == null ? (
					<Grid item xs={12}>
						"No Movies Found!"
					</Grid>
				) : (
					this.state.runningMovies.map((i) => {
						return <MovieField movie={i} key={i.id} />;
					})
				)}
			</Grid>
			)}
			</div>
		);
	}
}
