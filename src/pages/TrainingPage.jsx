import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import {
  createGroupPerson,
  addPersonToGroupPerson,
  deleteGroupPerson,
} from "../functions/faceRecognitionIdentifierHelper";
import TablePersons from "../components/TablePersons";
import findPersonsInGroupInAzure from "../functions/facePersonGroupHelper";

const TrainingPage = () => {
  const [images, setImages] = useState([]);
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
    const myPersonsInGroup = await findPersonsInGroupInAzure();
    setPersonsInGroup(myPersonsInGroup);
  };

  const handleTraining = async () => {
    addPersonToGroupPerson(images, nombrePersona);
  };

  const handleCreateGroup = async () => {
    await createGroupPerson();
  };

  const handleDeleteGroup = async () => {
    await deleteGroupPerson();
  };

  return (
    <div>
      <h1>Select Image</h1>
      <TextField
        label="Nombre Persona"
        value={nombrePersona}
        onChange={(e) => setNombrePersona(e.target.value)}
      ></TextField>
      <TablePersons data={personsInGroup} />
      <p>Imágenes subidas = {imagenesSubidas}</p>
      <input type="file" name="myImage" onChange={(e) => onImageChange(e)} />
      <Button onClick={() => getPersonsInGroup()}>
        Mostrar personas entrenadas
      </Button>

      <Button onClick={() => handleTraining()}>TRAIN</Button>
      <Button onClick={() => handleCreateGroup()}>CREATE GROUP</Button>
      <Button onClick={() => handleDeleteGroup()}>
        DELETEEEEEEEEEEE!!!!!! GROUP
      </Button>
    </div>
  );
};

export default TrainingPage;
