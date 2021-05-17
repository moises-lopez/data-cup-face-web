const key = "b900d6028af8412dac48b5f16f7d7c2b";
const endpoint = "https://instanciaface.cognitiveservices.azure.com/";
const axios = require("axios");

const msRest = require("@azure/ms-rest-js");
const Face = require("@azure/cognitiveservices-face");

const credentials = new msRest.ApiKeyCredentials({
  inHeader: { "Ocp-Apim-Subscription-Key": key },
});
const client = new Face.FaceClient(credentials, endpoint);

const person_group_id = "my_group_1";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function DetectFaceRecognize(stream) {
  // Detect faces from image stream. Since only recognizing, use the recognition model 4.
  // We use detection model 3 because we are not retrieving attributes.
  let detected_faces = await client.face.detectWithStream(stream, {
    detectionModel: "detection_03",
    recognitionModel: "recognition_04",
  });
  return detected_faces;
}

async function AddFacesToPersonGroup(person_dictionary, person_group_id) {
  console.log("Adding faces to person group...");
  // The similar faces will be grouped into a single person group person.

  await Promise.all(
    Object.keys(person_dictionary).map(async function (key) {
      const value = person_dictionary[key];

      // Wait briefly so we do not exceed rate limits.
      await sleep(1000);

      let person = await client.personGroupPerson.create(person_group_id, {
        name: key,
      });
      console.log("Create a person group person: " + key + ".");

      // Add faces to the person group person.
      await Promise.all(
        value.map(async function (similar_image) {
          console.log(
            "Add face to the person group person: (" +
              key +
              ") from image: " +
              similar_image +
              "."
          );
          await client.personGroupPerson.addFaceFromStream(
            person_group_id,
            person.personId,
            similar_image
          );
        })
      );
    })
  );

  console.log("Done adding faces to person group.");
}
// </add_faces>

// <wait_for_training>
async function WaitForPersonGroupTraining(person_group_id) {
  // Wait so we do not exceed rate limits.
  console.log("Waiting 10 seconds...");
  await sleep(10000);
  let result = await client.personGroup.getTrainingStatus(person_group_id);
  console.log("Training status: " + result.status + ".");
  if (result.status !== "succeeded") {
    await WaitForPersonGroupTraining(person_group_id);
  }
}

function createPersonDictionary(imagesArray, nombrePersona) {
  return {
    [nombrePersona]: imagesArray,
  };
}

async function addPersonToGroupPerson(imagesArray, nombrePersona) {
  console.log("========IDENTIFY FACES========");
  console.log();

  // Create a dictionary for all your images, grouping similar ones under the same key.

  const person_dictionary = createPersonDictionary(imagesArray, nombrePersona);
  console.log(person_dictionary);

  await AddFacesToPersonGroup(person_dictionary, person_group_id);

  // Start to train the person group.
  console.log();
  console.log("Training person group: " + person_group_id + ".");
  await client.personGroup.train(person_group_id);

  await WaitForPersonGroupTraining(person_group_id);
  console.log();
}

async function createGroupPerson() {
  console.log("Creating a person group with ID: " + person_group_id);
  await client.personGroup.create(person_group_id, {
    name: person_group_id,
    recognitionModel: "recognition_04",
  });
}

async function deleteGroupPerson() {
  console.log("deleting a person group with ID: " + person_group_id);
  const headers = {
    headers: {
      "Ocp-Apim-Subscription-Key": "b900d6028af8412dac48b5f16f7d7c2b",
    },
  };

  const { data } = await axios.delete(
    `${endpoint}/face/v1.0/persongroups/my_group_1`,
    headers
  );
}

async function identifyPerson(stream) {
  let face_ids = (await DetectFaceRecognize(stream)).map((face) => face.faceId);
  if (face_ids.length < 1) {
    console.log("No reconocido 1");
    return -1;
  }

  console.log(face_ids);

  // Identify the faces in a person group.
  let results = await client.face.identify(face_ids, {
    personGroupId: person_group_id,
  });
  console.log(results);

  if (results[0].candidates.length < 1) {
    console.log("No reconocido 2");
    return -1;
  }

  let personIdentified = {};

  await Promise.all(
    results.map(async function (result) {
      let person = await client.personGroupPerson.get(
        person_group_id,
        result.candidates[0].personId
      );
      personIdentified.name = person.name;
      personIdentified.confidence = result.candidates[0].confidence;
      console.log(
        "Person: " +
          person.name +
          " is identified for face in: " +
          " with ID: " +
          result.faceId +
          ". Confidence: " +
          result.candidates[0].confidence +
          "."
      );
    })
  );
  if (Object.keys(personIdentified).length === 0) {
    return -1;
  }
  return personIdentified;
  console.log();
}

async function olvidarGroupPerson() {
  await deleteGroupPerson();
  await createGroupPerson();
}
module.exports = {
  createGroupPerson,
  addPersonToGroupPerson,
  identifyPerson,
  deleteGroupPerson,
  olvidarGroupPerson,
};
