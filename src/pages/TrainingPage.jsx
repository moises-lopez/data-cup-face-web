import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import {
  createGroupPerson,
  addPersonToGroupPerson,
  deleteGroupPerson,
} from "../functions/faceRecognitionIdentifierHelper";
import TablePersons from "../components/TablePersons";
import findPersonsInGroupInAzure from "../functions/facePersonGroupHelper";
import InputField from '../components/InputField'
import ChainofButtons from '../components/ChainofButtons'
import SpinningCircle from '../components/SpinningCircle'

import '../css/training.css'
import '../css/homepage.css'

const TrainingPage = () => {
  const [images, setImages] = useState([]);
  const [circle, setCirle] = useState(false);
  const [nombrePersona, setNombrePersona] = useState("");
  const [imagenesSubidas, setImagenesSubidas] = useState(0);
  const [personsInGroup, setPersonsInGroup] = useState([]);

  const onImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      let imagesState = [...images];
      imagesState.push(img);
      setImages(imagesState);
      setImagenesSubidas(imagenesSubidas + 1);
    }
  };

  const getPersonsInGroup = async () => {
    setCirle(true)
    const myPersonsInGroup = await findPersonsInGroupInAzure();
    setPersonsInGroup(myPersonsInGroup);
    setCirle(false)
  };

  const handleTraining = async () => {
    setCirle(true)
    addPersonToGroupPerson(images, nombrePersona);
    setCirle(false)
  };

  const handleCreateGroup = async () => {
    setCirle(true)
    await createGroupPerson();
    setCirle(false)
  };

  const handleDeleteGroup = async () => {
    setCirle(true)
    await deleteGroupPerson();
    setCirle(false)
  };

  return (
    <div className='flex_training'>
      {circle ? 
      <div className='training_circle_flex'>
      <p> Fetching Request... </p> 
      <SpinningCircle training={true}/>
      </div>
      : <div className='empty_div'/>}
      <InputField/>
      <TablePersons data={personsInGroup} />


      <p>Imágenes subidas = {imagenesSubidas}</p>
      <input type="file" name="myImage" onChange={(e) => onImageChange(e)} />

      <ChainofButtons
      getPersonsInGroup={getPersonsInGroup}
      handleTraining={handleTraining}
      handleCreateGroup={handleCreateGroup}
      handleDeleteGroup={handleDeleteGroup}
      />
    </div>
  );
};

export default TrainingPage;
