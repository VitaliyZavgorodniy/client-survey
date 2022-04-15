import axios from "axios";

// const BASE_URL = process.env.NEXT_PUBLIC_HOST;
const BASE_URL = "";

export const fetchResponses = async (from_date, to_date) => {
  const response = await axios
    .post(`/api/admin/responses`, { from_date, to_date })
    .catch((e) => console.error(e));

  return response.data;
};

export const fetchRatings = async (from_date, to_date) => {
  const response = await axios
    .post(`${BASE_URL}/api/admin/ratings`, { from_date, to_date })
    .catch((e) => console.error(e));

  return response.data;
};
