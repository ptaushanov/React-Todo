
import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/">TODOs</Link>
            <Link to="/create">Create task</Link>
        </nav>            
     );
}
 
export default Navbar;