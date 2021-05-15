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

module.exports = { getMaxEmotion };
