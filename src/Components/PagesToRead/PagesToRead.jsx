import { useEffect, useState } from "react";
import { getSavedReadBookDetails } from "../../Utility/LocalStorage";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';


const PagesToRead = () => {


    const books = useLoaderData();
    const [readBook, setReadBook] = useState([]);

    const [bookId, bookName, totalPages] = readBook;

    useEffect(() => {
        const readBookData = getSavedReadBookDetails();
        if (books.length > 0) {
            const readBookList = books.filter(book => readBookData.includes(book.bookId));
            setReadBook(readBookList);
        }


    }, [books])


    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
    );

    const TriangleBar = (props) => {
        const {
            fill, x, y, width, height,
        } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    return (
        <div className="flex justify-center">
            {
                <BarChart key={bookId} width={1200} height={500} data={readBook}>
                    <XAxis dataKey="bookName" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="" />
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar></TriangleBar>} barSize={30} />
                </BarChart>
            }

        </div>
    );
};

export default PagesToRead;