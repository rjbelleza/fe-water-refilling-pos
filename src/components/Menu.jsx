import { Link } from "react-router-dom";

const Menu = ({menuLabel}) => {

    return (
        <>
            {menuLabel.map((label, index) => (
                <Link key={index} to={label.path} >
                    <button className="h-[40px] w-full bg-sky rounded-lg cursor-pointer hover:bg-primary-500 
                                       hover:text-white transition-all ease-in-out text-[14px] font-medium"
                    >{label.menu}
                </button>
                </Link>
            ))}
        </> 
    );
}

export default Menu;
