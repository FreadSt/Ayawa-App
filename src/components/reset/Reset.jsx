import './style.scss'
import Footer from "../../containers/footer/Footer";
import background from "../../assets/images/WEB_BG.mp4";
import videoBG from "../../assets/images/WEB_BG.mp4";
import image from "../../assets/images/reset.png";
import tick from "../../assets/images/Tick.png";
import hide from "../../assets/images/Hide.png";


const Reset = () => {
    return(
        <div className={'reset'}>
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
                                placeholder="New password"
                            />
                            <img className={'hide'} src={hide}/>
                        </div>
                        <button>
                            <img src={tick}/>
                        </button>
                    </div>
                    <p>
                        Password must be at least 6 digits long and contain both uppercase
                        and lowercase characters, number and special symbol
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Reset;