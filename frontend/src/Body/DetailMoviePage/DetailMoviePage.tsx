import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import Movie from '../../Models/Movie';
import './DetailMoviePage.css'
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import YTSearch from 'youtube-api-search';
/*import ReadMoreReact from 'read-more-react';
import ReactShowMore from 'react-show-more';
import Select from 'react-select';*/

import ReadMoreAndLess from 'react-read-more-less';

//import * as youtubeSearch from "youtube-search";

let API_KEY = process.env.REACT_APP_YT_API_KEY;

interface IProps {
}

interface IState {
	runningMovies?: Movie[];
	url: String;
	lastSegment?: number;
	movie?: Movie;
	book_path?: String;
	selected_date: string;
	selected_label: string;
	videos_arr?: any[];
	displayVideo?: any;
	finished_rendering: boolean;
}

const options = [
	{ value: '11.01.21 12:00', label: '11.01.21 12:00' },
	{ value: '12.01.21 12:00', label: '12.01.21 12:00' },
	{ value: '13.01.21 12:00', label: '13.01.21 12:00' },
	{ value: '14.01.21 12:00', label: '14.01.21 12:00' } 
  ];

export default class DetailMoviePage extends Component<IProps, IState> {
	state:IState = ({finished_rendering: false, url : window.location.href, selected_date : '11_01_20', selected_label: 'test'})

	constructor(IProps: IProps | Readonly<IProps>){
		super(IProps);
		this.handleChange = this.handleChange.bind(this);
		this.videoSearch = this.videoSearch.bind(this);

	}
	componentDidMount() {
		axios.get<Movie[]>('http://localhost:8080/tmdb/running/').then((res) => res.data)
		.then((result) => {
			this.setState({
				runningMovies: result
			});
		}).then((): void => {
		this.setState({lastSegment : Number(this.state.url.split('/').pop())})
		this.setState({movie : this.state.runningMovies?.filter(movie => movie.id === this.state.lastSegment).pop()}) 
		this.videoSearch()
		this.setState({finished_rendering : true})})
	}

	handleChange(e: any) {
		console.log("Datum geändert");
		this.setState( {selected_date : e.currentTarget.value });
	}

	videoSearch = (): void => {
		const term_str = this.state.movie?.title + " Trailer";
		YTSearch({key: API_KEY, term: term_str}, (videos: any[]) => {
			this.setState({
				videos_arr : videos,
				displayVideo : videos[0]
			}
		)});
		console.log(this.state.displayVideo);
	}
	
	render(): JSX.Element {
		return (
			this.state.finished_rendering ? (
			<Grid
			container
			className="contactform_map"
			justify="center"
			spacing={0}
			alignItems="flex-start"
			direction="row"
		>
			<Grid item xs={12} sm={12} md={6} lg={6}>
				<div className="movieDetails_img_div">
				<img    className="movieDetails_img"
						src={'https://image.tmdb.org/t/p/w500' + this.state.movie?.poster_path}
						alt={this.state.movie?.title + ' Movie Poster'}/>

				{//<ReactPlayer url={`https://www.youtube.com/watch?v=${this.state.displayVideo?.id.videoId}`} />
				}
				</div>
			</Grid>

			<Grid item xs={12} sm={12} md={6} lg={6}>

				<div className="movieDetails_info_div">
                    <div className="movieDetails_title">{this.state.movie?.title}</div>
					
					<ReadMoreAndLess
					charLimit={250} readMoreText="show more" readLessText="show less"
					readMoreClassName="movieDetails_overview" readLessClassName="movieDetails_overview"
					style={{lineHeight: 24, fontSize: 16, color: "blue"}} readLessStyle={{lineHeight: 24, fontSize: 16}}>
						{this.state.movie?.overview}
					</ReadMoreAndLess>
				</div>
					{/*<Select
						className="movieDetails_select"
						classNamePrefix="select"
						isDisabled={false}
						isLoading={false}
						isClearable={false}
						isRtl={false}
						//defaultValue={{ label: "Select Date", value: "test" }}	
						isSearchable={false}
						value={{label: this.state.selected_date, value: this.state.selected_label}}
						name="color"
						options={options}
						onChange={this.handleChange}
        			/>*/}

					<select value={this.state.selected_date} onChange={this.handleChange} className="movieDetails_select_new">
						{options.map((option) => (
							<option value={option.value}>{option.label}</option>))}
					</select>
					<div className="movieDetails_btns_div">
					<a className="movieLink_trailer" target="_blank" rel="noreferrer" href={`https://www.youtube.com/watch?v=${this.state.displayVideo?.id.videoId}`}>
						<Button className="movieDetails_btn_trailer" variant="contained">
							Trailer
						</Button>
					</a>
						<Link className="movieLink_booking" to={{pathname: (this.state.movie?.id!==undefined ? 
							`/booking/${this.state.movie?.id}/${this.state.selected_date}` : '/')}}>
						<Button className="movieDetails_btn" variant="contained">
							Book
						</Button>
						</Link>
					</div>
            </Grid>
		</Grid>
			): (<div>Test</div>)
		);
	}
}