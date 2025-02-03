// Importando dependencias
import { useState } from 'react';
import request from 'superagent';
// Importando icones do react
import { TbBook } from 'react-icons/tb';
// Importando componentes
import SearchBar from '../../components/SearchBar';
import BookList from '../../components/bookshelf/BookList';

const Bookshelf = () => {

    // Usando useState para mudar estados
    const [books, setBooks] = useState([]);
    const [searchField, setSearchField] = useState('');

    // Função que cuida da pesquisa
    const handleSearch = (e) => {
        // Log para ver o funcionamento
        console.log(e.target.value)

        // Altera o valor a cada vez que o usuário escreve
        // na barra de pesquisa
        setSearchField(e.target.value);
    };

    // Função para fazer requisição a API do Google
    const searchBook = (e) => {
        // Impede a página de carregar ao pesquisar
        e.preventDefault();

        // Utiliza o request do superagent para requisitar o que
        // foi solicitado pelo usuário
        request
            .get(`https://www.googleapis.com/books/v1/volumes?q=${searchField}`)
            .then((data) => {
                // Adicionando os livros pesquisados na variável books
                console.log(books) 
                setBooks(data['body']['items'])
                
            })

    }

    return (
        <div className='p-8 bg-paleta-200 min-h-screen flex-1 flex flex-col gap-6 overflow-x-hidden'>
            {/* Título da Página */}
            <div className='flex justify-start items-center gap-2'>
                {/* Icone da Página */}
                <TbBook size={30} color='#402313'/>
                {/* Nome da Página */}
                <h1 className='text-2xl font-bold text-paleta-500 uppercase'>Bookshelf</h1>
            </div>
            {/* Componente da barra de pesquisa */}
            <SearchBar searchBook={searchBook} handleSearch={handleSearch}/>
            {/* Componente para os livros */}
            <BookList books={books} />
        </div>
    );
};

export default Bookshelf;
