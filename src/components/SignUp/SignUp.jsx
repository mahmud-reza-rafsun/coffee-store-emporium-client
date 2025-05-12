import { useContext, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const handleSignUpCoffee = (event) => {
        event.preventDefault();
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


        createUser(email, password)
            .then(res => {
                console.log(res.user)
                const creationAt = res?.user?.metadata?.creationTime;
                const data = { name, email, creationAt }
                // new users send to database
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="py-3 pb-24 lg:py-5 lg:pb-20 bg-coffee-dark" >
            <div className="p-5 ml-5 lg:ml-10 text-white">
                <Link to="/" className="flex items-center border w-fit p-2 rounded-md  duration-300 border-none hover:bg-yellow-800 gap-3">
                    <IoArrowBackOutline />
                    Back To Home
                </Link>
            </div>
            <div className=" max-w-xl mx-auto p-7 bg-black/30 backdrop-blur-md text-white rounded-lg shadow-md">
                <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-4">Sign Up</h2>
                <form onSubmit={handleSignUpCoffee} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none bg-black/30 border-gray-600 focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none bg-black/30 border-gray-600 focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className="relative">
                        <label className="block mb-1 font-medium">password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter yout password"
                            className="w-full px-4 py-2 border bg-black/30 border-gray-600 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                        <div onClick={() => setShowPassword(!showPassword)} className="btn btn-xs bg-yellow-900 text-white border-none hover:bg-yellow-950 absolute top-[38px] right-4">
                            {
                                showPassword ? <FaEyeSlash /> : <FaEye />
                            }
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-4 bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="pt-4">New to this website? please <Link className="underline" to="/signIn">Signin</Link></p>
            </div>
        </div>
    )
}

export default SignUp;