import React from "react";
import './Field.modules.scss'

const Field = ({placeholder, value, onChange, type = 'text'}) => {
    return(
    <input 
    placeholder={placeholder} 
    value={value} 
    onChange={onChange} 
    type={type} 
    className='input'
    />
    )
}

export default Field;