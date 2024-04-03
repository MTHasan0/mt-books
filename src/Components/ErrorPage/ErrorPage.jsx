import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center gap-5 items-center min-h-screen">
            <p className=" text-3xl text-red-400">Page not found</p>
            <NavLink to={'/'}><button className="btn btn-outline">Back to Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;