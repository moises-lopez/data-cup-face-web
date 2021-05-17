const key = "b900d6028af8412dac48b5f16f7d7c2b";
const endpoint = "https://instanciaface.cognitiveservices.azure.com/";

const msRest = require("@azure/ms-rest-js");
const Face = require("@azure/cognitiveservices-face");

const credentials = new msRest.ApiKeyCredentials({
  inHeader: { "Ocp-Apim-Subscription-Key": key },
});
const client = new Face.FaceClient(credentials, endpoint);

/* IMPORTS ENDING */

const getFaceInfoFromFrame = async (blob) => {
  const detectedFaces = await client.face.detectWithStream(blob, {
    returnFaceAttributes: ["HeadPose", "Glasses", "Emotion", "Gender", "Smile"],
    detectionModel: "detection_01",
  });
  console.log(detectedFaces.length + " face(s) detected");
  const detectFace = detectedFaces.length > 0;

  // for our purposes for now, we only expect to see 0 or 1 faces,
  // so just get the first face in the list, if any.
  if (detectFace) {
    const faceInfoFromFrame = detectedFaces[0];
    return faceInfoFromFrame;
    console.log("face!");
  } else {
    return -1;
    console.log("no face");
  }
};

module.exports = { getFaceInfoFromFrame };
