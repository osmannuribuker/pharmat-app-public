import { notification } from "antd";

export const getPharmacyMSIService = (request) => {
  const GET_PHARMACY_MSI_API_ENDPOINT = `${process.env.REACT_APP_API_URL}/pharmacy_msies`;

  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  return fetch(GET_PHARMACY_MSI_API_ENDPOINT, parameters)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
};

export const createPharmacyMSIService = (request) => {
  const CREATE_PHARMACY_MSI_API_ENDPOINT = `${process.env.REACT_APP_API_URL}/pharmacy_msi`;

  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(request.pharmacy_msi),
  };

  return fetch(CREATE_PHARMACY_MSI_API_ENDPOINT, parameters)
    .then((response) => {
      if (response.status >= 200 && response.status <= 399) {
        notification.success({
          message: "Başarılı",
          description: "Ecza Depo bilgileriniz başarıyla oluşturuldu",
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

export const updatePharmacyMSIService = (request) => {
  const UPDATE_PHARMACY_MSI_API_ENDPOINT = `${process.env.REACT_APP_API_URL}/pharmacy_msi/${request.pk}`;

  const parameters = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(request.pharmacy_msi),
  };

  return fetch(UPDATE_PHARMACY_MSI_API_ENDPOINT, parameters)
    .then((response) => {
      if (response.status >= 200 && response.status <= 399) {
        notification.success({
          message: "Başarılı",
          description: "Ecza Depo bilgileriniz başarıyla güncellendi",
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
