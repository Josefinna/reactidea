import React from 'react';
import './Header.css';
import SearchComponent from './searchComponent';
import './tipografía.css';

const Header = () => {
    return (
    <header>
        <div className='header-principal'>
            <div className='upHeader'>
                <div className='logo'>
                </div>
                <div className='buscador'>
                    <SearchComponent />
                </div>
                <div className='carrito'>
                    <a href='/carrito'>Carrito</a>
                </div>
                <div className='cuenta'>
                    <a href='/cuenta'>Mi Cuenta</a>
                </div>
            </div>
            <div className='downHeader'>
                <button>Novedades</button>
                <button>Toallas</button>
                <button>Ropa de Casa</button>
                <button>Baby & Kids</button>
                <button>Vestuario</button>
                <button>Accesorios</button>
            </div>
        </div>
    </header>
    );
};
export default Header;