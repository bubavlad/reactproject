import {apiService} from "./apiService";
import {urls} from "../constants";

const movieService = {
    getAll:(page: string) => apiService.get(`${urls.movies.base}?page=${page}`),
    getById:(id: string) => apiService.get(urls.movies.byId(id))
}

export {
    movieService
}