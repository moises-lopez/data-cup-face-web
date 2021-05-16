import React, { Component } from 'react';

const ChainButtons = ({getPersonsInGroup, handleTraining, handleCreateGroup, handleDeleteGroup}) => {
    return ( 
        <div className='flex_training_buttons'>
            <button className='face_button' onClick={() => getPersonsInGroup()}>
                Mostrar Personas
            </button>

            <button className='face_button' onClick={() => handleTraining()}>
                Entrena
            </button>

            <button className='face_button' onClick={() => handleCreateGroup()}>
                Crea Grupo
            </button>

            <button className='face_button' onClick={() => handleDeleteGroup()}>
                Borrar Grupo
            </button>
        </div>
     );
}
 
export default ChainButtons;