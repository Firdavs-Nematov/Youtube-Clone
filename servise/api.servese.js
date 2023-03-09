const BASE_URI = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_PUBLIC_KEY,
    "X-RapidAPI-Host": BASE_URI,
  },
};
