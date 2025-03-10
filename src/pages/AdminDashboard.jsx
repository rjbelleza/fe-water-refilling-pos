import Header from "../layouts/Header";
import Sidemenu from "../layouts/Sidemenu";

const AdminDashboard = () => {
    const user = [{id: 0, name: "Jane Doe", email: "jane@example.com", role: "administrator"}];

    return (
        <div className="h-screen w-screen flex flex-col">
            <Header />
            <Sidemenu user={user} />
        </div>
    );
}

export default AdminDashboard;
