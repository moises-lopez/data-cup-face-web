const axios = require("axios");
const key = "b900d6028af8412dac48b5f16f7d7c2b";
const endpoint = "https://instanciaface.cognitiveservices.azure.com/";

async function findPersonsInGroupInAzure() {
  const headers = {
    headers: {
      "Ocp-Apim-Subscription-Key": "b900d6028af8412dac48b5f16f7d7c2b",
    },
  };

  const { data } = await axios.get(
    `${endpoint}/face/v1.0/persongroups/my_group_1/persons`,
    headers
  );
  console.log(data);
  return data;
}

export default findPersonsInGroupInAzure;
