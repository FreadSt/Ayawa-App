import './style.scss';
import logo from '../../../../assets/images/ayawaLogo.png';
import scrollbox from "../../../../assets/images/scrolldown.png";
import appstore from '../../../../assets/images/appstorebtn.svg';
import iosbtn from "../../../../assets/images/iosbtn.svg";
import androidbtn from "../../../../assets/images/androidbtn.svg";
import devices from "../../../../assets/images/mobdevicescompressed.png";
import webdevices from "../../../../assets/images/devices.png";
import ScrollAnimations from "react-animate-on-scroll";

const UpperBlock = () => {
    const showBtn = window.addEventListener('scroll', () => {
        const scrollToTop = document.querySelector('.phoneandclock');
        if (window.scrollY > 0) {
            scrollToTop.classList.add('show-scroll');
        } else {
            scrollToTop.classList.remove('show-scroll');
        }
        if(window.scrollY <=720){
            scrollToTop.classList.add('end-scroll')
        }else{
            scrollToTop.classList.remove('end-scroll')
        }
    });

    return(
        <div className={'upper-wrapper'} >

            <div className={'web-layout'}>
                <div className={'title-block'}>
                    <img className={'ayawa-logo'} src={logo} alt={''}/>
                    <button className={'open-alpha'}>
                        <span>OPEN ALPHA</span>
                    </button>
                    <div className={"title"}>
                        <h1 className={'main-title'}>The first</h1>
                        <h1 className={'main-title'}>AI powered</h1>
                        <h1 className={'main-title'}>meditation app</h1>
                    </div>
                    <div className={'buttons-group'}>
                        <a className={'ios-btn'} href={"https://apps.apple.com/ua/app/ayawa/id1670418737"}>
                            <img src={appstore} className={'ios-content'}/>
                        </a>
                        <a className={'android-btn'}>
                            <img src={androidbtn} className={'android-content'}/>
                        </a>
                    </div>

                    <div className={'scroll-block'}>
                        <img src={scrollbox} className={'scroll'} alt={''}/>
                        <span>SCROLL ON...</span>
                    </div>

                    <div className={'description'}>
                        <div className={'title-des'}>
                            <ScrollAnimations animateIn={'animate__fadeInUp'}
                                              style={{height:"54px"}}>
                                <h1 className={'title'}>Elevate your</h1>
                            </ScrollAnimations>
                            <ScrollAnimations animateIn={'animate__fadeInUp'}
                                              style={{height:"54px"}}>
                                <h1 className={'title'}>meditation</h1>
                            </ScrollAnimations>
                            <ScrollAnimations animateIn={'animate__fadeInUp'}
                                              style={{height:"54px"}}>
                                <h1 className={'title'}>experience</h1>
                            </ScrollAnimations>
                            <ScrollAnimations animateIn={'animate__fadeInUp'}
                                              style={{height:"54px"}}>
                                <h1 className={'title'}>with Ayawa</h1>
                            </ScrollAnimations>
                        </div>
                        <div className={'upper-des'}>
                            <ScrollAnimations animateIn={"animate__fadeInUp"}
                                              style={{height:"50px"}}>
                                <p>AYAWA is a technology-based meditation app that helps to transit from guided relaxation
                                    to true meditation, or / and to enhance
                                    sessions quality.</p>
                            </ScrollAnimations>
                        </div>
                        <div className={'lower-des'}>
                            <ScrollAnimations animateIn={"animate__fadeInUp"}
                                              style={{height:"54px"}}>
                                <p>It is the first app on the market designed to track the results of meditation sessions, monitor
                                    the impact of meditations on physical state,
                                    and helps continuously improve the quality
                                    of each session.</p>
                            </ScrollAnimations>
                        </div>
                    </div>
                </div>
                <img src={webdevices} alt={'phone&clock'} className={'phoneandclock'}/>
            </div>

            <div className={'mobile-container'}>
                <img className={'ayawa-logo'} src={logo} alt={''}/>
                <button className={'open-alpha'}>
                    <span>OPEN ALPHA</span>
                </button>
                <h1 className={'main-title'}>The first
                    AI powered
                    meditation app
                </h1>
                <div className={'buttons-group'}>
                    <a href="https://apps.apple.com/ua/app/ayawa/id1670418737">
                        <img src={iosbtn} className={'ios-content'}/>
                    </a>
                    <a>
                        <img src={androidbtn} className={'android-content'}/>
                    </a>
                </div>
                <img src={devices} alt={'phone&clock'} className={'phoneandclock'}/>
                <div className={'description'}>
                    <h1 className={'title'}>Elevate your meditation experience with Ayawa</h1>
                    <p className={'upper-des'}>AYAWA is a technology-based meditation app that helps to transit from guided relaxation
                        to true meditation, or / and to enhance
                        sessions quality.</p>
                    <p className={'lower-des'}>It is the first app on the market designed to track the results of meditation sessions, monitor
                        the impact of meditations on physical state,
                        and helps continuously improve the quality
                        of each session.</p>
                </div>
            </div>
        </div>
    )
}

export default UpperBlock;