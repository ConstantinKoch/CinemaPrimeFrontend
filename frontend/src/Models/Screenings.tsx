import Seat from "./Seat";
import Movie from "./Movie";

export default class Screenings {
    id?: number;
    movie?: Movie;
    time?: string;
    date?: string;
    seats?: Seat[][];
}
