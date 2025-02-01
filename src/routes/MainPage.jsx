// Importando dependencias
import { Outlet } from 'react-router-dom'
// Importando componente
import Sidebar from '../components/Sidebar'


const MainPage = () => {
  return (
    <div className='flex'>
      {/* Importando componente do side bar */}
      <Sidebar/>
      {/* Importando componente do dashboard */}
      <Outlet/>
    </div>
  )
}

export default MainPage