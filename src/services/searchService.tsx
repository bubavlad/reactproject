import {apiService} from "./apiService";
import {urls} from "../constants";

const searchService = {
    getBySearch:(page:string, query:string) => apiService.get(`${urls.search.base}?page=${page}&query=${query}`)
}

export {
    searchService
}