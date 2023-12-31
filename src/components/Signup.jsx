import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
  const navigate = useNavigate();
  const [err,setError] = useState('')
  const [values, setValues] = useState({
    email: '',
    password: '',
    role:'Manager',
    username:'',
  })


  const handlesignup =  (e) => { 
    e.preventDefault();

    axios.post('http://localhost:8080/api/signup', values, {
  withCredentials: true,
})
     .then(res => {
      
       if (res.data.status === "ok") {
           console.log(res)
         setError(res.data.message); 
         axios.defaults.withCredentials = true;
         navigate('/dashboard')
       }if (res.data.error === 'no') {
         console.log(res)
        setError(res.data.error);
       }
       
     }).catch(err => console.log(err) )
    
    };
  
 
  

  return (
    <>
      <div className="main">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handlesignup} method='POST' className='signup-form'>
        
        <h3>Signup Here</h3>
  
        
        <label >Email</label>
        <input type='email' id="email"   onChange={e=> setValues({...values, email:e.target.value})}  />
        <label >Password</label>
        <input type='password' id='passowrd'   onChange={e=> setValues({...values, password:e.target.value})} />
        <label >Username</label>
          <input type='text' id="username" onChange={e => setValues({ ...values, username: e.target.value })} />
          <label> Select Role </label>
        <select value={values.role} onChange={e=> setValues({...values, role:e.target.value})}>
        <option value="Manager">Manager</option>
        <option value="Agent">Agent</option>
        </select>
          <button className='signup-btn'>Signup</button>
          
          <div className='danger-text'>{ err}</div>
      </form>
      
    </div>
    </>
  )
}

export default Signup