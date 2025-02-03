// Importando icones
import { BsFacebook, BsGithub, BsInstagram, BsTwitterX } from 'react-icons/bs'

const Footer = () => {
  return (
    <section className="bg-paleta-300">
        <div className="max-w-screen-xl px-4 py-10 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            {/* Div das redes sociais */}
            <div className="flex justify-center items-center mt-8 space-x-6">
                {/* Facebook */}
                <a href="#" className="text-paleta-200 hover:text-paleta-100">
                    <span className="sr-only">Facebook</span>
                    <BsFacebook size={20}/>
                </a>
                {/* Instagram */}
                <a href="#" className="text-paleta-200 hover:text-paleta-100">
                    <span className="sr-only">Instagram</span>
                    <BsInstagram size={20}/>
                </a>
                {/* Twitter/X */}
                <a href="#" className="text-paleta-200 hover:text-paleta-100">
                    <span className="sr-only">Twitter</span>
                    <BsTwitterX size={20}/>
                </a>
                {/* Github */}
                <a href="#" className="text-paleta-200 hover:text-paleta-100">
                    <span className="sr-only">GitHub</span>
                    <BsGithub size={20}/>
                </a>
            </div>
            {/* Texto de direitos autorais */}
            <p className="mt-8 text-md leading-6 text-center text-paleta-100">
                ©2024 Libris. Todos os direitos reservados.
            </p>
        </div>
    </section>
  )
}

export default Footer