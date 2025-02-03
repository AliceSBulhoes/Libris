// Importando dependencias
import { useEffect, useState } from "react";
// Importando funções
import { formatDate } from "../../utils/formatUtils";

const BookCard = ({ book }) => {

    // Usando o useState para manter uma variável
    const [data, setData] = useState("");

    useEffect(() => {
        // Caso haja data de publicação
        if (book?.volumeInfo?.publishedDate) {
            // Ele salva na variável data já formatada
            setData(formatDate(book.volumeInfo.publishedDate));
        } else {
            // Se não, não a data de publicação disponível
            setData("Data não disponível");
        }
        // Atualiza a cada vez que a data é mudada
    }, [book?.volumeInfo?.publishedDate]); 

    // Não carrega o card, caso não haja imagem disponível
    if (!book?.volumeInfo?.imageLinks?.thumbnail) {
        return null;
    }

    return (
        <div className='flex flex-col justify-center items-center w-60 gap-2 p-5 border-5 bg-paleta-400 border-paleta-500 rounded-sm overflow-hidden'>
            {/* Imagem do Livro */}
            <img 
                className="w-40 rounded-sm border-2 border-paleta-100" 
                src={book.volumeInfo.imageLinks.thumbnail} 
                alt={book.volumeInfo.title || "Sem título"} 
            />
            {/* Container de Info */}
            <div className='text-center text-paleta-200'>
                <h2 className='font-bold'>{book.volumeInfo.title}</h2>
                <h3>{book.volumeInfo.authors?.join(", ") || "Autor desconhecido"}</h3>
                <p>{data}</p>
            </div>
        </div>
    );
};

export default BookCard;
