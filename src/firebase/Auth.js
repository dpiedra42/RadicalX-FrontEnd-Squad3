import React, { useEffect, useState } from "react";
import app from './firebase.js';

//context will allow us to propegate data through app
export const AuthContext = React.createContext();

//stores auth statues
export const AuthProvider = ({children}) => {
    //holds user and updates it everytime auth status changes
    const [currentUser, setCurrentUser] = useState(null);

    //allows you to perform side effect in components
    //[] as second argument guarantees it only runs on first render
    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        //every context comes with a provider component, it allows you to pass a value down
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}
