import { Armchair, Banknote, Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react";
import { Link, NavLink } from "react-router";


const Footer = () => {
    return (
        <footer>

            <div className="footer_top mx-h-[290px] border-t border-b border-[#e1e3e5] pt-[50px] pb-[50px]">
                <div className="container mx-auto">

                    <div className="grid grid-cols-4">
                        <div className="mt-7">
                            {/* logo wrapper  */}
                            <div className="logo_wrapper">
                                <Link to='/' className="text-3xl text-black font-inter font-medium flex items-center gap-2">
                                <Armchair size='2rem' color="#029fae" /> sitStore </Link>
                            </div>
                        
                            <p className="text-2x1 text-[#636270] font-inter mt-5 font-normal max-w-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem debitis sit repellat explicabo incidunt, sed animi ullam esse magni ipsum iure nam rerum perspiciatis sequi tenetur inventore consequatur, fugit quasi?</p>

                            <div className="social_links flex items-center gap-4 mt-6">
                                <Link to='/' className="w-10 h-10 bg-[#007580] rounded-full flex items-center justify-center text-white hover:bg-[#029fae] transition-all duration-300 ease-in-out"><Instagram /></Link>
                                <Link to='/' className="w-10 h-10 bg-[#007580] rounded-full flex items-center justify-center text-white hover:bg-[#029fae] transition-all duration-300 ease-in-out"><Facebook /></Link>
                                <Link to='/' className="w-10 h-10 bg-[#007580] rounded-full flex items-center justify-center text-white hover:bg-[#029fae] transition-all duration-300 ease-in-out"><Twitter /></Link>
                                <Link to='/' className="w-10 h-10 bg-[#007580] rounded-full flex items-center justify-center text-white hover:bg-[#029fae] transition-all duration-300 ease-in-out"><Youtube /></Link>
                                <Link to='/' className="w-10 h-10 bg-[#007580] rounded-full flex items-center justify-center text-white hover:bg-[#029fae] transition-all duration-300 ease-in-out"><Mail /></Link>
                            </div>
                        </div>

                        <div className="footer_links mt-7">
                            <h3 className="text-xl text-[#9a9caa] font-inter font-normal uppercase">category</h3>
                            <ul className="space-y-2 mt-4">
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize hover:text-[#029fae] transition-all duration-300 ease-in-out cursor-pointer">Living Room Chairs</Link></li>
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize hover:text-[#029fae] transition-all duration-300 ease-in-out cursor-pointer">Dining & Kitchen Chairs</Link></li>
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize hover:text-[#029fae] transition-all duration-300 ease-in-out cursor-pointer">Office & Study Chairs</Link></li>
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize hover:text-[#029fae] transition-all duration-300 ease-in-out cursor-pointer">Outdoor & Patio Chairs</Link></li>
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize hover:text-[#029fae] transition-all duration-300 ease-in-out cursor-pointer">Specialty & Kids Chairs</Link></li>
                            </ul>
                        </div>

                        <div className="footer_links mt-7">
                            <h3 className="text-xl text-[#9a9caa] font-inter font-normal uppercase">support</h3>
                            <ul className="space-y-2 mt-4">
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize hover:text-[#029fae] transition-all duration-300 ease-in-out cursor-pointer">help & support</Link></li>
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize hover:text-[#029fae] transition-all duration-300 ease-in-out cursor-pointer">terms & conditions</Link></li>
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize hover:text-[#029fae] transition-all duration-300 ease-in-out cursor-pointer">privacy & policy</Link></li>
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize hover:text-[#029fae] transition-all duration-300 ease-in-out cursor-pointer">help</Link></li>
                            </ul>
                        </div>

                        <div className="newsletter mt-7">
                            <h3 className="text-xl text-[#9a9caa] font-inter font-normal uppercase">Newsletter</h3>
                            <form action="#" className="max-w-[400px] w-full mt-3 items-center gap-2 flex">
                                <input type="email" placeholder="write your email" className="max-w-[250px] w-full h-[40px] border-[#e1e3e5] border-[1px] rounded-lg pl-3" />
                                <button type="submit" className="text-base text-white font-semibold capaitalize w-[127px] h-[40px] rounded-lg bg-[#007580] cursor-pointer hover:bg-[#029fae] transition-all duration-300 ease-in-out"> Subscribe </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="footer_bottom w-full h-[75px] flex items-center justify-center">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-base text-[#9a9caa] font-normal font-inter">@ 2025 Afan-Farooqi-Official</p>    
                        </div>
                        <div className="flex items-center">
                            <p className="flex items-center gap-2 text-[#]">Bank Note <Banknote size='2rem' /> </p>    
                        </div>   
                    </div>
                </div>                
            </div>
        </footer>
    );
};

export default Footer;