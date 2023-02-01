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
            <div className={'message'}>
                <div className={'window'}>
                    <video src={videoBG} autoPlay loop muted alt={""}/>
                    <div className={'window-block'}>
                        <img src={image} alt={""}/>
                        <h1 className={'window-title'}>Enter New Password</h1>
                        <span>for name@mail.com account</span>
                        <div className={'input-box'}>
                            <div className={'input-wrapper'}>
                                <input/>
                                <img alt={""} src={hide} className={'hide'}/>
                            </div>
                            <button>
                                <img alt={''} src={tick}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reset;