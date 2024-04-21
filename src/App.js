import {Header} from "./Components/Header";
import Notification from "./Components/Notification";
import Main from "./Components/Main";
import {Footer} from "./Components/Footer";
import './App.css';
import React,{useState} from "react";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { LoginPage } from "./Components/LoginPage";
import {SignUp } from "./Components/SignUp";
import {Cart} from "./Components/Cart/AddCartOption";
import Profile from './Components/Profile';

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
              <Route path="/cart" element={<Cart/>}/>
            </Routes>
            {/* <PopUp/> */}
              
        </div>  
    </BrowserRouter>
    
  ); 
  
}
export default App;
