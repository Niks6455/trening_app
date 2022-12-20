import React from "react";
import styles from './Counters.modules.scss';

const counters = 
    {
        minutes: 7,
        workouts: 1,
        kgs: 5
    }


const Counters = () => {
    return(
     <div className='wrapper1'>
     {Object.entries(counters).map(item => ( 
        <div  key={'_key_' + item[0]}>
            <div className="heading">{item[0]}</div>
            <div className="number">{item[1]}</div>
        </div>
     ))}
     </div>
    )
}

export default Counters;