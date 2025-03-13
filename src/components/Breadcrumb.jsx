import dashboardIcon from "../assets/icons/breadcrumb-icon.png";
import arrowNext from "../assets/icons/arrow-next.png";

const Breadcrumb = ({currentMenu}) => {

    return (
        <div className="flex justify-start items-center p-[10px] w-full h-[50px] 
                      bg-secondary rounded-md fixed shadow-[0px_3px_5px_gray]"
        >
            <img src={dashboardIcon} className="h-[25px] ml-[40px] mr-[5px]" />
            <h1 className="text-primary font-medium text-[15px]">{currentMenu}</h1>
            <img src={arrowNext} className="h-[25px] " />
        </div>
    );
}

export default Breadcrumb;
