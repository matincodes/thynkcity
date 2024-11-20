import { useState } from "react";
import MobileLogo from "../../assets/images/mobile-logo.svg";
import MenuOpen from "../../assets/icons/menu-icon.svg";

import { AiOutlineClose } from "react-icons/ai";


const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return ( 
        <header className="bg-darkGray">
            <nav className="flex justify-between items-center px-6 py-3">
                <div>
                    <img src={MobileLogo} alt="Mobile Logo" />
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
            </nav>
        </header>
     );
}
 
export default Header;