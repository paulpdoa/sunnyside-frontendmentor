import { ReactComponent as Logo} from '../assets/logo.svg';
import { ReactComponent as Burger } from '../assets/icon-hamburger.svg';
import { useState } from 'react';

const Navbar = () => {

    const [menu,setMenu] = useState(false);

    return (
        <div className="center-content nav_class">
            <div className="fit-content">
                <nav>
                    <div className="logo">
                        <Logo />
                    </div>
                    <ul className="nav-buttons">
                        <li>About</li>
                        <li>Services</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                    <ul className="nav-buttons-mobile" onClick={() => setMenu(!menu)} className="burger-menu"><Burger /></ul>
                </nav>
            </div>
            { menu && 
                <>
                    <div className="sharp-edge"></div>
                    <div className="mobile-btns">
                        <li>About</li>
                        <li>Services</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </div>
                </>
            }
        </div>
    )
}

export default Navbar
