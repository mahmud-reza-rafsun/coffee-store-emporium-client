const CoffeeCard = ({ coffee }) => {
    const { name, price, supplier, taste, category, details, photo } = coffee;
    return (
        <div className="w-full bg-[#F8F7F4] rounded-lg shadow-md p-4 flex items-center gap-4">

            <img src={photo} alt="Black Coffee" className="w-28 h-36 object-cover rounded-md" />


            <div className="flex-1">
                <p><span className="font-semibold">Name: </span>{name}</p>
                <p><span className="font-semibold">Price: </span>$ {price}</p>
                <p><span className="font-semibold">Category: </span>{category}</p>
            </div>

            <div className="flex flex-col items-center gap-2">
                <button className="bg-[#C7A17A] hover:bg-[#b18c66] text-white p-1.5 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                <button className="bg-gray-700 hover:bg-gray-800 text-white p-1.5 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5h2m3 14H8a2 2 0 01-2-2V7h10v10a2 2 0 01-2 2z" />
                    </svg>
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white p-1.5 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

    )
}

export default CoffeeCard;