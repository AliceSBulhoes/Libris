// Importando componente
import BookCard from './BookCard'

const BookList = ({ books }) => {
  return (
    // Container para os livros
    <div className='flex flex-wrap gap-10 justify-center'>
        {
            // Usando map para passar por cada item da
            // lista book
            books.map((book, i) => {
                // Para cada item da lista, existe um card
                // para um livro
                return <BookCard key={i} book={book}/>
            })
        }
    </div>
  )
}

export default BookList