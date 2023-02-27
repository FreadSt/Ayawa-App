import "./style.scss";
import UpperBlock from "./upperSection/UpperBlock";
import check from "../../../assets/images/checkimg.png";
import analyse from "../../../assets/images/analyse.png";
import improve from "../../../assets/images/improve.png";
import iphone from "../../../assets/images/compressedphone.png";
import hrv from "../../../assets/images/Activity2.png";
import repeat from "../../../assets/images/Repeate1.png";
import activity from "../../../assets/images/Chart.png";
import emailjs from '@emailjs/browser';
import {useEffect, useRef, useState} from "react";
import videoBG from '../../../assets/images/background (video-converter.com).webm';
import advancedaiimg from "../../../assets/images/advandecai.png";
import rightarrow from "../../../assets/images/rightarrow.png";
import styled, { keyframes } from 'styled-components';
import { fadeInDownBig, fadeInUpBig } from 'react-animations';
import complete from "../../../assets/images/complete.png";
import {Parallax, ParallaxProvider} from "react-scroll-parallax";
import iosbtn from "../../../assets/images/appstorebtn.svg"
import androidbtn from "../../../assets/images/androidbtn.svg";
import ScrollAnimations from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const cardsImg = [check, analyse, improve];
const blockicons = [hrv, repeat, activity];
const fadeAnimation = keyframes`${fadeInDownBig}`;
const fadeMobAnimation = keyframes`${fadeInUpBig}`;

const FadeDiv = styled.div`
  animation: 1s ${fadeAnimation};
`;
const FadeMobDiv = styled.div`
  animation: 1s ${fadeMobAnimation};
`;

