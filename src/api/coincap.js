const DOMAIN = "https://api.coincap.io";
const VERSION = "/v2";
const BASE_ROUTE = `${DOMAIN}${VERSION}`;

export const getAssets = async () => {
  return await fetch(`${BASE_ROUTE}/assets`)
    .then((response) => response.json())
    .then((value) => value.data)
    .catch(() => []);
};

export const getHistory = async (id, interval = "h1") => {
  return await fetch(`${BASE_ROUTE}/assets/${id}/history?interval=${interval}`)
    .then((response) => response.json())
    .then((value) => {
      const data = value.data;
      let newData = data.slice(-24);
      newData.reverse();
      return newData;
    })
    .catch(() => []);
};
