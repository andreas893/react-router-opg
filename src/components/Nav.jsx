import { Link, NavLink } from "react-router";

function Nav() {
    return(
        <nav>
            <NavLink to="/">Forside</NavLink> | <NavLink to="/About">Om</NavLink> | <NavLink to="Contact">Kontakt</NavLink>
        </nav>
    )
}

export default Nav;