import React from 'react';
import Movie from '../../Models/Movie';
import axios from 'axios';
import MovieField from '../MovieField/MovieField';
import './MovieView.css';
import { Grid } from '@material-ui/core';

interface IProps {}

interface IState {
	runningMovies?: Movie[];
}

export default class MovieView extends React.Component<IProps, IState> {
	state: IState = {};

	componentDidMount() {
		axios.get<Movie[]>('http://localhost:8080/tmdb/running/').then((res) => res.data).then((result) => {
			this.setState({
				runningMovies: result
			});
		});
	}

	render() {
		return (
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
		);
	}
}
