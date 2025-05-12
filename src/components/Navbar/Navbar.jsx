import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/more/logo1.png"
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const handleSignOut = () => {
        signOutUser();
    }
    return (
        <div className="bg-nav-img text-white top-0 sticky z-50">
            <div className="max-w-6xl navbar mx-auto px-6 lg:px-0">
                <div className="navbar-start">

                    <div className="flex justify-center items-center gap-4">
                        <img className="h-16" src={Logo} alt="" />
                        <Link to="/" className="font-semibold text-white text-2xl lg:text-4xl">Coffee Emporium</Link>
                    </div>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal hidden lg:flex text-lg px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? "active text-primary" : "")}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/add-coffee"
                                className={({ isActive }) => (isActive ? "active text-primary" : "")}
                            >
                                Add Coffee
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/signIn"
                                className={({ isActive }) => (isActive ? "active text-primary" : "")}
                            >
                                Sign In
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/profile"
                                className={({ isActive }) => (isActive ? "active text-primary" : "")}
                            >
                                Profile
                            </NavLink>
                        </li>
                    </ul>
                    <div className="flex gap-4">
                        <div>
                            {
                                user ? <button onClick={handleSignOut} className="w-full lg:ml-3 lg:mt-0 mt-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300">Log Out</button> : ""
                            }
                        </div>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn bg-yellow-800 text-white border-none hover:bg-yellow-900 lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-gradient-to-r from-[#7d5a50] via-[#a47148] to-[#d9b08c] absolute right-0 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => (isActive ? "active text-primary" : "")}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/add-coffee"
                                        className={({ isActive }) => (isActive ? "active text-primary" : "")}
                                    >
                                        Add Coffee
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/signIn"
                                        className={({ isActive }) => (isActive ? "active text-primary" : "")}
                                    >
                                        Sign In
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/profile"
                                        className={({ isActive }) => (isActive ? "active text-primary" : "")}
                                    >
                                        Profile
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Navbar;