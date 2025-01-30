import React from 'react'
import { BiSolidBookmark } from 'react-icons/bi'
import { FaBars, FaHome, FaUserAlt } from 'react-icons/fa'
import { IoMdLogIn } from 'react-icons/io'
import { TbBook } from 'react-icons/tb'

const Sidebar = () => {
  return (
    <div className='w-20 md:w-60'>
        <div className='flex justify-between items-center'>
            <h2 className='text-xl font-bold'>Libris Bookshelf</h2>
            <button>
                <FaBars size={24}/>
            </button>
        </div>
        <nav className='mt-4'>
            <ul>
                <li className='flex items-center p-4 hover:bg-gray700 cursor-pointer'>
                    <TbBook size={24} />
                    <span className='ml-4 md:block'>Bookshelf</span>
                </li>
            </ul>
            <ul>
                <li className='flex items-center p-4 hover:bg-gray700 cursor-pointer'>
                    <BiSolidBookmark size={24} />
                    <span className='ml-4 md:block'>Bookmark's</span>
                </li>
            </ul>
            <ul>
                <li className='flex items-center p-4 hover:bg-gray700 cursor-pointer'>
                    <FaUserAlt size={24} />
                    <span className='ml-4 md:block'>Profile</span>
                </li>
            </ul>
            <ul>
                <li className='flex items-center p-4 hover:bg-gray700 cursor-pointer'>
                    <IoMdLogIn size={24} />
                    <span className='ml-4 md:block'>Login</span>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar