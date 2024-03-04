import {useEffect, useState} from "react";

import {usePageQuery} from "../../hooks";
import {genreService} from "../../services";
import {MoviesList, GenreItem} from "../../components";
import {IGenre, IMovie} from "../../interfaces";

const GenresPage = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [currentGenre, setCurrentGenre] = useState<number>(0);
    const {page, nextPage, prevPage, resetPage} = usePageQuery();
    useEffect(() => {
        genreService.getGenres()
            .then((response) => setGenres(response.data.genres))
    }, []);
    useEffect(() => {
        if (currentGenre) {
            getMovies(page, currentGenre)
        }
    }, [page, currentGenre]);
    const getMovies = (page:string, genre:number) => {
        genreService.getMovies(page, genre)
            .then((response) => {
                setTotalPages(response.data.total_pages)
                setMovies(response.data.results)
            })
    }
    const onGenreClick = (id:number) => {
        // getMovies(1, id);
        setCurrentGenre(id);
        resetPage()
    }

    return (
        <div>
            {genres.map((genre:any) => <GenreItem key={genre.id} genre={genre} currentGenre={currentGenre} onGenreClick={() => onGenreClick(genre.id)}/>)}
            <MoviesList movies={movies} page={page} prev={prevPage} next={nextPage} totalPages={totalPages}/>
        </div>
    );
};

export {GenresPage};