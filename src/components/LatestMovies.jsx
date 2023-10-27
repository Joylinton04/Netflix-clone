import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';

const LatestMovies = ({ latest }) => {
  return (
    <div className="trending-movies">
        <h1>Latest movies</h1>
        <div className="dmovies-info">
            {latest.map((movie) => (
            <div className="mov-cd" key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                <div className="LatestMovies-img">
                    <img src={""} alt="" />
                </div>
                <div className="movie-details">
                    <h2>{movie.original_name}</h2>
                    <span>{movie.first_air_date}</span>
                    <span><StarIcon className="star"/>5.9</span>
                </div>
                </Link>
            </div>
        ))}
    </div>
    </div>
  )
}

export default LatestMovies;
/* div className="trending-movies">
        <h1>Trending movies</h1>
        <div className="dmovies-info">
            {latest.map((movie) => (
        <div className="mov-cd" key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
            <div className="LatestMovies-img">
                <img src={""} alt="" />
            </div>
            <div className="movie-details">
                <h2>{movie.original_name.length <= 10 
                    ? movie.original_name
                    : movie.original_name.slice(0, 10) + "..."
                }</h2>
                <span>{movie.first_air_date}</span>
                <span><StarIcon className="star"/>5.9</span>
            </div>
            </Link>
        </div>
        ))}
        </div>
    </div> */