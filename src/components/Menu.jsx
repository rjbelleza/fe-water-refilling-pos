import { Link, useLocation } from "react-router-dom";

const Menu = ({menuLabel}) => {
    const location = useLocation();

    return (
        <>
            {menuLabel.map((label, index) => (
                <Link key={index} to={label.path} >
                    <button 
                        className={`h-[40px] w-full rounded-lg cursor-pointer hover:bg-primary-500 
                                  hover:text-white transition-all ease-in-out text-[14px] font-medium 
                                    ${location.pathname === label.path ? "bg-primary-500 text-white" : "bg-sky"}`}
                    >{label.menu}
                </button>
                </Link>
            ))}
        </> 
    );
}

export default Menu;
