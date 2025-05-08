import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AddCoffee from "../components/AddCoffee/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => {
                    const coffeeData = await fetch('http://localhost:5000/coffee');
                    const coffee = await coffeeData.json();
                    return coffee;
                }
            },
            {
                path: '/add-coffee',
                element: <AddCoffee />
            },
            {
                path: '/update-coffee',
                element: <UpdateCoffee />
            }
        ]
    }
])

export default router;