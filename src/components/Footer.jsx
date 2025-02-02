import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter, BsTwitterX } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section class="bg-paleta-300">
        <div class="max-w-screen-xl px-4 py-10 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <div class="flex justify-center items-center mt-8 space-x-6">
                <a href="#" class="text-paleta-200 hover:text-paleta-100">
                    <span class="sr-only">Facebook</span>
                    <BsFacebook size={20}/>
                </a>
                <a href="#" class="text-paleta-200 hover:text-paleta-100">
                    <span class="sr-only">Instagram</span>
                    <BsInstagram size={20}/>
                </a>
                <a href="#" class="text-paleta-200 hover:text-paleta-100">
                    <span class="sr-only">Twitter</span>
                    <BsTwitterX size={20}/>
                </a>
                <a href="#" class="text-paleta-200 hover:text-paleta-100">
                    <span class="sr-only">GitHub</span>
                    <BsGithub size={20}/>
                </a>
            </div>
            <p class="mt-8 text-md leading-6 text-center text-paleta-100">
                ©2024 Libris. Todos os direitos reservados.
            </p>
        </div>
    </section>
  )
}

export default Footer