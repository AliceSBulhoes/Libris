import BookCard from './BookCard'

const BookList = ({ books }) => {
  return (
    <div className='flex flex-wrap gap-10 justify-center'>
        {
            books.map((book, i) => {
                return <BookCard key={i} book={book}/>
            })
        }
    </div>
  )
}

export default BookList