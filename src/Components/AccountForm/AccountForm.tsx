import './AccountForm.css';
import * as React from 'react';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { UserRegistrationForm } from '../Forms/UserRegistrationForm';

export const AccountForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleLoginFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user.email === email && user.password === password) {
      console.log('Login successful!');
      localStorage.setItem(`LoggedIn`, `active`);
    } else {
      console.log('Login failed!');
    }
  };

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
  };

  
  return (
    <>
      {showSignUpForm ? (
        <UserRegistrationForm />
      ) : (
        <div id="loginDiv">
          <header>Log in to continue</header>
          <form id="loginForm" onSubmit={handleLoginFormSubmit}>
            <TextField size="small" type="email" variant="outlined" label="Email" onChange={handleEmailChange} value={email} required /><br /><br />
            <TextField size="small" type="password" variant="outlined" label="Password" onChange={handlePasswordChange} value={password} required /><br /><br />
            <Button type="submit" variant="outlined">
              Log in
            </Button>
            &nbsp;
            <Button onClick={handleSignUpClick} variant="outlined">
              Sign up
            </Button>
          </form>
        </div>
      )}
    </>
  );
};
