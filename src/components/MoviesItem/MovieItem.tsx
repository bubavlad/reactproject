import {useNavigate} from "react-router-dom";
import StarRatings from 'react-star-ratings';

import css from './MovieItem.module.css';
import {useAppContext} from "../../hoc";
import {IMovie} from "../../interfaces";
interface IProps {
    movie: IMovie;
}

const MovieItem = ({movie}: IProps) => {
    const {id, poster_path, title, vote_average} = movie
    const img = `https://image.tmdb.org/t/p/w500${poster_path}`
    const navigate = useNavigate();
    const [mode] = useAppContext()

    const onMovieClick = () => {
        navigate(`/movie/${id}`)
    }

    return (
        <div className={css.itemContainer}>
            <div className={css.click} onClick={onMovieClick}>
                <div className={mode === 'dark' ? css.title : css.titleWhite}>{title}</div>
                <img className={css.img} src={img} alt={title}/>
            </div>
            <div className={css.starRatings}><StarRatings
                rating={vote_average}
                starRatedColor="yellow"
                numberOfStars={10}
                name='rating'
                starDimension="20px"
                starSpacing="5px"
            /></div>
        </div>
    );
};

export {MovieItem};