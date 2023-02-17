import logo from "../../assets/images/ayawaLogo.png";
import inst from '../../assets/images/instagram.png';
import twitter from "../../assets/images/twitter.png";
import appstore from "../../assets/images/appstore.png";
import terms from "../../assets/TermsandConditions.pdf";
import policy from "../../assets/PrivacyPolicy.pdf";
import ua from "../../assets/images/ua.png";
import { Link, useNavigate } from "react-router-dom";
import './style.scss';

const Footer = () => {
    return(
        <div className={'footer'}>
            <div className={'credits'}>
                <div className={'from'}>
                    <Link to={'/'}>
                        <img src={logo} className={'footer-logo'}/>
                    </Link>
                    <p>MADE WITH &#128151; IN <img src={ua} className={'ua'}/> UKRAINE</p>
                </div>

                <div className={'social'}>
                    <a className={'app-store'} href={"https://apps.apple.com/ua/app/ayawa/id1670418737"}>
                        <img src={appstore}/>
                        <div className={'appstore-des'}>
                            <span>Download on the</span>
                            <p>App Store</p>
                        </div>
                    </a>

                    <a href={"https://instagram.com/ayawameditation?igshid=YmMyMTA2M2Y="}>
                        <div className={'inst'}>
                            <img src={inst}/>
                        </div>
                    </a>
                    <a href={'https://twitter.com/ayawameditation'}>
                        <div className={'twitter'}>
                            <img src={twitter}/>
                        </div>
                    </a>
                </div>
            </div>
            
            <div className={'privacy'}>
                <div className={'description'}>
                    <span>Copyright © 2023 AYAWA.</span>
                    <span>All rights reserved. Trademark ™ Pending.</span>
                </div>
                <div className={'privacy-docs'}>
                    <Link className={'policy-link'}
                       to={'/privacy'}
                    >Privacy Policy</Link>
                    <Link to={'/terms'}
                    >Terms and Conditions</Link>
                </div>
            </div>
            <div className={'privacy-mob'}>
                <div className={'privacy-docs'}>
                    <Link className={'policy-link'}
                       to={'/privacy'}
                    >Privacy Policy</Link>
                    <Link to={'/terms'}
                    >Terms and Conditions</Link>
                </div>
                <div className={'description'}>
                    <span>Copyright © 2023 AYAWA.</span>
                    <span>All rights reserved. Trademark ™ Pending.</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;