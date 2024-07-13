import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadRecaptcha = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(process.env.REACT_APP_RECAPTCHA_SITE_KEY, { action: 'login' }).then(token => {
            console.log('reCAPTCHA token:', token); // Log the token for testing purposes
            setRecaptchaToken(token);
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

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Main User:', mainUser);
    console.log('Main Password:', mainPassword);

    if (!recaptchaToken) {
      setError('Please complete the reCAPTCHA');
      return;
    }

    if (email === mainUser && password === mainPassword) {
      console.log('Login successful! Redirecting to dashboard...');
      alert('Login successful!');
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-wrapper">
      <video id="background-video" autoPlay muted loop playsInline className="background-video">
        <source src={`${process.env.PUBLIC_URL}/output_mobile.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="login-container">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
