import React from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import { NavHeader, Navbar } from './StyledWidgets';

const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <Navbar>
            <nav className="nav-bar">
                <NavHeader>
                    <h1>Women's World Cup</h1>
                </NavHeader>
                <div className="dark-mode-toggle">
                    <div 
                    onClick={toggleMode} 
                    className={darkMode ? 'toggle toggled' : 'toggle'} />
                </div>
            </nav>
        </Navbar>
    );
};

export default NavBar;