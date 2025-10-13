import { MoveRight } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandle = () => {
        // e.preventDefault();
        // console.log('hello')
        navigate('/')
    }

    return (
        <div className="container mx-auto p-[80px]">
            <div className="max-w-[550px] w-full min-h-[382px] mx-auto flex items-center justify-center flex-col rounded-lg border-[1px] border-[#9a9caa]">
                <h3 className="text-xl font-inter text-[#272343] font-semibold mb-5 capitalize">Login</h3>

                <form action="#" onSubmit={submitHandle} className="flex flex-col items-center gap-4 my-4 w-full px-4">
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5" />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5" />
                    <button type="submit" className="w-full h-[50px] bg-[#007580] rounded-lg pl-3.5 text-base text-white font-semibold font-inter capitalize flex items-center justify-center gap-2.5 
                    hover:bg-[#029fae] transition-all duration-300 ease-in-out cursor-pointer">
                        Login <MoveRight />
                    </button>
                </form>
                <p className="text-base text-[#272343] font-normal font-inter flex items-center justify-center gap-2.5 mt-4
                ">Don't have account? <Link to="/auth/register" className="hover:text-[#007580] transition-all duration-300 ease-in-out cursor-pointer"
                >Register</Link></p>
            </div>
        </div>
    );
};

export default Login;