// Importando componentes
import Sidebar from '../components/Sidebar'
import Bookshelf from '../components/Bookshelf'

const Books = () => {
  return (
    <div className='flex'>
      {/* Importando componente do side bar */}
      <Sidebar/>
      {/* Importando componente do dashboard */}
      <Bookshelf/>
    </div>
  )
}

export default Books