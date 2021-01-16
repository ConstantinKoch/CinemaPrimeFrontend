import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import Movie from '../../Models/Movie';

interface IProps {
}

interface IState {
	runningMovies?: Movie[];
	url?: String;
	lastSegment?: number;
	movie?: Movie;
}

export default class DetailMoviePage extends Component<IProps, IState> {
	state:IState = ({url : window.location.href})
	componentDidMount() {
		axios.get<Movie[]>('http://localhost:8080/tmdb/running/').then((res) => res.data).then((result) => {
			this.setState({
				runningMovies: result
			});
		});
		this.setState({lastSegment : Number(this.state.url?.split('/').pop())})
		
		this.state.runningMovies?.filter(movie => movie.id === this.state.lastSegment)
		this.setState({movie : this.state.runningMovies?.pop()})
	}
	

	render() {
		console.log(this.state.movie?.title)
		console.log(this.state.runningMovies?.length)

		return (
			<div>
				<h1>{this.state.lastSegment}</h1>
				<p>{this.state.movie?.title}</p>
				<p>{this.state.runningMovies?.pop()?.title}</p>
				
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
