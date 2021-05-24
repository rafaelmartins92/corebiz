import axios from "axios";

export const PostNewsletter = (object) => {
  let url = `https://corebiz-test.herokuapp.com/api/v1/newsletter`;

  return axios.post(url, object).then((response) => response);
};
