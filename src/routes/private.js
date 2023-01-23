import { useState, useEffect } from "react";
import { auth } from "../services/firebaseConnection";
import { key } from "../services/localKey";
import { onAuthStateChanged } from "firebase/auth";

import { Navigate } from "react-router-dom";

function Private({children}){
    const[loading, setLoading] = useState(true);
    const[signed, setSigned] = useState(false);

    useEffect(()=>{
        async function checkLogin(){
            onAuthStateChanged(auth, (user)=>{
                if(user){
                    const userData = {
                        uid: user.uid,
                        email: user.email,
                    };

                    localStorage.setItem(key, JSON.stringify(userData));

                    setSigned(true);
                    setLoading(false);
                }else{
                    setSigned(false);
                    setLoading(false);
                }
            });
        }

        checkLogin();
    },[]);

    if(loading){
        return <div></div>;
    }

    if(!signed){
        return <Navigate to='/login' />
    }

    return children
}

export default Private;