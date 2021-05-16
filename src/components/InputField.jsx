import React, { Component } from 'react';

import '../css/training.css'

const InputField = () => {
    return (  
        <div className='form'>
            <div className='form2'>
                <div className='text-input'>
                    <label for='username'>Username</label>
                    <input type='text' name='username' id='username' placeholder='' />
                    <span className='separator'> </span>
                </div>
            </div>
        </div>
    );
}
 
export default InputField;