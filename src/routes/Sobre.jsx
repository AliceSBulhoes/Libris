// Importando imagem
import image_sobre from '../assets/bookshelf.jpg'

const Sobre = () => {
  return (
    <div className="bg-gradient-to-r from-paleta-100 to-paleta-200 w-full min-h-screen flex justify-center items-center">
        {/* Container Sobre */}
        <div className="border-y-paleta-500 border-x-paleta-400 border-10 h-[80dvh] w-[70dvw] flex md:p-20  p-5 justify-center items-center gap-2">
            {/* Container Esquerdo */}
            <div className='w-7xl flex flex-col md:gap-10 gap-2 justify-center items-center md:items-start md:justify-start '>
                <h1 className="lg:text-5xl text-3xl text-paleta-500 uppercase font-bold text-center">Sobre Nós</h1>
                <p className='max-w-xl lg:text-xl md:text-md text-sm text-paleta-400 text-justify'>O <strong>Libris</strong> é uma plataforma desenvolvida para oferecer uma experiência <strong>prática</strong> e <strong>intuitiva</strong> na busca por <strong>livros</strong>. Utilizando a <strong>Google Books API</strong>, nosso <strong>objetivo</strong> é proporcionar acesso rápido a uma ampla <strong>variedade</strong> de títulos, facilitando a descoberta de novas obras e autores. Este projeto está em <strong>constante evolução</strong>, com aprimoramentos planejados para tornar a navegação ainda mais eficiente e interativa.</p>
            </div>
            {/* Container Direito */}
            <div className='w-3xl h-full border-y-paleta-500 border-x-paleta-400 border-10 hidden lg:block'>
                <img src={image_sobre} alt="sobre iamgem" className='h-full w-full sepia-50' />
            </div>
        </div>
    </div>
  )
}

export default Sobre