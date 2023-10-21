import HomePage from "../Pages/HomePage";
import MovieInfo from "../Pages/MovieInfo";
import { Routes,Route } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../Hooks/useFetch";

const AppRoute = () => {
  const [movies, setMovies] = useState([
    /* {
        original_title: "Expend4bles",
        id: 1,
        release_date: "2023-09-15",
        overview: 'Daryl washes ashore in France and struggles to piece together how he got there and why. The series tracks his journey across a broken but resilient France as he hopes to find a way back home. As he makes the journey, though, the connections he forms along the way complicate his ultimate plan.',
        vote_average: 6.27
    },
    {
        original_title: "Expend4bles",
        id: 2,
        release_date: "2023-09-15",
        overview: 'Daryl washes ashore in France and struggles to piece together how he got there and why. The series tracks his journey across a broken but resilient France as he hopes to find a way back home. As he makes the journey, though, the connections he forms along the way complicate his ultimate plan.',
        vote_average: 6.27
    },
    {
        original_title: "Expend4bles",
        id: 3,
        release_date: "2023-09-15",
        overview: 'Daryl washes ashore in France and struggles to piece together how he got there and why. The series tracks his journey across a broken but resilient France as he hopes to find a way back home. As he makes the journey, though, the connections he forms along the way complicate his ultimate plan.',
        vote_average: 6.27
    } */
])
const [latest, setLatest] = useState([])
const [tvShow, setTvShow] = useState([])

const { data, fetchError, isLoading } = useFetch('https://api.themoviedb.org/3/trending/all/day')
//const { data2, fetchError2, isLoading2 } = useFetch('https://api.themoviedb.org/3/movie/latest')
//const {data3, fetchError3, isLoading3} = useFetch('https://api.themoviedb.org/3/trending/tv/day')

useEffect(()=>{
  setMovies(data)
  //setLatest(data2)
  //setTvShow(data3)
},[])

  return (
    <Routes>
        <Route path="/" element={<HomePage movies={movies} latest={latest} tvShow={tvShow} fetchError={fetchError} isLoading={isLoading}/>}/>
        <Route path="/movie/:id" element={<MovieInfo movies={movies} isLoading={isLoading}/>}/>
    </Routes>
  )
}

export default AppRoute;