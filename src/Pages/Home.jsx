import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";
import CoffeeCard from "../components/CoffeeCard/CoffeeCard";
import { BsCupHot } from "react-icons/bs";
import { useState } from "react";

const Home = () => {
    const coffeeData = useLoaderData();
    const [coffees, setCoffees] = useState(coffeeData);
    return (
        <div >
            <div>
                <Banner />
                <Menu />
            </div>
            <div className="bg-coffee-dark py-12">
                <div className="lg:max-w-4xl mx-auto">
                    <div className="text-center pb-8">
                        <h2 className="text-2xl lg:text-3xl font-semibold pb-2 lg:pb-3 text-white">Our Popular Products</h2>
                        <Link to="/add-coffee">
                            <button className="flex justify-center items-center m-auto text-lg bg-yellow-800 hover:bg-yellow-950 text-white border-none gap-2 font-semibold btn btn-sm">
                                <span>Add Coffee</span>
                                <span><BsCupHot /></span>
                            </button>
                        </Link>
                    </div>
                    <div className="px-5 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            coffees.map((coffee) => <CoffeeCard key={coffee?._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees} />)
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;