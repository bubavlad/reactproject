import {MovieItem} from '../index';
import css from './MovieList.module.css'
import {useAppContext} from "../../hoc";
import {IMovie} from "../../interfaces";

interface IProps {
    movies: IMovie[];
    page: string;
    prev: () => void;
    next: () => void;
    totalPages: number;
}

const MoviesList = ({movies, page, prev, next, totalPages}: IProps) => {
    const [mode] = useAppContext()
    return (
        <div>
            <div className={css.MovieList}>
                {movies.map((movie: IMovie) => <MovieItem key={movie.id} movie={movie}/>)}
            </div>
            {!movies.length ? null :
                (<div className={css.pagination}>
                    <button className={mode === 'dark' ? css.button : css.buttonWhite} disabled={page === '1'}
                            onClick={prev}>prev
                    </button>
                    <div className={mode === 'dark' ? css.pageDiv : css.pageDivWhite}>{page} / {totalPages}</div>
                    <button className={mode === 'dark' ? css.button : css.buttonWhite}
                            disabled={totalPages.toString() === page} onClick={next}>next
                    </button>
                </div>)
            }
        </div>
    );
};

export {MoviesList};