import settings from "../assets/icons/settings2.png";
import Menu from "../components/Menu";

const Sidemenu = ({user, label}) => {

    return (
        <div className="h-full w-[250px] bg-secondary rounded-tr-lg p-[15px] fixed left-0">
            <div className="flex flex-col w-full h-[35%] rounded-tr-lg">
                <div className="flex justify-between w-full mb-2">
                    <p className="text-[14px] font-medium text-primary">Profile</p>
                    <img src={settings} className="h-[20px] w-[20px] cursor-pointer" />
                </div>
                <div className="h-[1px] w-full bg-white opacity-40 mb-5"></div>
                {user.map((user) => (
                    <div key={user.id}>
                        <p className="text-center font-medium text-[17px] mb-2 text-primary">{user.name}</p>
                        <p className="text-center text-[13px] mb-5 text-primary">{user.email}</p>
                        <p className="text-center text-[14px] font-medium text-white">{user.role.toUpperCase()}</p>
                    </div>
                ))}
                <div className="h-[2px] w-full bg-white opacity-40 mt-5"></div>
            </div>
            <div className="flex flex-col gap-[10px] w-full p-[10px]">
                <Menu menuLabel={label} />
            </div>
        </div>
    );
}

export default Sidemenu;
