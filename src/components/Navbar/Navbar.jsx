import { Link } from "react-router-dom";
import Logo from "../../assets/images/more/logo1.png"
const Navbar = () => {
    return (
        <div className="bg-nav-img flex justify-center items-center h-20">
            <div className="flex justify-center items-center gap-4">
                <img className="h-16" src={Logo} alt="" />
                <Link to="/" className="font-semibold text-white text-2xl">Coffee Emporium</Link>
            </div>
        </div>
    )
}

export default Navbar;