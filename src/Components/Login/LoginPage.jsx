
import './Login_Style.css';
import {useNavigate, Link } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';


export const LoginPage =() =>  {
    const history=useNavigate();
    const [email , setEmail] =useState("");
    const  [password , setPassword] = useState("");

    const CheckEmail=()=>{
        console.log(email);
    }

    const submit = async (e) => {

        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/login", { email, password });
            console.log(response);
            if (response.data === "success") {
                history('/home');
            }
        } catch (error) {
            alert("Wrong details");
            console.error(error);
        }
    };

  return (
    <div className='LoginBody'>
            
            <div className="wrapper">
                <form method="POST" onSubmit={submit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input name='email' type="Email" placeholder="Email"  onChange={(e)=>{setEmail(e.target.value) }} required/>
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input name='password' type="password" placeholder="password" onChange={(e) =>{setPassword(e.target.value) }} required/>
                        <i className='bx bxs-lock-alt' ></i>
                    </div>
                    <div className="remember-frogot">
                        <label><input type="checkbox"/>Remember me</label>
                        <a href="#">Frogot password?</a>
                    </div>
                    <button type="submit"className="btn" onClick={CheckEmail}>Login</button>
                    <div className="register-link">
                        <p>Don't have an account?<Link  to="/signup">SignUp</Link></p>
                    </div>
                </form>
            </div>
    </div>
  )
}
