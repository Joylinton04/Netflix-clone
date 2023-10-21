

const TVShow = ({tvShow}) => {
  return (
    <div className="trending-movies">
    <h1>TV Show</h1>
        <div className="dmovies-info">
            {tvShow.map((show)=> (
                <div className="mov-cd" key={show.id}>
                    <Link to={'/movie/id'}>
                    <div className="movies-img">
                        <img src={""} alt="" />
                    </div>
                    <div className="movie-details">
                        <h2>{show.original_name.length <= 10 
                            ? show.original_name
                            : show.original_name.slice(0, 10) + "..."
                        }</h2>
                        <span>{show.first_air_date}</span>
                        <span><StarIcon className="star"/>5.9</span>
                    </div>
                    </Link>
                </div>
            ))}
        : <p className="statusMsg">Sorry, no movie to display</p>
        </div>
    </div>
  )
}

export default TVShow;