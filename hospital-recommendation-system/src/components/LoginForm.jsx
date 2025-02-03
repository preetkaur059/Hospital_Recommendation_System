import React, { useState } from 'react';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig"; // Firebase auth import karein
import './LoginForm.css';
import logo from '../logo.jpg';
import Create from './create_new_account';

const LoginForm = ({ isOpen, onClose, setUser }) => {
  const [isCreateOpen, setCreateOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); 
      
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser(user); 
  
      console.log("User Logged In: ", user.email);  // ✅ Check if user is logged in
      
      onClose();  // ✅ Directly close modal

    } catch (err) {
      console.error("Login Failed:", err.message);  // ✅ Log error details
      setError(" You Are Now Logged In");
    }
  };
  
  

  return (
    <>
      <div className='Login-overlay'>
        <div className='Login-form'>
          <span className='close-btn' onClick={onClose}>
            &times;
          </span>
          <div className='formhead'>
            <img className='' src={logo} alt="Logo" />
            <h2>User Login </h2>
          </div>
          
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleLogin}>

            <input 
              type="text" 
              placeholder="Email " 
              required 
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Password" 
              required 
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn btn-primary w-100" onClick={handleLogin} > Login </button>
            <button type="button" className="btn border w-100 mt-3" onClick={() => setCreateOpen(true)}> Create A New Account </button>
          </form>
        </div>
      </div>

      {/* Register Form ka popup */}
      {isCreateOpen && <Create isOpen={isCreateOpen} onClose={() => setCreateOpen(false)} />}
    </>
  );
};

export default LoginForm;
