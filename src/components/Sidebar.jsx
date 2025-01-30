import React, { useState } from 'react'
import { BiSolidBookmark } from 'react-icons/bi'
import { FaBars, FaHome, FaUserAlt } from 'react-icons/fa'
import { IoMdLogIn } from 'react-icons/io'
import { IoCloseSharp } from 'react-icons/io5'
import { TbBook } from 'react-icons/tb'
import logo from '../assets/logo-2.svg'

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);



    return (
        <div className={`md:w-60 ${isOpen ? "w-64" : "w-20"} bg-paleta-400 transition-width duration-300 text-paleta-200`}>
            <div className={`flex md:justify-start ${isOpen ? "justify-between" : "justify-start"} items-center p-4`}>
                <div className='flex justify-start gap-3 items-center'>
                    <img src={logo} width={24} className={`${isOpen ? "block" : "hidden"} md:block`}/>
                    <h2 className={`text-2xl font-bold ${isOpen ? "block" : "hidden"} md:block`}>Libris</h2>
                </div>
                <button className='md:hidden flex justify-between items-center' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <IoCloseSharp size={24}/> : <FaBars size={24}/>}
                </button>
            </div>
            <nav className='mt-4'>
                <ul>
                    <li className='flex items-center p-4 hover:bg-paleta-500 cursor-pointer'>
                        <TbBook size={24} />
                        <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>Bookshelf</span>
                    </li>
                    <li className='flex items-center p-4 hover:bg-paleta-500 cursor-pointer'>
                        <BiSolidBookmark size={24} />
                        <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>Bookmark's</span>
                    </li>
                    <li className='flex items-center p-4 hover:bg-paleta-500 cursor-pointer'>
                        <FaUserAlt size={24} />
                        <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>Profile</span>
                    </li>
                    <li className='flex items-center p-4 hover:bg-paleta-500 cursor-pointer'>
                        <IoMdLogIn size={24} />
                        <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>Login</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar