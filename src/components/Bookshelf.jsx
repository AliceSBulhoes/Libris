import { useState } from 'react';
import { TbBook } from 'react-icons/tb';
import SearchBar from './SearchBar';
import request from 'superagent';

const Bookshelf = () => {
    const [books, setBooks] = useState([]);
    const [searchField, setSearchField] = useState('');

    const handleSearch = (e) => {
        console.log(e.target.value)
        setSearchField(e.target.value);
    };

    const searchBook = (e) => {
        e.preventDefault();
        request
            .get(`https://www.googleapis.com/books/v1/volumes?q=${searchField}`)
            .then((data) => {
                console.log(data)
            })

    }

    return (
        <div className='p-8 bg-paleta-200 min-h-screen flex-1 flex flex-col gap-6'>
            <div className='flex justify-start items-center gap-2'>
                <TbBook size={30} color='#402313'/>
                <h1 className='text-2xl font-bold text-paleta-500 uppercase'>Bookshelf</h1>
            </div>
            <SearchBar searchBook={searchBook} handleSearch={handleSearch}/>
        </div>
    );
};

export default Bookshelf;
