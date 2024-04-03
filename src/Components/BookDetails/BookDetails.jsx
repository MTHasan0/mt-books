import { useLoaderData, useParams } from "react-router-dom";
import { saveGetWishLists, saveReadBookDetails } from "../../Utility/LocalStorage";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {

    const books = useLoaderData();
    console.log(books)

    const { bookId } = useParams();

    console.log(bookId);

    const idInt = parseInt(bookId);

    const book = books.find(book => book.bookId === idInt);

    const handleReadBook = () => {
        saveReadBookDetails(idInt);
        

    }

    const handleWishList = () =>{
        saveGetWishLists(idInt);
    }



    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col gap-5 lg:flex-row">
                    <div className="bg-slate-100 p-10 rounded-xl"><img src={image} className="max-w-md rounded-lg shadow-2xl" /></div>
                    <div>
                        <div className="space-y-3">
                            <h1 className="text-3xl font-bold">{bookName}</h1>
                            <p className="py-6 font-bold">By: {author}</p>
                            <hr></hr>
                            <p className=" font-bold">{category}</p>
                            <hr></hr>
                            <p className=""><span className="font-bold">Review: </span>{review}</p>
                            <p className=" flex items-center gap-5">Tag {tags.map(tag => <button className="btn text-green-600">#{tag}</button>)}</p>
                        </div>
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <div className="grid grid-cols-2 space-y-2">
                            <p>Number of Pages:</p>
                            <p className="font-bold">{totalPages}</p>
                            <p>Publisher:</p>
                            <p className="font-bold">{publisher}</p>
                            <p>Year of Publishing:</p>
                            <p className="font-bold">{yearOfPublishing}</p>
                            <p>Rating:</p>
                            <p className="font-bold">{rating}</p>
                        </div>


                        <div className="flex gap-4 mt-4">
                            <button onClick={handleReadBook} className="btn btn-outline">Read</button>
                            <button onClick={handleWishList} className="btn btn-info">WishList</button>
                        </div>
                    </div>
                </div>
                <ToastContainer></ToastContainer>

            </div>
            
        </div>
    );
};

export default BookDetails;