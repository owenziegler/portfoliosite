import {Link} from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link className='nav-link' to='/'>New Post</Link></li>
                <li><Link className='nav-link' to='/edit'>Edit Post</Link></li>
                <li><Link className='nav-link' to='/delete'>Delete Post</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar