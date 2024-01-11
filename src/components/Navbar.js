import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className="content container">
                <Link to='/'>
                    <img className="navbar-logo" src="/logo-workout-tracker.png" alt="logo"/>
                </Link>
                <nav className="menu">
                    {user &&(
                        <div>
                            <Link to='/workouts'>
                                Workouts
                            </Link>
                        </div>
                    )}
                {user && (
                    <div>
                        <button onClick={handleClick}>Log out</button>
                    </div> 
                )}
                {!user && (
                    <div>
                        <Link to='/login'>
                            Login
                        </Link>
                        <Link to='/signup'>
                            Signup
                        </Link>
                    </div>
                )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar