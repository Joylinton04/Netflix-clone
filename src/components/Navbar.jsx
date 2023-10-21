import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Clean up the event listener when the component unmounts
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

return (
  <nav style={scrollY < 200 ? {} : { backgroundColor: "#000" }}>
        <h1>Netflix</h1>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><a href="#All-movies">Movies</a></li>
            <li><a>TV show</a></li>
        </ul>
        <div className="search-movie">
          <input 
            type="text" 
            placeholder="Search movie here"
          />
        </div>
    </nav>
  )
}

export default Navbar;