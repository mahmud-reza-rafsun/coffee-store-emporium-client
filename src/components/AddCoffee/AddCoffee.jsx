import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const AddCoffee = () => {
    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const coffeeDetails = { name, chef, supplier, taste, category, details, photo }
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(coffeeDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee add Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    form.reset();
                }
            })
        console.log(coffeeDetails);
    }
    return (
        <div className="py-10 mt-8">
            <div className="p-5 ml-10">
                <Link to="/">Back To Home</Link>
            </div>
            <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Add New Coffee</h2>
                <p className="text-center text-gray-600 mb-8">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here'.
                </p>
                <form onSubmit={handleAddCoffee} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-1 font-medium">name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter coffee name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">chef</label>
                            <input
                                type="text"
                                name="chef"
                                placeholder="Enter coffee chef"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">supplier</label>
                            <input
                                type="text"
                                name="supplier"
                                placeholder="Enter coffee supplier"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">taste</label>
                            <input
                                type="text"
                                name="taste"
                                placeholder="Enter coffee taste"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">category</label>
                            <input
                                type="text"
                                name="category"
                                placeholder="Enter coffee category"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">details</label>
                            <input
                                type="text"
                                name="details"
                                placeholder="Enter coffee details"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">photo</label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Enter photo URL"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-4 bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                    >
                        Add Coffee
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddCoffee;