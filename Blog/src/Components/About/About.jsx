import React from 'react'

function About() {
  return (
    <div className='text-2xl h-screen font-sans bg-[#e4dcdc]'>
      <div className='p-8 space-y-8'>
        <div>
          <p className='text-3xl'>🧾 About Us</p>
          <p className='px-10 mt-2'>Welcome to <strong>MyBlog</strong>, a place where curiosity meets clarity.</p>
          <p className='px-10 mt-2'>We’re a small team of developers, learners, and writers committed to sharing practical knowledge across the fields of technology, programming, artificial intelligence, productivity, and learning. Our goal is simple — to make complex topics easier to understand and accessible to everyone.</p>
        </div>
        <div>
          <p className='text-3xl'>🎯 Our Mission</p>
          <p className='px-10 mt-2'>To empower developers, students, and curious minds with clear, useful, and real-world content that inspires learning and creativity.</p>
        </div>
        <div>
          <p className='text-3xl'>👨‍💻 Who We Are</p>
          <p className='px-10 mt-2' >We’re creators who love to teach and learn. What began as a personal passion project has evolved into a platform visited by developers, students, and tech lovers around the world.</p>
        </div>
      </div>
    </div>
  )
}

export default About