import { Link } from "react-router-dom";
import Logo from "../../assets/images/more/logo1.png"
const Navbar = () => {
    return (
        <div className="bg-nav-img fixed top-0 left-0 w-full h-20 flex justify-center items-center z-50">
            <div className="flex justify-center items-center gap-4">
                <img className="h-16" src={Logo} alt="" />
                <Link to="/" className="font-semibold text-white text-2xl lg:text-4xl">Coffee Emporium</Link>
            </div>
        </div>
    )
}

export default Navbar;