import React, { useRef, useState } from 'react';
import '../styles/Auth/Auth.css';
import { FcGoogle } from "react-icons/fc";
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const containerRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeForm, setActiveForm] = useState('signin'); // 'signin' or 'signup'
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    if (window.innerWidth > 768) {
      containerRef.current.classList.add("right-panel-active");
    }
    setActiveForm('signup');
  };

  const handleSignInClick = () => {
    if (window.innerWidth > 768) {
      containerRef.current.classList.remove("right-panel-active");
    }
    setActiveForm('signin');
  };

 
  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage('Account created successfully!');
      setIsSuccess(true);
      setTimeout(() => {
        handleSignInClick(); // Switch to sign-in form
      }, 2000);
    } catch (error) {
      let errorMessage = 'Signup failed. Please try again.';
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Email already in use.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address.';
          break;
        case 'auth/weak-password':
          errorMessage = 'Password should be at least 6 characters.';
          break;
        default:
          errorMessage = error.message;
      }
      
      setMessage(errorMessage);
      setIsSuccess(false);
    }
  };
  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage('Logged in successfully!');
      setIsSuccess(true);
      setTimeout(() => {
        navigate('/'); // Redirect to dashboard or home page
      }, 2000);
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setMessage('User does not exist. Redirecting to signup...');
        setIsSuccess(false);
        setTimeout(() => {
          handleSignUpClick();
        }, 2000);
      } else {
        setMessage(error.message);
        setIsSuccess(false);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // Check if this is a new user
      if (result.user.metadata.creationTime === result.user.metadata.lastSignInTime) {
        setMessage('Account created successfully with Google!');
      } else {
        setMessage('Logged in successfully with Google!');
      }
      setIsSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      setMessage(error.message);
      setIsSuccess(false);
    }
  };

  return (
    <div className="signinup-container">
      <div className="container" id="container" ref={containerRef}>
        <div 
          className={`form-container sign-up-container ${activeForm === 'signup' ? 'active' : ''}`} 
          id='sign-up-container'
        >
          <form onSubmit={handleEmailSignUp}>
            <h1>Create Account</h1>
            <div className="social-container">
              <button type="button" className='signup' onClick={handleGoogleSignIn}>
                <FcGoogle /><span>Google</span>
              </button>
            </div>
            <span>or use your email for registration</span>
            <input 
              type="text" 
              placeholder="Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
            <span 
              className="toggle-form-link"
              onClick={handleSignInClick}
            >
              Already have an account? Sign In
            </span>
          </form>
        </div>
        <div 
          className={`form-container sign-in-container ${activeForm === 'signin' ? 'active' : ''}`} 
          id="sign-in-container"
        >
          <form onSubmit={handleEmailSignIn}>
            <h1>Sign in</h1>
            <div className="social-container">
              <button type="button" className='signup' onClick={handleGoogleSignIn}>
                <FcGoogle /><span>Google</span>
              </button>
            </div>
            <span>or use your account</span>
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#">Forgot your password?</a>
            <button type="submit">Sign In</button>
            <span 
              className="toggle-form-link"
              onClick={handleSignUpClick}
            >
              Don't have an account? Sign Up
            </span>
          </form>
        </div>
        {window.innerWidth > 768 && (
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
      {message && (
        <div className={`message ${isSuccess ? 'success' : 'error'}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default AuthForm;
