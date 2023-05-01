import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) => {{
    const[data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, seterror] = useState(null);

    const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/${endpoint}',
  params: {
    query: 'Python developer in Texas, USA',
    page: '1',
    num_pages: '1'
  },
  headers: {
    'X-RapidAPI-Key': 'a6c2401845mshed9930e66e6b5eep1c0347jsn7b2d759b720c',
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