import css from './GenreItem.module.css'
import {useAppContext} from "../../hoc";

const GenreItem = ({genre, onGenreClick, currentGenre}:any) => {
    const [mode, setMode] = useAppContext()
    const {name, id} = genre
    return (
        <div className={`${mode === 'dark' ? css.GenreItem : css.GenreItemWhite} ${currentGenre === id ? (mode === 'dark' ? css.GenreItemActive : css.GenreItemWhiteActive) : ''}`} onClick={onGenreClick}>
            {name}
        </div>
    );
};

export {GenreItem};