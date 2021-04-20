import './footerstyle.css';
import logo from '/Cinema/cinema-react/src/images/logo.jpg';
import insta from './img/insta.png';
import fb from './img/fb.png';
import pt from './img/pt.png';
import tg from './img/tg.png';


function footer(){

    return(
        <footer className="footer">
            <div className="wrappers">
                <nav className="footer__menu">
                    <ul className="footer__menu-list">
                        <li className="footer__item">
                            <a href="#" className="footer__menu-link">About us</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__menu-link">Contact us</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__menu-link">Press</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__menu-link">FAQS</a>
                        </li>
                    </ul>
                </nav>
                <div className="footer__contacts">
                    <ul className="footer__contacts-list">
                        <li className="footer__item-img">
                            <a href="#" className="footer__contacrs-link">
                            <img className="insta" src={insta} alt="insta-img" />
                            </a>
                        </li>
                        <li className="footer__item-img">
                            <a href="#" className="footer__contacrs-link">
                            <img className="fb" src={fb} alt="fb-img" />
                            </a>
                        </li>
                        <li className="footer__item-img">
                            <a href="#" className="footer__contacrs-link">
                            <img className="pt" src={pt} alt="pt-img" />
                            </a>
                        </li>
                        <li className="footer__item-img">
                            <a href="#" className="footer__contacrs-link">
                            <img className="tg" src={tg} alt="tg-img" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}


export default footer;