const Body = () => {
    const [email, setEmail] = useState({value:"", error:""})
    const [isCorrectEmail, setIsCorrectEmail] = useState(true)
    const [isSubmit, setIsSubmit] = useState(false)
    const [isVisible, setIsVisible] = useState("undefined");
    const [isFilled, setIsFilled] = useState(false)

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_pj1dmxh",
            "template_rm1fiqk",
            form.current,
            "muTo_ewtNlux8dk6z"
        )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);

                }
            );
        setIsSubmit(true)
    };

    useEffect(() => {
        handleSubmit(email)
    }, [email]);

    const handleSubmit = (email) => {
        if(!email.value){
            return
        }
        if(!/\S+@\S+\.\S+/.test(email.value)){
            setIsCorrectEmail(false)
            return
        }
        setIsCorrectEmail(true)
    }
    const handleChangeEmail = (event) => {
        setEmail({value: event.target.value, error: ""})
        setIsFilled(true)
    }
    return(
        <div className={'body-wrapper'}>
            <UpperBlock/>
            <div className={'inner-container'}>
                    <div className={'cards'}>
                        <ScrollAnimations
                            animateIn="animate__fadeInUp"
                            offset={300}
                            animateOnce={true}
                            style={{height:"100px"}}
                        >
                            <div className={'card'}>
                                <div className={'img-box'}>
                                    <img src={cardsImg[0]} alt={''}/>
                                </div>
                                <div className={'des-box'}>
                                    <div className={'inner-box'}>
                                        <h1>Check</h1>
                                        <p>Gauge each meditation results</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimations>
                        <ScrollAnimations
                            animateIn="animate__fadeInUp"
                            offset={300}
                            animateOnce={true}
                            style={{height:"100px"}}
                        >
                            <div className={'card'}>
                                <div className={'img-box'}>
                                    <img src={cardsImg[2]} alt={''}/>
                                </div>
                                <div className={'des-box'}>
                                    <div className={'inner-box'}>
                                        <h1>Analyse</h1>
                                        <p>Stay on track with your progress</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimations>
                        <ScrollAnimations
                            animateIn="animate__fadeInUp"
                            offset={300}
                            animateOnce={true}
                            style={{height:"100px"}}
                        >
                            <div className={'card'}>
                                <div className={'img-box'}>
                                    <img src={cardsImg[1]} alt={''}/>
                                </div>
                                <div className={'des-box'}>
                                    <div className={'inner-box'}>
                                        <h1>Improve</h1>
                                        <p>Maximize benefits of your meditations</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimations>
                    </div>
            </div>
            <div className={'hrv-tracker'}>
                {isVisible?
                    <ParallaxProvider>
                        <Parallax translateY={[-1, 31]}
                                  speed={100}
                                  startScroll={2400}
                        >
                            <div className={'ref'}>
                                <img alt={'phone'} src={iphone} className={'iphone'}/>
                            </div>
                        </Parallax>
                    </ParallaxProvider> :
                    <img alt={'phone'} src={iphone} className={'iphone-static'}/>
                }
                {/*<img alt={'phone'} src={iphone} className={'iphone layer1'}/>*/}
                <div className={'hrv-des'}>
                    <div className={'upper-des'}>
                        <div className={'text-wrapper'}>
                            <div className={'hrv-title'}>
                                <ScrollAnimations animateIn={'animate__fadeInUp'}
                                                  style={{height:"50px"}}
                                                  animateOnce={true}
                                >
                                    <h1>Heart Rate Variability Tracker</h1>
                                </ScrollAnimations>
                            </div>
                            <div className={'hrv-p'}>
                                <ScrollAnimations animateIn={'animate__fadeInUp'}
                                                  style={{height:"50px"}}
                                                  animateOnce={true}
                                >
                                    <p>
                                        HRV (Heart Rate Variability) is a measure of the variation in time
                                        between consecutive heart beats, and is often used as an indicator of the
                                        balance between the sympathetic and parasympathetic nervous systems,
                                        overall health and well-being, as a marker of stress to relaxation ratio.
                                    </p>
                                    <p>
                                        By monitoring HRV during meditation, you can gain insights on how your body is responding to
                                        meditation practice and make proper adjustments.
                                    </p>
                                </ScrollAnimations>
                            </div>
                        </div>
                        <div className={'hrv-blocks'}>
                            <ScrollAnimations animateIn={'animate__fadeInUp'}
                                              style={{height:"100px"}}
                                              animateOnce={true}
                            >
                                <div className={'hrv-block-wrapper'}>
                                    <div className={'img-box'}>
                                        <img src={blockicons[0]} alt={''}/>
                                    </div>
                                    <div className={'des-box'}>
                                        <div className={'inner-box'}>
                                            <p className={'des'}>Track HRV change over time to see if the practice is having a positive impact on your overall well-being</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimations>
                            <ScrollAnimations animateIn={'animate__fadeInUp'}
                                              style={{height:"100px"}}
                                              animateOnce={true}
                            >
                                <div className={'hrv-block-wrapper'}>
                                    <div className={'img-box'}>
                                        <img src={blockicons[1]} alt={''}/>
                                    </div>
                                    <div className={'des-box'}>
                                        <div className={'inner-box'}>
                                            <p className={'des'}>Identify HRV patterns corresponding to stages of the session"</p>
                                            <p className={'sup-des'}>(e.g. Release to Relax stage transition)</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimations>
                            <ScrollAnimations animateIn={'animate__fadeInUp'}
                                              style={{height:"100px"}}
                                              animateOnce={true}
                            >
                                <div className={'hrv-block-wrapper'}>
                                    <div className={'img-box'}>
                                        <img src={blockicons[2]} alt={''}/>
                                    </div>
                                    <div className={'des-box'}>
                                        <div className={'inner-box'}>
                                            <p className={'des'}>Monitor sessions reports and explore the effectiveness of different types of meditation techniques</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimations>
                        </div>
                        <ScrollAnimations animateIn={'animate__fadeInUp'}>

                        </ScrollAnimations>
                    </div>
                    <div className={'movement-block'}>
                        <ScrollAnimations animateIn={'animate__fadeInUp'}
                                          style={{height:"50px"}}
                                          animateOnce={true}
                        >
                            <h1 className={'move-title'}>Movement tracker</h1>
                        </ScrollAnimations>
                        <ScrollAnimations animateIn={'animate__fadeInUp'}
                                          animateOnce={true}
                        >
                            <p className={'movement-p'}>During the meditation, the goal is to focus the mind and bring it to a state of stillness and calm. Monitor your movements to enhance the effectiveness of your meditation sessions.</p>
                        </ScrollAnimations>
                            <div className={'movement-boxes'}>
                                <div className={'box-wrapper'}>
                                    <ScrollAnimations animateIn={'animate__fadeInUp'}
                                                      delay={400}
                                                      style={{height:"100px"}}
                                                      animateOnce={true}
                                    >
                                        <div className={'move-box'}>
                                            <div>
                                                <h1>Reduce distractions</h1>
                                                <p>Limit the potential for physical distractions, such as discomfort or itchiness</p>
                                            </div>
                                        </div>
                                    </ScrollAnimations>
                                </div>
                                <div className={'box-wrapper'}>
                                    <ScrollAnimations animateIn={'animate__fadeInUp'}
                                                      delay={600}
                                                      style={{height:"100px"}}
                                                      animateOnce={true}
                                    >
                                        <div className={'move-box'}>
                                            <div>
                                                <h1>Increase the focus</h1>
                                                <p>Focus on your internal experience and awareness and deepen your practice</p>
                                            </div>
                                        </div>
                                    </ScrollAnimations>
                                </div>
                                <div className={'box-wrapper'}>
                                    <ScrollAnimations animateIn={'animate__fadeInUp'}
                                                      delay={800}
                                                      style={{height:"100px"}}
                                                      animateOnce={true}
                                    >
                                        <div className={'move-box'}>
                                            <div>
                                                <h1>Maintain the posture</h1>
                                                <p>That will improve breathing and allow you to relax and focus easier.</p>
                                            </div>
                                        </div>
                                    </ScrollAnimations>
                                </div>
                                <div className={'box-wrapper'}>
                                    <ScrollAnimations animateIn={'animate__fadeInUp'}
                                                      delay={1000}
                                                      style={{height:"100px"}}
                                                      animateOnce={true}
                                    >
                                        <div className={'move-box'}>
                                            <div>
                                                <h1>Boost the mindfulness</h1>
                                                <p>By staying still you can focus on the present and increase mindfulness</p>
                                            </div>
                                        </div>
                                    </ScrollAnimations>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <div className={'hrv-tracker-mobile'}>
                <ScrollAnimations animateIn={'animate__fadeInUp'}
                                  animateOnce={true}>
                    <h1>Heart Rate
                        Variability Tracker</h1>
                </ScrollAnimations>
                <ScrollAnimations animateIn={'animate__fadeInUp'}
                                  animateOnce={true}>
                    <p>
                        HRV (Heart Rate Variability) is a measure of the variation in time
                        between consecutive heart beats, and is often used as an indicator of the
                        balance between the sympathetic and parasympathetic nervous systems,
                        overall health and well-being, as a marker of stress to relaxation ratio.
                    </p>
                </ScrollAnimations>
                <ScrollAnimations animateIn={'animate__fadeInUp'}
                                  animateOnce={true}>
                    <p>
                        By monitoring HRV during meditation, you can gain insights on how your body is responding to
                        meditation practice and make proper adjustments.
                    </p>
                </ScrollAnimations>
                <ScrollAnimations animateIn={'animate__fadeIn'} offset={400}
                                  animateOnce={true}>
                    <div className={'hrv-blocks'}>
                        {
                            [
                                {img: blockicons[0],
                                    des: "Track HRV change over time to see if the practice is having a positive impact on your overall well-being"},
                                {img: blockicons[1], des: "Identify HRV patterns corresponding to stages of the session", secDes:"(e.g. Release to Relax stage transition)",},
                                {img: blockicons[2],
                                    des: "Monitor sessions reports and explore the effectiveness of different types of meditation techniques"}
                            ].map((item, index) => {
                                return(
                                    <div className={'hrv-block-wrapper'} key={index}>
                                        <div className={'img-box'}>
                                            <img src={item.img} alt={''}/>
                                        </div>
                                        <div className={'des-box'}>
                                            <div className={'inner-box'}>
                                                <p className={'des'}>{item.des}</p>
                                                <p className={'sup-description'}>{item.secDes}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </ScrollAnimations>

                <img alt={'phone'} src={iphone} className={'iphone'}/>

                <div className={'movement-block'}>
                    <h1 className={'move-title'}>Movement tracker</h1>
                    <p>During the meditation, the goal is to focus the mind and bring it to a state of stillness and calm. Monitor your movements to enhance the effectiveness of your meditation sessions.</p>
                    <div className={'movement-boxes'}>
                        {
                            [
                                {title:"Reduce distractions", description:"Limit the potential for physical distractions, such as discomfort or itchiness"},
                                {title:"Increase the focus", description:"Focus on your internal experience and awareness and deepen your practice"},
                                {title:"Maintain the posture", description:"That will improve breathing and allow you to relax and focus easier."},
                                {title:"Boost the mindfulness", description:"By staying still you can focus on the present and increase mindfulness"},
                            ].map((item, index) => {
                                return(
                                    <div className={'move-box'} key={index}>
                                        <h1>{item.title}</h1>
                                        <p>{item.description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={'promo-wrapper'}>
                <ScrollAnimations animateIn={'animate__fadeInUp'}
                                  style={{height:"200px"}}
                                  animateOnce={true}
                >
                    <div className={'promo'}>
                        <video src={videoBG} autoPlay loop muted/>
                        <div className={'promo-block'}>
                            <h1 className={'promo-title'}>First 500 registered users
                                will get the app for free forever!</h1>
                            <div className={'promo-btns'}>
                                <a className={'ios-btn'} href="https://apps.apple.com/ua/app/ayawa/id1670418737">
                                    <img src={iosbtn} className={'ios-content'}/>
                                </a>
                                <a disabled className={'disabled'}>
                                    <img src={androidbtn} className={'android-content'}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollAnimations>
            </div>
            <div className={'advancedAI'}>
                <ScrollAnimations animateIn={'animate__fadeInUp'} animateOnce={true}>
                    <img src={advancedaiimg} alt={''}/>
                </ScrollAnimations>
                <div className={'ai-des'}>
                    <ScrollAnimations animateIn={'animate__fadeInUp'} animateOnce={true}
                                      style={{height:"60px"}}
                    >
                        <h1>Advanced AI coming soon</h1>
                    </ScrollAnimations>
                    <ScrollAnimations animateIn={'animate__fadeInUp'} animateOnce={true}>
                        <p>AI is currently at the learning stage and You can help us to speed this process up by simply using AYAWA app.
                            Hopefully we’ll be able to release advanced AI features as a part of the closest update.</p>
                        <p style={{margin:'0'}}>Thank you for your patience and support!</p>
                    </ScrollAnimations>
                </div>
            </div>
            <div className={'join-wrapper'}>
                <ScrollAnimations animateIn={'animate__fadeInUp'}
                                  style={{height:"100px", margin:"5vh 0 10vh"}}
                >
                    <div className={'join'}>
                        <video src={videoBG} loop muted autoPlay/>
                        <div className={'join-des'}>
                            <h1>Join the Newsletter</h1>
                            <span>Get notified on important news and updates from AYAWA</span>
                            <form className={'join-input'} ref={form} onSubmit={handleSubmit}>
                                <input placeholder="Email adress"
                                       type={"text"}
                                       onChange={handleChangeEmail}
                                       value={email.value}
                                       name="user_email"
                                       className={!isCorrectEmail ? "error-input" : 'submit-input'}
                                />
                                {
                                    isFilled ?
                                        <div className={'filled-btns'}>
                                            {isCorrectEmail?
                                                <button
                                                    onClick={sendEmail}
                                                >
                                                    <img src={rightarrow}/>
                                                </button>
                                                :
                                                <button disabled>
                                                    <img src={rightarrow}/>
                                                </button>
                                            }
                                        </div>
                                        :
                                        <button disabled>
                                            <img src={rightarrow}/>
                                        </button>
                                }
                            </form>
                            {!isCorrectEmail ? <span className={'err-message'}>Oops, the Email seems to be misspelled or invalid... Please check and try again.</span> : null}
                        </div>
                        {
                            isSubmit?
                                <div className="alert-web">
                                    {isCorrectEmail ?
                                        <FadeDiv>
                                            <img src={complete}/>
                                            <span className="succsess-text">You've successfully subscribed</span>
                                        </FadeDiv>
                                        :
                                        null
                                    }
                                </div>
                                : null
                        }
                    </div>
                </ScrollAnimations>
            </div>
            {
                isSubmit?
                    <div className="alert">
                        {isCorrectEmail ?
                            <FadeMobDiv>
                                <img src={complete}/>
                                <span className="succsess-text">You've successfully subscribed</span>
                            </FadeMobDiv>
                            :
                            null
                        }
                    </div>
                    : null
            }
        </div>
    )
}

export default Body;
