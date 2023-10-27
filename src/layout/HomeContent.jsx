import {useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import Categories from "./Categories";
import MovieCard from "../components/MovieCard";
import SkeletonLoading from "../components/SkeletonLoading";


const HomeContent = () => {
    const { data: dataAll, fetchError: fetchErrorAll, isLoading: isLoadingAll } = useFetch('https://api.themoviedb.org/3/trending/all/day');
    const { data: dataDV, fetchError: fetchErrorDV, isLoading: isLoadingDV } = useFetch('https://api.themoviedb.org/3/discover/movie');
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
            ? <MovieCard movies={dataAll} title="Trending movies"/>
            : <p className="statusMsg">Sorry, no trending movie to display</p>
            )}

            {isLoadingPO && <SkeletonLoading/>}
            {fetchErrorPO && <p className="statusMsg">{fetchErrorPO}</p>}
            {!isLoadingPO && !fetchErrorPO && (dataPO.length
            ? <MovieCard movies={dataPO} title="Popular"/>
            : <p className="statusMsg">Sorry, no trending movie to display</p>
            )}

            {isLoadingDV && <SkeletonLoading/>}
            {fetchErrorDV && <p className="statusMsg">{fetchErrorDV}</p>}
            {!isLoadingDV && !fetchErrorDV && (dataDV.length
            ? <MovieCard movies={dataDV} title="Discover"/>
            : <p className="statusMsg">Sorry, no TV Show to display</p>
            )}
        </div>
    </section>
  )
}

export default HomeContent;