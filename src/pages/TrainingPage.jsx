import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import {
  createGroupPerson,
  addPersonToGroupPerson,
  deleteGroupPerson,
  olvidarGroupPerson,
} from "../functions/faceRecognitionIdentifierHelper";
import { Input } from "@material-ui/core";

import TablePersons from "../components/TablePersons";
import findPersonsInGroupInAzure from "../functions/facePersonGroupHelper";
import InputField from "../components/InputField";
import ChainofButtons from "../components/ChainofButtons";
import SpinningCircle from "../components/SpinningCircle";

import "../css/training.css";
import "../css/homepage.css";
const {
  getFrameFromWebcam,
  getImageFromWebCam,
} = require("../functions/webcamHelper");

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
    setCirle(true);
    const myPersonsInGroup = await findPersonsInGroupInAzure();
    setPersonsInGroup(myPersonsInGroup);
    setCirle(false);
  };

  const handleTraining = async () => {
    setCirle(true);
    await addPersonToGroupPerson(images, nombrePersona);
    setImages([]);
    setImagenesSubidas(0);
    setCirle(false);
  };

  const handleCreateGroup = async () => {
    setCirle(true);
    await createGroupPerson();
    setCirle(false);
  };

  const handleDeleteGroup = async () => {
    setCirle(true);
    await deleteGroupPerson();
    setCirle(false);
  };

  const handleOlvidarCaras = async () => {
    setCirle(true);
    await olvidarGroupPerson();
    setCirle(false);
  };

  const handleTakeFramWebCamToTrain = async () => {
    setCirle(true);
    const frameFromWebCam = await getFrameFromWebcam();
    console.log(frameFromWebCam);
    let imagesState = [...images];
    imagesState.push(frameFromWebCam);
    setImages(imagesState);
    setImagenesSubidas(imagenesSubidas + 1);
    setCirle(false);
  };

  return (
    <div className="flex_training">
      {circle ? (
        <div className="training_circle_flex">
          <p> Haciendo petición... </p>
          <div>
            <SpinningCircle training={true} />
          </div>
        </div>
      ) : (
        <div className="empty_div" />
      )}
      <button
        className="face_button"
        onClick={() => handleTakeFramWebCamToTrain()}
      >
        Tomar Foto Cámara Web
      </button>
      <TextField
        label="Nombre Persona"
        value={nombrePersona}
        onChange={(e) => setNombrePersona(e.target.value)}
      ></TextField>
      <Button variant="contained" component="label">
        Subir Imagen para entrenar
        <input type="file" hidden onChange={(e) => onImageChange(e)} />
      </Button>
      <p>Imágenes subidas = {imagenesSubidas}</p>

      <ChainofButtons
        getPersonsInGroup={getPersonsInGroup}
        handleTraining={handleTraining}
        handleOlvidarCaras={handleOlvidarCaras}
      />
      <TablePersons data={personsInGroup} />
    </div>
  );
};

export default TrainingPage;
