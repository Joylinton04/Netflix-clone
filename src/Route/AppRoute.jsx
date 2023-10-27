import HomePage from "../Pages/HomePage";
import MovieInfo from "../Pages/MovieInfo";
import { Routes,Route } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

const AppRoute = () => {

  return (
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/movie/:id" element={<MovieInfo/>}/>
    </Routes>
  )
}

export default AppRoute;