import React from 'react';
import { useDarkMode } from './hooks/useDarkMode';

const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <nav className="nav-bar">
            <h1>Women's World Cup</h1>
            <div className="dark-mode-toggle">
                <div 
                onClick={toggleMode} 
                className={darkMode ? 'toggle toggled' : 'toggle'} />
            </div>
        </nav>
    );
};

export default NavBar;