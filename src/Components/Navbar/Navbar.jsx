
import { Armchair, Check, Heart, Info, Menu, Search, ShoppingCart, User } from "lucide-react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    return (
        <div>
            {/* navbar top */}
            <div className="navbar_top flex items-center justify-center bg-[#272343] h-[45px] w-full">
                <div className="lg:container flex justify-between items-center">
                    <p className="flex items-center text-sm font-inter font-normal text-white capitalize"><Check /> Free on all orders over $50</p>
                    <div className="navbar_right flex items-center gap-6">
                        <select defaultValue="Server location" className="bg-none h-[30px] w-[70px] text-sm font-inter font-normal capitalize text-white">
                            <option className="text-black" disabled={false}>eng</option>
                            <option className="text-black">urdu</option>
                        </select>

                        <button><Link className="text-sm text-white font-inter font-normal capitalize">Faqs</Link></button>
                        <button><Link className="flex items-center text-sm text-white font-inter font-normal capitalize"><Info />need help</Link></button>
                    </div>
                </div>
            </div>

            {/* navbar middle */}
            <div className="navbar_middle flex justify-center items-center bg-[#f0f2f3] w-full h-[60px]">
                <div className="lg:container grid grid-cols-3 items-center">
                    <div className="logo_wrapper">
                        <Link to='/' className="text-3xl text-black font-inter font-medium flex items-center gap-2">
                        <Armchair size='2rem' color="#029fae" /> sitStore </Link>
                    </div>

                    <div className="search_box">
                        <form action="#" className="max-w-96 h-[44px] relative">
                            <input type="search" placeholder="Search here..." className="max-w-[443px] w-full h-full bg-white rounded-lg pl-4" />
                            <button className="absolute to-50% right-4 translate-y-1/2"><Search size='22px' color="#272343" /></button>
                        </form>
                    </div>

                    {/* navbar middle right */}
                    <div className="navbar_middle_right pl-28 flex items-center gap-4">
                        <button className="btn capitalize">
                            <ShoppingCart />cart <div className="badge badge-sm bg-[#029fae]">5</div>
                        </button>
                        <button className="btn capitalize">
                            <Heart />
                        </button>

                        <div className="dropdown">
                          <div tabIndex={0} role="button" className="btn m-1"><User /></div>
                          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm">
                            <li><Link>Account</Link></li>
                            <li><Link>Logout</Link></li>
                          </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* navbar bottom */}
            <div className="navbar_bottom flex items-center justify-center w-full h-[75px] bg-white border-b-[1px] border-[#cac8e1]">
                <div className="lg:container flex items-center justify-between">

                    <div className="navbar_bottom_left flex items-center gap-8">

                        <div className="dropdown dropdown-start">
                            <div tabIndex={0} role="button" className="btn m-1 flex items-center gap-5 capitalize"><Menu /> all categories</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Living Room Chairs</a></li>
                                <li><a>Dining & Kitchen Chairs</a></li>
                                <li><a>Office & Study Chairs</a></li>
                                <li><a>Outdoor & Patio Chairs</a></li>
                                <li><a>Specialty & Kids Chairs</a></li>
                            </ul>
                        </div>

                        <nav className="flex items-center gap-8">
                        <NavLink to='/' className='text-sm text-[#029fae] font-inter font-medium capitalize hover:text-[#029fae] transition-all duration-300 ease-in-out cursor-pointer'>Home</NavLink>
                        <NavLink className='text-sm text-[#636270] font-inter font-medium capitalize hover:text-[#029fae] transition-all duration-300 ease-in-out cursor-pointer'>Shop</NavLink>
                        <NavLink className='text-sm text-[#636270] font-inter font-medium capitalize hover:text-[#029fae] transition-all duration-300 ease-in-out cursor-pointer'>Product</NavLink>
                        <NavLink className='text-sm text-[#636270] font-inter font-medium capitalize hover:text-[#029fae] transition-all duration-300 ease-in-out cursor-pointer'>Pages</NavLink>
                        <NavLink className='text-sm text-[#636270] font-inter font-medium capitalize hover:text-[#029fae] transition-all duration-300 ease-in-out cursor-pointer'>About</NavLink>
                        </nav>
                    </div>

                    <div className="navbar_bottom_right">
                        <p className="text-sm text-[#636270] font-inter font-normal capitalize">contact: <span className="text-[#272343]">(808)555-0111</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;