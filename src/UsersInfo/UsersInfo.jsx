import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UsersInfo = () => {
    const data = useLoaderData();
    const [users, setUsers] = useState(data);
    console.log(data);
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // delete form the firebase
                fetch(`http://localhost:5000/users/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => {
                        res.json();
                    })
                    .then(data => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remainingUser = users.filter((user) => user._id !== _id);
                        setUsers(remainingUser);
                    })
            }
        });
    }
    return (
        <div className="bg-coffee-dark min-h-screen text-white">
            <div className="max-w-6xl mx-auto py-5">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-white text-lg">
                                <th>Name</th>
                                <th>Emal</th>
                                <th>creation Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => <tr key={user?._id}>
                                    <th>{user?.name}</th>
                                    <td>{user?.email}</td>
                                    <td>{user?.creationAt}</td>
                                    <td className="flex gap-3">
                                        <button className="btn btn-xs bg-green-500 hover:bg-green-600 text-white border-none"><FaPen /></button>
                                        <button onClick={() => handleDelete(user?._id)} className="btn btn-xs bg-red-500 border-none text-white hover:bg-red-600">X</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div >
            </div >
        </div >
    )
}

export default UsersInfo;