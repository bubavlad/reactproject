import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";

import {MoviesList} from "../../components";
import {searchService} from "../../services";
import {usePageQuery} from "../../hooks";
import css from './SearchPage.module.css';
import {useAppContext} from "../../hoc";
import {IMovie} from "../../interfaces";

const SearchPage = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [keyword, setKeyWord] = useState<string>('');
    const [totalPages, setTotalPages] = useState<number>(0);
    const {handleSubmit, reset, register} = useForm<{query:string}>()
    const {page, nextPage, prevPage, resetPage} = usePageQuery();
    const [mode] = useAppContext()
    useEffect(() => {
        if (keyword) {
            getMovies(page, keyword)
        }
    }, [page, keyword]);

    const search = (formData:{query:string}) => {
        setKeyWord(formData.query)
        resetPage()
    }

    const getMovies = (page:string, query:string) => {
        searchService.getBySearch(page, query)
            .then((response) => {
                setTotalPages(response.data.total_pages)
                setMovies(response.data.results)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <div className={mode === 'dark' ? css.search : css.searchWhite}>
                    <input type='text' placeholder='Movie' {...register('query')}/>
                    <button type='submit'>Search</button>
                </div>
            </form>
            <MoviesList movies={movies} page={page} prev={prevPage} next={nextPage} totalPages={totalPages}/>
        </div>
    );
};

export {SearchPage};