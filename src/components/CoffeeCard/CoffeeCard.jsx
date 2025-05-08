import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
    const coffeeData = coffee;
    const [load, setLoad] = useState(coffeeData);
    const { _id, name, price, category, photo } = coffeeData;
    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: `You won't be able to revert this ${name}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire({
                            title: "Deleted!",
                            text: `Your ${name} has been deleted.`,
                            icon: "success"
                        });
                        const deletedCoffee = load.filter((coffee) => coffee._id !== _id)
                        setLoad(deletedCoffee);
                    })
            }
        });
    }
    return (
        <div className="w-full bg-black/30 backdrop-blur-md text-white rounded-lg shadow-md p-4 flex items-center gap-4">

            <img src={photo} alt="Black Coffee" className="w-28 h-36 object-cover rounded-md" />

            <div className="flex-1">
                <p><span className="font-semibold">Name: </span>{name}</p>
                <p><span className="font-semibold">Price: </span>$ {price}</p>
                <p><span className="font-semibold">Category: </span>{category}</p>
            </div>

            <div className="flex flex-col items-center gap-2">
                <Link to={`/coffee-details/${_id}`}>
                    <button className="bg-[#C7A17A] hover:bg-[#b18c66] text-white p-1.5 rounded">
                        <span>
                            <FaEye />
                        </span>
                    </button>
                </Link>
                <Link to={`/update-coffee/${_id}`}>
                    <button className="bg-gray-700 hover:bg-gray-800 text-white p-1.5 rounded">
                        <span>
                            <MdEdit />
                        </span>
                    </button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="bg-red-500 hover:bg-red-600 text-white p-1.5 rounded">
                    <span>
                        <IoTrashOutline />
                    </span>
                </button>
            </div>
        </div>

    )
}

export default CoffeeCard;