import { useState,useEffect } from "react";
import LatestMovies from "../components/LatestMovies";
import { Link } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import Categories from "./Categories";
import TrendingMovies from "../components/TrendingMovies";
import TVShow from "../components/TVShow";
import SkeletonLoading from "../components/SkeletonLoading";


const HomeContent = () => {
    const { data: dataAll, fetchError: fetchErrorAll, isLoading: isLoadingAll } = useFetch('https://api.themoviedb.org/3/trending/all/day');
    const { data: dataTV, fetchError: fetchErrorTV, isLoading: isLoadingTV } = useFetch('https://api.themoviedb.org/3/trending/tv/day');
    const { data: dataPO, fetchError: fetchErrorPO, isLoading: isLoadingPO } = useFetch('https://api.themoviedb.org/3/movie/popular');


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
            {isLoadingAll && <SkeletonLoading/>}
            {fetchErrorAll && <p className="statusMsg">{fetchErrorAll}</p>}
            {!isLoadingAll && !fetchErrorAll && (dataAll.length
            ? <TrendingMovies movies={dataAll} title="Trending movies"/>
            : <p className="statusMsg">Sorry, no trending movie to display</p>
            )}

            {isLoadingPO && <SkeletonLoading/>}
            {fetchErrorPO && <p className="statusMsg">{fetchErrorPO}</p>}
            {!isLoadingPO && !fetchErrorPO && (dataPO.length
            ? <TrendingMovies movies={dataPO} title="Popular"/>
            : <p className="statusMsg">Sorry, no trending movie to display</p>
            )}

            {isLoadingTV && <SkeletonLoading/>}
            {fetchErrorTV && <p className="statusMsg">{fetchErrorTV}</p>}
            {!isLoadingTV && !fetchErrorTV && (dataTV.length
            ? <TVShow tvShow={dataTV}/>
            : <p className="statusMsg">Sorry, no TV Show to display</p>
            )}
        </div>
    </section>
  )
}

export default HomeContent;