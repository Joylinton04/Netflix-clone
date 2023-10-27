import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsloading] = useState(true)

    useEffect(()=>{
        const options = {
                url: url,
                params: {
                  include_adult: 'false',
                  include_video: 'false',
                  language: 'en-US',
                  page: '1',
                  sort_by: 'popularity.desc',
                  query: null
                },
                headers: {
                  accept: 'application/json',
                  Authorization: import.meta.env.VITE_ACCESS_TOKEN
                }
              };

        const fetchData = async (dataurl)=> {
            setIsloading(true)
              try{
                const {data} = await axios.get(dataurl, options)
                setData(data.results || data)
                setFetchError(null)
              } catch(err) {
                console.log(err)
                setData([])
                setFetchError(err.message)
              } finally {
                setIsloading(false)
              }
        }
        fetchData(url)
    },[])

    return { data, fetchError, isLoading};
}

export default useFetch;