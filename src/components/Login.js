import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import LoadingScreen from './LoadingScreen';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const loadRecaptcha = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(process.env.REACT_APP_RECAPTCHA_SITE_KEY, { action: 'login' }).then(token => {
            console.log('reCAPTCHA token:', token);
            setRecaptchaToken(token);
          }).catch(error => {
            console.error('reCAPTCHA execution error:', error);
          });
        });
      } else {
        console.error('reCAPTCHA not loaded');
      }
    };
    loadRecaptcha();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const mainUser = process.env.REACT_APP_MAIN_USER;
    const mainPassword = process.env.REACT_APP_MAIN_PASSWORD;

    if (!recaptchaToken) {
      setError('Please complete the reCAPTCHA');
      return;
    }

    if (email === mainUser && password === mainPassword) {
      setIsLoading(true);
      login(email, password).then(() => {
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      });
    } else {
      setError('Invalid username or password');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-wrapper h-screen flex items-center justify-center">
      {isLoading && <LoadingScreen />}
      <video id="background-video" autoPlay muted loop playsInline className="background-video absolute top-0 left-0 w-full h-full object-cover z-[-1]">
        <source src={`${process.env.PUBLIC_URL}/output_mobile.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="login-container bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl mb-4">Login</h2>
        {error && <p className="error text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="input-group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="password-input-container flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="password-toggle-icon cursor-pointer ml-2" onClick={toggleShowPassword}>
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>
          <button type="submit" className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
