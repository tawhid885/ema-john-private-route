import {useState, useEffect} from 'react';
import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from 'firebase/auth';
import firebaseInit from '../Firebase/Firebase.init';

firebaseInit();

const useFirebase=()=>{
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn=()=>{
        console.log("google clicked!");
        return signInWithPopup(auth, googleProvider)
        
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
            else{

            }
        })
    }, []);

    const logOut=()=>{
        console.log("logout clicked!");
        signOut(auth)
        .then(()=>{
            console.log("signout successfully!");
            setUser({});

        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    return {
        user,
        googleSignIn,
        logOut
    }
}

export default useFirebase;