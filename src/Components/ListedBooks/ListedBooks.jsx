import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getSavedReadBookDetails, getWishListDetails } from "../../Utility/LocalStorage";
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleSharp } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";



const ListedBooks = () => {

    const [savedBookRead, setSavedBookRead] = useState([])

    const [saveWishBook, setSaveWishBook] = useState([]);

    const books = useLoaderData();

    useEffect(() => {
        const storedReadBook = getSavedReadBookDetails();
        if (books.length > 0) {
            const addedBookRead = books.filter(book => storedReadBook.includes(book.bookId));
            setSavedBookRead(addedBookRead);
        }
    }, [books])

    useEffect(() => {
        const storedWishBook = getWishListDetails();
        if (books.length > 0) {
            const addedWishBook = books.filter(book => storedWishBook.includes(book.bookId));
            setSaveWishBook(addedWishBook);
        }
    }, [books])

    return (
        <div>

            <div className="flex bg-white text-lg font-semibold">
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab bg-gray-300" aria-label="Read Book" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        {
                            savedBookRead.map(book =>
                                <span className="flex gap-10 border m-4" key={book.bookId}>
                                    <div className="">
                                        <div className="flex gap-10 items-center">
                                            <div className="bg-base-200 m-4 rounded-xl">
                                                <img className="max-w-xs p-6 rounded-2xl" src={book.image} />
                                            </div>
                                            <div className="space-y-4">
                                                <h1 className="text-3xl font-bold">{book.bookName}</h1>
                                                <p className="font-semibold">By: {book.author}</p>
                                                <div className="flex gap-4 items-center">
                                                    <p className="font-bold">Tag</p>
                                                    {
                                                        book.tags.map(book => <button key={book.bookId} className="btn text-green-400">#{book}</button>)
                                                    }
                                                    <CiLocationOn />
                                                    <p>  Year of Publishing: {book.yearOfPublishing}</p>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <IoPeopleSharp />
                                                    <p className="text-gray-500"> Publisher: {book.publisher}</p>
                                                    <FaFileAlt />
                                                    <p>Page {book.totalPages}</p>
                                                </div>
                                                <hr></hr>
                                                <div className="flex gap-2">
                                                    <button className="btn rounded-3xl border bg-blue-100 text-blue-500">Category: {book.category}</button>
                                                    <button className="btn rounded-3xl border bg-orange-100 text-orange-500">Rating: {book.rating}</button>
                                                    <Link to={`/book/${book.bookId}`}><button className="btn rounded-3xl border bg-[#23be0a] text-white font-semibold">View Details</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>)
                        }
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab bg-gray-300" aria-label="Wishlist Book"  />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        {
                            saveWishBook.map(book =>
                                <span className="flex gap-10 border m-4" key={book.bookId}>
                                    <div className="">
                                        <div className="flex gap-10 items-center">
                                            <div className="bg-base-200 m-4 rounded-xl">
                                                <img className="max-w-xs p-6 rounded-2xl" src={book.image} />
                                            </div>
                                            <div className="space-y-4">
                                                <h1 className="text-3xl font-bold">{book.bookName}</h1>
                                                <p className="font-semibold">By: {book.author}</p>
                                                <div className="flex gap-4 items-center">
                                                    <p className="font-bold">Tag</p>
                                                    {
                                                        book.tags.map(book => <button key={book.bookId} className="btn text-green-400">#{book}</button>)
                                                    }
                                                    <CiLocationOn />
                                                    <p>  Year of Publishing: {book.yearOfPublishing}</p>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <IoPeopleSharp />
                                                    <p className="text-gray-500"> Publisher: {book.publisher}</p>
                                                    <FaFileAlt />
                                                    <p>Page {book.totalPages}</p>
                                                </div>
                                                <hr></hr>
                                                <div className="flex gap-2">
                                                    <button className="btn rounded-3xl border bg-blue-100 text-blue-500">Category: {book.category}</button>
                                                    <button className="btn rounded-3xl border bg-orange-100 text-orange-500">Rating: {book.rating}</button>
                                                    <Link to={`/book/${book.bookId}`}><button className="btn rounded-3xl border bg-[#23be0a] text-white font-semibold">View Details</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>)
                        }

                    </div>

                </div>
            </div>



        </div>
    );
};

export default ListedBooks;