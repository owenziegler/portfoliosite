import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>Homepage</h1>
                </Link>
                <Link to='/resume'>
                    <h1>Resume</h1>
                </Link>
                <Link to='/programming'>
                    <h1>Programming</h1>
                </Link>
                <Link to='/engineering'>
                    <h1>Engineering</h1>
                </Link>
                <Link to='/gamedev'>
                    <h1>Gamedev</h1>
                </Link>
            </div>
        </header>
    )
}
export default Navbar