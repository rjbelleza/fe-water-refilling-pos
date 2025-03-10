import back from "../assets/icons/back.png";
import { Link } from "react-router-dom";

const Signup = () => {

    return (
        <div className="h-screen w-screen bg-[url('../images/water-bg-2.jpg')] bg-center bg-cover flex justify-center items-center">
            <Link to="/">
                <img src={back} className="h-[40px] w-[40px] fixed left-5 top-5" />
            </Link>
            <div className="h-[440px] w-[700px] rounded-md flex flex-col p-[30px] bg-secondary">
                <h1 className="text-[20px] font-bold text-primary mb-[30px]">Create Account</h1>
                <form className="w-full flex justify-around flex-wrap gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-medium ml-[5px]">Full name*</label>
                        <input type="text" 
                               className="h-[35px] w-[250px] bg-white rounded-md border-2 border-primary 
                                          shadow-[0px_3px_3px_gray] p-3 text-[13px]" 
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-medium ml-[5px]">User name*</label>
                        <input type="text" 
                               className="h-[35px] w-[250px] bg-white rounded-md border-2 border-primary 
                                          shadow-[0px_3px_3px_gray] p-3 text-[13px]" 
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-medium ml-[5px]">Email*</label>
                        <input type="text" 
                               className="h-[35px] w-[250px] bg-white rounded-md border-2 border-primary 
                                          shadow-[0px_3px_3px_gray] p-3 text-[13px]" 
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-medium ml-[5px]">Contact No.*</label>
                        <input type="text" 
                               className="h-[35px] w-[250px] bg-white rounded-md border-2 border-primary 
                                          shadow-[0px_3px_3px_gray] p-3 text-[13px]" 
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-medium ml-[5px]">Password*</label>
                        <input type="text" 
                               className="h-[35px] w-[250px] bg-white rounded-md border-2 border-primary 
                                          shadow-[0px_3px_3px_gray] p-3 text-[13px]" 
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-medium ml-[5px]">Confirm Password*</label>
                        <input type="text" 
                               className="h-[35px] w-[250px] bg-white rounded-md border-2 border-primary 
                                          shadow-[0px_3px_3px_gray] p-3 text-[13px]" 
                        />
                    </div>
                    <button type="submit" 
                            className="h-[45px] shadow-[0px_3px_5px_black] w-3/6 rounded-lg mt-[15px] 
                                     text-white font-bold bg-primary cursor-pointer hover:bg-primary-500 transition-all ease-in-out"
                    >SIGN UP</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
