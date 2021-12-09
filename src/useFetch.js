import { useState, useEffect } from "react";
import axios from "axios";

const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
const singleUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";

//(28) Creazione useFetch per fetchare i dati delle API.
const useFetch = (query, type = false) => {
  const url = type ? singleUrl : searchUrl;

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0); //Per contare quanti elementi ci sono dentro il nostro array di oggetti e mostrarlo nel risultato della ricerca.
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async (query) => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await axios.get(`${url}${query}`);
        console.log(response);
        setData(response.data);

        setCount(response.data.drinks.length);
      } catch (err) {
        setIsError(true);
        setCount(0);
      }
      setIsLoading(false);
    })(query);
  }, [url, query]);
  return { isLoading, data, isError, count };
};

export default useFetch;

//(29 passo il mio useFetch in context.js)
