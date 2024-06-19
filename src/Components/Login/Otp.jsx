import React from 'react';
import './Login_Style.css';
import { BsFillShieldFill ,BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
const Otp = () => {
    const [otp,setOtp] = useState("");
    const [ph,setPh] = useState("");
    const [loading,setLoading] = useState(false);
    const [showOTP,setShowOTP] = useState(false);
    const [user,setUser] = useState(null);

function onCaptchaVerifier(){
    if(!window.recaptchaVerifier ){
        window.recaptchaVerifier = new RecaptchaVerifier(auth,
            'recaptcha-container', 
            {
            'size': 'invisible',
            'callback': (response) => {
              onSignup();
            },
            'expired-callback': () => {},
            },
          
        );
          
    }
}

function onSignup(){

    setLoading(true);
    onCaptchaVerifier();
    const formatPh= '+'  + ph;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
    .then((confirmationResult) => {
      
      window.confirmationResult = confirmationResult;
      setLoading(false);
      setShowOTP(true);
      toast.success('OTP sended successfully!')

    }).catch((error) => {
      console.error(error);
      setLoading(false);
    });
 }

function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  return(
    <div>
        <div className='LoginBody'>
            <div class="wrapper">
                <Toaster toastOptions={{duration:4000}}/>
                <div id="recaptcha-container"></div>
            {user ? 
                <div className="loginSuccessFull">
                <h2>Login Success</h2>
                </div>  :
                <div className="verification">
                {showOTP ? 
                <div className="OTP">
                <div className="mx-auto p-4 rounded-full">
                  <BsFillShieldFill size={30} />
                </div>
                <h1>Enter your OTP</h1>
                <div class="input-box-otp">
                    <OtpInput 
                    value={otp}
                    onChange={setOtp}
                        OTPLength={6}
                        otptype="number"
                        disabled={false}
                        autoFocus
                        className="opt-container"

                    ></OtpInput>
                </div>
                <button onClick={onOTPVerify} type="submit"class="btn-send-OTP">
                    {loading && <CgSpinner size={20} className="mt-1 animate-spin" />}
                    
                    <span>Verify</span>
                    </button>
                <div class="resend-otp">
                    <p class="font">don't have a OTP</p>
                </div>
                </div> :
                <div className="phoneNumber">
                  <h1>Verify your phone number</h1>
                  <div class="input-box-otp">
                      <PhoneInput country={"lk"} value={ph} onChange={setPh}/>
                  </div>
                  <button onClick={onSignup} type="submit"class="btn-send-OTP">
                      {loading && <CgSpinner size={20} className="mt-1 animate-spin" />}
                      
                      <span>Send Code Via SMS</span>
                      </button>
                </div>
                 }
                </div>
            }
                
                
            </div>
        </div>
    </div>
  )
};

export default Otp;
