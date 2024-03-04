import {IGenre} from "./genreInterface";

export interface IMovie {
    id: number;
    title: string;
    poster_path: string
    vote_average: number;
    genres: IGenre[];
    runtime: number;
    release_date: string;
    overview: string
}