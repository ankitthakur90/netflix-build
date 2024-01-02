import React, { useRef } from "react";
import "./SignupScreen.css";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../app/firebase";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className="signupScreen">
        <form>
          <h1>Sign In</h1>
          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="password" />
          <button type="submit" onClick={signIn}>
            sign In
          </button>

          <h4>
            <span className="signupScreen__gray">New to Netflix? </span>
            <span className="signupScreen__link" onClick={register}>
              Sign Up Now.
            </span>
          </h4>
        </form>
      </div>
    </>
  );
}

// function SignupScreen() {
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);

//   const register = (e) => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(
//       auth,
//       emailRef.current.value,
//       passwordRef.current.value
//     )
//       .then((userCredential) => {
//         console.log(userCredential);
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   };

//   const signIn = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="signUpScreen">
//       <form>
//         <h1>Sign In</h1>
//         <input ref={emailRef} type="email" placeholder="Email" />
//         <input ref={passwordRef} type="password" placeholder="Password" />
//         <button type="submit" onClick={signIn}>
//           Sign In
//         </button>
//         <h4>
//           <span className="signUpScreen_gray">New to Netflix? </span>
//           <span className="signUpScreen_link" onClick={register}>
//             Sign Up now.
//           </span>
//         </h4>
//       </form>
//     </div>
//   );
// }

export default SignupScreen;
