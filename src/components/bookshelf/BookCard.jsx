import { useEffect, useState } from "react";
import { formatDate } from "../../utils/formatUtils";

const BookCard = ({ book }) => {
    const [data, setData] = useState("");

    useEffect(() => {
        if (book?.volumeInfo?.publishedDate) {
            setData(formatDate(book.volumeInfo.publishedDate));
        } else {
            setData("Data não disponível");
        }
    }, [book?.volumeInfo?.publishedDate]); 

    if (!book?.volumeInfo?.imageLinks?.thumbnail) {
        return null;
    }

    return (
        <div className='flex flex-col justify-center items-center w-60 gap-2 p-5 border-5 bg-paleta-400 border-paleta-500 rounded-sm overflow-hidden'>
            <img 
                className="w-40 rounded-sm border-2 border-paleta-100" 
                src={book.volumeInfo.imageLinks.thumbnail} 
                alt={book.volumeInfo.title || "Sem título"} 
            />
            <div className='text-center text-paleta-200'>
                <h2 className='font-bold'>{book.volumeInfo.title}</h2>
                <h3>{book.volumeInfo.authors?.join(", ") || "Autor desconhecido"}</h3>
                <p>{data}</p>
            </div>
        </div>
    );
};

export default BookCard;
