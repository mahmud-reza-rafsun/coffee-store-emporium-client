const AddCoffee = () => {
    const handleLogin = (event) => {

    }
    return (
        <div className="py-10 mt-8">
            <div className="max-w-4xl mx-auto mt-10 p-8 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Add New Coffee</h2>
                <p className="text-center text-gray-600 mb-8">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here'.
                </p>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-1 font-medium">Name</label>
                            <input type="text" placeholder="Enter coffee name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Chef</label>
                            <input type="text" placeholder="Enter coffee chef" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Supplier</label>
                            <input type="text" placeholder="Enter coffee supplier" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Taste</label>
                            <input type="text" placeholder="Enter coffee taste" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Category</label>
                            <input type="text" placeholder="Enter coffee category" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Details</label>
                            <input type="text" placeholder="Enter coffee details" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Photo</label>
                        <input type="text" placeholder="Enter photo URL" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
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