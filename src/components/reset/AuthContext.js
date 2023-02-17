import {createContext, useContext, useEffect, useState} from 'react';
import {auth} from "../../firebase";
import {
    confirmPasswordReset,
} from 'firebase/auth'

const AuthContext = createContext({
    currentUser:null,
    resetPassword: () => Promise,
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);

    function resetPassword(oobCode, newPassword) {
        return confirmPasswordReset(auth, oobCode, newPassword)
    }

    const value = {
        currentUser,
        resetPassword,
    }
    return<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}