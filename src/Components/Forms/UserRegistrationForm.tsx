import * as React from 'react';
import {UserType} from '../../Types/UserType'
import {useState} from 'react'
import { Button,InputLabel } from '@mui/material';
import TextField from '@mui/material/TextField';


export const UserRegistrationForm = () => {
    
    
    const [firstName,setFirstName] = useState(``) 
    const [lastName,setLastName] = useState(``) 
    const [date,setDate] = useState(``) 
    const [email,setEmail] = useState(``) 
    const [password,setPassword] = useState(``) 
    const [pictureUrl,setPictureUrl] = useState(``) 

    
    const createUserObject = (firstName: string, lastName:string, email:string, password: string,pictureUrl:string,date:string): UserType => {
        return {firstName, lastName,email, pictureUrl,password,date}
    };


    const handleSubmit = () =>{
        const newUser = createUserObject(firstName, lastName,email, password,pictureUrl,date)
        let test = JSON.stringify(newUser)
        localStorage.setItem(`user`,test)
        window.location.reload();

    }

    return<>
        <h2>Let's get started!</h2>
        <form onSubmit={handleSubmit}>
        <TextField type='text' variant="outlined" label="First Name" onChange={(e) => setFirstName(e.currentTarget.value)} required /><br/><br/>
        <TextField type='text' variant="outlined" label="Last Name" onChange={(e) => setLastName(e.currentTarget.value)} required/><br/><br/>
        <TextField type='url' variant="outlined" label="Enter image URL" onChange={(e) => setPictureUrl(e.currentTarget.value)} required /><br/><br/>
        <TextField type="email" variant="outlined" label="Email" onChange={(e) => setEmail(e.currentTarget.value)} required/><br/><br/>
        <TextField type="password" variant="outlined" label="Password" onChange={(e) => setPassword(e.currentTarget.value)} required/><br/> <br/>
        <InputLabel> &nbsp; Date Of Birth</InputLabel>
        <TextField type='date' variant="outlined" onChange={(e) => setDate(e.currentTarget.value)} required inputProps={{max: new Date().toISOString().split('T')[0]}}/><br/><br/>
        <Button type='reset' variant='outlined'>Clear form</Button>&nbsp;
        <Button type='submit' variant='outlined'>Sign up</Button>

    </form>
    </>
}