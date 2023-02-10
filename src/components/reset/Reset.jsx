import './style.scss'
import Footer from "../../containers/footer/Footer";
import videoBG from "../../assets/images/background.mp4";
import image from "../../assets/images/reset.png";
import tick from "../../assets/images/Tick.png";
import hide from "../../assets/images/Hide.png";
import succsess from "../../assets/images/subscribe.png";
import {useState, useEffect} from 'react';
import styled, {keyframes} from "styled-components";
import {fadeInDownBig, fadeInUpBig} from "react-animations";
import arrow from "../../assets/images/rightarrow.png";

const fadeAnimation = keyframes`${fadeInDownBig}`;

const FadeDiv = styled.div`
  animation: 1s ${fadeAnimation};
`;

const Reset = () => {
    const [passdata, setPassData] = useState({value: '', error: ''})
    const [passwordShown, setPasswordShown] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault()
        let isError = false
        if(!passdata.value) {
            setPassData({value: "", error:"Password is required"})
            isError = true
        }
        if(passdata.value.length < 6) {
            isError = true;
            setPassData({value: "", error:"Password is required"})
        }
        if(!/\d/.test(passdata.value)){
            isError = true
            setPassData({value: "", error:"Password is required"})
        }
        if(!/[A-Z]/.test(passdata.value)){
            isError = true;
            setPassData({value: "", error:"Password is required"})
        }
        if(!/(?=.*?[#?!@$%^&*-])/.test(passdata.value)){
            isError = true;
            setPassData({value: "", error:"Password is required"})
        }
        if(!isError){
            setPassData({value:"", error:""})
            setIsSubmit(true)
        }
    }
    const handleChangePass = (event) => {
        setPassData({value: event.target.value, error: ""})
    }
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };
    console.log(passdata, 'passdata')
    return(
        <div className={'reset'}>
            {
                !isSubmit?
                    <FadeDiv>
                        <div className={'submit-window'}>
                            <video src={videoBG} autoPlay muted loop/>
                            <div className={'inner-container'}>
                                <img src={image} alt={''} className={'succsess-img'}/>
                                <div className={'text'}>
                                    <h1>Your new password
                                        has been accepted</h1>
                                    <p>You no longer need this page.
                                        You may close it and return back to the app.</p>
                                    <span>Good luck!</span>
                                </div>
                            </div>
                        </div>
                    </FadeDiv>
                    :
                    <div className={'window'}>
                        <video src={videoBG} autoPlay muted loop/>
                        <div className={'inner-content'}>
                            <img src={image} alt={''} className={'main-img'}/>
                            <div className={'title'}>
                                <h1>Enter New Password</h1>
                                <span>for <b>name@mail.com</b> account</span>
                            </div>
                            <div className={"input-box"}>
                                <div className={'input-wrapper'}>
                                    <input
                                        type={passwordShown ? "text" : "password"}
                                        value={passdata.value}
                                        onChange={handleChangePass}
                                        placeholder="New password"
                                    />
                                    <img className={'hide'} src={hide} onClick={togglePassword}/>
                                </div>
                                <button onClick={handleSubmit} className={'web-button'}>
                                    <img src={tick}/>
                                </button>
                                <button className={'mobile-button'} onClick={handleSubmit}>
                                    <span>NEXT</span>
                                    <img src={arrow}/>
                                </button>
                            </div>
                            <p style={passdata.error ? {color:"#FF0606"} : {}}>
                                Password must be at least 6 digits long and contain both uppercase
                                and lowercase characters, number and special symbol
                            </p>
                        </div>
                    </div>

            }
        </div>
    )
}

export default Reset;