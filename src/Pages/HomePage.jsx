import ImageSlider from "../components/ImageSlider";
import HomeContent from "../layout/HomeContent";

const HomePage = ({movies, latest, tvShow, fetchError, isLoading}) => {

  return (
    <div className="homePage">
        <ImageSlider movies={movies}/>   
        <HomeContent 
          movies={movies} 
          latest={latest} 
          tvShow={tvShow}
          fetchError={fetchError}
          isLoading={isLoading}
          />
    </div>
  )
}

export default HomePage;