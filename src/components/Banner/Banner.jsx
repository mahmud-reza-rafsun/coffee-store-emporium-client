import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-bg-img bg-cover bg-center h-[60vh] lg:min-h-screen w-full">
            <div className="flex justify-end items-center h-[70vh] lg:min-h-screen px-4">
                <div className="text-center lg:text-left max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        Would you like a Cup of Delicious Coffee?
                    </h2>
                    <p className="text-white mb-6">
                        It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!!
                        Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                    </p>
                    <Link to="/">
                        <button className="btn bg-[#E3B577] border-none text-[#242222] hover:bg-[#d9a74d] transition duration-300">
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Banner;