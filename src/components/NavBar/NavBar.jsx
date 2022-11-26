import { Link } from "react-router-dom";


export default function NavBar ({user}) {
    return (
        <nav>
            <Link to="/">Movies List Page</Link>
            &nbsp; | &nbsp;
            <Link to="/actors">Actors List Page</Link>
            <p>Hello, {user.name}</p>
        </nav>
    )
}