import {Outlet} from "react-router-dom";

import {useAppContext} from '../hoc';
import {Header} from "../components";
import css from './MainLayout.module.css';
import {useEffect} from "react";

const MainLayout = () => {
    const [mode, setMode] = useAppContext();
    useEffect(() => {
        const modeFromStorage = localStorage.getItem('mode');
        if (modeFromStorage) {
            setMode(modeFromStorage)
        }
    }, []);
    return (
        <div className={mode === 'dark' ? css.layout_container : css.layout_container_white}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};