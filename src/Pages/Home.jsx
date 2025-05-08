import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Menu from "../components/Menu/Menu";
import CoffeeCard from "../components/CoffeeCard/CoffeeCard";

const Home = () => {
    const coffeeData = useLoaderData();
    return (
        <div >
            <div>
                <Banner />
                <Menu />
            </div>
            <div className="bg-gray-400 py-12">
                <div className="lg:max-w-4xl mx-auto">
                    <div className="px-5 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            coffeeData.map((coffee) => <CoffeeCard key={coffee?._id} coffee={coffee} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;