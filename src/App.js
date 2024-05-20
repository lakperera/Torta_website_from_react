import {Header} from "./Components/Header";
import Notification from "./Components/Notification";
import Main from "./Components/Main";
import {Footer} from "./Components/Footer";
import './App.css';
import React,{useState} from "react";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { LoginPage } from "./Components/Login/LoginPage";
import {SignUp } from "./Components/Login/SignUp";
import Profile from './Components/Profile';
import Otp from "./Components/Login/Otp";
import ShoppingItems from "./Components/Cart/ShoppingItems";

function App() {
  const [results, setResults] = useState([]);
  // const[backendData , setBackendData] = useState([]);
  

  return (
    
    <BrowserRouter>
        <div>
            <Routes>
            <Route path="/home" element={
              <>
                <Header setResults={setResults} result={results} />
                <Main />
                <Footer />
                <Notification/>
              </>}
              />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/profile" element={<Profile/>}/>
              {/* <Route path="/profile" element={<Profile/>}/> */}
              {/* <Route path="/cart" element={<Home/>}/> */}
              <Route path="/otp" element={<Otp/>}/>
              <Route path="/cart" element={<ShoppingItems/>}/>
            </Routes>
            {/* <PopUp/> */}
              
        </div>  
    </BrowserRouter>
    
  ); 
  
}
export default App;
