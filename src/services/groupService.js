import { notification } from "antd";

export const getGroupsService = (request) => {
  const GET_GROUPS_API_ENDPOINT = `${process.env.REACT_APP_API_URL}/groups`;

  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  return fetch(GET_GROUPS_API_ENDPOINT, parameters)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
};

export const createGroupService = (request) => {
  const CREATE_GROUP_API_ENDPOINT = `${process.env.REACT_APP_API_URL}/group`;

  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(request.group),
  };

  return fetch(CREATE_GROUP_API_ENDPOINT, parameters)
    .then((response) => {
      if (response.status >= 200 && response.status <= 399) {
        notification.success({
          message: "Başarılı",
          description: "Grup başarıyla oluşturuldu",
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

export const updateGroupService = (request) => {
  const UPDATE_GROUP_API_ENDPOINT = `${process.env.REACT_APP_API_URL}/group/${request.pk}`;

  const parameters = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(request.group),
  };

  return fetch(UPDATE_GROUP_API_ENDPOINT, parameters)
    .then((response) => {
      if (response.status >= 200 && response.status <= 399) {
        notification.success({
          message: "Başarılı",
          description: "Grup bilgisi başarıyla güncellendi",
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
