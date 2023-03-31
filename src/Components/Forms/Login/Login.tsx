import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './Login.css'

interface LoginProp {
    closeParentModel: () => void
}


export const Login = (prop: LoginProp) => {

    const [user, setUsername] = useState('');
    const [pass, setPassword] = useState('');
    const [usernameError, setUsernamError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    localStorage.setItem('HardCodedLoginInfo', JSON.stringify({ User: 'User', Pass: 'Pass' }))

    const handleSubmit = () => {
        let noerrors = true;
        let close = true;

        if (user.length === 0) {
            setUsernamError(true)
            noerrors = false;
        }

        if (pass.length === 0) {
            setPasswordError(true)
            noerrors = false;
        }
        if (noerrors) {
            const userFromLocalStorage = JSON.parse(localStorage.getItem("HardCodedLoginInfo") || '{}')
            if (userFromLocalStorage != null) {
                if (userFromLocalStorage.User.toLowerCase() != user.toLowerCase()) {
                    setUsernamError(true)
                    close = false;
                }
                if (userFromLocalStorage.Pass.toLowerCase() != pass.toLowerCase()) {
                    setPasswordError(true)
                    close = false;
                }
                if (close)
                    prop.closeParentModel()
            }
            else {
                prop.closeParentModel()
            }


        }
    }

    const handleChange = (val: string, eleName: string) => {
        if (eleName == 'user') {
            setUsername(val)
            if (val.length == 0) {
                setUsernamError(true)
            }
            else {
                setUsernamError(false)
            }
        }
        else if (eleName == 'pass') {
            setPassword(val)
            if (val.length == 0) {
                setPasswordError(true)
            }
            else {
                setPasswordError(false)
            }
        }

    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                '& > :not(style)': { m: 1 },
                flexDirection: 'column'
            }}
        >
            <TextField className='myTextInput'
                helperText="Please enter Username/Email"
                id="demo-helper-text-aligned"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.currentTarget.value, 'user')}
                label="Username"
                error={usernameError}
            />
            <TextField className='myTextInput'
                helperText="Please enter Password"
                id="demo-helper-text-aligned-no-helper"
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(e.currentTarget.value, 'pass')}
                label="Password"
                type="password"
                error={passwordError}
            />
            <div className='myButtonDiv'>
                <Button className='myButton' onClick={handleSubmit}>Login</Button>
            </div>
        </Box>
    );
}

