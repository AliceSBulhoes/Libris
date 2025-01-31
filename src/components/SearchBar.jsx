// Importando ícone
import { FaSearch } from 'react-icons/fa'

const SearchBar = ({ handleSearch, searchBook }) => {
  return (
    <div>
      {/* Barra de Pesquisa */}
      <form onSubmit={searchBook} className='flex'>
        {/* Input da Pesquisa */}
        <input
          type="text"
          className="relative block md:max-w-2xs w-0.5 flex-auto border rounded-l-md border-solid border-paleta-500 bg-paleta-400 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-paleta-100 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-paleta-100 focus:shadow-paleta-500 focus:outline-none"
          placeholder="Search"
          onChange={handleSearch}
          />
          {/* Botão para Pesquisar */}
          <button type='submit' className='bg-paleta-500 p-4 rounded-r-sm'>
            <FaSearch color='white'/>
          </button>
        </form>
    </div>
  )
}

export default SearchBar