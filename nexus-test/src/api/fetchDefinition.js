export function fetchDefition() {
  const headers = new Headers();

  headers.append("Content-Type", "application/json");
  return fetch(
    `${process.env.REACT_APP_SURVEY_DATA_URL}/surveys/${process.env.REACT_APP_SURVEY_ID}`,
    {
      method: "GET",
      headers,
      mode: "cors",
    }
  );
}
