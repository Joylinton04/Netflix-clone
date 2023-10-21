import mario from "../assets/Super-mario-movie.webp"
import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";

const ImageSlider = ({ movies }) => {

  return (
    <div className="img-slider"> 
        <div className="trending-movie">
            <div className="trending-movie-img-card">
                <div className="trending-movie-img">
                    <img src={mario} alt="" />
                </div>
                <div className="movie-info">
                    <p>Release Date: 2023-09-15</p>
                    <p><StarIcon/> 6.2 Action / Adventure</p>
                    <h1>Mario Bros</h1>
                    <p>Armed with every weapon they can get their hands on and the skills to use them, The Expendables are the world’s last line of defense and the team that gets called when all other options are off the table. But new team members with new styles and tactics are going to give “new blood” a whole new meaning</p>
                    
                    <button><Link to={'/'/* `/movie/${movies[0].id}` */}>watch</Link></button>
                </div>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default ImageSlider;