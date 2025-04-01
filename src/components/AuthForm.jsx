// import React, { useRef, useState } from 'react';
// import '../styles/Auth/Auth.css';
// import { FcGoogle } from "react-icons/fc";
// import { auth ,db} from '../../firebaseConfig';
// import { doc, setDoc } from "firebase/firestore";
// import { 
//   createUserWithEmailAndPassword, 
//   signInWithEmailAndPassword, 
//   signInWithPopup, 
//   GoogleAuthProvider,
//   fetchSignInMethodsForEmail,
//   sendPasswordResetEmail
// } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// const AuthForm = () => {
//   const containerRef = useRef(null);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [activeForm, setActiveForm] = useState('signin'); // 'signin' or 'signup' or 'forgot'
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validateForm = (isSignUp = false) => {
//     const newErrors = {};
    
//     if (!email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = 'Email is invalid';
//     }
    
//     if (!password && activeForm !== 'forgot') {
//       newErrors.password = 'Password is required';
//     } else if (password.length < 6 && activeForm !== 'forgot') {
//       newErrors.password = 'Password must be at least 6 characters';
//     }
    
//     if (isSignUp && !name) {
//       newErrors.name = 'Name is required';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const clearForm = () => {
//     setEmail('');
//     setPassword('');
//     setName('');
//     setErrors({});
//   };

//   const handleSignUpClick = () => {
//     if (window.innerWidth > 768) {
//       containerRef.current.classList.add("right-panel-active");
//     }
//     setActiveForm('signup');
//     setMessage('');
//     clearForm();
//   };

//   const handleSignInClick = () => {
//     if (window.innerWidth > 768) {
//       containerRef.current.classList.remove("right-panel-active");
//     }
//     setActiveForm('signin');
//     setMessage('');
//     clearForm();
//   };

//   const handleForgotPasswordClick = () => {
//     setActiveForm('forgot');
//     setMessage('');
//     setPassword('');
//     setErrors({});
//   };

//   const handlePasswordReset = async () => {
//     if (!email) {
//       setMessage('Please enter your email first');
//       setIsSuccess(false);
//       return;
//     }

//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setMessage('Please enter a valid email address');
//       setIsSuccess(false);
//       return;
//     }
    
//     try {
//       // First check if user exists
//       const methods = await fetchSignInMethodsForEmail(auth, email);
      
      
//       if (methods.length === 0) {
//         setMessage('No account found with this email.');
//         setIsSuccess(false);
//         return;
//       }

//       // If user exists, send password reset email
//       await sendPasswordResetEmail(auth, email);
//       setMessage('Password reset link sent to your email successfully!');
//       setIsSuccess(true);
//     } catch (error) {
//       let errorMessage = 'Failed to send reset email.';
      
//       switch (error.code) {
//         case 'auth/user-not-found':
//           errorMessage = 'No account found with this email.';
//           break;
//         default:
//           errorMessage = error.message;
//       }
      
//       setMessage(errorMessage);
//       setIsSuccess(false);
//     }
//   };
  
      
//   const handleEmailSignUp = async (e) => {
//     e.preventDefault();
//     if (!validateForm(true)) return;
    
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       setMessage('Account created successfully!');
//       setIsSuccess(true);
//       setTimeout(() => {
//         handleSignInClick(); // Switch to sign-in form
//       }, 2000);
//     } catch (error) {
//       let errorMessage = 'Signup failed. Please try again.';
      
//       switch (error.code) {
//         case 'auth/email-already-in-use':
//           errorMessage = 'User already exists';
//           setIsSuccess(false);
//           setTimeout(() => {
//             handleSignInClick();
//           }, 2000);
//           break;
//         case 'auth/invalid-email':
//           errorMessage = 'Invalid email address.';
//           break;
//         case 'auth/weak-password':
//           errorMessage = 'Password should be at least 6 characters.';
//           break;
//         default:
//           errorMessage = error.message;
//       }
      
//       setMessage(errorMessage);
//       setIsSuccess(false);
//     }
//   };

//   const handleEmailSignIn = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
    
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       setMessage('Logged in successfully!');
//       setIsSuccess(true);
//       setTimeout(() => {
//         navigate('/');
//       }, 2000);
//     } catch (error) {
//       let errorMessage = 'Login failed. Please try again.';
      
//       switch (error.code) {
//         case 'auth/user-not-found':
//           errorMessage = 'User does not exist. Please sign up.';
//           break;
//         case 'auth/wrong-password':
//           errorMessage = 'Incorrect password. Please try again.';
//           break;
//         default:
//           errorMessage = error.message;
//       }
      
//       setMessage(errorMessage);
//       setIsSuccess(false);
//     }
//   };

//   const handleGoogleAuth = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const isNewUser = result._tokenResponse.isNewUser;
      
//       setMessage(isNewUser ? 'Account created successfully with Google!' : 'Logged in successfully with Google!');
//       setIsSuccess(true);
//       setTimeout(() => {
//         navigate('/');
//       }, 2000);
//     } catch (error) {
//       let errorMessage = 'Google authentication failed. Please try again.';
      
//       switch (error.code) {
//         case 'auth/account-exists-with-different-credential':
//           errorMessage = 'This email is already registered with another method.';
//           break;
//         case 'auth/popup-closed-by-user':
//           errorMessage = 'Google sign-in was canceled.';
//           break;
//         case 'auth/user-disabled':
//           errorMessage = 'This account has been disabled.';
//           break;
//         case 'auth/user-not-found':
//           errorMessage = 'No account found with this email.';
//           break;
//         default:
//           errorMessage = error.message;
//       }
      
//       setMessage(errorMessage);
//       setIsSuccess(false);
//     }
//   };

//   return (
//     <div className="signinup-container">
//       <div className="container" id="container" ref={containerRef}>
//         {/* Sign Up Form */}
//         <div 
//           className={`form-container sign-up-container ${activeForm === 'signup' ? 'active' : ''}`} 
//           id='sign-up-container'
//         >
//           <form onSubmit={handleEmailSignUp}>
//             <h1>Create Account</h1>
//             <div className="social-container">
//               <button type="button" className='signup' onClick={handleGoogleAuth}>
//                 <FcGoogle /><span>Sign up with Google</span>
//               </button>
//             </div>
//             <span>or use your email for registration</span>
//             <input 
//               type="text" 
//               placeholder="Name" 
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             {errors.name && <span className="error-text">{errors.name}</span>}
//             <input 
//               type="email" 
//               placeholder="Email" 
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {errors.email && <span className="error-text">{errors.email}</span>}
//             <input 
//               type="password" 
//               placeholder="Password" 
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errors.password && <span className="error-text">{errors.password}</span>}
//             <button type="submit">Sign Up</button>
//             <span 
//               className="toggle-form-link"
//               onClick={handleSignInClick}
//             >
//               Already have an account? Sign In
//             </span>
//           </form>
//         </div>

