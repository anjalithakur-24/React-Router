import React from "react";
import {Link,NavLink} from 'react-router-dom'
function Header() {
    return(
    <>
    <header className="shadow sticky z-50 top-0">
        <nav className="h-16 bg-slate-200">
            <div className="flex justify-evenly items-center pt-3">
                <Link to="About" className="flex items-center">
                    <h1>Logo</h1>  
                </Link>
                <NavLink
                 to="/"
                 className={({ isActive }) => (isActive ? "text-blue-600 font-bold" : "text-blue-300" )}
                 >
                  Home
                </NavLink>
                <div>
                <Link className="mr-2" to="Login">
                   <button 
                   className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-lg transition duration-300 ease-in-out"
                   >Login</button>
                </Link>
                <Link to="SignUp">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-lg transition duration-300 ease-in-out"
                >Sign Up</button>
                </Link>
                </div>
            </div>
        </nav>
    </header>
    </>
    )
}
export default Header;