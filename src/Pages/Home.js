import React, { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

function Home() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3003/users").then(res => {
            setUsers(res.data)
        })
    }, [])

    const deleteUser = id => {
        axios.delete(`http://localhost:3003/users/${id}`)
        const newUserList = users.filter(user => {
            return user.id !== id
        })
        setUsers(newUserList)
    }

    return (
        <div className="w-full h-full flex flex-col px-10 py-8">

            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <h1 className="text-3xl font-semibold font-Roboto">Home page</h1>
                            <table className="min-w-full text-center mt-8">
                                <thead className="border-b bg-gray-800">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            #
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Name
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Email
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Phone
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {users.map((user, index) => 
                                    <tr key={index} className="bg-white border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                                            {index + 1}
                                        </td>
                                        <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {user.name}
                                        </td>
                                        <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {user.email}
                                        </td>
                                        <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {user.phone}
                                        </td>
                                        <td className="flex justify-center items-center space-x-4 mt-2">
                                            <Link to={`/users/${user.id}`} className="px-6 py-2 text-white bg-black rounded-lg">
                                                View
                                            </Link>
                                            <Link to={`edit-user/${user.id}`} className="px-6 py-2 text-white bg-blue-600 rounded-lg">Edit</Link>
                                            <button 
                                                onClick={() => deleteUser(user.id)} 
                                                className="px-6 py-2 text-white bg-red-600 rounded-lg"
                                                >Delete
                                            </button>
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home