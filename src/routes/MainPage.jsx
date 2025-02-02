// Importando dependencias
import { Outlet } from 'react-router-dom'
// Importando componente
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'


const MainPage = () => {
  return (
    <div>
      <div className="flex">
        {/* Importando componente do side bar */}
        <Sidebar/>
        {/* Importando componente do dashboard */}
        <Outlet/>
      </div>
      {/* Importando componente do footer */}
      <Footer/>
    </div>
  )
}

export default MainPage