export function fetchSurveyResults() {
  const headers = new Headers();

  headers.append("Content-Type", "application/json");
  return fetch(
    `${process.env.REACT_APP_SURVEY_DATA_URL}/submissions?survey=${process.env.REACT_APP_SURVEY_ID}`,
    {
      method: "GET",
      headers,
      mode: "cors",
    }
  );
}
