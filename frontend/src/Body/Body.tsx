import React from "react";
import "./Body.css";
import MovieView from "./MovieView/MovieView";

export default class Body extends React.Component {
  render() {
    return (
        <main>
          <MovieView />
        </main>
    );
  }
}
