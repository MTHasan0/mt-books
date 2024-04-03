import { NavLink } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero py-20 bg-base-200 rounded-xl">
                <div className="hero-content flex gap-14 flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/3dmD0xf/imgbin-the-dating-playbook-for-men-a-proven-7-step-system-to-go-from-single-to-the-woman-of-your-dre.png" className="rounded-lg max-w-sm" />
                    <div className="flex flex-col space-y-6">
                        <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                        <NavLink to={'/listed'}><button className="p-3 rounded-md text-lg font-bold text-white bg-[#23be0a]">View The List</button></NavLink>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;