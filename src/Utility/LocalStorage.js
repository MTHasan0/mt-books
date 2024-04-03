

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const getSavedReadBookDetails = () => {
    const storedBookDetail = localStorage.getItem('read-book');
    if (storedBookDetail) {
        return JSON.parse(storedBookDetail);

    }

    return [];
}

const saveReadBookDetails = bookId => {
    const storedBookDetails = getSavedReadBookDetails();
    const readExists = storedBookDetails.find(id => id === bookId);
    if (!readExists) {
        storedBookDetails.push(bookId);
        localStorage.setItem('read-book', JSON.stringify(storedBookDetails));
        toast.success("Added to the read list");
    }
    else {
        toast.warning("Already added");
    }
}

const getWishListDetails = () => {
    const storedWishList = localStorage.getItem('wish-list');
    if (storedWishList) {
        return JSON.parse(storedWishList);
    }
    return [];
}

const saveGetWishLists = bookId => {
    const storedWishLists = getWishListDetails();
    const checkReadBook = getSavedReadBookDetails();
    const wishExists = storedWishLists.find(id => id === bookId);
    const checkReadBookExists = checkReadBook.find(id=>id===bookId);
    if (!wishExists && !checkReadBookExists) {
        storedWishLists.push(bookId);
        localStorage.setItem('wish-list', JSON.stringify(storedWishLists));
        toast.success("Added to the wish list");
    } else {
        toast.warning("Already added");
    }
}






export { getSavedReadBookDetails, saveReadBookDetails, getWishListDetails, saveGetWishLists }