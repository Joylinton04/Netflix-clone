import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star"
import SkeletonLoading from "../components/SkeletonLoading";
import useFetch from "../Hooks/useFetch";
import Recommended from "../components/Recommended";
import err404 from "../assets/nomovie404.png"

const MovieInfo = () => {
    const { id } = useParams();
    const { data, fetchError, isLoading } = useFetch(`https://api.themoviedb.org/3/movie/${id}`);
    

    

  return (
    <div className="moviepage">
        {isLoading && 
            <>
                <div className="smovie">
                    <div className="smovie-img">
                    </div>
                    <div className="smovie-info">
                        <div className="smovies-poster">
                        </div>
                        <div className="smovies-details">
                        </div>
                    </div>
                </div>
            </>
            }
        {fetchError && (
            <>
                <div className="smovie-img err">
                    <img src={err404} alt="" />
                </div>
            </>)}
        {!fetchError && !isLoading && (data ? 
            <div className="smovie">
                <div className="smovie-img">
                    <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="" />
                </div>
                <div className="smovie-info">
                    <div className="smovies-poster">
                        <img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt="" />
                    </div>
                    <div className="smovies-details">
                        <h1>{data.original_title}</h1>
                        <p><StarIcon/> {(data.vote_average)}</p>
                        <p className="over-v">{data.overview}</p>
                        <p>{data.release_date}</p>
                    </div>
                </div>
                <Recommended id={id}/>
            </div>
            : <p className="statusMsg" 
                style={{
                position: "absolute", 
                top: "50%", 
                height: "100vh", 
                marginTop: "50vh"
            }}>Could not find movie
            </p>
        )}
    </div>
  )
}

export default MovieInfo;