import React from 'react'

import Cart from '../cart'
import logo from '../../resources/images/vimcar-logo.svg'

import './Header.css'

const Header = () =>
    <header className='header'>
        <div className='header__logo'>
            <a href='/'><img src={logo} alt='Vimcar' /></a>
        </div>
        <div className='header__cart'>
            <Cart itemsCount={5} />
        </div>
    </header>

export default Header
