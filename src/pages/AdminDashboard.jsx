import Header from "../layouts/Header";
import Sidemenu from "../layouts/Sidemenu";
import Breadcrumb from "../components/Breadcrumb";
import { useLocation } from "react-router-dom";

const AdminDashboard = () => {
    const location = useLocation();
    const user = [{id: 0, name: "Jane Doe", email: "jane@example.com", role: "administrator"}];

    const menu = () => {
        if(location.pathname === "/admin-dashboard") {
            return "DASHBOARD"
        }
    };

    return (
        <div className="h-screen w-screen flex flex-col">
            <Header />
            <div className="flex w-full h-full gap-3">
                <Sidemenu user={user} />
                <Breadcrumb currentMenu={menu()} />
            </div>
        </div>
    );
}

export default AdminDashboard;