//         {/* Sign In Form */}
//         <div 
//           className={`form-container sign-in-container ${activeForm === 'signin' ? 'active' : ''}`} 
//           id="sign-in-container"
//         >
//           <form onSubmit={handleEmailSignIn}>
//             <h1>Sign in</h1>
//             <div className="social-container">
//               <button type="button" className='signup' onClick={handleGoogleAuth}>
//                 <FcGoogle /><span>Sign in with Google</span>
//               </button>
//             </div>
//             <span>or use your account</span>
//             <input 
//               type="email" 
//               placeholder="Email" 
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {errors.email && <span className="error-text">{errors.email}</span>}
//             <input 
//               type="password" 
//               placeholder="Password" 
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errors.password && <span className="error-text">{errors.password}</span>}
//             <a href="#" onClick={(e) => { e.preventDefault(); handleForgotPasswordClick(); }}>Forgot your password?</a>
//             <button type="submit">Sign In</button>
//             <span 
//               className="toggle-form-link"
//               onClick={handleSignUpClick}
//             >
//               Don't have an account? Sign Up
//             </span>
//           </form>
//         </div>

//         {/* Forgot Password Form */}
//         <div 
//           className={`form-container forgot-container ${activeForm === 'forgot' ? 'active' : ''}`} 
//           id="forgot-container"
//         >
//           <form onSubmit={(e) => { e.preventDefault(); handlePasswordReset(); }}>
//             <h1>Forgot Password</h1>
//             <p>Enter your email address and we'll send you a link to reset your password.</p>
//             <input 
//               type="email" 
//               placeholder="Email" 
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             {errors.email && <span className="error-text">{errors.email}</span>}
//             <button type="submit">Send Reset Link</button>
//             <span 
//               className="toggle-form-link"
//               onClick={handleSignInClick}
//             >
//               Back to Sign In
//             </span>
//           </form>
//         </div>

