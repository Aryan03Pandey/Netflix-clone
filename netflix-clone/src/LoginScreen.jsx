// import React, { useState } from 'react'
// import "./LoginScreen.css"
// import SignUpScreen from './SignUpScreen';

// function LoginScreen() {
//     const [signIn, setSignIn] = useState(false);

//   return (
//     <div className='loginscreen'>
        
//         <div className="loginscreen-bg">
//             <img
//             className='loginscreen-logo' 
//             src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
//             alt="" />

//             <button onClick={() => setSignIn(true)} className='loginscreen-btn'>Sign In</button>

//             <div className="loginscreen-gradient" />
//         </div>

//         <div className="loginscreen-body">
//             {signIn ? (
//                 <SignUpScreen />
//             ) : (
//                 <>
//             <h1>Unlimited films, TV Programmes and more.</h1>
//             <h2>Watch anywhere. Cancel at any time.</h2>
//             <h3>
//                 Ready to Watch? Enter your email to create or restart your membership.
//             </h3>

//             <div className="loginscreen-input">
//                 <form action="">
//                     <input type="email" placeholder='Email Address' name="" id="" />
//                     <button onClick={() => setSignIn(true)} className='loginscreen-getStarted'> GET STARTED</button>
//                 </form>
//             </div>
//             </>
//             )}
//         </div>

//     </div>
//   )
// }

// export default LoginScreen