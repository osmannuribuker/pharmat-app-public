import { notification } from "antd";

export const getPharmacyService = (request) => {
  const GET_PHARMACY_API_ENDPOINT = `${process.env.REACT_APP_API_URL}/pharmacy/${request.pharmacy}`;

  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  return fetch(GET_PHARMACY_API_ENDPOINT, parameters)
    .then((response) => {
      if (response.status >= 200 && response.status <= 399) {
        return response.json();
      } else {
        response.json().then((err) => {
          notification.error({
            message: "Hata",
            description: err.error,
            duration: 7,
          });
        });
        throw response;
      }
    })
    .catch((error) => {
      throw error;
    });
};

export const createPharmacyService = (request) => {
  const CREATE_PHARMACY_API_ENDPOINT = `${process.env.REACT_APP_API_URL}/pharmacy`;

  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(request.pharmacy),
  };

  return fetch(CREATE_PHARMACY_API_ENDPOINT, parameters)
    .then((response) => {
      if (response.status >= 200 && response.status <= 399) {
        notification.success({
          message: "Başarılı",
          description: "Eczaneniz başarıyla oluşturuldu",
        });
        return response.json();
      } else {
        response.json().then((err) => {
          notification.error({
            message: "Hata",
            description: err.error,
            duration: 7,
          });
        });
        throw response;
      }
    })
    .catch((error) => {
      throw error;
    });
};

export const updatePharmacyService = (request) => {
  const UPDATE_PHARMACY_ENDPOINT = `${process.env.REACT_APP_API_URL}/pharmacy/${request.pk}`;

  const parameters = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(request.pharmacy),
  };

  return fetch(UPDATE_PHARMACY_ENDPOINT, parameters)
    .then((response) => {
      if (response.status >= 200 && response.status <= 399) {
        notification.success({
          message: "Başarılı",
          description: "Eczaneniz başarıyla güncellendi",
        });
        console.log("günc");
        return response.json();
      } else {
        response.json().then((err) => {
          notification.error({
            message: "Hata",
            description: err.error,
            duration: 7,
          });
        });
        throw response;
      }
    })
    .catch((error) => {
      throw error;
    });
};
