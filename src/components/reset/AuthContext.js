import {createContext, useContext, useEffect, useState} from 'react';
import {auth} from "../../firebase";
import {
    confirmPasswordReset,
    onAuthStateChanged
} from 'firebase/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const AuthContext = createContext({
    currentUser:null,
    resetPassword: () => Promise,
    onAuthStateChanged: () => Promise,
})

export const useAuth = () => useContext(AuthContext)


export default function AuthContextProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [isVerified, setIsVerified] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user ? user : null)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    useEffect(() => {
        console.log('The user is', currentUser)
    }, [currentUser])

    function resetPassword(oobCode, newPassword) {
        return confirmPasswordReset(auth, oobCode, newPassword)
    }

    const value = {
        currentUser,
        resetPassword,
    }
    return<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}