import Header from "../layouts/Header";
import Sidemenu from "../layouts/Sidemenu";
import { user, label } from "./AdminDashboard";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const OrderHistory = () => {
    const location = useLocation();

    const menu = () => {
        if(location.pathname === "/order-history") {
            return "ORDER HISTORY";
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

export default OrderHistory;
