import './style.scss'
import succsess from "../../assets/images/subscribe.png";
import videoBG from "../../assets/images/background.mp4";

const Verify = () => {
    return(
        <div className={'verify'}>
            <div className={'message'}>
                <div className={'window'}>
                    <video src={videoBG} autoPlay loop muted alt={""}/>
                    <div className={'window-block'}>
                        <img src={succsess} alt={""}/>
                        <h1 className={'window-title'}>Thank you for registration!</h1>
                        <p>You no longer need this page.
                            You may close it and return back to the app.</p>
                        <span>Good luck!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verify;