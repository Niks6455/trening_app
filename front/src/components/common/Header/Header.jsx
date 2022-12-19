import React from 'react';
import './Header.modules.scss';

import userImage from './../../images/header/user.svg';
import Hamburger from './Hamburger/Hamburger.jsx'

const Header = () =>{
    return (

        <header className='header'>

        
            <button type='button'> 
                <img src={userImage} alt='Auth'></img>
            </button>
        

            <Hamburger />
        
        </header>
        
    )
}

export default Header; 