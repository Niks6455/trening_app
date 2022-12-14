import React from 'react';
import styles from './Header.modules.scss';

import userImage from './../../images/header/user.svg';
import hamburgerImage from './../../images/header/hamburger.svg';

const Header = () =>{
    return (

        <header className={styles.header}>

            <button type='button'> 
                <img src={userImage} alt='Auth'></img>
            </button>


            <button type='button'>
                <img src={hamburgerImage} alt='Auth'></img>
             </button>

        </header>
        
    )
}

export default Header; 