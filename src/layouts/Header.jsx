import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="w-full h-[50px] bg-primary flex justify-between items-center fixed top-0 mb-2">
            <h1 className="text-white font-medium text-[20px] ml-15 flex gap-2 cursor-pointer">Aqua <p>Springs</p></h1>
            <Link to="/">
                <p className="text-white mr-13">Logout</p>
            </Link>
        </div>
    );
}

export default Header;
