import './style.scss';
import phoneandclock from '../../../../assets/images/phoneandclock.png';
import logo from '../../../../assets/images/ayawaLogo.png';
import scrollbox from "../../../../assets/images/scrolldown.png";
import appstore from '../../../../assets/images/appstore.png';
import play from "../../../../assets/images/Android.png";
import iosbtn from "../../../../assets/images/iosbtn.svg";
import androidbtn from "../../../../assets/images/androidbtn.svg";
import devices from "../../../../assets/images/mobdevices.png";

const UpperBlock = () => {

    const showBtn = window.addEventListener('scroll', () => {
        const scrollToTop = document.querySelector('.phoneandclock');
        if (window.scrollY >= 0) {
            scrollToTop.classList.add('show-scroll');
        } else {
            scrollToTop.classList.remove('show-scroll');
        }
        if(window.scrollY <=1320){
            scrollToTop.classList.add('end-scroll')
        }else{
            scrollToTop.classList.remove('end-scroll')
        }
    });

    return(
        <div className={'upper-wrapper'}>
            <div className={'web-layout'}>
                <div className={'title-block'}>
                    <img className={'ayawa-logo'} src={logo} alt={''}/>
                    <button className={'open-alpha'}>
                        <span>OPEN ALPHA</span>
                    </button>
                    <h1 className={'main-title'}>The first
                        AI powered
                        meditation app</h1>
                    <div className={'buttons-group'}>
                        <button>
                            <img src={iosbtn} className={'ios-content'}/>
                        </button>
                        <button>
                            <img src={androidbtn} className={'android-content'}/>
                        </button>
                        {/*
                        <button className={'app-store'}>
                            <img src={appstore} alt={''}/>
                            <div className={'text-container'}>
                                <span className={'upper-span'}>Download on the</span>
                                <b>App Store</b>
                            </div>
                        </button>
                        <button>
                            <img src={play} className={'gplay'} alt={''}/>
                            <div className={'text-container'}>
                                <span className={'upper-span'}>Download on the</span>
                                <b>Google Play</b>
                            </div>
                        </button>
                        */}
                    </div>

                    <div className={'scroll-block'}>
                        <img src={scrollbox} className={'scroll'} alt={''}/>
                        <span>SCROLL ON...</span>
                    </div>

                    <div className={'description'}>
                        <h1 className={'title'}>Elevate your spirituality with the technology</h1>
                        <p className={'upper-des'}>AYAWA is a technology-based meditation app that helps to transit from guided relaxation
                            to true meditation, or / and to enhance
                            sessions quality.</p>
                        <p className={'lower-des'}>It is the first app on the market designed to track the results of meditation sessions, monitor
                            the impact of meditations on physical state,
                            and helps continuously improve the quality
                            of each session.</p>
                    </div>
                </div>
                <img src={phoneandclock} alt={'phone&clock'} className={'phoneandclock'}/>
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
                    <button className={'app-store'}>
                        <img src={appstore} alt={''}/>
                        <div className={'text-container'}>
                            <span className={'upper-span'}>Download on the</span>
                            <b>App Store</b>
                        </div>
                    </button>
                    <button>
                        <img src={play} className={'gplay'} alt={''}/>
                        <div className={'text-container'}>
                            <span className={'upper-span'}>COOMING SOON TO</span>
                            <b>Google Play</b>
                        </div>
                    </button>
                </div>
                <img src={devices} alt={'phone&clock'} className={'phoneandclock'}/>
                <div className={'description'}>
                    <h1 className={'title'}>Elevate your spirituality with the technology</h1>
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