import React from 'react';
import './Header.modules.scss';

import userImage from './../../images/header/user.svg';
import Hamburger from './Hamburger/Hamburger.jsx'
import arrowImage from './../../images/registred/Arrow 2.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () =>{

    const location = useLocation ();

    let navigate = useNavigate();
    function handleClick() {
      navigate("/");
    }
    
  
    return (

        <header className='header'>
            {location.pathname != '/' ? (
                <button type='button' onClick={handleClick}> 
                    <img src={arrowImage} alt='back'></img>
                </button>
            ):
                (
                <button type='button'> 
                    <img src={userImage} alt='Auth'></img>
                </button>
            )}

            <Hamburger />
        
        </header>
        
    )
}

export default Header; 