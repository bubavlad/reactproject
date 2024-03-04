import {apiService} from "./apiService";
import {urls} from "../constants";

const genreService = {
    getGenres:() => apiService.get(urls.genre.base),
    getMovies:(page:string, genre:number) => apiService.get(`${urls.movies.base}?page=${page}&with_genres=${genre}`)
}

export {
    genreService
}