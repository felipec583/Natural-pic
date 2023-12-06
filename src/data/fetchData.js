import axios from "axios";

const params = {
  query: "Nature",
  orientation: "portrait",
  page: 1,
  per_page: 15,
};
const queryParams = new URLSearchParams(params);
const endpoint = "https://api.pexels.com/v1/search";
const url = `${endpoint}?${queryParams}`;
const key = "Gq15dZj9FXVYy2vhHvv4p7LU3tLCbNc00aXOZ4baRA6hVocTR0rAI5Xt";
async function fetchData() {
  const res = await axios.get(url, {
    headers: {
      Authorization: key,
    },
    method: "GET",
  });
  const data = await res.data?.photos;

  return data.map((datum) => {
    return {
      id: datum?.id,
      liked: datum?.liked,
      imgPath: datum?.src.portrait,
      alt: datum?.alt,
    };
  });
}

export default fetchData;
