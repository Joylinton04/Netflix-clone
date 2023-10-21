import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import TagIcon from '@mui/icons-material/Tag';
import MovieIcon from '@mui/icons-material/Movie';

const Categories = () => {
  return (
   <>
        <div className="categories">
            <ul id="All-movies">
                <li className="active"><span><TrendingUpIcon fontSize="larger"/></span>Trends now</li>
                <li><span><LocalFireDepartmentIcon/></span> Popular</li>
                <li><span><TagIcon/></span> latest</li>
                <li><span><MovieIcon/></span> TV show</li>
            </ul>
        </div>
        <ul className="Genre">
            <li className="f">action</li>
            <li>adventure</li>
            <li>animation</li>
            <li>Biography</li>
            <li>crime</li>
            <li className="f">comedy</li>
            <li>Documentary</li>
        </ul>
   </>
  )
}

export default Categories;