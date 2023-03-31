import * as React from 'react';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';

export const UserLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user.email === email && user.password === password) {
      console.log('Login successful!');
      localStorage.setItem(`LoggedIn`,`active`)
      window.location.reload();
    } else {
      alert('Login failed!');
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <TextField type="email" variant="outlined" label="Email" onChange={handleEmailChange} value={email} required /><br/><br/>
        <TextField type="password" variant="outlined" label="Password" onChange={handlePasswordChange} value={password} required /><br/><br/>
        <Button type="submit" variant="outlined">Log in</Button>
      </form>
    </>
  );
};
