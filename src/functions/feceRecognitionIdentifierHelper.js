async function DetectFaceRecognize(blob) {
  // Detect faces from image blob. Since only recognizing, use the recognition model 4.
  // We use detection model 3 because we are not retrieving attributes.
  let detected_faces = await client.face.detectWithBlob(blob, {
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
          await client.personGroupPerson.addFaceFromUrl(
            person_group_id,
            person.personId,
            image_base_url + similar_image
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
// </wait_for_training>

/* NOTE This function might not work with the free tier of the Face service
because it might exceed the rate limits. If that happens, try inserting calls
to sleep() between calls to the Face service.
*/
// <identify>
async function IdentifyInPersonGroup() {
  console.log("========IDENTIFY FACES========");
  console.log();

  // Create a dictionary for all your images, grouping similar ones under the same key.
  const person_dictionary = {
    "Family1-Dad": ["Family1-Dad1.jpg", "Family1-Dad2.jpg"],
    "Family1-Mom": ["Family1-Mom1.jpg", "Family1-Mom2.jpg"],
    "Family1-Son": ["Family1-Son1.jpg", "Family1-Son2.jpg"],
    "Family1-Daughter": ["Family1-Daughter1.jpg", "Family1-Daughter2.jpg"],
    "Family2-Lady": ["Family2-Lady1.jpg", "Family2-Lady2.jpg"],
    "Family2-Man": ["Family2-Man1.jpg", "Family2-Man2.jpg"],
  };

  // A group photo that includes some of the persons you seek to identify from your dictionary.
  let source_image_file_name = "identification1.jpg";

  // Create a person group.
  console.log("Creating a person group with ID: " + person_group_id);
  await client.personGroup.create(person_group_id, {
    name: person_group_id,
    recognitionModel: "recognition_04",
  });

  await AddFacesToPersonGroup(person_dictionary, person_group_id);

  // Start to train the person group.
  console.log();
  console.log("Training person group: " + person_group_id + ".");
  await client.personGroup.train(person_group_id);

  await WaitForPersonGroupTraining(person_group_id);
  console.log();

  // Detect faces from source image url.
  let face_ids = (
    await DetectFaceRecognize(image_base_url + source_image_file_name)
  ).map((face) => face.faceId);

  // Identify the faces in a person group.
  let results = await client.face.identify(face_ids, {
    personGroupId: person_group_id,
  });
  await Promise.all(
    results.map(async function (result) {
      let person = await client.personGroupPerson.get(
        person_group_id,
        result.candidates[0].personId
      );
      console.log(
        "Person: " +
          person.name +
          " is identified for face in: " +
          source_image_file_name +
          " with ID: " +
          result.faceId +
          ". Confidence: " +
          result.candidates[0].confidence +
          "."
      );
    })
  );
  console.log();
}
