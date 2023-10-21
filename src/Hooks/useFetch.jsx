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
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTgzYzk4MjNiYjA1NmVmNDNhM2RkODQ3ZTA2NjcyNCIsInN1YiI6IjY0NTk0NGRlNzdkMjNiMDE3MDM3ODAzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v34qxBr3zKIbSsYMtVnJUmyLE9vgjaFwsExBFu-ytcg'
                }
              };

              /* axios
                  .request(options)
                  .then(function (response) {
                    setIsloading(true)
                    console.log(response.data.results);
                    setData(response.data.results);
                    setFetchError(null)
                  })
                  .catch((error) => {
                    console.error(error);
                    setData([])
                    setFetchError(error.message)
                  }).finally(() => 
                    setIsloading(false)
                  ) */
        const fetchData = async (dataurl)=> {
            setIsloading(true)
              try{
                const {data} = await axios.get(dataurl, options)
                setData(data.results)
                setFetchError(null)
                //console.log(data.results)
              } catch(err) {
                console.log(err)
                //setData([])
                setFetchError(err.message)
              } finally {
                setIsloading(false)
              }
        }

        setTimeout(() => {
          fetchData(url)
        },3000)
    },[])

    return { data, fetchError, isLoading};
}

export default useFetch;