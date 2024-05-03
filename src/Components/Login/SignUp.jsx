import React, { useState } from 'react'
import './Login_Style.css'
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

export const SignUp = ()=> {
    const history=useNavigate();
    const [name ,setName] = useState()
    const [email ,setEmail] = useState()
    const [password ,setPassword] = useState()
    const [repeatPassword, setRepeatPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
     
    const handleRepeatPasswordChange = (e) => {
        setRepeatPassword(e.target.value);
        setPasswordMatch(e.target.value === password);
    };

    const handleSubmit = (e)=> {
        e.preventDefault()
            axios.post('http://localhost:3001/signup' , {name,email,password})
            .then(res=>{
                console.log(res)
                alert("stored data")
                history('/login')
            })
            .catch(e=> console.log(e))
        }
  return (
    <div className='LoginBody'>
        <div className="wrapper">
            <form action="" method="POST" onSubmit={handleSubmit}>
                <h1>Welcome to Torta 19</h1>
                <div className="input-box">
                    
                    <input type="text" name="name" placeholder="Name" required onChange={(e)=>setName(e.target.value)}/>
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input type="text" name="userName" placeholder="User Name" required/>
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Email" required onChange={(e)=>setEmail(e.target.value)}/>
                    <i className='bx bxs-envelope'></i>
                </div>
                <div className="input-box">
                    <input type="password" name="pwd" placeholder="password" required onChange={(e)=>setPassword(e.target.value)}/>
                    <i className='bx bxs-lock-alt' ></i>
                </div>
                <div className="input-box">
                    {/* <label htmlFor="htmlFor"><strong></strong></label> */}
                    
                    <input type="password"
                    name="pwdRepeat"
                    placeholder={passwordMatch ? "Repeat password" : "Passwords do not match"}
                    required
                    value={repeatPassword}
                    onChange={handleRepeatPasswordChange} />
                    <i className='bx bxs-lock-alt' ></i>
                </div>
                <div className="remember-frogot">
                    <label><input type="checkbox" required/>i agree to the Terms of User</label>
                    <a href="">Frogot password?</a>
                </div>

                <div className="register-link">
                    <p>Already have an account?<Link to={"/login"}>Login</Link></p>
                </div>
                    <a href=""><img className="facebook" width="55" height="55" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/></a>
            
                    <a href=""><img className="google" width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/></a>
                
                <button name="submit"type="submit"className="btn"><Link to={"/otp"}>Sing Up</Link></button>
            </form>
        </div>
    </div>
  )
  }