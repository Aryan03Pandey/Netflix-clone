// import React, { useRef } from 'react'
// import {auth} from "./firebase";
// import "./SignUpScreen.css";

// function SignUpScreen() {

//     const emailRef = useRef(null);
//     const passwordRef = useRef(null);
    
//     const register = (e) => {
//         e.preventDefault();

//         auth.createUserWithEmailAndPassword(
//             emailRef.current.value, 
//             passwordRef.current.value
//         ).then((authUser)=>{
//             console.log(authUser)
//         }).catch((error) => {
//             alert(error.message);
//         });
//     }

//     const signIn = (e) => {
//         e.preventDefault();
//     }

//   return (
//     <div className='signupScreen'>
//         <form>
//             <h1>Sign In</h1>
//             <input ref={emailRef} type="email" placeholder='Email' />
//             <input ref={passwordRef} type="password" placeholder='Password' />
//             <button onClick={signIn} type='submit'>Sign In</button>
//             <h4>
//                 <span className='signupScreen-grey'>New to Netflix? </span>
//                 <span className='signupScreen-link' onClick={register}> Sign Up Now</span>
//             </h4>
//         </form>
//     </div>
//   )
// }

// export default SignUpScreen