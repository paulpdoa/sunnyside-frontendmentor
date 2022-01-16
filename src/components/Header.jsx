import { BsArrowDown } from 'react-icons/bs';
import Navbar from './Navbar';

const Header = () => {
    return (
        <>
            <Navbar />
            <div className="center-content header-bg">
                <div className="fit-content">
                    <header>
                        <h1>We are creatives</h1>
                        <div className="down-container">
                            <span className="header-down bounce"><BsArrowDown /></span>
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
}

export default Header
