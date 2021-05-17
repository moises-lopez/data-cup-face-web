const imageBitMapToBlob = async (imageBitMap) => {
  let canvas = document.createElement("canvas");
  canvas.width = imageBitMap.width;
  canvas.height = imageBitMap.height;
  let context = canvas.getContext("2d");
  context.drawImage(imageBitMap, 0, 0);

  const canvasBlob = new Promise((resolve, reject) => {
    canvas.toBlob((blob) => resolve(blob));
  });

  return await canvasBlob;
};

const getBlobFromWebCam = async () => {
  const constraints = {
    video: true,
  };
  /* Get image from camera */
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  console.log("hola", stream);

  let videoTrack = stream.getVideoTracks()[0];
  const imageCapture = new ImageCapture(videoTrack);
  const imageBitMap = await imageCapture.grabFrame();
  const blob = await imageBitMapToBlob(imageBitMap);
  console.log("hola", blob);
  return blob;
};

const getImageFromWebCam = async () => {
  const constraints = {
    video: true,
  };
  /* Get image from camera */
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  console.log("hola", stream);

  let videoTrack = stream.getVideoTracks()[0];
  const imageCapture = new ImageCapture(videoTrack);
  const imageBitMap = await imageCapture.grabFrame();
  return imageBitMap;
};

const getFrameFromWebcam = async () => {
  return await getBlobFromWebCam();
};

module.exports = { getFrameFromWebcam, getImageFromWebCam };
