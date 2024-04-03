import { NavLink } from "react-router-dom";

import './Header.css'


const Header = () => {

    const links = <>
        <div className="flex bg-white text-lg font-semibold">
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/listed'}>Listed Books</NavLink></li>
            <li><NavLink to={'/pages-to-read'}>Pages to Read</NavLink></li>
        </div>
    </>
    return (
        <div className="navbar bg-base-100 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-1 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="text-2xl font-bold">MT Books</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}

                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <button className="p-3 rounded-md hover:bg-none bg-[#23be0a] text-white font-bold">Apply Now</button>
                <button className="p-3 rounded-md hover:bg-none bg-[#59c6d2] text-white font-bold">Sign Up</button>
            </div>
        </div>
    );
};

export default Header;