import { FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";
import FooterLogo from "../../assets/images/more/logo1.png"
const Footer = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-footer-dark">
                <div className="backdrop-blur-md bg-black/30 border text-white border-white/10 shadow-lg rounded-lg p-8 flex flex-col md:flex-row w-full max-w-4xl">
                    <div className="md:w-1/2 p-0 lg:p-4">
                        <div className="mb-4 flex justify-center lg:justify-start">
                            <img
                                src={FooterLogo}
                                alt="Espresso Emporium Logo"
                                className="w-20 h-20"
                            />
                        </div>
                        <h1 className="text-4xl font-bold mb-4">Coffee Emporium</h1>
                        <p className="mb-6">
                            Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                        </p>
                        <div className="flex space-x-4 mb-6">
                            <a href="#">
                                <span className="text-2xl"><FaPinterest /></span>
                            </a>
                            <a href="#">
                                <span className="text-2xl"><FaTwitter /></span>
                            </a>
                            <a href="#">
                                <span className="text-2xl"><FaLinkedin /></span>
                            </a>
                            <a href="#">
                                <span className="text-2xl"><FaInstagram /></span>
                            </a>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                        <div className="space-y-2">
                            <p>📞 +88 01633 233 333</p>
                            <p>📧 emporium@coffee.com</p>
                            <p>📍 72, Wall Street, King Road, Dhaka</p>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-0 lg:p-4 mt-8 lg:mt-0">
                        <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block mb-1 font-medium">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 border bg-black/30 border-gray-600 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Email</label>
                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border bg-black/30 border-gray-600 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Message</label>
                                <textarea className="w-full px-4 py-2 border bg-black/30 border-gray-600 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Message"></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-4 bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="text-center bg-footer-dark text-white py-3">
                <span className="text-md">Copyright Coffee Emporium ! All Rights Reserved</span>
            </div>
        </div>
    )
}

export default Footer;