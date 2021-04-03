import React,{useState} from "react";
import "./signinform.css";
import Button from '@material-ui/core/Button';
import Signin from './Signin'
import Signup from './Signup'

var sign_in_color = "#d9d9d9"
var register_color ="#d9d9d9 "
function SigninHeader() {
    const[getOpen,setoOpen]=useState(false)
    const handleSignin=()=>{
        setoOpen(false)
        sign_in_color = "blue";
        register_color ="#d9d9d9"

    }
    const handleRegister=()=>{
        setoOpen(true)
        sign_in_color = "#d9d9d9";
        register_color ="blue"

    }
    return(
        <>
         <div className="signin_container">
            <div className="signin_header">
                <div>
                {/* <button className="btn_sign" onClick={handleSignin}>
                Sign In      </button> */}
                    <strong style={{color:sign_in_color}} onClick={handleSignin}> Sign In </strong>
                </div>

                <div style={{paddingLeft:'20px'}}>
                {/* <button  className="btn_register" onClick={handleRegister}>
                Register
      </button> */}
                    <strong style={{color:register_color}} onClick={handleRegister}> Register </strong>
                </div>
            </div>
            <hr/>
         </div>
            {getOpen ? (
            <Signup/>
            ) : (
              <div><Signin/></div>
            )}
        </>
    )
}

export default SigninHeader;