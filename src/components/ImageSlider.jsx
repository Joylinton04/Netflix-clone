import mario from "../assets/Super-mario-movie.webp"
import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";
import useFetch from "../Hooks/useFetch";


const ImageSlider = () => {

    const { data: dataAll, fetchError: fetchErrorAll, isLoading: isLoadingAll } = useFetch('https://api.themoviedb.org/3/trending/all/day');

  return (
    <div className="img-slider"> 
        <div className="trending-movie">
            <div className="trending-movie-img-card">
                {dataAll[0] ? 
                <>
                <div className="trending-movie-img">
                    <img src={`https://image.tmdb.org/t/p/original${dataAll[0].backdrop_path}`} alt="" />
                </div>
                <div className="movie-info">
                    <p>Release Date: {dataAll[0].release_date}</p>
                    <p><StarIcon/> {(dataAll[0].vote_average).toFixed(2)}</p>
                    <h1>{dataAll[0].original_title}</h1>
                    <p>{dataAll[0].overview}</p>
                    <button><Link to={'/'/* `/movie/${movies[0].id}` */}>watch</Link></button>
                </div>
                </>    
            : <p>Could not load the movie</p>
            }
            </div>
        </div>
    </div>
  )
}

export default ImageSlider;