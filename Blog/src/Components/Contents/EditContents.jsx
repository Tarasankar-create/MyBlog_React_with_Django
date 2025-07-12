import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'



function EditContents() {
    const [email, setEmail] = useState()
    const [title, setTitle] = useState()
    const [authorName, setAuthorName] = useState()
    const [date, setDate] = useState()
    const [desctitle, setDescTitle] = useState()
    const [image, setImage] = useState()
    const [category, setCategory] = useState()
    const [description, setDescription] = useState()
    const [imagePreview, setImagePreview] = useState()
    const [error, setError] = useState('')
    const titlevalue = localStorage.getItem('blogtitle')
    console.log(description)
    useEffect(() => {
        setEmail(localStorage.getItem('email'))
    }, [])
    useEffect(() => {
        if (titlevalue) {
            const getTitleData = async () => {
                const titleRes = await axios.get('http://127.0.0.1:8000/show_title_data', { params: { 'blogtitle': titlevalue } })
                console.log(titleRes.data)
                console.log(titleRes.data[0]['authorName'])
                setTitle(titleRes.data[0]['title'])
                setAuthorName(titleRes.data[0]['authorName'])
                setDescTitle(titleRes.data[0]['desctitle'])
                setImage(titleRes.data[0]['image'])
                setCategory(titleRes.data[0]['category'])
                setDescription(titleRes.data[0]['description'])

            }
            getTitleData()
        }
    }, [])
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('email', email)
        formData.append('title', title)
        formData.append('authorName', authorName)
        formData.append('date', date)
        formData.append('category', category)
        if (image instanceof File) {
            formData.append('image', image)
        }
        formData.append('desctitle', desctitle)
        formData.append('description', description)
        try {
            const res = await axios.patch("http://127.0.0.1:8000/update_blog", formData)
            if (res.status == 200) {
                console.log(res)
                navigate('/contents')
            }
        } catch (err) {
           setError(err?.response?.data?.error || "Something went wrong")
        }
    }
    return (
        <div className='bg-[rgba(152,93,229,0.1)] h-full'>
            {error && <p className='text-center text-2xl text-red-600'>{error}</p>}
            <div className='flex flex-col justify-center items-center pt-10 shadow-lg'>
                <p className='w-5/6 bg-[rgba(100,56,158,0.1)] text-center pt-2 font-semibold text-2xl underline pb-2'>Update Blog</p>
                <form onSubmit={handleSubmit} className="grid justify-around grid-cols-[30%_3px_1fr] w-5/6 bg-white p-5 shadow-lg mb-3 ">
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <img
                            className='w-[200px] h-[200px] rounded-full'
                            src={imagePreview ? imagePreview
                                : `http://127.0.0.1:8000/${image}`
                            }
                        />
                        <label
                            htmlFor='imageUpload'
                            className='w-6 h-6 bg-gray-200 hover:bg-gray-300 shadow-lg cursor-pointer'
                        >
                            <img src={`http://localhost:5173/pencil.svg`} />

                        </label>
                    </div>
                    <div className="bg-gray-300 h-full w-full rounded"></div>
                    <div className='flex flex-col justify-center p-6 space-y-4'>
                        <div className="flex items-center">
                            <label className="w-24">Blog Title:</label>
                            <input
                                type="text"
                                className="flex-1 py-2 border-2 border-black p-1 rounded"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                readOnly />
                        </div>

                        <div className='flex justify-center space-y-4'>
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
                        <div className="hidden">
                            <label className="w-24">Blog Image:</label>
                            <input
                                type="file"
                                id='imageUpload'
                                className="flex-1 py-2 border-2 border-black p-1  rounded cursor-pointer"
                                onChange={(e) => {
                                    const file = e.target.files[0]
                                    if (file) {
                                        setImagePreview(URL.createObjectURL(file))
                                        setImage(e.target.files[0])
                                    }
                                }
                                }
                                />
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
                    </div>


                </form>

            </div>
        </div>
    )
}

export default EditContents