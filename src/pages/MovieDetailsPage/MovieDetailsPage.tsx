import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import StarRatings from "react-star-ratings";

import {movieService} from "../../services";
import css from './MovieDetailsPage.module.css';
import {useAppContext} from "../../hoc";
import {IMovie} from "../../interfaces";

const MovieDetailsPage = () => {
    const [movieDetails, setMovieDetails] = useState<IMovie | null>(null)
    const {id} = useParams();
    const [mode] = useAppContext()
    useEffect(() => {
        movieService.getById(id as string)
            .then((response) => setMovieDetails(response.data))
    }, [id])
    return !movieDetails ? null : (
        <div className={css.wrap}>
            <div className={mode === 'dark' ? css.title : css.titleWhite}>{movieDetails.title}</div>
            <div className={css.info}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                         alt={movieDetails.title}/>
                </div>
                <div>
                    <div className={css.rating}><h1><i>Rating: </i></h1><StarRatings
                        rating={movieDetails.vote_average}
                        starRatedColor="yellow"
                        numberOfStars={10}
                        name='rating'
                        starDimension="40px"
                        // starSpacing="10px"
                    /></div>
                    <div className={mode === 'dark' ? css.info2: css.info2_white}>
                        <div className={css.genres}><h2><i>Genres: </i></h2></div>
                        <div>
                            {movieDetails.genres.map((genre: any) => <div
                            key={genre.id}>{genre.name}</div>)}
                        </div>
                        <div className={css.runtime}><h2><i>Runtime: </i></h2></div>
                        <div>
                            {movieDetails.runtime} min
                        </div>
                        <div className={css.release_date}><h2><i>Release Date: </i></h2></div>
                        <div>
                            {movieDetails.release_date}
                        </div>
                    </div>
                    <div className={mode === 'dark' ? css.footer: css.footer_white}>
                        <h3><i>Overview:</i></h3>
                        <p>{movieDetails.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {MovieDetailsPage};