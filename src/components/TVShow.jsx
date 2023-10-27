import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';

const TVShow = ({tvShow}) => {
  return (
    <div className="trending-movies" id="TV-show">
    <h1>TV Show</h1>
        <div className="dmovies-info">
            {tvShow.map((show)=> (
                <div className="mov-cd" key={show.id}>
                    <Link to={'/movie/id'}>
                    <div className="movies-img">
                        <img src={`https://image.tmdb.org/t/p/original${show.poster_path}`} alt="" />
                    </div>
                    <div className="movie-details">
                        <h2>{show.original_name}</h2>
                        <div className="date">
                            <p>{show.release_date}</p>
                            <p>
                                <StarIcon className="star"/>
                                {(show.vote_average).toFixed(2)}
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

export default TVShow;