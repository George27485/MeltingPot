import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-gradient-to-b from-transparent to-black w-screen h-screen flex justify-center items-center'>
        <form method='POST' action="https://getform.io/f/2b8b5f6d-5b79-42d7-928a-5b88ca5a0c6b" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300'>Contact</p>
                
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-black hover:border-white-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact