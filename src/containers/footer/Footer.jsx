import logo from "../../assets/images/ayawaLogo.png";
import inst from '../../assets/images/instagram.png';
import twitter from "../../assets/images/twitter.png";
import appstore from "../../assets/images/appstore.png";
import policy from "../../assets/AyawaPrivacyPolciy.pdf";
import terms from "../../assets/AyawaTermsandConditions.pdf";
import ua from "../../assets/images/ua.png";
import './style.scss';

const Footer = () => {
    return(
        <div className={'footer'}>
            <div className={'credits'}>
                <div className={'from'}>
                    <img src={logo} className={'footer-logo'}/>
                    <p>MADE WITH &#128151; IN <img src={ua} className={'ua'}/> UKRAINE</p>
                </div>

                <div className={'social'}>
                    <div className={'app-store'}>
                        <img src={appstore}/>
                        <div className={'appstore-des'}>
                            <span>Download on the</span>
                    
                            <p>App Store</p>
                        </div>
                    </div>

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
                    <a className={'policy-link'}
                       href={policy}
                        target="_blank"
                       rel="noreferrer"
                    >Privacy Policy</a>
                    <a href={policy}
                        target="_blank"
                       rel="noreferrer"
                    >Terms and Conditions</a>
                </div>
            </div>
            <div className={'privacy-mob'}>
                <div className={'privacy-docs'}>
                    <a className={'policy-link'}
                       href={policy}
                       target="_blank"
                       rel="noreferrer"
                    >Privacy Policy</a>
                    <a href={terms}
                       target="_blank"
                       rel="noreferrer"
                    >Terms and Conditions</a>
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