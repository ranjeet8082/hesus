import React from 'react';

import './Header.style.css';

export default function Header() {
    return (
        <>
            <header className="main-header">
                <a href="#" id="hexagon">Hesus</a>
                <input className="search-field" type="search" name="search" placeholder="Search..." />
            </header>
        </>
    )
}
