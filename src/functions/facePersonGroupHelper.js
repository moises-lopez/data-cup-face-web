const axios = require("axios");
const key = "75948cd73b0b442a959b2e9b683fff1f";
const endpoint = "https://testingfaceapi2.cognitiveservices.azure.com/";

async function findPersonsInGroupInAzure() {
  const headers = {
    headers: {
      "Ocp-Apim-Subscription-Key": "75948cd73b0b442a959b2e9b683fff1f",
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
