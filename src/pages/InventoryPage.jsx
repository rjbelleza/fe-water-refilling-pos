import Header from "../layouts/Header";
import Sidemenu from "../layouts/Sidemenu";
import { label } from "./AdminDashboard";
import { user } from "./LoginPage";
import Breadcrumb from "../components/Breadcrumb";
import { useLocation } from "react-router-dom";

const Inventory = () => {
    const location = useLocation();

    const sampleData = [
        {id: 1, product: '5-Gallon Bottle', stock: '100', type: 'container', price: '30.00'},
        {id: 2, product: '5-Gallon Bottle', stock: '100', type: 'container', price: '30.00'},
        {id: 3, product: '5-Gallon Bottle', stock: '100', type: 'container', price: '30.00'},
    ];

    const menu = () => {
        if(location.pathname === "/inventory") {
            return "INVENTORY";
        }
    }

    return (
        <div className="flex flex-col h-screen w-screen">
            <Header />
            <div className="h-full w-full mt-[60px]">
                <Sidemenu user={user} label={label} />
                <div className="flex flex-col gap-3 h-full ml-[270px] mr-[15px]">
                    <Breadcrumb currentMenu={menu()} />
                    <div className="h-full w-full bg-secondary mt-[70px] rounded-md">
                        <div className="h-[70px] w-full bg-primary rounded-t-md grid grid-cols-5 p-[25px] 
                                      text-white text-center font-medium mb-2">
                            <p>Product</p>
                            <p>Stock</p>
                            <p>Type</p>
                            <p>Price</p>
                            <p>Action</p>
                        </div>
                        {sampleData.map((e) => (
                            <div key={e.id} 
                                 className="w-full bg-sky grid grid-cols-5 text-center p-[4] border-b-[1px]">
                                <p className="">{e.product}</p>
                                <p>{e.stock}</p>
                                <p>{e.type}</p>
                                <p>P{e.price}</p>
                                <button className="h-[50px] w-[70px] bg-primary-500">Add</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inventory;
