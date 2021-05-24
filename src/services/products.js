import axios from "axios";

export const GetProducts = () => {
  let url = `https://corebiz-test.herokuapp.com/api/v1/products`;

  return axios.get(url).then((response) => response.data);
};
