import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className="bg-gradient-to-r from-paleta-100 to-paleta-200 min-h-screen overflow-y-hidden">
      <div className="relative isolate h-[90dvh] px-6 pt-14 lg:px-8 flex justify-center items-center flex-col">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center flex flex-col justify-center items-center">
            <img src={logo} alt='logo' className="h-10dvh w-80"/>
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-paleta-500 sm:text-7xl">
              Bem-Vindo a Libris!
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-paleta-400 sm:text-xl/8">
              Uma plataforma desenvolvida para facilitar a busca e a exploração de livros, oferecendo acesso rápido e intuitivo a uma ampla variedade de títulos.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/books"
              
                className="rounded-md bg-paleta-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-paleta-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Comece aqui
              </Link>
              <a className="text-sm/6 font-semibold text-gray-900">
                Sobre Nós <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home