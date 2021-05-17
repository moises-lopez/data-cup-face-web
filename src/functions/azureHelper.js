import axios from "axios";

async function saveInfoToAzure(identifyInfo, faceInfoFromFrame) {
  const dataToSend = {
    nombre: identifyInfo.name,
  };
  const data = await axios.post;
}
