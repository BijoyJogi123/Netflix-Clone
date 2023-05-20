import React, { useRef } from 'react'
import { auth } from '../firebase';
import './SignUpScreen.css'
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
function SignUpScreen() {
    const emailRef = useRef(null);
    const passwoRef = useRef(null);



    const register = (e)=>{
        e.preventDefault();



    }

    const signIn = async (e)=>{

        e.preventDefault();
        console.log("yea it is clicked")

        await createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwoRef.current.value
        ).then((authUser)=>{

                // console.log(authUser);

        }).catch((error)=>{
            alert(error.message);
            console.log("yea here is trhe errorr")
        })

    }

    
    return (
        <div className='signupScreen'>

            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder='Email' type="email" />
                <input ref={passwoRef}  placeholder='Password' type="Password" />
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4><span className='signupScreen_gray'>New to Netflix?</span><span className='signupScreen_link' onClick={register}>Sign Up Now.</span> </h4>
            </form>
        </div>
    )
}

export default SignUpScreen

//2:14:51