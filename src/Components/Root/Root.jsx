import { Outlet } from "react-router-dom";
import Header from "../Header/Header";



const Root = () => {
    return (
        <div className="w-[90%] m-auto">
            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default Root;