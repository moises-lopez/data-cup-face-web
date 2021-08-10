import axios from "axios";

const key = "75948cd73b0b442a959b2e9b683fff1f";
const endpoint = "https://instanciaface.cognitiveservices.azure.com/";

async function findPersonsInGroupInAzure() {
  const personsInGroup = await axios.get(
    `${endpoint}/face/v1.0/persongroups/my_group_1/persons`
  );
  console.log(personsInGroup);
  return personsInGroup;
}

module.exports = { findPersonsInGroupInAzure };
