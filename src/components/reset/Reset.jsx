import './style.scss'
import Footer from "../../containers/footer/Footer";
import videoBG from "../../assets/images/background.mp4";
import image from "../../assets/images/reset.png";
import tick from "../../assets/images/Tick.png";
import hide from "../../assets/images/Hide.png";
import {useState, useEffect} from 'react';

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
                    <div className={'submit-window'}>
                        <video src={videoBG} autoPlay muted loop/>
                        <div className={'inner-container'}>
                            <img src={image} alt={''} className={'main-img'}/>
                            <div className={'text'}>
                                <h1>Enter New Password</h1>
                                <span>for <b>name@mail.com</b> account</span>
                            </div>
                        </div>
                    </div>
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
                                <button onClick={handleSubmit}>
                                    <img src={tick}/>
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