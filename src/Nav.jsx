import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header className='container-fluid bg-dark'>
            <nav className='navbar navbar-expand-lg navbar-dark'>
            <div className='container'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                        <Link className='nav-link active' aria-current='page' to='/'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/GroupTeamMembers'>Teams</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </header>
    )
}

export default Nav;