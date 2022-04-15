export const API_URL = "https://iiko.biz:9900/api/0";

export const getTokenIiko = async () => {
  const user_id = "sushiGO";
  const user_secret = "DsushiGO20";

  const METHOD_TOKEN = `${API_URL}/auth/access_token?user_id=${user_id}&user_secret=${user_secret}`;

  let token;

  const result = await fetch(METHOD_TOKEN, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => (token = data));

  return token;
};

export const getCustomerID = async (name, phone, organization) => {
  const token = await getTokenIiko();

  const URL_METHOD = `${API_URL}/customers/get_customer_by_phone?access_token=${token}&organization=${organization}&phone=+380${phone}`;

  const result = await fetch(URL_METHOD, { method: "GET" }).then((res) => {
    return res.json().then((data) => {
      if (data.httpStatusCode === 400) {
        const URL_CREATE = `${API_URL}/customers/create_or_update?access_token=${token}&organization=${organization}`;

        const body = {
          customer: { name, phone },
        };

        const result = fetch(URL_CREATE, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }).then((res) => res.json());

        return result;
      } else {
        return data.id;
      }
    });
  });

  return result;
};

// export const organizations = () => {
//   const URL_METHOD = `${API_URL}/organization/list?access_token=${token}&request_timeout='0:0:30'`;
//   const result = fetch(URL_METHOD, { method: "GET" }).then((res) => {
//     return res.json();
//   });
// };

// const url_city = `${API_URL}/cities/citiesList?access_token=${await getTokenIiko()}&organization=${organization}
//   `;
//   const result = await fetch(url_city, {
//     method: "GET",
//   }).then((res) => res.json());

// const url_city = `${API_URL}/streets/streets?access_token=${await getTokenIiko()}&organization=${organization}&city=${cityID}
//   `;
//   const result = await fetch(url_city, {
//     method: "GET",
//   }).then((res) => res.json());
