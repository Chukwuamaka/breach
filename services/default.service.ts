export const postRequest = (url: string, payload: object, token?: string) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token ? token : ''}`
    },
  });
};

export const getRequest = (url: string) => {
  return fetch(url);
};