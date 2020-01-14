import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const ulStyle = { display: "flex", listStyle: "none", padding: "0" }
    const liStyle = { flex: "1 1 0", border: "1px solid black", margin: "2px", padding: "2%" }
    return (
        <div>
            <nav>
                <ul style={ulStyle} >
                    <li style={liStyle} ><Link to="/" >Home (Redux Auth)</Link></li>
                    <li style={liStyle} ><Link style={{ padding: "10px" }} to="/signup">Sign Up</Link></li>
                    <li style={liStyle} ><Link to="/signin">Sign In</Link></li>
                    <li style={liStyle} ><Link to="/signout">Sign Out</Link></li>
                    <li style={liStyle} ><Link to="/feature">Feature</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;