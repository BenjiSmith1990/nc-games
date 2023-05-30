import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to='/' >Home</Link>
            <Link to='/reviews' >Reviews</Link>
            <Link to='/categories' >Categories</Link>
        </nav>
     );
}
 
export default Navbar;