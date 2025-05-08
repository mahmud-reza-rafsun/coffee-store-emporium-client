import Cup from "../../assets/images/icons/1.png"
import Bage from "../../assets/images/icons/2.png"
import Pure from "../../assets/images/icons/3.png"
import Glass from "../../assets/images/icons/4.png"

const Menu = () => {
    return (
        <div className="text-black py-8">
            <div className="px-5 lg:max-w-4xl mx-auto">
                <div className="flex items-center flex-col lg:flex-row gap-5 justify-between text-black">
                    <div className="space-y-2 w-full sm:w-full md:w-[48%] lg:w-[23%] bg-gray-100 bg-transparent/10 p-4 rounded">
                        <img src={Cup} alt="" />
                        <h2 className="text-2xl lg:text-3xl">Awesome Aroma</h2>
                        <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className="space-y-2 w-full sm:w-full md:w-[48%] lg:w-[23%] bg-gray-100 bg-transparent/10 p-4 rounded">
                        <img src={Bage} alt="" />
                        <h2 className="text-2xl lg:text-3xl">High Quality</h2>
                        <p>We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div className="space-y-2 w-full sm:w-full md:w-[48%] lg:w-[23%] bg-gray-100 bg-transparent/10 p-4 rounded">
                        <img src={Pure} alt="" />
                        <h2 className="text-2xl lg:text-3xl ">Pure Grades</h2>
                        <p>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div className="space-y-2 w-full sm:w-full md:w-[48%] lg:w-[23%] bg-gray-100 bg-transparent/10 p-4 rounded">
                        <img src={Glass} alt="" />
                        <h2 className="text-2xl lg:text-3xl">Proper Roasting</h2>
                        <p>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;