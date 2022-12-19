import React from 'react';
import styles from './Header.modules.scss';

import userImage from './../../images/header/user.svg';
import hamburgerImage from './../../images/header/hamburger.svg';
import { Link } from 'react-router-dom';

const Header = () =>{
    return (

        <header className={styles.header}>

        <Link to="/">
            <button type='button'> 
                <img src={userImage} alt='Auth'></img>
            </button>
        </Link>

        <Link to="/About">
            <button type='button'>
                <img src={hamburgerImage} alt='Auth'></img>
             </button>
        </Link>
        </header>
        
    )
}

export default Header; 