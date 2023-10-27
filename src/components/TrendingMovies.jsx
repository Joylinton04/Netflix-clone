import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import mario from "../assets/Super-mario-movie.webp"

const TrendingMovies = ({movies, title}) => {
 
  return (
    <div className="trending-movies">
        <h1>{title}</h1>
        <div className="dmovies-info">
            {movies.map((movie) => (
            <div className="mov-cd" key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                <div className="movies-img">
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                </div>
                <div className="movie-details">
                <h2>{movie.original_title}</h2>
                    <div className="date">
                        <p>{movie.release_date}</p>
                        <p>
                            <StarIcon className="star"/>
                            <span>{(movie.vote_average).toFixed(2)}</span>
                        </p>
                    </div>
                </div>
                </Link>
            </div>
            ))}
        </div>
    </div>
  )
}

export default TrendingMovies;