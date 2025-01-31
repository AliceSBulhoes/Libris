// Importando componentes
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'

const Books = () => {
  return (
    <div className='flex'>
      {/* Importando componente do side bar */}
      <Sidebar/>
      {/* Importando componente do dashboard */}
      <Dashboard/>
    </div>
  )
}

export default Books