//         {/* Overlay (desktop only) */}
//         {window.innerWidth > 768 && (
//           <div className="overlay-container">
//             <div className="overlay">
//               <div className="overlay-panel overlay-left">
//                 <h1>Welcome Back!</h1>
//                 <p>To keep connected with us please login with your personal info</p>
//                 <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
//               </div>
//               <div className="overlay-panel overlay-right">
//                 <h1>Hello, Friend!</h1>
//                 <p>Enter your personal details and start journey with us</p>
//                 <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       {message && (
//         <div className={`message ${isSuccess ? 'success' : 'error'}`}>
//           {message}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AuthForm;
// import React, { useRef, useState } from 'react';
// import '../styles/Auth/Auth.css';
// import { FcGoogle } from "react-icons/fc";
// import { auth, db } from '../../firebaseConfig';
// import { 
//   createUserWithEmailAndPassword, 
//   signInWithEmailAndPassword, 
//   signInWithPopup, 
//   GoogleAuthProvider,
//   fetchSignInMethodsForEmail,
//   sendPasswordResetEmail
// } from 'firebase/auth';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { doc, setDoc } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';

// const AuthForm = () => {
//   const containerRef = useRef(null);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [activeForm, setActiveForm] = useState('signin'); // 'signin' or 'signup' or 'forgot'
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validateForm = (isSignUp = false) => {
//     const newErrors = {};
    
//     if (!email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = 'Email is invalid';
//     }
    
//     if (!password && activeForm !== 'forgot') {
//       newErrors.password = 'Password is required';
//     } else if (password.length < 6 && activeForm !== 'forgot') {
//       newErrors.password = 'Password must be at least 6 characters';
//     }
    
//     if (isSignUp && !name) {
//       newErrors.name = 'Name is required';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const clearForm = () => {
//     setEmail('');
//     setPassword('');
//     setName('');
//     setErrors({});
//   };

//   const handleSignUpClick = () => {
//     if (window.innerWidth > 768) {
//       containerRef.current.classList.add("right-panel-active");
//     }
//     setActiveForm('signup');
//     setMessage('');
//     clearForm();
//   };

//   const handleSignInClick = () => {
//     if (window.innerWidth > 768) {
//       containerRef.current.classList.remove("right-panel-active");
//     }
//     setActiveForm('signin');
//     setMessage('');
//     clearForm();
//   };

//   const handleForgotPasswordClick = () => {
//     setActiveForm('forgot');
//     setMessage('');
//     setPassword('');
//     setErrors({});
//   };
//   const handlePasswordReset = async (e) => {
//     e.preventDefault();
    
//     if (!email) {
//       setMessage('Please enter your email address');
//       setIsSuccess(false);
//       return;
//     }
  
//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setMessage('Please enter a valid email address');
//       setIsSuccess(false);
//       return;
//     }
  
//     try {
//       // Simply send the password reset email without checking if user exists
//       await sendPasswordResetEmail(auth, email);
//       setMessage('If an account exists with this email, a password reset link has been sent.');
//       setIsSuccess(true);
      
//       // Reset form and switch back to sign-in after delay
//       setTimeout(() => {
//         setEmail('');
//         handleSignInClick();
//       }, 3000);
//     } catch (error) {
//       console.error('Password reset error:', error);
//       let errorMessage = 'Failed to send reset email. Please try again.';
      
//       switch (error.code) {
//         case 'auth/invalid-email':
//           errorMessage = 'Please enter a valid email address';
//           break;
//         case 'auth/too-many-requests':
//           errorMessage = 'Too many attempts. Please try again later.';
//           break;
//         case 'auth/missing-android-pkg-name':
//         case 'auth/missing-continue-uri':
//         case 'auth/missing-ios-bundle-id':
//         case 'auth/invalid-continue-uri':
//         case 'auth/unauthorized-continue-uri':
//           errorMessage = 'Configuration error. Please contact support.';
//           break;
//         default:
//           errorMessage = 'If an account exists with this email, a password reset link has been sent.';
//           // Note: We treat most errors as successful to not reveal whether user exists
//           setIsSuccess(true);
//       }
      
//       setMessage(errorMessage);
//     }
//   };
  
//   const handleEmailSignUp = async (e) => {
//     e.preventDefault();
//     if (!validateForm(true)) return;
    
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
      
//       // Create user document in Firestore
//       await setDoc(doc(db, "users", user.uid), {
//         uid: user.uid,
//         name: name,
//         email: email,
//         createdAt: new Date(),
//         lastLogin: new Date(),
//         provider: 'email',
//         photoURL: null,
//         role: 'user', // default role
//         isActive: true
//       });
      
//       setMessage('Account created successfully!');
//       setIsSuccess(true);
//       setTimeout(() => {
//         handleSignInClick();
//       }, 2000);
//     } catch (error) {
//       let errorMessage = 'Signup failed. Please try again.';
      
//       switch (error.code) {
//         case 'auth/email-already-in-use':
//           errorMessage = 'User already exists';
//           setIsSuccess(false);
//           setTimeout(() => {
//             handleSignInClick();
//           }, 2000);
//           break;
//         case 'auth/invalid-email':
//           errorMessage = 'Invalid email address.';
//           break;
//         case 'auth/weak-password':
//           errorMessage = 'Password should be at least 6 characters.';
//           break;
//         default:
//           errorMessage = error.message;
//       }
      
//       setMessage(errorMessage);
//       setIsSuccess(false);
//     }
//   };

//   const handleEmailSignIn = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
    
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
      
//       // Update last login time
//       await setDoc(doc(db, "users", user.uid), {
//         lastLogin: new Date()
//       }, { merge: true });
      
//       setMessage('Logged in successfully!');
//       setIsSuccess(true);
//       setTimeout(() => {
//         navigate('/');
//       }, 2000);
//     } catch (error) {
//       let errorMessage = 'Login failed. Please try again.';
      
//       switch (error.code) {
//         case 'auth/user-not-found':
//           errorMessage = 'User does not exist. Please sign up.';
//           break;
//         case 'auth/wrong-password':
//           errorMessage = 'Incorrect password. Please try again.';
//           break;
//         default:
//           errorMessage = error.message;
//       }
      
//       setMessage(errorMessage);
//       setIsSuccess(false);
//     }
//   };

//   const handleGoogleAuth = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       const isNewUser = result._tokenResponse.isNewUser;
      
//       if (isNewUser) {
//         // Create user document for new Google users
//         await setDoc(doc(db, "users", user.uid), {
//           uid: user.uid,
//           name: user.displayName || name,
//           email: user.email,
//           createdAt: new Date(),
//           lastLogin: new Date(),
//           provider: 'google',
//           photoURL: user.photoURL,
//           role: 'user',
//           isActive: true
//         });
//       } else {
//         // Update last login for returning users
//         await setDoc(doc(db, "users", user.uid), {
//           lastLogin: new Date(),
//           photoURL: user.photoURL
//         }, { merge: true });
//       }
      
//       setMessage(isNewUser ? 'Account created successfully with Google!' : 'Logged in successfully with Google!');
//       setIsSuccess(true);
//       setTimeout(() => {
//         navigate('/');
//       }, 2000);
//     } catch (error) {
//       let errorMessage = 'Google authentication failed. Please try again.';
      
//       switch (error.code) {
//         case 'auth/account-exists-with-different-credential':
//           errorMessage = 'This email is already registered with another method.';
//           break;
//         case 'auth/popup-closed-by-user':
//           errorMessage = 'Google sign-in was canceled.';
//           break;
//         case 'auth/user-disabled':
//           errorMessage = 'This account has been disabled.';
//           break;
//         case 'auth/user-not-found':
//           errorMessage = 'No account found with this email.';
//           break;
//         default:
//           errorMessage = error.message;
//       }
      
//       setMessage(errorMessage);
//       setIsSuccess(false);
//     }
//   };

//   return (
//     <div className="signinup-container">
//       <div className="container" id="container" ref={containerRef}>
//         {/* Sign Up Form */}
//         <div 
//           className={`form-container sign-up-container ${activeForm === 'signup' ? 'active' : ''}`} 
//           id='sign-up-container'
//         >
//           <form onSubmit={handleEmailSignUp}>
//             <h1>Create Account</h1>
//             <div className="social-container">
//               <button type="button" className='signup' onClick={handleGoogleAuth}>
//                 <FcGoogle /><span>Sign up with Google</span>
//               </button>
//             </div>
//             <span>or use your email for registration</span>
//             <input 
//               type="text" 
//               placeholder="Name" 
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             {errors.name && <span className="error-text">{errors.name}</span>}
//             <input 
//               type="email" 
//               placeholder="Email" 
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {errors.email && <span className="error-text">{errors.email}</span>}
//             <input 
//               type="password" 
//               placeholder="Password" 
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errors.password && <span className="error-text">{errors.password}</span>}
//             <button type="submit">Sign Up</button>
//             <span 
//               className="toggle-form-link"
//               onClick={handleSignInClick}
//             >
//               Already have an account? Sign In
//             </span>
//           </form>
//         </div>

