import Header from "../layouts/Header";
import Sidemenu from "../layouts/Sidemenu";
import Breadcrumb from "../components/Breadcrumb";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";

const AdminDashboard = () => {
    const location = useLocation();
    const user = [{id: 0, name: "Jane Doe", email: "jane@example.com", role: "administrator"}];
    const sales = [{category: "Sales Revenue", value: "P70, 000.00", sub1: "Last 30 Days"}];
    const orders = [{category: "Total Orders", value: "350", sub1: "In Store: 200", sub2: "Deliveries: 150"}];
    const inventoryLevel = [{category: "Inventory Level", value: "Low Stock", sub1: "Stock: 50", sub2: "5-Gallon Bottles"}];
    const delivery = [{category: "Delivery Performance", value: "93%", sub1: "Delayed Deliveries: 10", sub2: "One-Time Deliveries: 140"}];
    const product = [{category: "Best Selling Product", value: "5-Gallon Refill", sub1: "Sold: 250", sub2: "Revenue: P50, 000.00"}];

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
                <div className="flex flex-col gap-5 w-full pr-[10px]">
                    <Breadcrumb currentMenu={menu()} />
                    <div className="flex gap-5 flex-wrap">
                        <Card content={sales} />
                        <Card content={orders} />
                        <Card content={inventoryLevel} />
                        <Card content={product} />
                        <Card content={delivery} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
