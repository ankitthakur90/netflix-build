import React, { useState } from "react";
import "./LoginScreen.css";
import "./SignupScreen.js";
import Faq from "./Faq.js"
import SignupScreen from "./SignupScreen.js";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="neflix_logo"
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>

        <div className="loginScreen__gradient"></div>
      </div>
        <div className="loginScreen__body">
          {signIn ? (
            <>
            < SignupScreen />
            <Faq />
            </>
          ): (
            <>
            <h1>The biggest Indian hits. Ready to watch here from ₹ 149.</h1>
            <h2>Join today. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div class="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address " />
                <button
                  onClick={() => setSignIn(true)}
                  class="loginScreen__getStarted"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
          )}
         </div>
     </div>
  );
}

export default LoginScreen;
