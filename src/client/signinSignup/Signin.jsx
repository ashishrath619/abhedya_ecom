import React from "react";
import "./signinform.css"
import SigninHeader from "./SigninHeader";

function SigninFrom() {
    return(
        <>
            {/* <SigninHeader/> */}
            <div className="signin_container">
              
                <label className="username_label" htmlFor="username" required> username or email address* </label>
                <input id="username" type="text"/>

                <label className="password_label" htmlFor="password"> password*</label>
                <input type="password" name="password" id="password"/>

                <div className="login_remember_forgod_password">
                    <div>
                        <button className="login_button"> LOG IN </button>
                    </div>
                    <div>
                        <input type="checkbox" name="remember" id="remember"/>
                        <label htmlFor="remember"> Remember Me </label>
                    </div>
                    <div className="forgot_password">
                        <a href="#"> Forgot Your Password? </a>
                    </div>
                </div>
                
                <hr/>
                <p className="or_signin_with_text"> or sign in with </p>
                
                <div className="google_facebook_button">
                    <div>
                        <button className="signin_with_google_button"> <span className="google_logo"> G </span> Login With Google </button>
                    </div>
                  
                    <div>
                        <button className="signin_with_facebook_button"> <span className="facebook_logo"> f </span> Login With facebook </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SigninFrom;