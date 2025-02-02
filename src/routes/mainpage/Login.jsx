// Importando ícone
import { BsGoogle } from 'react-icons/bs'

const Login = () => {
  return (
    <div className='p-8 bg-paleta-200 min-h-screen flex-1 flex flex-col gap-6 overflow-x-hidden'>
      <div className="max-w-[480px] mx-auto w-full">
        <div className="flex flex-col items-center mt-[10vh]">
            {/* Título */}
            <h2 className="mb-5 text-paleta-500 font-mono font-bold text-4xl uppercase">Log In</h2>
            {/* Botão para logar com o google */}
            <button className="flex items-center mb-2 justify-center transition ease-in-out delay-50 px-3 py-2.5 space-x-2 bg-paleta-400 border border-paleta-500 rounded-md hover:bg-paleta-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-paleta-400 focus:ring-opacity-50">
                <BsGoogle color='#F2F2F2'/>
                <span className="text-paleta-100 font-medium">Continue com Google</span>
            </button>
            <span className="mb-2 text-paleta-500 text-2xl font-bold">Ou</span>
            {/* Form para fazer Login */}
            <form className='flex flex-col gap-5'>
                {/* Seção Email */}
                <div>
                  <span className='uppercase font-bold text-paleta-500 text-md'>Email: </span>
                  <input 
                    type="text" 
                    className="w-full px-6 py-3 mb-2 border border-paleta-500 bg-paleta-400 rounded-lg font-medium text-paleta-100 " 
                    placeholder="Email"
                    />
                </div>
                {/* Seção Senha */}
                <div>
                  <span className='uppercase font-bold text-paleta-500 text-md'>Senha: </span>
                  <input 
                    type="password" 
                    className="w-full px-6 py-3 mb-2 border border-paleta-500 bg-paleta-400 rounded-lg font-medium text-paleta-100 focus:text-paleta-100 focus:shadow-paleta-500" 
                    placeholder="Senha"
                    />
                </div>
                {/* Botão para fazer o Login */}
                <button className="bg-paleta-500 hover:bg-paleta-400 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]">Log In</button>
            </form>
            {/* Redireciona para a página de cadastro */}
            <p className="text-center text-paleta-400 mt-3 text-[14px]">Não tem uma conta?  <a href="/signup" className="text-paleta-500 font-bold uppercase">Cadastre-se</a></p>
        </div>
      </div>
    </div>
  )
}

export default Login