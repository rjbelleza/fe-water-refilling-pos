import Header from "../layouts/Header";
import Sidemenu from "../layouts/Sidemenu";
import Breadcrumb from "../components/Breadcrumb";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import BarGraph from "../components/BarGraph";
import { user } from './LoginPage';

export const label = [
    {menu: "Dashboard", path: "/admin-dashboard"},
    {menu: "Inventory", path: "/inventory"},
    {menu: "Reports", path: "/reports"},
    {menu: "Order History", path: "/order-history"},
    {menu: "User/System", path: "/user-settings"}
];


const AdminDashboard = () => {
    const location = useLocation();

    const sampleData = [
        {category: "Sales Revenue", value: "P70, 000.00", sub1: "Last 30 Days", img: 'src/assets/icons/sales-icon.png'},
        {category: "Total Orders", value: "350", sub1: "In Store: 200", sub2: "Deliveries: 150", img: 'src/assets/icons/orders-icon.png'},
        {category: "Inventory Level", value: "Low Stock", sub1: "Stock: 50", sub2: "5-Gallon Bottles", img: 'src/assets/icons/inventory-icon.png'},
        {category: "Best Selling Product", value: "5-Gallon Refill", sub1: "Sold: 250", sub2: "Revenue: P50, 000.00", img: 'src/assets/icons/money-icon.png'}
    ];

    const menu = () => {
        if(location.pathname === "/admin-dashboard") {
            return "DASHBOARD"
        }
    };

    return (
        <div className="h-screen w-full flex flex-col">
            <Header />
            <div className="flex w-full h-full gap-3 mt-[60px]">
                <Sidemenu user={user} label={label} />
                <div className="flex flex-col gap-5 w-full ml-[270px]">
                    <Breadcrumb currentMenu={menu()} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-[70px] mr-[20px]">
                        <Card content={sampleData} />
                    </div>  
                    <div className="flex gap-4 h-full w-full p-4">
                        <BarGraph />
                        <div className="h-full w-[400px] rounded-sm bg-sky">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
