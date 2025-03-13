import Header from "../layouts/Header";
import Sidemenu from "../layouts/Sidemenu";
import { label } from "./AdminDashboard";
import { user } from "./LoginPage";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const Reports = () => {
    const location = useLocation();

    const menu = () => {
        if(location.pathname === "/reports") {
            return "REPORTS";
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

export default Reports;
