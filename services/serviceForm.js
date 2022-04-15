import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_HOST;
// const BASE_URL = "";

export const checkCompletionForm = async (id) => {
  const response = await axios
    .post(`${BASE_URL}/api/form/check`, { id })
    .catch((e) => console.error(e));

  return response.data;
};

export const publishForm = async (data) => {
  const response = await axios
    .post(`/api/form/publish`, { data })
    .catch((e) => console.error(e));

  return response.data;
};