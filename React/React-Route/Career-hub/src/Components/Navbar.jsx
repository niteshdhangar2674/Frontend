import { Link } from "react-router-dom"
export function Navbar() {
    return (
        <>
            <Link to={'/'}>home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/jobs'}>Jobs</Link>
            <Link to={'/login'}>Login</Link>

        </>
    )
}
