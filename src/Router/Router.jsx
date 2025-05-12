import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AddCoffee from "../components/AddCoffee/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";
import CoffeeDetails from "../components/CoffeeDetails/CoffeeDetails";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SignIn/SignIn";
import UsersInfo from "../UsersInfo/UsersInfo";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => {
                    const coffee = await fetch('http://localhost:5000/coffee');
                    const resCoffee = await coffee.json();
                    return resCoffee;
                }
            },
            {
                path: '/add-coffee',
                element: <AddCoffee />
            },
            {
                path: '/update-coffee/:id',
                element: <UpdateCoffee />,
                loader: async ({ params }) => {
                    const coffee = await fetch(`http://localhost:5000/coffee/${params.id}`);
                    const resCoffee = await coffee.json();
                    return resCoffee;
                }
            },
            {
                path: '/coffee-details/:id',
                element: <CoffeeDetails />,
                loader: async ({ params }) => {
                    const coffee = await fetch(`http://localhost:5000/coffee/${params.id}`);
                    const resCoffee = await coffee.json();
                    return resCoffee;
                }
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/signIn',
                element: <SignIn />
            },
            {
                path: '/profile',
                element: <UsersInfo />,
                loader: () => fetch('http://localhost:5000/users'),
            }
        ]
    }
])

export default router;