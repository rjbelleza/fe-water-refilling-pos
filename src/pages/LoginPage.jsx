import { useState } from "react";
import { useNavigate } from "react-router-dom";

{/* Sample user */}
export const user = [
    {name: "Jane Doe", email: "jane@example.com", username: "janedoe", password: "password", role: "administrator"}
];

const Login = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    {/* Handle user validation */}
    const handleValidate = (e) => {
        e.preventDefault();
        (email === user[0].email || username === user[0].username) && password === user[0].password 
        ? navigate("/admin-dashboard") 
        : setError(true); setMessage("Invalid credentials!");
    };

    return (
        <div className="h-screen w-screen bg-[url('../images/background.jpg')] backdrop-blur-lg bg-center bg-cover flex flex-col justify-center items-center">
            <div className="h-full w-full backdrop-blur-sm bg-white/10 flex justify-center items-center">

            {/* Auth container */}
            <div className="flex h-[450px] w-[780px] bg-white rounded-lg z-10 shadow-[4px_4px_7px_black]">

                {/* Signup button */}
                <div className="flex flex-col gap-3 items-center h-full w-1/2 bg-white p-[40px] rounded-tl-md rounded-bl-md">
                    <div className="h-[180px] w-[180px] bg-[url('../images/Aqua.jpg')] bg-center bg-cover"></div>

                    <div className="w-full text-center">
                        <p className="text-[14px] text-gray-400"><i>POS System</i></p>
                        <div className="h-[2px] w-full bg-secondary mb-10" />
                        <p className="text-[13px] text-primary mb-7">Don't have an account?</p>
                        <button className="bg-[#bde3ff] shadow-[0px_3px_3px_black] text-[#301E67] font-medium h-[40px] w-3/6 
                                             rounded-md cursor-pointer hover:bg-secondary-500 hover:text-white transition-all ease-in-out"
                                onClick={() => navigate("/signup")}
                        >Create Account</button>
                    </div>
                </div>

                {/* Signin */}
                <div className="flex flex-col h-full w-1/2 bg-[#bde3ff] rounded-tr-md rounded-br-md p-[30px] gap-8">
                    <h1 className="font-bold text-2xl text-[#301E67]">
                        Welcome back!
                    </h1>
                    <form className="flex flex-col gap-2 p-3 items-start" onSubmit={handleValidate}>
                        <label className="text-[13px]"> Email or Username* </label>
                        <input type="text" 
                               value={email}
                               onChange={(e) => {setEmail(e.target.value); setUsername(e.target.value);}} 
                               className="shadow-[0px_4px_3px_gray] h-10 w-full bg-white rounded-md mb-5 p-3 border-2 border-primary hover:border-black" />

                        <label className="text-[13px]"> Password* </label>
                        <input type="password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)} 
                               className="shadow-[0px_4px_3px_gray] h-10 w-full bg-white rounded-md mb-7 p-3 border-2 border-primary hover:border-black" />

                        <div className="flex w-full justify-between mb-5">
                            <div className="flex items-center justify-center gap-3">
                                <input type="checkbox" className="h-4 w-4 " />
                                <label className="text-[13px]">Remember me</label>
                            </div>
                            <div>
                                <a href="/" className="text-[12px]"><u>Forgot password?</u></a>
                            </div>
                        </div>

                        <button type="submit"
                                className="bg-[#301E67] shadow-[0px_3px_3px_black] text-white w-full h-[50px] 
                                             rounded-lg cursor-pointer hover:bg-primary-500 font-medium transition-all ease-in-out"
                        >LOGIN
                        </button>
                    </form>
                </div>
            </div>
            {error && 
                <div className="fixed bottom-5 w-50 z-10 left-1/2 opacity-90 -translate-x-1/2 bg-error text-white px-6 py-3 rounded-lg shadow-lg">
                    <p className="text-center text-white text-[13px]">{message}</p>
                </div> 
            }
            </div>
        </div>
    );
}

export default Login;
