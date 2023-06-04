import './Footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopyright} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import logo from '../assets/logo_white.svg';

const Footer = () => {

    return (
        <>
            <footer className="alternate">
                <div className="col copyright">
                    <FontAwesomeIcon icon={faCopyright} size="lg" />
                    <span className="year">2023</span>
                    WIKIDEAS
                </div>

                <div className="col logo">
                    <img data-logo-foreground-color="red" src={logo} />
                </div>

                <div className="col social">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                </div>
            </footer>
        </>
    );
}

export default Footer