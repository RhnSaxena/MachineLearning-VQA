import getInference from "./model";

submitQuestion = function () {
  let question = getElementById("questionText");
  let prediction = getInference(image, question);
  console.log(prediction);
};
