import {useEffect, useState} from "react";

import {MoviesList} from "../../components";
import {movieService} from "../../services";
import {usePageQuery} from "../../hooks";
import {IMovie} from "../../interfaces";

const MoviesPage = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const {page, nextPage, prevPage} = usePageQuery();
    useEffect(() => {
        movieService.getAll(page)
            .then((response) => {
                setTotalPages(response.data.total_pages)
                setMovies(response.data.results)
            })
    }, [page]);

    return (
        <div>
            <MoviesList movies={movies} page={page} prev={prevPage} next={nextPage} totalPages={totalPages}/>
        </div>
    );
};

export {MoviesPage};