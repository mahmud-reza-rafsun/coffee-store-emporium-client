import { Link, useLoaderData } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import Swal from "sweetalert2";
const UpdateCoffee = () => {
    const coffeeData = useLoaderData();
    const { _id, name, price, supplier, taste, category, details, photo } = coffeeData
    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const coffeeDetails = { _id, name, price, supplier, taste, category, details, photo }
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(coffeeDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: `${name} add Successfully`,
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
        console.log(coffeeDetails);
    }
    return (
        <div className="py-10 lg:py-14 mt-5 bg-coffee-dark" >
            <div className="p-5 ml-5 lg:ml-10 text-white">
                <Link to="/" className="mt-4 lg:mt-0 flex items-center border w-fit p-2 rounded-md  duration-300 border-none hover:bg-yellow-800 gap-3">
                    <IoArrowBackOutline />
                    Back To Home
                </Link>
            </div>
            <div className="max-w-4xl mx-auto p-8 bg-black/30 backdrop-blur-md text-white rounded-lg shadow-md">
                <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-4">Update Existing Coffee Details</h2>
                <p className="text-center mb-8">
                    It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
                <form onSubmit={handleUpdateCoffee} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-1 font-medium">name</label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={name}
                                placeholder="Enter coffee name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none bg-black/30 border-gray-600 focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">supplier</label>
                            <input
                                type="text"
                                name="supplier"
                                defaultValue={supplier}
                                placeholder="Enter coffee supplier"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none bg-black/30 border-gray-600 focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">price</label>
                            <input
                                type="text"
                                name="price"
                                defaultValue={price}
                                placeholder="Enter coffee chef"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none bg-black/30 border-gray-600 focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">taste</label>
                            <input
                                type="text"
                                name="taste"
                                defaultValue={taste}
                                placeholder="Enter coffee taste"
                                className="w-full px-4 py-2 border rounded-md bg-black/30 border-gray-600 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">category</label>
                            <input
                                type="text"
                                name="category"
                                defaultValue={category}
                                placeholder="Enter coffee category"
                                className="w-full px-4 py-2 border rounded-md bg-black/30 border-gray-600 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">details</label>
                            <input
                                type="text"
                                name="details"
                                defaultValue={details}
                                placeholder="Enter coffee details"
                                className="w-full px-4 py-2 border bg-black/30 border-gray-600 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">photo</label>
                        <input
                            type="text"
                            name="photo"
                            defaultValue={photo}
                            placeholder="Enter photo URL"
                            className="w-full px-4 py-2 border bg-black/30 border-gray-600 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-4 bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                    >
                        Update Coffee
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UpdateCoffee;