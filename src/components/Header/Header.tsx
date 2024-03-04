import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {useAppContext} from "../../hoc";

const Header = () => {
    const [mode, setMode] = useAppContext()
    return (
        <div className={mode === 'dark' ? css.header : css.header_white}>
            <div className={css.movie_db}>
                <h4>The Movie DB</h4>
            </div>
            <div>
                <NavLink to={'movies'}> Movies </NavLink>
                <NavLink to={'genres'}> Genres </NavLink>
                <NavLink to={'search'}> Search </NavLink>
            </div>
            <div className={css.theme}>
                <div><h3>Theme:</h3></div>
                <button disabled={mode === 'dark'} onClick={() => {setMode('dark'); localStorage.setItem('mode', 'dark')}}>dark</button>
                <button disabled={mode === 'light'} onClick={() => {setMode('light'); localStorage.setItem('mode', 'light')}}>light</button>
            </div>
        </div>
    );
};

export {Header};