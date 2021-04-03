import React from "react";
import "./signinform.css"

function Register() {
    return(
        <>
            <div className="signin_container">
                <label className="signup_email_label"  htmlFor="signup_email"> Your email address * </label>
                <input id="signup_email" type="email"/>

                <label htmlFor="signup_password"> Password * </label>
                <input  id="signup_password" type="password"/>

                <div className="signup_button_agreement">
                    <div>
                        <button className="login_button"> SIGN UP </button>
                    </div>
                    <div>
                    <input type="checkbox" name="agree" id="remember"/>
                        <label htmlFor="agree"> I agree the privacy policy * </label>
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

export default Register;