import { useParams } from "react-router-dom";
import mario from "../assets/Super-mario-movie.webp"
import StarIcon from "@mui/icons-material/Star"
import TrendingMovies from "../components/TrendingMovies";
import SkeletonLoading from "../components/SkeletonLoading";

const MovieInfo = ({movies, isLoading}) => {
    const { id } = useParams()
    const movie = movies.find((mov) => mov.id == id)

  return (
    <div className="moviepage">
        {movie ?
        <div className="smovie">
            <div className="smovie-img">
                <img src={mario} alt="" />
            </div>
            <div className="smovie-info">
                <p>{`Release Date: ${movie.release_date}`}</p>
                <p><StarIcon/> {`${movie.vote_average}`}</p>
                <h1>{movie.original_title
}</h1>
                <p>{movie.overview}</p>
            </div>
        </div>
        : <p className="statusMsg" style={{position: "absolute", top: "50%", height: "100vh", marginTop: "50vh"}}>Could not find movie</p>
        }
        <div className="recommended">
            {isLoading && <SkeletonLoading/> }
            {!isLoading && 
                <TrendingMovies movies={movies}/>   
            }
        </div>
    </div>
  )
}

export default MovieInfo;