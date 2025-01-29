// Importando Link para fazer conexão entre as páginas
import { Link } from 'react-router-dom'

// Componente de Erro
const Erros = () => {
  return (
    <div className="grid min-h-screen place-items-center bg-paleta-200 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          {/* Erro 404 de página não encontrada */}
          <p className="text-4xl font-semibold text-paleta-500">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-paleta-400 sm:text-7xl">
            Page not found
          </h1>
          {/* Botão para voltar para o Home */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/" className="rounded-md bg-paleta-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-paleta-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paleta-400">
              {/* Utilizando um caractere do Unicode UTF-8 */}
              <span aria-hidden="true">&larr;</span> Home
            </Link>
          </div>
        </div>
      </div>
  )
}

export default Erros