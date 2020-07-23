import { requestBodyCreator } from "./requestBodyCreator";

export function surveyPost(favouriteFood) {
  const headers = new Headers();

  headers.append("Content-Type", "application/json");

  return fetch("https://app.surveystack.io/api/submissions", {
    method: "POST",
    headers,
    mode: "cors",
    body: requestBodyCreator(favouriteFood),
  });
}
