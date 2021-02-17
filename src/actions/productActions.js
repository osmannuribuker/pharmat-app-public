import { GET_PRODUCT } from "./index";

export const getProductAction = (products) => {
  return {
    type: GET_PRODUCT,
    products,
  };
};
