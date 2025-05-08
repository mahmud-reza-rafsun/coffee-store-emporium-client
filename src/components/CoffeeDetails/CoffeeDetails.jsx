import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
    const coffeeDetails = useLoaderData();
    const { name, price, supplier, taste, category, details, photo } = coffeeDetails;
    return (
        <div className="py-10 lg:py-14 mt-5 bg-coffee-dark" >
            <div className="p-5 ml-5 lg:ml-10 text-white">
                <Link to="/" className="mt-4 lg:mt-0 flex items-center border w-fit p-2 rounded-md  duration-300 border-none hover:bg-yellow-800 gap-3">
                    <IoArrowBackOutline />
                    Back To Home
                </Link>
            </div>
            <div className="max-w-2xl mx-auto p-8 bg-black/30 backdrop-blur-md text-white rounded-lg shadow-md">
                <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-6">Details of {name}</h2>
                <div className="w-full backdrop-blur-md text-white rounded-lg shadow-md p-4 flex items-center justify-center gap-2 lg:gap-4">
                    <figure>
                        <img
                            src={photo}
                            alt="Shoes" />
                    </figure>
                    <div className="flex flex-col text-base lg:text-lg">
                        <h2>Name: {name}</h2>
                        <span>Category: {category}</span>
                        <span>Price: {price}</span>
                        <span>Taste: {taste}</span>
                        <p>Supplier: {supplier}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoffeeDetails;