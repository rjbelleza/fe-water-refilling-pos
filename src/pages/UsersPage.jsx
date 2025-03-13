import Header from "../layouts/Header";
import Sidemenu from "../layouts/Sidemenu";
import { user, label } from "./AdminDashboard";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const UsersPage = () => {
    const location = useLocation();

    const menu = () => {
        if(location.pathname === "/user-settings") {
            return "USER / SYSTEM SETTINGS";
        }
    }

    return (
        <div className="flex flex-col h-screen w-screen">
            <Header />
            <div className="h-full w-full mt-[60px]">
                <Sidemenu user={user} label={label} />
                <div className="flex flex-col gap-5 w-full ml-[270px]">
                    <Breadcrumb currentMenu={menu()} />
                </div>
            </div>
        </div>
    );
}

export default UsersPage;
