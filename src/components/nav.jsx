import { useState } from "react"
import { CiMenuBurger } from "react-icons/ci"
import { Link } from "react-router-dom"

function Nav() {

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(prev => !prev);
    return (
        <header>
            <nav>
                <div className="nav_menu">
                    <Link className="nav_link nav_link_home" to="">Renaldas Dalinkevicius</Link>
                    <button onClick={toggleMenu} aria-expanded={isOpen} aria-controls="menu">
                        <CiMenuBurger/>
                    </button>
                </div>
                <div className="nav_container" style={{display: isOpen ? "flex" : ""}}>
                    <Link className="nav_link" to="/about">About</Link>
                    <Link className="nav_link" to="/contact">Contact</Link>
                </div>
            </nav>
        </header>
    )
}

export default Nav