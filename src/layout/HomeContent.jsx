import { useState,useEffect } from "react";
import LatestMovies from "../components/LatestMovies";
import { Link } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import Categories from "./Categories";
import TrendingMovies from "../components/TrendingMovies";
import TVShow from "../components/TVShow";
import SkeletonLoading from "../components/SkeletonLoading";


const HomeContent = ({movies, latest, tvShow, fetchError,isLoading}) => {
    useEffect(()=>{
        const category = document.querySelectorAll('#All-movies li')
            category.forEach((li) => {
                li.addEventListener('click', (e)=>{
                    document.querySelector('.active').classList.remove('active')
                    e.target.classList.add("active")
                })
            })
    },[])

  return (
    <section className="homeContent">
        <Categories/>
        <div className="movies">
            {isLoading && <SkeletonLoading/>}
            {fetchError && <p className="statusMsg">{fetchError}</p>}
            {!isLoading && !fetchError && (movies.length
            ? <TrendingMovies movies={movies}/>
            : <p className="statusMsg">Sorry, no trending movie to display</p>
            )}

            {/* {isLoading && <p className="statusMsg">Loading...</p>}
            {fetchError && <p className="statusMsg">{fetchError}</p>}
            {!isLoading && !fetchError && (latest.length
            ? <LatestMovies latest={latest}/>
            : <p className="statusMsg">Sorry, no latest movie to display</p>
            )} */}

            {/* {isLoading && <p className="statusMsg">Loading...</p>}
            {fetchError && <p className="statusMsg">{fetchError}</p>}
            {!isLoading && !fetchError && (tvShow.length
            ? <TVShow tvShow={tvShow}/>
            : <p className="statusMsg">Sorry, no TV Show to display</p>
            )} */}
        </div>
    </section>
  )
}

export default HomeContent;