//         {/* Sign In Form */}
//         <div 
//           className={`form-container sign-in-container ${activeForm === 'signin' ? 'active' : ''}`} 
//           id="sign-in-container"
//         >
//           <form onSubmit={handleEmailSignIn}>
//             <h1>Sign in</h1>
//             <div className="social-container">
//               <button type="button" className='signup' onClick={handleGoogleAuth}>
//                 <FcGoogle /><span>Sign in with Google</span>
//               </button>
//             </div>
//             <span>or use your account</span>
//             <input 
//               type="email" 
//               placeholder="Email" 
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {errors.email && <span className="error-text">{errors.email}</span>}
//             <input 
//               type="password" 
//               placeholder="Password" 
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errors.password && <span className="error-text">{errors.password}</span>}
//             <a href="#" onClick={(e) => { e.preventDefault(); handleForgotPasswordClick(); }}>Forgot your password?</a>
//             <button type="submit">Sign In</button>
//             <span 
//               className="toggle-form-link"
//               onClick={handleSignUpClick}
//             >
//               Don't have an account? Sign Up
//             </span>
//           </form>
//         </div>

//         {/* Forgot Password Form */}
//         <div 
//           className={`form-container forgot-container ${activeForm === 'forgot' ? 'active' : ''}`} 
//           id="forgot-container"
//         >
//           <form onSubmit={handlePasswordReset}>
//             <h1>Forgot Password</h1>
//             <p>Enter your email address and we'll send you a link to reset your password.</p>
//             <input 
//               type="email" 
//               placeholder="Email" 
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             {errors.email && <span className="error-text">{errors.email}</span>}
//             <button type="submit">Send Reset Link</button>
//             <span 
//               className="toggle-form-link"
//               onClick={handleSignInClick}
//             >
//               Back to Sign In
//             </span>
//           </form>
//         </div>

