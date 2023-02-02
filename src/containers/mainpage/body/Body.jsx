import "./style.scss";
import UpperBlock from "./upperSection/UpperBlock";
import check from "../../../assets/images/checkimg.png";
import analyse from "../../../assets/images/analyse.png";
import improve from "../../../assets/images/improve.png";
import iphone from "../../../assets/images/iphonenew.png";
import hrv from "../../../assets/images/Activity2.png";
import repeat from "../../../assets/images/Repeate1.png";
import activity from "../../../assets/images/Chart.png";
import emailjs from '@emailjs/browser';
import {useEffect, useRef, useState} from "react";
import appstore from "../../../assets/images/appstore.png";
import android from "../../../assets/images/Android.png";
import videoBG from '../../../assets/images/background.mp4';
import advancedaiimg from "../../../assets/images/advandecai.png";
import rightarrow from "../../../assets/images/rightarrow.png";
import styled, { keyframes } from 'styled-components';
import { fadeInDownBig } from 'react-animations';
import danger from "../../../assets/images/dangertriangle.png";
import complete from "../../../assets/images/complete.png";
import {Parallax, ParallaxProvider, useParallax} from "react-scroll-parallax";

const cardsImg = [check, analyse, improve];
const blockicons = [hrv, repeat, activity];
const fadeAnimation = keyframes`${fadeInDownBig}`;


const FadeDiv = styled.div`
  animation: 1s ${fadeAnimation};
`;

