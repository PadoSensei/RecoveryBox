import { useQuery } from "react-query";

const BASE_URL = 'http://172.20.10.3:3001/'

function fetchRequest (path, options) {
  return fetch(BASE_URL + path, options)
    .then(res => res.status < 400 ? res.json() : Promise.reject(res))
    .catch((err) => {
      console.log('Error:', err) //eslint-disable-line no-console
    })
};

// function fetchRequest () {
//   return useQuery("getQuotes", async () => {
//     const { data } = await axios.get(QUOTE_URL, options);
//     return data;
//   });
// }

function getQuote () {
  return fetchRequest('apirequest')
}
// TODO: refactor and integrate with react-query


export default {
  getQuote
}