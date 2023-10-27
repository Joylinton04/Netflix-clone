import TrendingMovies from "./TrendingMovies";
import useFetch from "../Hooks/useFetch";
import SkeletonLoading from "./SkeletonLoading";



const Recommended = ({id}) => {
    const { data, fetchError, isLoading } = useFetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`);
    //https://api.themoviedb.org/3/movie/575264/recommendations

  return (
    <div className="recommended">
        {isLoading && <SkeletonLoading/>}
        {fetchError && <p className="statusMsg">{fetchError}</p>}
        {!isLoading && !fetchError && (data.length 
            ? <TrendingMovies title="Recommended" movies={data.slice(0, 10)}/>
            : <p className="statusMsg">No recommended movie</p>
        )}
    </div>
  )
}

export default Recommended;