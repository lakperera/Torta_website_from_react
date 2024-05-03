import './Login_Style.css';
import { useNavigate,Link } from 'react-router-dom';
const Verify_mobile_number = () => {
  return(
    <div className='LoginBody'>
    <div class="wrapper">
        <form action="">
            <h1>Enter your mobile number</h1>
            <div class="input-box">
                <input type="text" maxlength="10" placeholder="mobile number" required/>
            </div>
            <button type="submit"class="btn-send-OTP"><Link to={"/otp"}>Send OTP</Link></button>
        </form>
    </div>
    </div>
  );
}

export default Verify_mobile_number;