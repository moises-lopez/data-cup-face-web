function getMaxEmotion(emotions) {
  let keys = Object.keys(emotions);
  let max = emotions[keys[0]];
  let maxKey = "anger";
  let i;

  for (i = 0; i < keys.length; i++) {
    let value = emotions[keys[i]];
    if (value > max) {
      max = value;
      maxKey = keys[i];
    }
  }
  return maxKey;
}

function checkIfUserIsDoingEmotion(emotionsUser, emotionRequired) {
  console.log("motion user", emotionRequired, emotionsUser);
  return getMaxEmotion(emotionsUser) === emotionRequired;
}

function checkIfUserIsDoingHeadPose(headPoseUser, headPoseRequired) {
  console.log(headPoseUser, headPoseRequired);
  const minL = 20;
  const minR = -20;
  let final = false;
  if (headPoseRequired == "right") {
    if (headPoseUser.yaw < minR) {
      final = true;
    }
  } else if (headPoseRequired == "left") {
    if (headPoseUser.yaw > minL) {
      final = true;
    }
  } else if (headPoseRequired == "up") {
    if (headPoseUser.pitch > 10) {
      final = true;
    }
  } else if (headPoseRequired == "down") {
    if (headPoseUser.pitch < -5) {
      final = true;
    }
  }

  console.log(final);
  return final;
}

const isPropsEmpty = (emotionsProps, personProps) => {
  console.log("props: ", emotionsProps, personProps);

  if (emotionsProps != -1 && personProps != -1) {
    console.log("not empty");
    return false;
  } else {
    console.log("empty");

    return true;
  }
};

const isPersonDoingCorrectGesture = (
  userGesture,
  requiredGesture,
  propsEmpty,
  buttonPressendOnce
) => {
  console.log("test", userGesture, requiredGesture, propsEmpty);

  if (propsEmpty) {
    return true;
  }

  const commonEmotions = ["neutral", "happiness", "surprise"];
  const commonHeadDirections = ["left", "right", "up", "down"];
  if (commonEmotions.includes(requiredGesture)) {
    return checkIfUserIsDoingEmotion(
      userGesture.faceAttributes.emotion,
      requiredGesture
    );
  } else {
    return checkIfUserIsDoingHeadPose(
      userGesture.faceAttributes.headPose,
      requiredGesture
    );
  }
};

const isSamePersonFunction = (
  currentName,
  myIdentifyInfo,
  myPropsEmpty,
  myFaceInfoFromFrame
) => {
  console.log(
    "name:",
    currentName,
    "identify:",
    myIdentifyInfo,
    "propsEmpty",
    myPropsEmpty,
    myFaceInfoFromFrame
  );
  if (myFaceInfoFromFrame != -1 && myIdentifyInfo == -1 && currentName != "") {
    return false;
  }
  if (myPropsEmpty && currentName != "") {
    return true;
  }
  if (currentName == "") {
    return true;
  }

  return currentName == myIdentifyInfo.name;
};

module.exports = {
  getMaxEmotion,
  checkIfUserIsDoingEmotion,
  checkIfUserIsDoingHeadPose,
  isPropsEmpty,
  isPersonDoingCorrectGesture,
  isSamePersonFunction,
};
