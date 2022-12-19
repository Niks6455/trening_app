import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { menu } from './menuBase.js';

import hamburgerCloseImage from './../../../images/header/hamburger-close.svg';
import hamburgerImage from './../../../images/header/hamburger.svg';
import './Hamburger.modules.scss';

const NewWorkout = () =>{
    const [show, setShow] = React.useState(false);
    const handleLogout = () => {
        console.log('LogOut');
    }
    return (  
        <div className='wrapper'>
            <button type='button' onClick={() => setShow(!show)}>
                    <img src={show ? hamburgerCloseImage : hamburgerImage} alt='Auth'></img>
            </button>

            <nav className= {'menu ' + (show ? 'show' : '')}>
            <ul>
                {menu.map((item, idx) =>(
                    <li key={`_menu_${idx}`}>
                        <Link to={item.link}>{item.title}</Link>
                    </li>
                ))}
                <li>
                    <a onClick={handleLogout}>Logout</a>
                </li>
            </ul>
            </nav>
        </div>  
    )
}

export default NewWorkout; 