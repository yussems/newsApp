import {useEffect, useState} from 'react';
import axios from 'axios';
const URL = process.env.NEWS_URL;
const TOKEN = process.env.API_TOKEN;

export const useApi = (param: string) => {
  const [data, setdata] = useState(null);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);

  const fetchData = async () => {
    setloading(true);
    const options = {
      method: 'GET',
      url: URL,
      params: {
        country: 'us',
        language: 'en',
        pageSize: '5',
        category: param,
      },
      headers: {
        'X-RapidAPI-Key': TOKEN,
        'X-RapidAPI-Host': 'news-api14.p.rapidapi.com',
      },
    };
    try {
      const response = await axios.request(options);

      setdata(response.data);
    } catch (error) {
      seterror(error);
    }

    setloading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {error, data, loading};
};
