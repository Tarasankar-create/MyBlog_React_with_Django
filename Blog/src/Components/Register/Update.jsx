import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import UserContext from '../useContext/userContext'

function Update() {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [mob, setMob] = useState(null)
    const [gender, setGender] = useState(null)
    const [pwd, setPwd] = useState(null)
    const [profile, setProfile] = useState(null)
    const [profilePreview, setProfilePreview] = useState()
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)
    useEffect(() => {
        if (user) {
            setName(user.name)
            setEmail(user.email)
            setMob(user.mob)
            setGender(user.gender)
            setProfile(user.img)
            console.log(user.img)
        }
    },[user])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('mob', mob)
        formData.append('gender', gender)
        formData.append('pwd', pwd)
        formData.append('pic', profile)
        try {
            const res = await axios.patch("http://127.0.0.1:8000/register/update", formData)
            if (res.status == 200) {
                setError('')
                navigate('/')
            }
        } catch (err) {
            if (err) {
                setError(error)
            }
            else {
                setError('Something went wrong')
            }
        }
    }
    return (
        <div className='bg-[rgba(7,7,7,0.1)] h-screen'>
            <header>
                <div className='flex justify-center shadow-lg py-2 bg-white'>
                    <img src='Logo.png' />
                </div>
            </header>
            {error && <p className='text-center text-2xl text-red-600'>{error}r</p>}
            <div className='flex flex-col justify-center items-center mt-10'>
                <p className='w-4/6 bg-white text-center pt-2 font-semibold text-2xl underline'>Update Profile</p>
                <form onSubmit={handleSubmit} className="grid justify-around grid-cols-[30%_2px_auto] w-4/6 h-[500px] bg-white p-5">
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <img
                            className='w-[200px] h-[200px] rounded-full'
                            src={profilePreview ? profilePreview
                                : `http://127.0.0.1:8000/${profile}`
                            }
                        />
                        <label
                            htmlFor='profileUpload'
                            className='w-6 h-6 bg-gray-200 hover:bg-gray-300 shadow-lg cursor-pointer'
                        >
                            <img
                                src='pencil.svg'
                            />

                        </label>
                    </div>
                    <div className="bg-gray-900 h-full w-full rounded"></div>

                    <div className='flex flex-col justify-center space-y-4'>
                        <div className="flex items-center">
                            <label className="w-24">Name:</label>
                            <input
                                type="text"
                                className="flex-1 border-2 border-black p-1 rounded"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                        </div>

                        <div className="flex items-center">
                            <label className="w-24">Email:</label>
                            <input
                                type="email"
                                className="flex-1 border-2 border-black p-1 rounded"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                readOnly />
                        </div>

                        <div className="flex items-center">
                            <label className="w-24">Mob:</label>
                            <input
                                type="number"
                                className="flex-1 border-2 border-black p-1 rounded"
                                value={mob}
                                onChange={(e) => setMob(e.target.value)}
                                required />
                        </div>

                        <div className="flex items-center">
                            <label className="w-24">Gender:</label>
                            <select
                                className="flex-1 border-2 border-black p-1 rounded"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                required>
                                <option value="">------</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                                <option value="O">Other</option>
                            </select>
                        </div>
                        <div className="hidden">
                            <input
                                type="file"
                                className="flex-1 border-2 border-black p-1  rounded cursor-pointer"
                                id='profileUpload'
                                onChange={(e) => {
                                    const file = e.target.files[0]
                                    if (file) {
                                        setProfile(file)
                                        console.log(file)
                                        setProfilePreview(URL.createObjectURL(file))
                                    }
                                }}
                            />
                        </div>

                        <div className="flex items-center">
                            <label className="w-24">Password:</label>
                            <input
                                type="password"
                                className="flex-1 border-2 border-black p-1 rounded"
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}
                                required />
                        </div>

                        <button className="block mx-auto bg-[#554fc9] px-3 py-1 text-white rounded text-xl font-mono cursor-pointer">
                            Submit
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Update