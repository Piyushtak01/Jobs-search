import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (endpoint , query) => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState(null);


  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/search/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '6ebe2d84b0msh73c9413dd172bcfp1dc082jsnb6bef47b2b7a',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {
     ...query
    },
  };

  const fetchData = async () => {
    setisLoading(true);
    try{
     const response = await axios.request(options)
     setData(response.data.data);
     setisLoading(false);
    }catch(error){
      seterror(error)
      alert('There is an error')
    }finally{
      setisLoading(false);
    }
  }

  useEffect(() => {
  fetchData(); 
  }, [])
  
  const refetch = () => {
    setisLoading(true);
    fetchData();
  }

  return{data , isLoading , error , refetch };

  
};

export default useFetch 
