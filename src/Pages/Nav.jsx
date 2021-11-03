import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

const Nav = () => {

    const style = {
        color : "white",
        padding: "10px",
        backgroundcolor : 'green'
    };

    return (
        <nav>
            <Link style={style} className="nav-item" to="/">
                <h3>Logo</h3>
            </Link>

            <ul className="nav-link">
                <Link style={style} className="nav-item" to="/about">
                    <li>About</li>
                </Link>
                
                <Link className="nav-item" style={style} to="/shop">
                    <li>Shop</li>
                </Link>
            </ul>

        </nav>
    )
}

export default Nav