//         {/* Overlay (desktop only) */}
//         {window.innerWidth > 768 && (
//           <div className="overlay-container">
//             <div className="overlay">
//               <div className="overlay-panel overlay-left">
//                 <h1>Welcome Back!</h1>
//                 <p>To keep connected with us please login with your personal info</p>
//                 <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
//               </div>
//               <div className="overlay-panel overlay-right">
//                 <h1>Hello, Friend!</h1>
//                 <p>Enter your personal details and start journey with us</p>
//                 <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       {message && (
//         <div className={`message ${isSuccess ? 'success' : 'error'}`}>
//           {message}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AuthForm;

import React, { useRef, useState } from 'react';
import '../styles/Auth/Auth.css';
import { FcGoogle } from "react-icons/fc";
import { auth, db } from '../../firebaseConfig';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider,
  sendPasswordResetEmail,
  sendEmailVerification
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const containerRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeForm, setActiveForm] = useState('signin');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = (isSignUp = false) => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!password && activeForm !== 'forgot') {
      newErrors.password = 'Password is required';
    } else if (password.length < 6 && activeForm !== 'forgot') {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (isSignUp && !name) {
      newErrors.name = 'Name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
    setName('');
    setErrors({});
  };

  const handleSignUpClick = () => {
    if (window.innerWidth > 768) {
      containerRef.current.classList.add("right-panel-active");
    }
    setActiveForm('signup');
    setMessage('');
    clearForm();
  };

  const handleSignInClick = () => {
    if (window.innerWidth > 768) {
      containerRef.current.classList.remove("right-panel-active");
    }
    setActiveForm('signin');
    setMessage('');
    clearForm();
  };

  const handleForgotPasswordClick = () => {
    setActiveForm('forgot');
    setMessage('');
    setPassword('');
    setErrors({});
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address');
      setIsSuccess(false);
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email address');
      setIsSuccess(false);
      return;
    }
  
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('If an account exists with this email, a password reset link has been sent.');
      setIsSuccess(true);
      
      setTimeout(() => {
        setEmail('');
        handleSignInClick();
      }, 3000);
    } catch (error) {
      console.error('Password reset error:', error);
      let errorMessage = 'Failed to send reset email. Please try again.';
      
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Please enter a valid email address';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many attempts. Please try again later.';
          break;
        default:
          errorMessage = 'If an account exists with this email, a password reset link has been sent.';
          setIsSuccess(true);
      }
      
      setMessage(errorMessage);
    }
  };

  const sendVerificationEmail = async (user) => {
    try {
      await sendEmailVerification(user, {
        url: `${window.location.origin}/login`,
        handleCodeInApp: false
      });
    } catch (error) {
      console.error('Error sending verification email:', error);
      throw error;
    }
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    if (!validateForm(true)) return;
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Send verification email
      await sendVerificationEmail(user);
      
      // Create user document
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: name,
        email: email,
        emailVerified: false,
        createdAt: new Date(),
        provider: 'email',
        photoURL: null,
        role: 'user',
        isActive: false
      });
      
      setMessage('Account created! Please verify your email to activate your account.');
      setIsSuccess(true);
      setTimeout(() => {
        handleSignInClick();
      }, 3000);
    } catch (error) {
      let errorMessage = 'Signup failed. Please try again.';
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Email already in use. Please sign in.';
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
    if (!validateForm()) return;
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Check if email is verified
      if (!user.emailVerified) {
        await auth.signOut();
        // Optionally resend verification email
        await sendVerificationEmail(user);
        setMessage('Please verify your email before logging in. We sent a new verification email.');
        setIsSuccess(false);
        return;
      }
      
      // Update user record
      await setDoc(doc(db, "users", user.uid), {
        lastLogin: new Date(),
        isActive: true
      }, { merge: true });
      
      setMessage('Logged in successfully!');
      setIsSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      let errorMessage = 'Login failed. Please try again.';
      
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'No account found. Please sign up.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password.';
          break;
        case 'auth/user-disabled':
          errorMessage = 'Account not verified or disabled.';
          break;
        default:
          errorMessage = error.message;
      }
      
      setMessage(errorMessage);
      setIsSuccess(false);
    }
  };

  const handleGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const isNewUser = result._tokenResponse.isNewUser;
      
      if (isNewUser) {
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          name: user.displayName || name,
          email: user.email,
          emailVerified: true, // Google accounts are automatically verified
          createdAt: new Date(),
          lastLogin: new Date(),
          provider: 'google',
          photoURL: user.photoURL,
          role: 'user',
          isActive: true
        });
      } else {
        await setDoc(doc(db, "users", user.uid), {
          lastLogin: new Date(),
          photoURL: user.photoURL
        }, { merge: true });
      }
      
      setMessage(isNewUser ? 'Account created with Google!' : 'Logged in with Google!');
      setIsSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      let errorMessage = 'Google authentication failed. Please try again.';
      
      switch (error.code) {
        case 'auth/account-exists-with-different-credential':
          errorMessage = 'Email already registered with another method.';
          break;
        case 'auth/popup-closed-by-user':
          errorMessage = 'Sign-in was canceled.';
          break;
        default:
          errorMessage = error.message;
      }
      
      setMessage(errorMessage);
      setIsSuccess(false);
    }
  };

  return (
    <div className="signinup-container">
      <div className="container" id="container" ref={containerRef}>
        {/* Sign Up Form */}
        <div className={`form-container sign-up-container ${activeForm === 'signup' ? 'active' : ''}`}>
          <form onSubmit={handleEmailSignUp}>
            <h1>Create Account</h1>
            <div className="social-container">
              <button type="button" className='signup' onClick={handleGoogleAuth}>
                <FcGoogle /><span>Sign up with Google</span>
              </button>
            </div>
            <span>or use your email for registration</span>
            <input 
              type="text" 
              placeholder="Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
            <button type="submit">Sign Up</button>
            <span className="toggle-form-link" onClick={handleSignInClick}>
              Already have an account? Sign In
            </span>
          </form>
        </div>

        {/* Sign In Form */}
        <div className={`form-container sign-in-container ${activeForm === 'signin' ? 'active' : ''}`}>
          <form onSubmit={handleEmailSignIn}>
            <h1>Sign in</h1>
            <div className="social-container">
              <button type="button" className='signup' onClick={handleGoogleAuth}>
                <FcGoogle /><span>Sign in with Google</span>
              </button>
            </div>
            <span>or use your account</span>
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
            <a href="#" onClick={(e) => { e.preventDefault(); handleForgotPasswordClick(); }}>
              Forgot your password?
            </a>
            <button type="submit">Sign In</button>
            <span className="toggle-form-link" onClick={handleSignUpClick}>
              Don't have an account? Sign Up
            </span>
          </form>
        </div>

        {/* Forgot Password Form */}
        <div className={`form-container forgot-container ${activeForm === 'forgot' ? 'active' : ''}`}>
          <form onSubmit={handlePasswordReset}>
            <h1>Forgot Password</h1>
            <p>Enter your email to receive a reset link</p>
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
            <button type="submit">Send Reset Link</button>
            <span className="toggle-form-link" onClick={handleSignInClick}>
              Back to Sign In
            </span>
          </form>
        </div>

        {/* Overlay (desktop only) */}
        {window.innerWidth > 768 && (
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>Login with your verified account</p>
                <button className="ghost" onClick={handleSignInClick}>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Register with your email (verification required)</p>
                <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
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