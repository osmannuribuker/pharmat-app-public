export const getStatesService = (request) => {
  const LOGIN_API_ENDPOINT = `${process.env.REACT_APP_API_URL}/states/${request.states}`;

  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  return fetch(LOGIN_API_ENDPOINT, parameters)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
};