const Body = () => {
    const [email, setEmail] = useState({value:"", error:""})
    const [isCorrectEmail, setIsCorrectEmail] = useState(false)
    const [isVivibleAlert, setIsVisibleAlert] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const form = useRef()

    const { ref } = useParallax<HTMLDivElement>({ speed: -22220 });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsVisibleAlert(true)
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
        setTimeout(() => {
            setIsVisibleAlert(false)
        }, 2000)
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
    }
    /*
    const showBtn = window.addEventListener('scroll', () => {
        const scrollToTop = document.querySelector('.iphone');
        if (window.scrollY <= 1100) {
            scrollToTop.classList.add('show-scroll');
        } else {
            scrollToTop.classList.remove('show-scroll');
        }
        if(window.scrollY >=1100){
            scrollToTop.classList.add('end-scroll')
        }else{
            scrollToTop.classList.remove('end-scroll')
        }
    });
    */
    return(
        <div className={'body-wrapper'}>
            <UpperBlock/>
            <div className={'inner-box'}>
                <div className={'cards'}>
                    {
                        [
                            {img: cardsImg[0], title: "Check", des: "Gauge each meditation results", id:4},
                            {img: cardsImg[2], title: "Analyse", des: "Stay on track with your progress", id:5},
                            {img: cardsImg[1], title: "Improve", des: "Maximize benefits of your meditations", id:6}
                        ].map((item, index) => {
                            return(
                                <div className={'card'} key={index}>
                                    <div className={'img-box'}>
                                        <img src={item.img} alt={''}/>
                                    </div>
                                    <div className={'des-box'}>
                                        <div className={'inner-box'}>
                                            <h1>{item.title}</h1>
                                            <p>{item.des}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={'hrv-tracker'}>
                    <ParallaxProvider>
                        <Parallax translateY={[0, 27]}>
                            <div className={'ref'} ref={ref}>
                                <img alt={'phone'} src={iphone} className={'iphone'}/>
                            </div>
                        </Parallax>
                    </ParallaxProvider>
                {/*<img alt={'phone'} src={iphone} className={'iphone layer1'}/>*/}
                <div className={'hrv-des'}>
                    <h1>HRV Tracker</h1>
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
                    <div className={'hrv-blocks'}>
                        {
                            [
                                {img: blockicons[0], des: "Track HRV change over time to see if the practice is having a positive impact on your overall well-being", id:1},
                                {img: blockicons[1], des: "Identify HRV patterns corresponding to stages of the session (e.g. Release to Relax stage transition)", id:2},
                                {img: blockicons[2], des: "Monitor sessions reports and explore the effectiveness of different types of meditation techniques", id:3}
                            ].map((item, index) => {
                                return(
                                    <div className={'hrv-block-wrapper'} key={index}>
                                        <div className={'img-box'}>
                                            <img src={item.img} alt={''}/>
                                        </div>
                                        <div className={'des-box'}>
                                            <div className={'inner-box'}>
                                                <p>{item.des}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={'movement-block'}>
                        <h1 className={'move-title'}>Movement tracker</h1>
                        <p>During the meditation, the goal is to focus the mind
                            and bring it to a state of stillness and calm.
                            That is why it is important to track the movement...</p>
                        <div className={'movement-boxes'}>
                            {
                                [
                                    {title:"Reduce distractions", description:"Limit the potential for physical distractions, such as discomfort or itchiness"},
                                    {title:"Increase the focus", description:"Focus on your internal experience and awareness and deepen your practice"},
                                    {title:"Boost the mindfulness", description:"That will improve breathing and allow you to relax and focus easier."},
                                    {title:"Reduce distractions", description:"By staying still you can focus on the present and increase mindfulness"},
                                ].map((item, index) => {
                                    return(
                                        <div className={'move-box'} key={index}>
                                            <div>
                                                <h1>{item.title}</h1>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className={'hrv-tracker-mobile'}>
                <h1>Heart Rate
                    Variability Tracker</h1>
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
                <div className={'hrv-blocks'}>
                    {
                        [
                            {img: blockicons[0], des: "Track HRV change over time to see if the practice is having a positive impact on your overall well-being"},
                            {img: blockicons[1], des: "Identify HRV patterns corresponding to stages of the session (e.g. Release to Relax stage transition)"},
                            {img: blockicons[2], des: "Monitor sessions reports and explore the effectiveness of different types of meditation techniques"}
                        ].map((item, index) => {
                            return(
                                <div className={'hrv-block-wrapper'} key={index}>
                                    <div className={'img-box'}>
                                        <img src={item.img} alt={''}/>
                                    </div>
                                    <div className={'des-box'}>
                                        <div className={'inner-box'}>
                                            <p>{item.des}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <img alt={'phone'} src={iphone} className={'iphone'}/>

                <div className={'movement-block'}>
                    <h1 className={'move-title'}>Movement tracker</h1>
                    <p>During the meditation, the goal is to focus the mind
                        and bring it to a state of stillness and calm.
                        That is why it is important to track the movement...</p>
                    <div className={'movement-boxes'}>
                        {
                            [
                                {title:"Reduce distractions", description:"Limit the potential for physical distractions, such as discomfort or itchiness"},
                                {title:"Increase the focus", description:"Focus on your internal experience and awareness and deepen your practice"},
                                {title:"Boost the mindfulness", description:"That will improve breathing and allow you to relax and focus easier."},
                                {title:"Reduce distractions", description:"By staying still you can focus on the present and increase mindfulness"},
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
            <div className={'promo'}>
                <video src={videoBG} autoPlay loop muted/>
                <div className={'promo-block'}>
                    <h1 className={'promo-title'}>First 500 registered users
                        will get the app for free forever!</h1>
                    <div className={'promo-btns'}>
                        <button>
                            <img alt={""} src={appstore} className={'appstore'}/>
                            <div className={'button-des'}>
                                <span>Download on the</span>
                                <p>App Store</p>
                            </div>
                        </button>
                        <button>
                            <img src={android} alt={''} className={'android'}/>
                            <div className={'button-des'}>
                                <span>COOMING SOON TO</span>
                                <p>Google Play</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className={'advancedAI'}>
                <img src={advancedaiimg} alt={''}/>
                <h1>Advanced AI coming soon</h1>
                <p>AI is currently at the learning stage and You can help us to speed this process up by simply using AYAWA app.
                    Hopefully we’ll be able to release advanced AI features as a part of the closest update.</p>
                <p>Thank you for your patience and support!</p>
                {
                    isSubmit?
                        <div className="alert">
                            {isCorrectEmail ?
                                <FadeDiv>
                                    <img src={complete}/>
                                    <span className="succsess-text">You've successfully subscribed</span>
                                </FadeDiv>
                                :
                                <div className="error">
                                    <img src={danger}/>
                                    <span className="err-text">Something went wrong... Please try again.</span>
                                </div>
                            }
                        </div>
                        : null
                }
            </div>
            <div className={'join'}>
                <video src={videoBG} loop muted autoPlay/>
                <div className={'join-des'}>
                    <h1>Join the Newsletter</h1>
                    <span>Get notified on important news and updates from AYAWA</span>
                    <div className={'join-input'} ref={form}>
                        <input placeholder="Email adress"
                               type={"text"}
                               onChange={handleChangeEmail}
                               value={email.value}
                               name="user_email"
                        />{email.error ?
                        <span>"Oops, the Email seems to be misspelled or invalid... Please check and try again."</span>
                        : null}
                        <button
                            onClick={sendEmail}
                        >
                            <img src={rightarrow}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;
