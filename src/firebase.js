// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3QUMVVJdrdymke3Z0no0iGQtEiqgW7to",
    authDomain: "ayawa-267aa.firebaseapp.com",
    projectId: "ayawa-267aa",
    storageBucket: "ayawa-267aa.appspot.com",
    messagingSenderId: "825037989779",
    appId: "1:825037989779:web:269565ab0ce4f0c261ea66",
    measurementId: "G-H6WBW9F6TZ"
};
const app = initializeApp(firebaseConfig);
/*
    const changePassword = async newPassword => {
        const user = firebase.auth().currentUser;
        try {
            await user.updatePassword(newPassword)
            console.log('Password Updated!')
        } catch (err) {
            console.log(err)
        }
    }
*/
// Initialize Firebase
export const auth = getAuth(app)