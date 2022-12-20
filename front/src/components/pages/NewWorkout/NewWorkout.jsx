import React from 'react';
import Layout from '../../common/Layout';
import Button from '../../ui/Button/Button';

import bgImage from './../../images/registred/bg-auth.jpg';
import Field from '../../ui/Field/Field.jsx';
import './NewWorkout.modules.scss'
const NewWorkout = () =>{
    
    const [name, setName] = React.useState('')
    //const [name, setName] = React.useState('')

const handSubmit = () => {
    console.log('submit');
}

    return (
        <Layout bgImage={bgImage} text= 'Create new workout'>
       
            <div className='wrapper'>
            
                <form onSubmit={handSubmit} className='form'>
                    <div>
                        <Field 
                        type='text'
                        placeholder='Enter Name' 
                        value={name} 
                        onChange= {e => setName(e.target.value)}/>
                        
                    </div>
                    <div>
                    <Button text='Create' type='purple' callback = {() => {}} style />
                    </div>
                    
                </form> 
            </div>     
        </Layout>
    )
}

export default NewWorkout; 