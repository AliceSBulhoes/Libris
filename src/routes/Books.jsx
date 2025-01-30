import React from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'

const Books = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Dashboard/>
    </div>
  )
}

export default Books