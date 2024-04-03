import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {


    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])





    return (
        <div className="flex flex-col text-center items-center justify-center my-10">
            <h1 className="font-bold pb-10 text-4xl">Books</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>

        </div>
    );
};

export default Books;