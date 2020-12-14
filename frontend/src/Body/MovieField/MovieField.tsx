import React from "react";
import Movie from "../../Models/Movie";
import "./MovieField.css";
import {Grid} from "@material-ui/core";

interface IProps {
    movie: Movie
}

interface IState {
}

export default class MovieField extends React.Component<IProps, IState> {

    render() {
        return (
            <Grid item className="view" xs={3}>
                <div className="movieTitle">{this.props.movie.title}</div>
                <img height="250px" src={"https://image.tmdb.org/t/p/w500" + this.props.movie.poster_path} alt={this.props.movie.title + " Movie Poster"} />
                <div className="overview">{this.props.movie.overview?.split(".")[0] + "."}</div>
            </Grid>
        );
    }
}