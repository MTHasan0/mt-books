import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";


const Book = ({ book }) => {

    const { bookName, author, rating, category, tags, image, bookId } = book;
    
    return (
        <div>
            <Link to={`/book/${bookId}`}>
                <button>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 py-10 bg-slate-100">
                            <img src={image} alt="" className="rounded-xl max-w-sm" />
                        </figure>
                        <div className="card-body text-start">
                            <div className="flex gap-3 w-fit ">
                                {
                                    tags.map((tag, id=1) => <p key={id} className="btn text-green-500 font-bold">#{tag}</p>)
                                }
                            </div>
                            <h2 className="card-title">{bookName}</h2>
                            <p className="text-start font-semibold">By: {author}</p>
                            <hr></hr>

                            <div className="flex">
                                <p>{category}</p>
                                <span className="flex items-center gap-2"><FaStar/><p>{rating}</p></span>
                            </div>
                        </div>
                    </div>
                </button>
            </Link>


        </div>
    );
};

export default Book;