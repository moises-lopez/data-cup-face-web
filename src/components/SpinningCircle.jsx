import React, { Component } from 'react';

import '../css/homepage.css'

const SpinningCircle = ({training}) => {
    return ( 
        <div className={training ? 'main_spinning_circle training_cirlce' : 'main_spinning_circle'}>
            <div className='helper_spinning_circle'/>
        </div>
     );
}
 
export default SpinningCircle ;