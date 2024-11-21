import { useState } from "react";
import MobileLogo from "../../assets/images/mobile-logo.svg";
import MenuOpen from "../../assets/icons/menu-icon.svg";
import DesktopLogo from "../../assets/images/desktop-logo.svg";
import ArrowDown from "../../assets/icons/arrow-down.svg";
import ArrowUp from "../../assets/icons/arrow-up.svg";

import { AiOutlineClose } from "react-icons/ai";
import { Link } from "@tanstack/react-router";


const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdown, setDropdown] = useState("");

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const toggleDropdown = (name) => {
        setDropdown(dropdown === name ? "" : name)
    }

    return ( 
        <header className={`my-auto bg-darkGray text-textGray font-inter text-base transition-all duration-300 h-auto py-2.5 md:py-[18px] border-b-2 border-white/10`}>
            <nav className="flex justify-between items-center px-6 md:px-28">
                <div>
                    <img 
                        src={MobileLogo} 
                        alt="Mobile Logo" 
                        className="md:hidden"
                    />

                    <img 
                        src={DesktopLogo} 
                        alt="Mobile Logo" 
                        className="hidden md:block md:pb-1"
                    />
                </div>

                 {/* Hamburger Menu (Mobile Only) */}
                <div className="md:hidden">
                    {menuOpen ? (
                    <AiOutlineClose
                        size={28}
                        className="cursor-pointer"
                        onClick={toggleMenu}
                    />
                    ) : (
                    <img 
                        src={MenuOpen} 
                        alt="Menu Bar"
                        className="cursor-pointer"
                        onClick={toggleMenu}
                     />
                    )}
                </div>

                {/*Desktop Navbar*/}
                <ul className={`${menuOpen ? "flex flex-col space-y-4" : "hidden" } md:flex md:flex-row md:space-x-14 w-full md:w-auto items-center`}>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About us
                        </Link>
                    </li>
                    {/*Services Dropdown*/}
                    <li>
                        <button className="flex items-center gap-2" onClick={() => toggleDropdown("services")}>
                            Services{" "}
                            <img src={dropdown === "services" ? ArrowUp : ArrowDown} alt="Arrow Up / Down"/>
                        </button>
                    </li>

                    {/*Programs / Products Dropdown*/}
                    <li>
                        <button className="flex items-center gap-2" onClick={() => toggleDropdown("programs")}>
                            Programs / Products{" "}
                            <img src={dropdown === "programs" ? ArrowUp : ArrowDown} alt="Arrow Up / Down"/>
                        </button>
                    </li>
                    <li>
                        <Link to="/careers">
                            Careers
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog">
                            Blog
                        </Link>
                    </li>
                </ul>

                <div className="bg-buttonBrown hidden md:flex justify-center items-center text-white rounded-full px-5 py-2.5 text-center">
                    <Link to="/contact">
                        Contact us
                    </Link>
                </div>
            </nav>
        </header>
     );
}
 
export default Header;