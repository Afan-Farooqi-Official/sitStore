import { MoveRight } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

const Register = () => {

    const navigate = useNavigate();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = () => {
        navigate('/')
    }

    return (
        <div className="container mx-auto p-[80px]">
            <div className="max-w-[550px] w-full min-h-[382px] mx-auto flex items-center justify-center flex-col rounded-lg border-[1px] border-[#9a9caa]">
                <h3 className="text-xl font-inter font-[#272343] font-semibold mb-5 capiatlize">Register</h3>

                <form action="#" onSubmit={submitHandler} className="flex flex-col items-center gap-4 my-4 w-full px-4">
                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Your Name" className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5" />
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5" />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5" />
                    <button type="submit" className="w-full h-[50px] bg-[#007580] rounded-lg pl-3.5 text-base text-white font-semibold font-inter capitalize flex items-center justify-center gap-2.5 
                    hover:bg-[#029fae] transition-all duration-300 ease-in-out cursor-pointer">
                        Register <MoveRight />
                    </button>
                </form>
                <p className="text-base text-[#272343] font-normal font-inter flex items-center justify-center gap-2.5 mt-4
                ">Have an account? <Link to="/auth/login" className="hover:text-[#007580] transition-all duration-300 ease-in-out cursor-pointer"
                >Login</Link></p>
            </div>
        </div>
    );
};

export default Register;