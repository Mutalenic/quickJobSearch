import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY} from '@env';

const useFetch = (endpoint,query) => {{
    const[data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, seterror] = useState(null);
    const rapidApiKey = RAPID_API_KEY

    const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/${endpoint}',
  params: {
    ...query
  },
  headers: {
    'X-RapidAPI-Key':rapidApiKey,
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


}}