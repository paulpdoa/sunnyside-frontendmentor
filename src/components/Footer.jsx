import { ReactComponent as Facebook } from  '../assets/icon-facebook.svg';
import { ReactComponent as Instagram } from  '../assets/icon-instagram.svg';
import { ReactComponent as Pinterest } from  '../assets/icon-pinterest.svg';
import { ReactComponent as Twitter } from  '../assets/icon-twitter.svg';

const Footer = () => {
    return (
        <div className="center-container footer-bg">
            <div className="fit-content center-footer">
                <footer>
                    <span className="footer-title">sunnyside</span>
                    <ul>
                        <li>About</li>
                        <li>Services</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                    <ul className="social-media">
                        <li><Facebook /></li>
                        <li><Instagram /></li>
                        <li><Twitter /></li>
                        <li><Pinterest /></li>
                    </ul>
                    <p className="credits">2022 Paul Andres Frontend Mentor Sunnyside Challenge</p>
                </footer>
            </div>            
        </div>
    )
}

export default Footer
