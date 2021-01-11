import React from "react";
import Movie from "../../Models/Movie";
import "./MovieField.css";
import {Grid} from "@material-ui/core";
import { Link } from 'react-router-dom';

interface IProps {
    movie: Movie
}

interface IState {
}

export default class MovieField extends React.Component<IProps, IState> {

    render() {
        return (
            <Grid item className="view" xs={12} sm ={6} md={4} lg={3}>
                <Link className="movieLink" to={{pathname: (this.props.movie.id!==undefined ? `/movieDetails/${this.props.movie.id}` : '/'), state: {title: this.props.movie.title}}}>
                <figure className="cards__item__pic-wrap">
                    <img className="movieImg" src={"https://image.tmdb.org/t/p/w500" + this.props.movie.poster_path} alt={this.props.movie.title + " Movie Poster"} />
				</figure>
                <div className="cards__item__info">
                    <div className="movieTitle">{this.props.movie.title}</div>
                    <div className="overview">{this.props.movie.overview?.split(".")[0] + "."}</div>					
                </div>
                </Link>
            </Grid>
        );
    }
}