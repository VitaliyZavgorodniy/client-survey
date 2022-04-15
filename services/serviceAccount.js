import axios from "axios";

// const BASE_URL = process.env.NEXT_PUBLIC_HOST;
const BASE_URL = "";

export const fetchLogin = async (login, password) => {
  const response = await axios
    .post(`${BASE_URL}/api/auth/login`, {
      login,
      password,
    })
    .catch((e) => console.error(e));

  return response.data;
};

// export const fetchToken = async (token) => {
//   const response = await axios
//     .post(`${BASE_URL}/api/account/login`, { token })
//     .catch((e) => console.error(e));

//   return response.data;
// };
