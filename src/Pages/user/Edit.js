import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3003/users/${id}`).then(res => {
            setName(res.data.name)
            setEmail(res.data.email)
            setPhone(res.data.phone)
        })
    }, [])

    const data = {
        name: name,
        email: email,
        phone: phone
    }

    function update(e) {
        e.preventDefault()
        axios.put(`http://localhost:3003/users/${id}`, data).then(navigate("/"))
    }

    return (
        <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
            <h1 className="text-3xl font-semibold font-Roboto">Edit User</h1>
            <form className="w-[50%] h-full flex flex-col justify-center items-center mt-4">
                <input
                    value={name}
                    onChange={(e) => setName (e.target.value)}
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-[80%] bg-white/10 mt-4 text-xl font-Roboto font-normal outline-none py-4 pl-6 border border-zinc-400"
                />
                <input
                    value={email}
                    onChange={(e) => setEmail (e.target.value)}
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-[80%] bg-white/10 mt-4 text-xl font-Roboto font-normal outline-none py-4 pl-6 border border-zinc-400"
                />
                <input
                    value={phone}
                    onChange={(e) => setPhone (e.target.value)} 
                    type="phone" 
                    placeholder="Enter your phone" 
                    className="w-[80%] bg-white/10 mt-4 text-xl font-Roboto font-normal outline-none py-4 pl-6 border border-zinc-400"
                />
                <button
                    onClick={(update)}
                    className="w-[80%] bg-blue-600 text-white font-semibold mt-4 text-xl font-Roboto font-normal py-4 pl-6"
                    >Update User
                </button>
            </form>
        </div>
    )
}

export default Edit