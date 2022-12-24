import React from 'react';
import Layout from '../../common/Layout.jsx';
import Button from '../../ui/Button/Button';

import bgImage from './../../images/registred/bg-auth.jpg';
import Field from '../../ui/Field/Field.jsx';
import './NewWorkout.modules.scss';
import Select from 'react-select'
import { options } from './optionColor.js';

const NewWorkout = () =>{
    
    const [name, setName] = React.useState('')

const handSubmit = () => {
    console.log('submit');
}

    return ( 
         <>
        <Layout bgImage={bgImage} heading='Create new workout'/>
      
            <div className='wrapper'>
            
                <form onSubmit={handSubmit} className='form'>
                    <div>
                        <Field 
                        type='text'
                        placeholder='Enter Name' 
                        value={name} 
                        onChange= {e => setName(e.target.value)}/>
                        
                    </div>
                    <div className='select'>
                        <div className='select__inner'>
                        <Select 
                        options={options} 
                        placeholder= 'Exercises...'
                        title= 'Exercises'
                        classNamePrefix = 'select2-selection'
                        />
                        </div>
                    </div>   
                    
                    <div>
                    <Button text='Create' type='purple' callback = {() => {}} style />
                    </div>
                    
                </form> 
            </div>  
        </>
    )
}

export default NewWorkout; 