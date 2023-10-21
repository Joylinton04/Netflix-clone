import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import mario from "../assets/Super-mario-movie.webp"

const TrendingMovies = ({movies}) => {
 
  return (
    <div className="trending-movies">
        <h1>Trending movies</h1>
        <div className="dmovies-info">
            {movies.map((movie) => (
            <div className="mov-cd" key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                <div className="movies-img">
                    <img src={mario} alt="" />
                </div>
                <div className="movie-details">
                    <h2>{(movie.original_title).length <= 10 
                        ? movie.original_title
                        : movie.original_title.slice(0, 10) + "..."
                    }</h2>
                    <div className="date">
                        <span>{movie.release_date}</span>
                        <span><StarIcon className="star"/>{movie.vote_average}</span>
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