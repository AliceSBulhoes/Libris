import React from 'react'
import SearchBar from './SearchBar'

const Bookshelf = () => {
  return (
    <div className='p-8 bg-paleta-200 min-h-screen flex-1'>
        <h1 className='text-2xl font-bold'>Bookshelf</h1>
        <SearchBar/>
    </div>
  )
}

export default Bookshelf