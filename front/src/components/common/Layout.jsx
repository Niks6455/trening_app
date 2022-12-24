import React from "react";
import Header from "./Header/Header";
import styles from './Layout.module.scss';
import cn from 'classnames';


const Layout = ({children, bgImage, heading = ''}) => {
    return(
   
     <div className={cn(styles.wrapper, {
      [styles.otherPage]: !!heading,
     })} style={{ backgroundImage: `url(${bgImage})`}}> 

     
      <Header/>    
         <h1 className={styles.text}> {heading}</h1>
      
      <div>{children}</div> 
        
     </div>
    )
}

export default Layout;