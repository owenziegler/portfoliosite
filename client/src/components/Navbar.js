import {Link} from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link className='nav-link' to='/'>Homepage</Link></li>
                <li><Link className='nav-link' to='/resume'>Resume</Link></li>
                <li><Link className='nav-link' to='/programming'>Programming</Link></li>
                <li><Link className='nav-link' to='/engineering'>Engineering</Link></li>
                <li><Link className='nav-link' to='/gamedev'>Gamedev</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar