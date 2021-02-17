export const getMedicineStoresService = (request) => {
  const GET_MEDICINE_STORES_API_ENDPOINT = `${process.env.REACT_APP_API_URL}/medicine_stores`;

  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  return fetch(GET_MEDICINE_STORES_API_ENDPOINT, parameters)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
};
