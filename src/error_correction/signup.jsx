import React, { useState } from 'react'

const signup = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
  return (
    <div>
      <form>
        <input type="text" placeholder='name' onClick={(e)=>{setName(e.target.value)}} />
        <input type="text" placeholder='email' onClick={(e)=>{setEmail(e.target.value)}} />
        <input type="text" placeholder='password' onClick={(e)=>{setPassword(e.target.value)}} />
        <button ></button>
      </form>
    </div>
  )
}

export default signup
