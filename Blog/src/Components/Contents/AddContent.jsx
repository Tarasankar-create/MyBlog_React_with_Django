import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddContent() {
    const [title, setTitle] = useState()
    const [authorName, setAuthorName] = useState()
    const [date, setDate] = useState()
    const [desctitle, setDescTitle] = useState()
    const [image, setImage] = useState()
    const [category, setCategory] = useState()
    const [description, setDescription] = useState()
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('authorName', authorName)
        formData.append('date', date)
        formData.append('category', category)
        formData.append('image', image)
        formData.append('desctitle', desctitle)
        formData.append('description', description)
        try {
            const res = await axios.post("http://127.0.0.1:8000/add_blog", formData)
            if (res.status == 200) {
                console.log(res)
                // navigate('/login')
                // setError('')
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
        <div className='bg-[rgba(152,93,229,0.1)] h-full'>
            <header>
                <div className='flex justify-center shadow-lg py-2 bg-white'>
                    <img src='Logo.png' />
                </div>
            </header>
            {error && <p className='text-center text-2xl text-red-600'>{error}r</p>}
            <div className='flex flex-col justify-center items-center mt-10'>
                <p className='w-3/5 bg-[rgba(100,56,158,0.1)] text-center pt-2 font-semibold text-2xl underline pb-2'>Add Blog</p>
                <form onSubmit={handleSubmit} className="w-3/5 font-semibold bg-white p-5 space-y-5">
                    <div className="flex items-center">
                        <label className="w-24">Blog Title:</label>
                        <input
                            type="text"
                            className="flex-1 py-2 border-2 border-black p-1 rounded"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required />
                    </div>

                    <div className="flex items-center">
                        <label className="w-24">Author Name:</label>
                        <input
                            type="text"
                            className="flex-1 py-2 border-2 border-black p-1 rounded"
                            value={authorName}
                            onChange={(e) => setAuthorName(e.target.value)}
                            required />
                    </div>

                    <div className="flex items-center">
                        <label className="w-24">Date & Time:</label>
                        <input
                            type="datetime-local"
                            className="flex-1 py-2 border-2 border-black p-1 rounded"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required />
                    </div>
                    <div className="flex items-center">
                        <label className="w-24">Category:</label>
                        <select
                            className="flex-1 py-2 border-2 border-black p-1 rounded"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required>
                            <option value="">------</option>
                            <option value="Technology">Technology</option>
                            <option value="Tutorials">Tutorials</option>
                            <option value="Opinions">Opinions</option>
                            <option value="News">News</option>
                            <option value="Reviews">Reviews</option>
                            <option value="Lifestyle">Lifestyle</option>
                            <option value="Productivity">Productivity</option>
                            <option value="Career">Career</option>
                            <option value="Coding Journey">Coding Journey</option>
                            <option value="Programming Tips">Programming Tips</option>
                            <option value="Dev Tools">Dev Tools</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Backend Development">Backend Development</option>
                            <option value="Frontend Development">Frontend Development</option>
                            <option value="Mobile Development">Mobile Development</option>
                            <option value="Machine Learning">Machine Learning</option>
                            <option value="Cybersecurity">Cybersecurity</option>
                            <option value="Open Source">Open Source</option>
                            <option value="Freelancing">Freelancing</option>
                            <option value="Remote Work">Remote Work</option>
                            <option value="Project Showcase">Project Showcase</option>
                            <option value="Interview Prep">Interview Prep</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Books & Resources">Books & Resources</option>
                            <option value="Personal Growth">Personal Growth</option>
                            <option value="Weekly Recap">Weekly Recap</option>
                        </select>
                    </div>
                    <div className="flex items-center">
                        <label className="w-24">Blog Image:</label>
                        <input
                            type="file"
                            className="flex-1 py-2 border-2 border-black p-1  rounded cursor-pointer"
                            onChange={(e) => setImage(e.target.files[0])}
                            required />
                    </div>

                    <div className="flex items-center">
                        <label className="w-24">Description Title:</label>
                        <input
                            type="text"
                            className="flex-1 py-2 border-2 border-black p-1 rounded"
                            value={desctitle}
                            onChange={(e) => setDescTitle(e.target.value)}
                            required />
                    </div>

                    <div className="flex items-center">
                        <label className="w-24">Description:</label>
                        <textarea
                            className=' w-full ml-2 h-[200px] border-2 border-black p-3'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />

                    </div>

                    <button className="block mx-auto bg-[#554fc9] px-3 py-1 text-white rounded text-xl font-mono cursor-pointer">
                        Submit
                    </button>
                </form>

            </div>
        </div>
    )
}

export default AddContent