import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function User() {
    
    const [user, setUser] = useState()

    useEffect(() => {
        axios.get(`http://localhost:3003/users/${id}`).then(res => {
            setUser(res.data)
        })
    }, [])

    const {id} = useParams()
    
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            {user && (
            <>
                <div className="w-[700px] h-[200px] flex px-6 py-4 border border-black mt-16 justify-center items-center">
                    <div className="w-5/12 flex flex-col space-y-4">
                        <h2 className="font-semibold font-Roboto text-2xl">Name</h2>
                        <h2 className="font-semibold font-Roboto text-2xl">Email</h2>
                        <h2 className="font-semibold font-Roboto text-2xl">Phone</h2>
                    </div>
                    <div className="w-7/12 flex flex-col space-y-4">
                        <h2 className="font-semibold font-Roboto text-2xl">{user.name}</h2>
                        <h2 className="font-semibold font-Roboto text-2xl">{user.email}</h2>
                        <h2 className="font-semibold font-Roboto text-2xl">{user.phone}</h2>
                    </div>
                </div>
            </>
            )}
            <Link 
                to={"/"} 
                className="w-48 bg-white text-blue-600 flex justify-center items-center font-semibold text-xl h-12 rounded-lg mt-16 border border-blue-600"
                >Back to home
            </Link>
        </div>
    )
}

export default User