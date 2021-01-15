import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import Movie from '../../Models/Movie';

interface IProps {
	movie: Movie;
}

interface IState {
	runningMovies?: Movie[];
}

export default class DetailMoviePage extends Component<IProps, IState> {
	state: IState = {};

	url = window.location.href;
	lastSegment = this.url.split('/').pop();

	Movie_temp: Movie | undefined;

	componentDidMount() {
		axios.get<Movie[]>('http://localhost:8080/tmdb/running/').then((res) => res.data).then((result) => {
			this.setState({
				runningMovies: result
			});
		});
	}

	//Movie_temp = this.runningMovies.map((i))

	render() {
		return (
			<div>
				<h1>{this.lastSegment}</h1>
				{/*<img
						className="movieImg"
						src={'https://image.tmdb.org/t/p/w500' + this.props.movie.poster_path}
						alt={this.props.movie.title + ' Movie Poster'}
					/>
				<div className="cards__item__info">
                    <div className="movieTitle">{this.props.movie.title}</div>
                    <div className="overview">{this.props.movie.overview?.split(".")[0] + "."}</div>					
                </div>*/}
			</div>
		);
	}
}
